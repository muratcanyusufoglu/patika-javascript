let name=prompt("İsminizi Giriniz");

let inside=document.querySelector("#name")

let isim=document.querySelector("#myClock")

function showTime(){
    let time=new Date().toString()
    isim.innerHTML="Merhaba "+name+"  "+time
}

setInterval(showTime,1000)




