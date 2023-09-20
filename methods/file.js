'use strict';

const path = require('path');
const XLSX = require('xlsx');
const moment = require('moment');
const { isNaN } = require('lodash');

const fileMethod = async () => {
  const file = XLSX.readFile(path.join(__dirname, '../lib', 'life_things.xlsx'));
  const sheets = file.SheetNames;

  let data = {};
  for (let i = 0; i < sheets.length - 1; i++) {
    data[sheets[i]] = XLSX.utils.sheet_to_json(file.Sheets[file.SheetNames[i]]);
  }

  const errorData = []
  const expiredData = []

  for (let i in data) {
    data[i] = data[i].map(temp => {
      const unixTimestamp = (temp['保质期'] - 25569) * 86400000
      if (isNaN(unixTimestamp)) {
        errorData.push({ name: temp['物品名称'], count: temp['物品数量'], endTime: temp['保质期'] });
        return { name: temp['物品名称'], count: temp['物品数量'] };
      }
      const endTime = moment(new Date(unixTimestamp));
      return { name: temp['物品名称'], count: temp['物品数量'], endTime };
    }).filter(({ name, endTime }) => {
      const oneYearFromNow = moment().add(1, 'years');
      if(endTime && endTime.isBefore(moment())) {
        expiredData.push({name, endTime});
      }
      return endTime && endTime.isBefore(oneYearFromNow);
    })
  }

  return { expiredData, data, errorData };
}

module.exports = fileMethod