export default function debounce(func, wait) {
  let timer;
  function debounced(...args){
    clearTimeout(timer);

    timer =  setTimeout(()=>{
      func.apply(this , args);
    },wait);
  }

  debounced.cancel = function(){
    clearTimeout(timer);
    timer = null;
  }

  debounced.flush = function(...args){
    if (timer) {
        clearTimeout(timer);
        func.apply(this, args);
        timer = null;
      }
  }
 
  return debounced;
}