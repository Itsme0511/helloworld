// here basics of javascript has been taught in this class like:
// console.log("hey there");

// variables:- how to make a variable(let, const, var);


// if else:- if (condition){...body...} else{..body..}


// loops:-  for( let i=0; i<10; i++){....body...}

//Arrays:-
let name_array = ["myself", "yourself", "third one"];
// to get output of a different indexes...:-
console.log("name_array's first element:- " + name_array[0]);
console.log("name_array's 2nd element:- " + name_array[1]);
// calling an entity from an array is done till here..
// there are different function that make our work easy like name_array.length, etc.
// to look for more methods go to the link:-https://www.w3schools.com/js/js_array_methods.asp

//Objects:-  in one way combining arrays.
const user ={
    firstname: "Ankit",
    lastname: "ItsmeHello"
}
// it is storing more than one(firstname,lastname) variable in a single variable 'user'.
//firstname,lastname is known as keys in this.
// to access this..:-
console.log("user object's first key:- " + user['firstname']);
console.log("user object's 2nd key:- " + user['lastname']);


// Best way to create an array:- array = [{object1},{object2}]; like:-
const users = [{
    firstname: "Ankit",
    gender: "Male"
}, {
    firstname: "maheshika",
    gender: "Female"
}]
//to call a specific no.
console.log("users array's 1st object's firstkey(firstname):- " + users[0]["firstname"]);


// Function:- function nameoffunction(argument1,argument2,....){...body... return something is important.}like:-
function sum(a,b){   // making a funciton here with parameters a,b.
    return a+b;
}
console.log(sum(2,3)); // calling a function in this console.log();

// Callbacks:- fuction used when making a function as an argument.
function add(a,b,fnToCall){  //fnToCall is used to pass the function name here.
    sum = a+b;
    return fnToCall(sum);  // usi ke ander se function call kr diya jo bhi usse krana h.
}
function printing(a){
    console.log("This is the addition:- " + a);
}
add(30,1,printing); // if there is any other function other than printing i can change it to that function..

// a function call can be like this:-
ans = add(2,2,function(n){            // this anonymous function does not have a name. Hence anonymous.
    console.log(n*n);                 // here a new function is made when calling a function . this is called anonymous function;
});
