function random() {
    for(var i in arguments){
        if(typeof arguments[i] !== "number"){
            return -1;
        }
    }
    if (arguments.length == 1){
        const min = 0;
        const max = arguments[1];
        return parseInt(Math.random() * (max - min) + min);    
    }else if (arguments.length == 2){
        const min = arguments[0];
        const max = arguments[1];
        return parseInt(Math.random() * (max - min) + min);    
    }
    return -1;    
  }


  console.log(random(1, 20));