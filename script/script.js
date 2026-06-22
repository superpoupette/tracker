
//afficher uniquement les chorées encore en cours
function trouverChoreeEnCours(){
    let ChoreeEnCours=[];
    for (let i=0;i<mesChorees.length;i++){
        if (mesChorees[i].etat==="en cours"){
            ChoreeEnCours.push(mesChorees[i]);
        }
    }
    return ChoreeEnCours;
}

// afficher les chorées en cours dans la partie associée
function afficherChoreesEnCours(ChoreeEnCours){
    let zoneChoreesEnCours = document.getElementById("zoneChoreesEnCours");
    for (let i=0;i<ChoreeEnCours.length;i++){
            let titre = document.createElement("h1");
            titre.textContent =ChoreeEnCours[i].titre+" - "+ChoreeEnCours[i].artiste;
            zoneChoreesEnCours.appendChild(titre);

            let duree = document.createElement("p");
            duree.textContent ="Durée : "+ChoreeEnCours[i].duree+" min";
            zoneChoreesEnCours.appendChild(duree);

            let dureeApprentissage = document.createElement("p");
            dureeApprentissage.id="duree"+ChoreeEnCours[i].code;
            dureeApprentissage.textContent ="Temps d'apprentissage: "+ChoreeEnCours[i].dureeApprentissage+" min";
            zoneChoreesEnCours.appendChild(dureeApprentissage);

            let ajouterTemps = document.createElement("input");
            ajouterTemps.type = "number";
            zoneChoreesEnCours.appendChild(ajouterTemps);


            let bouttonAjouterTemps = document.createElement("button");
            bouttonAjouterTemps.innerHTML="Ajouter";
            bouttonAjouterTemps.id="timer"+ChoreeEnCours[i].code;
            zoneChoreesEnCours.appendChild(bouttonAjouterTemps);

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
function ajouterChoree(){    
    let nouvelleChoree={};
    nouvelleChoree.code=ajouterTitre.value+ajouterArtiste.value;
    nouvelleChoree.artiste=ajouterArtiste.value;
    nouvelleChoree.titre=ajouterTitre.value;
    nouvelleChoree.duree=ajouterDuree.value;
    nouvelleChoree.dureeApprentissage=0;
    nouvelleChoree.etat="en cours";
    mesChorees.push(nouvelleChoree);
    console.log(mesChorees);

    afficherNouvelleChoree(nouvelleChoree);
}

function afficherNouvelleChoree(nouvelleChoree){
        let titre = document.createElement("h1");
        titre.textContent =nouvelleChoree.titre+" - "+nouvelleChoree.artiste;
        zoneChoreesEnCours.appendChild(titre);

        let duree = document.createElement("p");
        duree.textContent ="Durée : "+nouvelleChoree.duree+" min";
        zoneChoreesEnCours.appendChild(duree);

        let dureeApprentissage = document.createElement("p");
        dureeApprentissage.id="duree"+nouvelleChoree.code;
        dureeApprentissage.textContent ="Temps d'apprentissage: "+nouvelleChoree.dureeApprentissage+" min";
        zoneChoreesEnCours.appendChild(dureeApprentissage);

        let ajouterTemps = document.createElement("input");
        ajouterTemps.type = "number";
        zoneChoreesEnCours.appendChild(ajouterTemps);


        let bouttonAjouterTemps = document.createElement("button");
        bouttonAjouterTemps.innerHTML="Ajouter";
        bouttonAjouterTemps.id="timer"+nouvelleChoree.code;
        zoneChoreesEnCours.appendChild(bouttonAjouterTemps);

        majDureeApprentissage(i,ajouterTemps);
}