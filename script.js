function result()
{
    var x= document.getElementById("display").value;
    try{
        document.getElementById("display").value=eval(x);
    }
    catch(err){
        document.getElementById("display").value="Invalid Syntax";
    }
}

function sin() {
    var x= document.getElementById("display").value;
    try{
        document.getElementById("display").value=Math.sin(x);
    }
    catch(err){
        document.getElementById("display").value="Invalid Syntax";
    }
}
function cos(){
    var x= document.getElementById("display").value;
    try{
        document.getElementById("display").value=Math.sin(x);
    }
    catch(err){
        document.getElementById("display").value="Invalid Syntax";
    }
}
function tan(){
    var x= document.getElementById("display").value;
    try{
        document.getElementById("display").value=Math.sin(x);
    }
    catch(err){
        document.getElementById("display").value="Invalid Syntax";
    }
}
function log(){
    var x= document.getElementById("display").value;
    try{
        document.getElementById("display").value=Math.log(x)
    }
    catch(err){
        document.getElementById("display").value="Invalid Syntax";
    }
}
function sqrt(){
    var x= document.getElementById("display").value;
    try{
        document.getElementById("display").value=Math.sqrt(x)
    }
    catch(err){
        document.getElementById("display").value="Invalid Syntax";
    }
}
function cubrt(){
    var x= document.getElementById("display").value;
    try{
        document.getElementById("display").value=Math.cbrt(x);
    }
    catch(err){
        document.getElementById("display").value="Invalid Syntax";
    }
}
function xsqrt(){
    var x= document.getElementById("display").value;
    try{
        document.getElementById("display").value=x*x;
    }
    catch(err){
        document.getElementById("display").value="Invalid Syntax";
    }
}
function xcube(){
    var x= document.getElementById("display").value;
    try{
        document.getElementById("display").value=x*x*x;
    }
    catch(err){
        document.getElementById("display").value="Invalid Syntax";
    }
}