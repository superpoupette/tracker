import { chargerDanses } from './supabase.js'
import {
  trouverChoreeEnCours,
  afficherChoreesEnCours,
  ajouterChoree,
  supprimerChoreesEnCours
} from './script.js'

import { AfficherSemaineActuelle } from './dates.js'


async function init() {

  let mesChorees = await chargerDanses()
  console.log(mesChorees)

  let ChoreeEnCours = trouverChoreeEnCours(mesChorees)
  console.log(ChoreeEnCours)

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

