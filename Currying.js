function sum(...args){
    //Here ""..."" is acting as a REST operator


    const ans = args.reduce((a,b) => a+b , 0);
    
    const func = (num) => {
        return sum(num , ...args);   // SPREAD operator
    }
    
    func.value = ans;
    
    return func;
}
console.log(sum(4,6,8,10).value);
console.log(sum(4)(6)(8)(10).value);