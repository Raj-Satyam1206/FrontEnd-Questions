// Map the url
const longToShort = {};

const BASE_URL = "https://sho.rt/" ;


function createShortCode(){
    //Push the ASCII code into chars array
    let chars = [];
    
    for(let i=97; i<=122; i++)  chars.push(String.fromCharCode(i));
    for(let i=65; i<=90; i++)   chars.push(String.fromCharCode(i));
    for(let i=48; i<=57; i++)   chars.push(String.fromCharCode(i));
    
    
    let code="";
    for(let i=0; i<6; i++){
        code = code + chars[Math.floor(Math.random() * chars.length)];
    }
    
    return code;
}


function shortenURL(longURL){
    //check if the shortened URL already exists
    if(longToShort[longURL]){
        return BASE_URL + longToShort[longURL];
    }
    
    let shortcode="";
    shortcode = createShortCode();
    
    //map the data 
    longToShort[longURL] = shortcode;
    
    return BASE_URL + shortcode;
}

const longURL = "https://www.example.com/sdsef/sdsf/";
const short = shortenURL(longURL);
console.log(`Short URL : ${short}`);