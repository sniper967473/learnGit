document.getElementById("spad").onclick =function(){
    var x =parseInt(document.getElementById("fisrtNumber").value); 
    var y =parseInt(document.getElementById("secondNumber").value);
    var operator =document.getElementById("opr").value;
    switch(operator){
        case "+":
            res=x+y;
            document.write("res is :"+res);
        break;
        case "-":
            res=x-y;
            document.write("res is :"+res);
        break;        
        case "*":
            res=x*y;
            document.write("res is :"+res);
        break;       
        case "/":
            res=x/y;
            document.write("res is :"+res);
        break;
    }
}
