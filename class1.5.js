// sync functions:- one thing is happening at a time. up until now we have dealt with synchronous functions.

// async functions:- things can happens parallely(deligating task to someone or context switching). there are some function like:- setTimeout, fs.readFile etc and we can define our own asynchronous function also.


// setTimeout:- javascript inbuilt async function, 
// Syntax:-
function sum(){
    console.log("Printing here is good.");
}
setTimeout(sum,5000); // sum is the function name that is to be called after 5 sec.(1000 = 1sec.)[it runs parallely as console.log() is printed first than this.]
console.log("what is going on?");


// fs.readFile:- read file from file system.
// syntax:-
const fs = require("fs");
fs.readFile("a.txt","utf-8", function(err, data){
    console.log(data);                   // async function apna kaam krne ke baad tread ko idle tk ane ka wait krenge.
});
// fetch:- fetch some data from an API endpoint.


//Promises:- syntactical sugar that make code more readable. more about promises:-https://www.w3schools.com/js/js_promise.asp

function readfile(){
    return new Promise(function(resolve){
        fs.readFile("a.txt","utf-8",function(err, data){
            resolve(data);
        })
    })
}
function ondone(data){
    console.log(data);
}
readfile().then(ondone);



// Async Await syntax:- rather than using .then syntax we use this async await 
// syntax:- async function ondone(){
//            const value = await readfile();
//            cosole.log(value);
//             }
//it just make async function to sync so that async data is not lost.
// we should use async await rather than .then wala syntax.