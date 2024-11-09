const pp=document.getElementById("pp");
function genpass(length,upc,loc,num,spc){
const upc1='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const loc1='abcdefghijklmnopqrstuvwxyz';
const num1='1234567890';
const spc1='!@#$*_+';
let ac='';
let pswd='';
ac+=upc ? upc1 : "";
ac+=loc ? loc1 : "";
ac+=num ? num1 : "";
ac+=spc ? spc1 : "";
for(let i=0;i<length;i++){
    const p=Math.floor(Math.random()* ac.length);
    pswd+=ac[p];
}
return pswd;
}
const length=12;
const upc=true;
const loc=true;
const num=true;
const spc=true;
const password=genpass(length,upc,loc,num,spc);
pp.textContent=`${password}`;