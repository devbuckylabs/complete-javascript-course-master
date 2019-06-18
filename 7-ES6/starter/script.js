//*********************//
//***** LECTURE: 1 ****//
//*********************//


//ES5

/*
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5);
*/


//ES6

/*const name6 = 'Jane Smith';
let age6 = 23;
name6 = 'Jane Miller';
console.log(name6);*/


//ES5

/*function driverLicense5(passedTest){
    
    if(passedTest){
        console.log(firstName);
        var firstName= 'John';
        var yearOfBirth =1990;
       
    }   
    
     console.log(firstName+' born in '+ yearOfBirth +' is now officially allowed to drive a car.');   
}

driverLicense5(true);

//ES6

function driverLicense6(passedTest){
    console.log(firstName);
    let firstName;
    const yearOfBirth =1990;
    
    if(passedTest){
         firstName = 'John';   
    }
    
     console.log(firstName+' born in '+ yearOfBirth +' is now officially allowed to drive a car.');
        
    
}


driverLicense6(true);*/


/*

let i = 23;

for(let i=0; i<5;i++){
    console.log(i);
}

 console.log(i);
*/


/*var i = 23;

for(var i=0; i<5;i++){
    console.log(i);
}

 console.log(i);*/







//*********************//
//***** LECTURE: 2 ****//
//*********************//

//ES6

/*{
    let a = 1;
    const b = 2;
    var c= a+b; 
    
}
//console.log(a+b);
console.log(c);

//ES5

(function(){
    
    var d= 3;
})();


console.log(d);*/




//*********************//
//** LECTURE: Strings **//
//*********************//


//ES5

/*
let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;

function calcAge(year){
    return 2016 - year;
}

console.log(firstName+' '+lastName +' is '+ calcAge(yearOfBirth)+' years old.');
*/



//ES6

/*
console.log(`This is ${firstName} ${lastName}. He is ${calcAge(yearOfBirth)} years old.`);



const n =`${firstName} ${lastName}`;
console.log(n);
console.log(n.startsWith('J'));
console.log(n.endsWith('h'));
console.log(n.includes('k'));
console.log(n.repeat(5));

*/



//******************************//
//** LECTURE: Arrow Functions **//
//******************************//

/*

const years = [1990, 1965,1982,1937];

//ES5
var ages5 =years.map(function(el){
    return 2016 - el;
});

console.log(ages5);

//ES6

let ages6= years.map(el => 2016- el);
console.log(ages6);

ages6 = years.map((el,index) => `Element ${index + 1}: ${2016-el}`);

console.log(ages6);

ages6 = years.map((el,index) => {
   
    const now = new Date().getFullYear();
    const age = now - el;
    return `Element ${index + 1}: ${age}`;
    
});


console.log(ages6);
*/



//******************************//
//* LECTURE: Arrow Functions 2 *//
//******************************//


//ES5

/*
var box5 = {

    color: 'green',
    position: 1,
    clickMe: function () {
        var self = this;
         document.querySelector('.green').addEventListener('click', function () {
                
            var str = 'This is box number ' + self.position + ' and it is ' + self.color;
            alert(str);
        })
    }

}

box5.clickMe();
*/



//ES6

/*var box5 = {

    color: 'green',
    position: 1,
    clickMe: function () {
       document.querySelector('.green').addEventListener('click',  () => {
                
            var str = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        })
    }

}

box5.clickMe();*/


//ES5

/*function Person(name){
    this.name=name;
}


Person.prototype.myFriends5 = function(friends){
    
    var arr = friends.map(function(el){
        
        return this.name +' is friends with '+ el; 
        
    });
    
    console.log(arr);
}

var friends = ['Bob', 'Jane','Mark'];
new Person('John').myFriends5(friends);



//ES6
Person.prototype.myFriends5 = function(friends){
    
    var arr = friends.map(el => `${this.name} is friends with ${el}`); 
    
    
    console.log(arr);
}



new Person('Mike').myFriends5(friends);*/



