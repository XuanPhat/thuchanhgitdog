
var CAT = require('./cat');
var dogloz = require('./dog');

var dogbong = new dogloz('BONG');
var catcute = new CAT('MIUMIU');

dogbong.sayhi();
dogbong.eat(catcute);
console.log(dogbong);






