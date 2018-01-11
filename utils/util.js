
var Promise = require('../plugins/es6-promise/es6-promise-auto-min.js');

const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

exports.formatTime = formatTime;

// my code here

const wxPromisify = fn => {
  return obj => {
    return new Promise((res, rej) => {
      obj.sucess = data => res(data);
      obj.fail = err => rej(err);
      fn(obj);
    });
  }
}

exports.wxPromisify = wxPromisify;


