import { 
  chargerDanses,
  chargerTracker,
  ajouterLigneTracker
 } from './supabase.js'

import {
  trouverChoreeEnCours,
  afficherChoreesEnCours,
  ajouterChoree,
  supprimerChoreesEnCours
} from './script.js'

import { AfficherSemaineActuelle } from './dates.js'


async function init() {
  //charger les données de chorées
  let mesChorees = await chargerDanses();

  //charger les données de tracker
  let mesData = await chargerTracker();
  console.log(mesData);
  //modifier tracker
  await ajouterLigneTracker({
    date: "2026-06-22",
    sport: 8,
    sommeil:6
  })

  let ChoreeEnCours = trouverChoreeEnCours(mesChorees)

  afficherChoreesEnCours(ChoreeEnCours)

  const BouttonAjouterChoree = document.getElementById("BouttonAjouterChoree")

  BouttonAjouterChoree.addEventListener("click", () => {

    console.log("ok")

    // 1. ajout
    mesChorees = ajouterChoree(mesChorees)

    // 2. recalcul des chorées en cours
    ChoreeEnCours = trouverChoreeEnCours(mesChorees)

    // 3. reset affichage
    supprimerChoreesEnCours()

    // 4. réaffichage
    afficherChoreesEnCours(ChoreeEnCours)
  })

  AfficherSemaineActuelle()
}

init()

