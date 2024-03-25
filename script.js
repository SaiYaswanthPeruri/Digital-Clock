function updateclock(){
    const now = new Date()
    let hours = now.getHours();
    const maridiam = hours >= 12 ? "PM" : "AM";
    hours =  hours % 12 || 12;
    hours = hours.toString().padStart(2,0)
    const mint = now.getMinutes().toString().padStart(2,0);
    const sec = now.getSeconds().toString().padStart(2,0);
    const timestrung = `${hours}:${mint}:${sec} ${maridiam}`;
    document.getElementById("clock").textContent=timestrung;


}

setInterval(updateclock,1000);