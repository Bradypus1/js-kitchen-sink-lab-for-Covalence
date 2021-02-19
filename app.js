var name = 'John';//store my name in a variable
const numOfStates = 50;//var that holds the number of states
var sum = 5 + 4;//sum of 5 and 4

const sayHello = () => {alert('Hello World!')};

function checkAge(name, age){
    if(age < 21){
        alert('Sorry ' + name + ' you arent old enough to view this page!')
    }
}

checkAge('Charles', 21);
checkAge('Abby', 27);
checkAge('James', 18);
checkAge('John', 17);

var veg = ['carrots', 'potatoes', 'leekes'];

for (var i = 0; i < veg.length; i++){
    console.log(veg[i]);
}

var pet = {
    name:'Doug',
    breed:'dog'
}

console.log(pet);

var age = [
    {name: 'jill',
     age: 18},
    {name: 'jack',
    age: 23},
    {name:'hoyt',
    age: 54},
    {name:'john',
    age: 11},
    {name:'bruce',
    age:24}
]

for (var i = 0; i < age.length; i++){
    checkAge(age[i].name, age[i].age);
}

function getLength(word){
    if(word.length%2 == 0){
        console.log("the world is nice and even");
    }
    else{
        console.log("the world is an odd place");
    }
}

getLength('Hello World')