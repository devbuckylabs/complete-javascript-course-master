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

















