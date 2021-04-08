function format() { var args = Array.prototype.slice.call (arguments, 1); return arguments[0].replace (/\{(\d+)\}/g, function (match, index) { return args[index]; }); }
//출처: https://marsland.tistory.com/469 [삽질하는 프로그래머 통통만두의 판톼스틱한 삽질기]
var n = window.prompt("enter how many do you want!!!")
while(n < 0){
    n = window.prompt("enter how many do you want(positive number)!!! ") ;  
}
var elements = []
for(var i=1 ; i<=n ; i++){
    var input = window.prompt(format("{0}st number", i));
    elements.push(input);
}
window.alert("you entered following\n"+elements)


