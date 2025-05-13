function fibbo(n){
    let arr = [0,1];
    
    for(let i=2; i<=n; i++)      // while(arr.length <= n)
    {
        let next = arr[arr.length - 1] + arr[arr.length - 2];
        arr.push(next);
    }
    return arr;
}

console.log(fibbo(10));