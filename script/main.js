import { chargerDanses } from './supabase.js'

async function init() {
  const mesChorees = await chargerDanses()
  console.log(mesChorees)

  const ChoreeEnCours = trouverChoreeEnCours()
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

