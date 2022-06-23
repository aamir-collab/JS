"use strict";
/*
let tip = 275;

let res = (tip>=50 && tip<=300) ? (15*tip)/100 : (20*tip)/100;

console.log(`The bill was ${tip} , the tip was ${res} and the total value was ${tip+res}`);
*/

//functions
/*
function logger(){
  console.log('Learning JS');
}
logger();
logger();logger();logger();logger();logger();

const a = "aamir"
const b = "ali"
function myName(c,d){
  console.log(`hi i am ${c} ${d}`);
}
console.log(myName("ro","bo"));

function name(a){
  return `my name is ${a}`;
}

console.log(name("aamir"));
*/

//Arrays
/*
function calcTip(val){
  let tip = 0;
  if(val >=50 && val<=300){
    tip = (15/100)*val;
  }
  else{
    tip = (20/100) * val;
  }
  return tip;
}

let ans = calcTip(100);
const bills = [125,555,44];
const tips = [calcTip(bills[0]), calcTip(bills[1]),calcTip(bills[2])];
console.log(bills, tips);
*/

//objects
/*
const aamir = {
  first : 'aamir',
  last : 'ali',
  age : 20,
  friends : ["allah", 'allah]
};
console.log(aamir);

const aamir = {
  first : 'aamir',
  last : 'ali',
  age : 20,
  friends: 3,
  array: ['none', 'none', 'none'],
  hasDL: false,
  about: function(){
    return `${this.first} is ${this.age} age and he has
		${this.hasDL ? 'a' : 'no'} license.
`
  }
  
  
};
console.log(`${aamir.first} has ${aamir.friends} friends but his bestie is ${aamir.array[0]}`);
console.log(aamir.about());



const mark = {
  name: 'Mark',
  weight: 78,
  height: 1.69,
  calcBMI : function(){
    this.BMI = this.weight / this.height ** 2;
    return this.BMI;
  }
};

const john = {
  name: 'john',
  weight : 92,
  height: 1.95,
  
  calcBMI : function(){
    this.BMI = this.weight / this.height ** 2;
    return this.BMI;
  }
};
mark.calcBMI();
john.calcBMI();
console.log(mark.BMI, john.BMI);

const bills = [22,295,176,440,37,105,10,1100,86,52];
const tips = [];
const totals = [];
function calcTip(val){
  let tip = 0;
  if(val >=50 && val<=300){
    tip = (15/100)*val;
  }
  else{
    tip = (20/100) * val;
  }
  return tip;
}
for(let i = 0; i< bills.length; i++){
  let res = calcTip(bills[i]);
  tips.push(res);
}
for(let i = 0; i< bills.length; i++){
  totals[i] = bills[i]+tips[i];
}
console.log(tips, totals, bills)
*/
