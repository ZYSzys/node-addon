const addon = require('./build/Release/addon');

const obj = addon('Hello, ZYSzys!');
console.log(obj.msg);
