function avg(){
    let value = 0;
    for (var i in arguments){ //for 문을 사용 !!
        if(Array.isArray(arguments[i])){

        }
        value=value+arguments[i];
        }
        return value / arguments.length;
}

function count(){
    let c = 0;
    for (var i in arguments){ //for 문을 사용 !!
        let value = arguments[i];
        if(Array.isArray(value)){
            for(var j in value){
                c+=count(value[j]);
            }
        }
        if(typeof arguments[i] === 'number'){
            c+=1;
        }
    }
    return c;
}

function sum(){
    let s = 0;
    for (var i in arguments){ //for 문을 사용 !!
        let value = arguments[i];
        if(Array.isArray(value)){
            for(var j in value){
                s+=sum(value[j]);
            }
        }
        if(typeof arguments[i] === 'number'){
            s+=arguments[i];
        }
    }
    return s;
}

function mean(){
    var args = Array.from(arguments);
    return sum(args)/count(args);
}

// console.log(mean(1, 2, 3, [1, 2, 3]));

export default mean;