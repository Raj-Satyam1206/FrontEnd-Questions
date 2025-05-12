function unique(arr){
    const set = new Set(arr);
    const newArr = Array.from(set);
    
    return newArr;
}

console.log(unique([1,2,2,3,3,4,5,5,6,7]));