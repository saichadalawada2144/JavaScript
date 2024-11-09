function timee(){
    const now= new Date();
    let hours= now.getHours().toString().padStart(2,0);
    const mer=hours>=12 ? "PM" :"AM";
    hours=hours%12 ||12;
    hours=hours.toString().padStart(2,0);
    const minutes=now.getMinutes().toString().padStart(2,0);
    const seconds=now.getSeconds().toString().padStart(2,0);
    const time1=`${hours}:${minutes}:${seconds} ${mer}`;
    document.getElementById("clock").textContent=time1;

}
timee();
setInterval(timee,1000);