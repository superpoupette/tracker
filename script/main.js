import { chargerDanses } from './supabase.js'
import { trouverChoreeEnCours } from './script.js'
import { afficherChoreesEnCours } from './script.js'
import { ajouterChoree } from './script.js'
import { supprimerChoreesEnCours } from './script.js'
import { AfficherSemaineActuelle } from './dates.js'



async function init() {
  const mesChorees = await chargerDanses()
  console.log(mesChorees)

  const ChoreeEnCours = trouverChoreeEnCours(mesChorees)
  console.log(ChoreeEnCours)

  afficherChoreesEnCours(ChoreeEnCours)

  const BouttonAjouterChoree = document.getElementById("BouttonAjouterChoree")

  BouttonAjouterChoree.addEventListener("click", () => {
    console.log("ok")
    ajouterChoree()
  })

  AfficherSemaineActuelle()
}

init()

