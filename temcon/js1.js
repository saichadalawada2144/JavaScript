let ss=document.getElementById("ss");
let cf=document.getElementById("cf");
let fc=document.getElementById("fc");
let butt=document.getElementById("butt");
let ans=document.getElementById("ans");
let t;
butt.onclick=function(){
    if (cf.checked){
        t=Number(ss.value);
        t=t*(9/5)+32; 
        ans.textContent= t+ '°F';
    }
    else if(fc.checked){
        t=Number(ss.value);
        t=(t- 32) * 5/9;
        ans.textContent= t+ '°C';
    }
}