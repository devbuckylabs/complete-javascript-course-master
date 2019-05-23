var john= {
    
    age : 18,
    name : 'John Beckham',
    gender : 'male',
    courses : ['java','android','python','js']
};

console.log(john['courses']);
console.log(john['courses'][john['courses'].length - 1]);
console.log(john['courses'].indexOf(john['courses'][john['courses'].length - 1]));

