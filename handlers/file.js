'use strict';

const fileMethod = require('../methods/file');

const fileHandler = async(req, res) => {
  return await fileMethod();
}

module.exports = fileHandler;
