function showTime(){
    const date=new Date();
    let hour=date.getHours();
    let min=date.getMinutes();
    let sec=date.getSeconds();
    let session="AM";
    
    if(hour==0){
        hour=12;
    }
    if(hour>12){
        hour=hour-12;
        session='PM';
    }

    hour=(hour<10)?"0"+hour:hour;
    min=(min<10)?"0"+min:min;
    sec=(sec<10)?"0"+sec:sec;
    document.getElementById("hour").innerHTML=hour;
    document.getElementById("min").innerHTML=min;
    document.getElementById("sec").innerHTML=sec;
    document.getElementById("session").innerHTML=session;
    setTimeout(showTime,1000);
}

showTime();