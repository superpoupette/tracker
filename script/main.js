
ChoreeEnCours=trouverChoreeEnCours();
console.log(ChoreeEnCours);
afficherChoreesEnCours(ChoreeEnCours);


let BouttonAjouterChoree = document.getElementById("BouttonAjouterChoree");
BouttonAjouterChoree.addEventListener("click", () => { 
    console.log("ok");
    ajouterChoree()
});

AfficherSemaineActuelle()



