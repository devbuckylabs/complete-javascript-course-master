//***Function Constructor , Prototype, Inheritence 


/*
var john = 
{
    id : 101,
    name : 'john',
    course  : 'java',
    batch : 'fasttrack'   
};

console.log(john);

var Person = function(id,name,course,batch){
    
    this.id = id;
    this.name = name;
    this.course = course;
    this.batch = batch;
    
}


var jonas =new Person(102,'jonas','javascript','epic');
var smith = new Person(103,'smith','reactJS','query');

console.log(jonas);
console.log(smith);


Person.prototype.calculateCourse = function(id){
    
    switch(id)
    {
        case 101: console.log('java');
                  break;
        case 102: console.log('javaScript');
                  break;    
        case 103: console.log('reactJS');
                  break;
            
    }
    
    
};

jonas.calculateCourse(102);
smith.calculateCourse(103);
*/



//***  Object.create





/*var personProto = {
    
    calculateCourse : function(id){
        
        switch(id)
    {
        case 101: console.log('java');
                  break;
        case 102: console.log('javaScript');
                  break;    
        case 103: console.log('reactJS');
                  break;       
    }
    }
};



var john = Object.create(personProto);
john.id=101;
john.name = 'john';
john.course = 'java',
john.batch = 'fasttrack'   



var jonas = Object.create(personProto,{
    
    name : {value : 'jonas'},
    id : { value :'102'}
    
    
});*/






//*** Primitives vs Objects






//primitives

/*var a=30;
var b=a;
a=45;
console.log(a);
console.log(b);

//Objects

var obj1=
    {
        city : 'London'
    };


var obj2=obj1;
obj1.city = 'San fransisco';

console.log(obj1);
console.log(obj2);



//Function to understand the difference

var x=100;
function change(primitive,object){
    primitive = 30;
    object.city='Agra';
    
};
change(x,obj2)


console.log(x);
console.log(obj2);
console.log(obj1);*/






//*** First Class Functions as Arguments







/*
var years =[1990,1986,1996,2005,1988];


function agesCalc(years,fn){
   
var ages=[];    
for(i=0;i<years.length;i++){

    ages.push(fn(years[i]));        
    
}

return ages;    
}



function getAge(yearOfBirth){
    return 2019-yearOfBirth;
}

function isFullAge(el){
    
    return el >=18;
}

var ages = agesCalc(years,getAge);
var isFullAges = agesCalc(ages,isFullAge);
console.log(ages);
console.log(isFullAges);
*/






//*** Functions Returning Functions





/*
var Question = function(job){
    
    if(job === 'Sweeper'){
        
        return function(name){
            console.log(name +', did you sweep? ')
        }
    }
    else if(job === 'Cook'){
        
        return function(name){
            console.log(name +', did you cook? ')
        }
} 
}
    
var ans = Question('Sweeper');
ans('Lisbon');
    
Question('Cook')('David');
*/





//*** Immediately Invoked Function Expressions - IIFE



/*
(function(preScore){
    var score = (Math.random()*10 + preScore);
    console.log(score);
})(50);
*/




//*** Closures




/*var Question = function(job){
    var s= 'did you ';
    if(job === 'Sweeper'){
        
        return function(name){
            console.log(name +', '+ s + 'sweep? ')
        }
    }
    else if(job === 'Cook'){
        
        return function(name){
            console.log(name +', ' + s + 'cook? ')
        }
} 
}
    
var ans = Question('Sweeper');
ans('Lisbon');
    
Question('Cook')('David');*/





//*** Bind, call, apply

//call exp 1

/*
var john ={   
    
    name : 'john',
    job : 'pilot',
    display : function(){
        console.log(this.name + ' is a ' + this.job);
            
    }

};


var lisbon ={   
    name : 'lisbon',
    job : 'CBI agent',
    
};

john.display();
john.display.call(lisbon);
*/


//call exp 2 with arg


/*
var john ={       
    name : 'john',
    job : 'pilot',
    display : function(age){
        console.log(this.name + ' is '+ age +' years old & a ' + this.job);
    }
};


var lisbon ={   
    name : 'lisbon',
    job : 'CBI agent',
};

john.display(25);
john.display.call(lisbon,35);


*/


//bind


/*var john ={       
    name : 'john',
    job : 'pilot',
    age : 11,
    display : function(limit){
        if(this.age >= limit){
        console.log(this.name + ' is '+ this.age +' years old & a major '  );
    }
    else{
        console.log(this.name + ' is '+ this.age +' years old & a minor '  );
        }
    }
};


var lisbon ={   
    name : 'lisbon',
    job : 'CBI agent',
    age : 35
};

john.display(18);
var lisbonBind = john.display.bind(lisbon,36);
lisbonBind(); */


//apply


//same as call ,but takes arrray as arguments.


































