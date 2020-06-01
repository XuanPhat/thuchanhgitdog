var chalk = require('chalk');


function dog(name)
{
this.name=name;
this.stomach=[];


}
dog.prototype.eat=function(eat)
{
this.stomach.push(eat);
}

dog.prototype.sayhi=function(hi)
{
   console.log('hello '+chalk.red('monkey'));

}

module.exports=dog;

// function monkey(age)
// {
// 	this.age=age;

// }
// function monkey2(age)
// {
// 	this.age=age;

// }
// function monkeychum(age)
// {
// 	this.age=age;

// }
// dog.prototype.eat=function(eat)
// {
//    return this.stomach.push(eat);

// };
// // var dogloz = new dog(18);
// // console.log(dogloz);
// // dog.eat();



// var dogloz = new dog(18);
// var monkeyloz = new monkey(20);
// var monkeyloz2 = new monkey2(20);
// var monkeychum = new monkeychum(20);
// // console.log('dog eat '+ dogloz.eat(monkeyloz));
// // console.log('dog eat '+ dogloz.eat(monkeyloz2));
// console.log('dog eat '+ dogloz.eat(monkeychum));



