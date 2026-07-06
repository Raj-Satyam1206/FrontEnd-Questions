Array.prototype.myReduce = function(callbackFn , initialValue){
    // this refers to the array on which the method(myReduce) is called
    // Here, this is assigned to a local variable 'array'
    // It's not a copy of the array, but a reference to it.
    const array = this;

    let accumulator = 0;

    if(array.length === 0) throw new Error("Empty array");

    // if initial value is given
    if(initialValue){
        accumulator = initialValue;
    }

    for(let i = 0 ; i < array.length; i++)
    {
        accumulator = callbackFn(accumulator , array[i]);
    }

    return accumulator;
} 

console.log([1,2,3,4].myReduce((acc,curr) => acc + curr , 0));
console.log([1,2,3,4].myReduce((acc,curr) => acc + curr , 1));