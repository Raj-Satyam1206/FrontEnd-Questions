function throttle(func, delay)
{
    let timer = null;
    let flag = true;
    function throttled(...args){
        if(flag){
            func.apply(this , args);
            flag = false;
        }

        timer = setTimeout(()=> {
            flag = true;
        }, delay)
    }
    throttled.cancel = function(){
    if (timer) clearTimeout(timer);
    timer = null;
  }
  return throttled;
}