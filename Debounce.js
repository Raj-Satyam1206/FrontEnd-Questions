export default function debounce(func, wait) {
  let timer=null;
  function debounced(...args){

    let context = this;
   
    clearTimeout(timer);

    timer =  setTimeout(()=>{
      func.apply(context , args);
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