//******************************//
//*** LECTURE: Destructuring ***//
//******************************//


/*//ES5
var john = ['John',26];
//var name = john[0];
//var age = john[1];


//ES6

const [name, age] = ['Mike',30];
console.log(name);
console.log(age);

//

const obj = {
    
    firstName: 'John',
    lastName: 'Smith'
    
};


const {firstName, lastName} = obj;
console.log(firstName);
console.log(lastName);

const {firstName: a,lastName: b} = obj;
console.log(a);
console.log(b);


//

const calculateRetirement = function(year){
    
    const age2 = new Date().getFullYear() - year;
    return [age, 65-age];

};


const [age2,retirementAge] = calculateRetirement(1990);
console.log(age2);
console.log(retirementAge);*/




//******************************//
//*** LECTURE: Arrays in ES6 ***//
//******************************//

//ES5

/*var boxes5 = document.querySelectorAll('.box');


var boxesArr5 = Array.prototype.slice.call(boxes5);*/
/*
boxesArr5.forEach(function(cur){
   
    cur.style.backgroundColor = 'dodgerblue';
    
});
*/


//ES6

/*const boxes6 = document.querySelectorAll('.box');
const boxesArr6 = Array.from(boxes6);

boxesArr6.forEach(cur => cur.style.backgroundColor = 'dodgerblue');*/

//

//ES5

/*for(var i=0; i < boxesArr5.length;i++){
    
    if(boxesArr5[i].className === 'box blue')continue;
    
    boxesArr5[i].textContent = 'Im changed to Blue!';
    
}*/


//ES6

/*
for(const cur of boxesArr6){
    
    if(cur.className === 'box blue')continue;
    
    cur.textContent = 'Im changed to Blue!';
    
}
*/

//

//ES5

/*
var ages = [10,14,8,15,24,11,30];

var full = ages.map(function(cur){
   
    return cur >= 18;
    
});

console.log(full);
//console.log(full.indexOf(true));
//console.log(ages[full.indexOf(true)]);



//ES6
// Only finds first element of occurence
console.log(ages.findIndex(cur => cur >= 18));
// Only finds first element of occurence
console.log(ages.find(cur => cur >= 18));



*/


//******************************//
// LECTURE: The Spread Operator //
//******************************//

//ES5
/*
var addFourAges = function(a,b,c,d){
    
    return a+b+c+d;
} 


var ages=[18,21,56,42];

var sum1 = addFourAges(18,21,30,42);
console.log(sum1);

var sum2 = addFourAges.apply(null,ages);
console.log(sum2);

//ES6

const sum3 = addFourAges(...ages);
console.log(sum3);
*/

//

/*
const familySmith = ['John','Jane','Mark'];
const familyMiller = ['Mary','Bob','Ann'];

const bigFamily = [...familySmith,'Lyla',...familyMiller];
console.log(bigFamily);
*/

//

/*
const head = document.querySelector('h1');
const boxes =document.querySelectorAll('.box');

const all = [head,...boxes];
const allEL = Array.from(all);
for(const cur of allEL){
    cur.style.color = 'red';
}

*/


//******************************//
//** LECTURE: Rest Paramaters **//
//******************************//


/*
function isFullAge5(){

    var argArr = Array.prototype.slice.call(arguments);
    argArr.forEach(function(cur){
    
        console.log((2016-cur) >= 18);
        
    });
   
}

isFullAge5(1990,1999,1983);
isFullAge5(1990,1999,1983,2001,1957);
*/

//ES6

/*
function isFullAge6(...years){
    
    years.forEach(cur => console.log((2016-cur) >= 18))
    
} 

isFullAge6(1990,1999,1983);
isFullAge6(1990,1999,1983,2001,1957);
*/



//

/*
function isFullAge5(limit){

    var argArr = Array.prototype.slice.call(arguments,1);
    argArr.forEach(function(cur){
    
        console.log((2016-cur) >= limit);
        
    });
   
}

isFullAge5(18,1990,1999,1983);
isFullAge5(18,1990,1999,1983,2001,1957);
*/


