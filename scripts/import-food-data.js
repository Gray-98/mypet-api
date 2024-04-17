'use strict';

const { readFile, utils } = require('xlsx')
const path = require('path')
const fs = require('fs')
const axios = require('axios')

function convertExcelDate(excelDate) {
    const baseDate = new Date('1900-01-01');
    const resultDate = new Date(baseDate.getTime() + (excelDate - 2) * 24 * 60 * 60 * 1000);
    return resultDate;
}

// Read File
const workBook = readFile(path.join(__dirname, 'food.xlsx'))

// Get data

const allData = []
let failData = []
const sheetNames = workBook.SheetNames.slice(0, workBook.SheetNames.length - 1)

sheetNames.forEach(sheetName => {
    const workSheet = workBook.Sheets[sheetName];
    const jsonData = utils.sheet_to_json(workSheet, {
        header: ['name', 'count', 'birthDate', 'endDate', 'remark'],
        range: { s: { c: 0, r: 0 }, e: { c: 4, r: utils.decode_range(workSheet['!ref']).e.r } }
    }).map(row => {
        return {
            name: row.name,
            count: row.count,
            birthDate: convertExcelDate(row.birthDate),
            endDate: convertExcelDate(row.endDate),
            remark: row.remark,
            type: sheetName
        }
    });
    allData.push(jsonData.slice(1, jsonData.length))
})

// allData [[...],[...],[...]]
// data [{}, {}, {}]
// item {}

async function upload() {
    console.time('time')
    await Promise.all(allData.map(async data => {
        await Promise.all(data.map(async item => {
            try {
                await axios.post('http://43.138.161.53:8300/food', item)
            } catch (err) {
                failData.push(item)
            }
        }))
    }))

    uploadFailData()
    console.timeEnd('time')
}

async function uploadFailData() {
    do {
        console.log(`fail: ${failData.length}`);
        const temp = failData
        failData = []
        await Promise.all(temp.map(async item => {
            try {
                await axios.post('http://43.138.161.53:8300/food', item)
            } catch (err) {
                failData.push(item)
            }
        }))
    } while ( failData.length !== 0 )
}

upload()
