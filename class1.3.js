// Strings basic API's :-
// like str.length, str.indexOf(target), str.slice(start, end) etc 
// more strings api's or methods can be seen at:- https://www.w3schools.com/js/js_string_methods.asp


// Some Numbers API's:-
// like parseInt(" "), parseFloat("") etc.

// Some array's API's:- 
// like array.push(), array.pop(), array.shift(), array.unshift(0) etc..
// more array api or methods can be seen at:- https://www.w3schools.com/js/js_array_methods.asp
// array.forEach(func) => for every element in array, function is called for that many time as an input.
let array = [1,2,3];
function printing(a){
    console.log(a);
}
array.forEach(printing);


// CLASSES:- means give out a structure of something that is reusable and use in multiple places like animal.
class Animal{
    constructor(name, legCount, speaks){
        this.name = name;
        this.legCount = legCount;            // Making a basic class of animal with constructor as used here.
        this.speaks = speaks;
    }
    static myType(){
        console.log("Animal");            // this is static function; this is associated with the class itself not on the object.
    }
    speak(){
        console.log("he speaks " + this.speaks);    // we can make a function in the class just after contructor.
    }
}
let dog = new Animal("dog",4,"bhow bhow");   //defining a dog in animal class with given constructor values.
// this is creating an object of animal class.
dog.speak();  // calling the function defined in the class animal with object dog.
// can be called only on the object of the class only.
Animal.myType();  // this call the static function in the animal class


// other classes in javascript:-
// 1. date:- https://www.w3schools.com/js/js_date_methods.asp see at this link for more info.
// 2. JSON:- https://www.w3schools.com/js/js_json_intro.asp see at this link for more info.
// 3. Math:- https://www.w3schools.com/js/js_math.asp see at this link for more info.


// Object's APIs or Methods:-https://www.w3schools.com/js/js_object_methods.asp see here for detailed info.
// methods like :- obj.hasOwnProperty("name_of_property"); => returns ture if obj has that key having the property. else return false.

