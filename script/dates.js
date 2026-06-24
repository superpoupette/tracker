export function AfficherSemaineActuelle(){
    let now = new Date();
let week = [];

for (let i = 0; i < 8; i++) {
    let first = now.getDate() - now.getDay() + i;
    let date = new Date(now.setDate(first));
    let day = date.toLocaleDateString("fr-FR", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });

    week.push(day);
}

    let dateLundi= document.getElementById("dateLundi").innerHTML=week[1];
    let dateMardi= document.getElementById("dateMardi").innerHTML=week[2];
    let dateMercredi= document.getElementById("dateMercredi").innerHTML=week[3];
    
}  