//ES6

/*
function isFullAge6(limit, ...years){
    
    years.forEach(cur => console.log((2016-cur) >= limit))
    
} 

isFullAge6(18,1990,1999,1983);
isFullAge6(18,1990,1999,1983,2001,1957);*/



//******************************//
//  LECTURE: Default Paramaters //
//******************************//


/*
//ES5
function SmithPerson5(firstName, yearOfBirth, lastName, nationality) {
    lastName === undefined ? lastName = 'Smith':lastName =lastName;
    nationality === undefined ? nationality = 'American' :nationality = nationality;

    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
    this.lastName = lastName;
    this.nationality = nationality;


}

var John =new SmithPerson5('John',1994);

console.log(John);

//ES6
function SmithPerson6(firstName, yearOfBirth, lastName = 'Smith', nationality = 'Russian') {
    
    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
    this.lastName = lastName;
    this.nationality = nationality;


}

var Emily =new SmithPerson6('Emily',1994);

console.log(Emily);

*/



//******************************//
//******* LECTURE: Maps  *******//
//******************************//


/*const question = new Map();

question.set('question', 'What is the official name of the latest major javascript version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct Answer');
question.set(false, 'Wrong Answer, pls try again');

//console.log(question);
//console.log(question.size);

/*if(question.has(2)){
 question.delete(2);
}
*/
//console.log(question.get('question'));

/*
question.forEach((value,key) => console.log(`This is ${key} and its value is set to ${value}`));
                 */

/*
for (let [key, value] of question.entries()) {

    if (typeof (key) === 'number') {
        console.log(`Answer ${key} : ${value}`);

    }

}

const ans = parseInt(prompt('Enter the answer'));


console.log(question.get(ans === question.get('correct')));*/


//******************************//
//****** LECTURE: Classes ******//
//******************************//



/*


//ES5
var Person5 = function (name, yearOfBirth, job) {

    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;

}

Person5.prototype.calculateAge = function () {

    var age = new Date().getFullYear - this.yearOfBirth;
    console.log(age);

}

var john5 = new Person5('john', 1994, 'designer');

//ES6

class Person6 {

    constructor(name, yearOfBirth, job) {

        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;

    }

    calculateAge() {

        const age = new Date().getFullYear - this.yearOfBirth;
        console.log(age);

    }
    
    static greeting(){
        console.log('Welcome to Static methods')
    }
}

const john6 = new Person6('john',1995,'freelancer');
console.log(john5);
console.log(john6);
Person6.greeting();


*/



//**********************************//
// LECTURE: Classes With Subclasses //
//*********************************//


//ES5

/*
var Person5 = function (name, yearOfBirth, job) {

    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;

}

Person5.prototype.calculateAge = function () {

    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);

}


var Athlete5 = function (name, yearOfBirth, job, olympicGames, medals) {

    Person5.call(this, name, yearOfBirth, job);
    this.olympicGames = olympicGames;
    this.medals = medals;

}

Athlete5.prototype = Object.create(Person5.prototype);
Athlete5.prototype.wonMedal = function () {
    this.medals++;
    console.log(this.medals);
}


var johnAthlete5 = new Athlete5('John', 1990, 'swimmer', 3, 10);

johnAthlete5.calculateAge();
johnAthlete5.wonMedal();


//ES6



class Person6 {

    constructor(name, yearOfBirth, job) {

        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;

    }

    calculateAge() {

        const age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);

    }


}

class Athlete6 extends Person6 {
    constructor(name, yearOfBirth, job, olympicGames, medals) {
        super(name, yearOfBirth, job);
        this.olympicGames = olympicGames;
        this.medals = medals;

    }
    
    wonMedal(){
        
    this.medals++;
    console.log(this.medals);
}
    
  
}


const johnAthlete6 = new Athlete6('john',1995,'swimmer',3,10);
console.log(johnAthlete6);



johnAthlete6.calculateAge();
johnAthlete6.wonMedal();

*/







