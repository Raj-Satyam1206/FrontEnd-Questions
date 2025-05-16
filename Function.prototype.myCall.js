function func(){
    console.log(`${this.name} is present`);
}

Function.prototype.myCall = function(thisArg , ...args){

    thisArg = thisArg  || globalThis;
    // this refers to the function(func) on which the method(myCall) is called
    // Here, 'func' is assigned to a temporary function in thisArg(obj1)
    thisArg.tempFn = this;

    const result = thisArg.tempFn(...args)
    delete thisArg.tempFn;
    return result;
}

const obj1 = {
    name : "Satyam"
};

const obj2 = {
    name : "Sat"
};

func.myCall(obj1);
func.myCall(obj2);