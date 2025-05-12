//Create a random alphanumeric string of a given length
function rand(length){
    
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    
    let code="";
    
    for(let i=0; i<length; i++){
        code = code + characters[Math.floor(Math.random() * characters.length)]; 
    }
    
    return code;
}

console.log(rand(6));
console.log(rand(10));