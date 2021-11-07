const arr = [1,2,3,4,5,6,7,8,9]


console.time("for")
for(let i=0; i<arr.length; i++) {
    let elemento = arr[i]
    console.log(i,elemento);
    // break;
    //continue;
    //return;
}
console.timeEnd("for")

console.time("forEach")
arr.forEach((i,elemento) => {
    console.log(i,elemento);
})
console.timeEnd("forEach")

const r = arr.map((elemento, i) =>{ //map si es una expresion por que siempre me va a devolver un array
return elemento + 1;
}) 
console.log(r)

//----------------------------------------------------------------

