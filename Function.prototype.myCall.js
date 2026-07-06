function func(){
    console.log(`${this.name} is present`);
}

Function.prototype.myCall = function(thisArg , ...args){

    thisArg = thisArg  || globalThis;
    /*
    So JavaScript sets 
        this = globalThis        // (non strict mode)
    or
        this = undefined         // strict mode
    */
    // myCall method has been called by func , therefore , inside myCall() , "this" will refer to "func" 
    // this refers to the function(func) on which the method(myCall) is called
    // Here, 'func' is assigned to a temporary property in thisArg(obj1)
    thisArg.tempFn = this;

    thisArg.tempFn(...args)
    delete thisArg.tempFn;
}

const obj1 = {
    name : "Satyam"
};

const obj2 = {
    name : "Sat"
};


func.myCall(obj1);
func.myCall(obj2);

//Somehow , we have to make "func" a part of obj1, so that when the function invokes, this refers to obj1