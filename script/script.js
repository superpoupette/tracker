
//afficher uniquement les chorées encore en cours
export function trouverChoreeEnCours(mesChorees){
    return mesChorees.filter(c => c.etat === "en cours");
}

// afficher les chorées en cours dans la partie associée
export function afficherChoreesEnCours(ChoreeEnCours){
    let zoneChoreesEnCours = document.getElementById("zoneChoreesEnCours");
    for (let i=0;i<ChoreeEnCours.length;i++){
            let zoneChoree = document.createElement("div");
            zoneChoreesEnCours.appendChild(zoneChoree);


            let titre = document.createElement("h1");
            titre.textContent =ChoreeEnCours[i].titre+" - "+ChoreeEnCours[i].artiste;
            zoneChoree.appendChild(titre);

            let duree = document.createElement("p");
            duree.textContent ="Durée : "+ChoreeEnCours[i].duree+" min";
            zoneChoree.appendChild(duree);

            let dureeApprentissage = document.createElement("p");
            dureeApprentissage.id="duree"+ChoreeEnCours[i].code;
            dureeApprentissage.textContent ="Temps d'apprentissage: "+ChoreeEnCours[i].dureeApprentissage+" min";
            zoneChoree.appendChild(dureeApprentissage);

            let ajouterTemps = document.createElement("input");
            ajouterTemps.type = "number";
            zoneChoree.appendChild(ajouterTemps);


            let bouttonAjouterTemps = document.createElement("button");
            bouttonAjouterTemps.innerHTML="Ajouter";
            bouttonAjouterTemps.id="timer"+ChoreeEnCours[i].code;
            zoneChoree.appendChild(bouttonAjouterTemps);

            majDureeApprentissage(i,ajouterTemps);
    }
}

//mise à jour de la durée d'apprentissage des chorées
function majDureeApprentissage(i,ajouterTemps){
    let BouttonTimer = document.getElementById("timer"+ChoreeEnCours[i].code);
            BouttonTimer.addEventListener("click", () => { 
                let tempsaAjouter = parseInt(ajouterTemps.value);
                if(tempsaAjouter>0){
                    ChoreeEnCours[i].dureeApprentissage+=tempsaAjouter;
                    let dureeTexte = document.getElementById("duree" + ChoreeEnCours[i].code);
                    dureeTexte.textContent ="Temps d'apprentissage : "+ChoreeEnCours[i].dureeApprentissage+" min";
                }               
            });

}

//ajouter une nouvelle choregraphie dans la base
export function ajouterChoree(){    
    let nouvelleChoree={};
    nouvelleChoree.code=ajouterTitre.value+ajouterArtiste.value;
    nouvelleChoree.artiste=ajouterArtiste.value;
    nouvelleChoree.titre=ajouterTitre.value;
    nouvelleChoree.duree=ajouterDuree.value;
    nouvelleChoree.dureeApprentissage=0;
    nouvelleChoree.etat="en cours";
    mesChorees.push(nouvelleChoree);
    console.log(mesChorees);

    i=mesChorees.length;
    console.log(i);

    ChoreeEnCours=trouverChoreeEnCours();


    //mise à jour interface
    supprimerChoreesEnCours();
    afficherChoreesEnCours(ChoreeEnCours);

    
}

export function supprimerChoreesEnCours(){
    let zoneChoreesEnCours = document.getElementById("zoneChoreesEnCours");
    zoneChoreesEnCours.textContent="";
}