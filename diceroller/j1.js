const butt=document.getElementById("butt");
const dire=document.getElementById("dire");
const im=document.getElementById("im");
butt.onclick=function(){
    const inn=document.getElementById("inn").value;
    let dire1=[];
    let im1=[];
    for(let i=0;i<inn;i++){
        let v=Math.floor(Math.random()*6)+1;
        dire1.push(v);
        im1.push(`<img src="dima1/${v}.png">`);
    }
    dire.textContent=`Dice: ${dire1.join(', ')}`;
    im.innerHTML=im1.join(" ");
}