function throttle(func, delay)
{
    let timer = null;
    let flag = true;
    function throttled(...args){
        let context = this;
        if(flag){
            func.apply(context , args);
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