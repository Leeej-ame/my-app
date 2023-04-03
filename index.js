// add module
const { format } = require('date-fns');

var d = new Date();
console.log(d);

var formatedD = format(d, 'yyyy-MM-dd');
// var formatedD = format(원시값, '포맷');

console.log(formatedD);