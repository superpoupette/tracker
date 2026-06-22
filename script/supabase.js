const supabaseUrl = 'https://enmwwlovnzzmpmebgqri.supabase.co'
const supabaseKey = 'sb_publishable_LNuAaplPR9o5lDQTuDE9iQ_52IEM05-'

const supabase = window.supabase.createClient(
  supabaseUrl,
  supabaseKey
)

async function chargerDanses() {
  const { data, error } = await supabase
    .from('Danse')
    .select('*')

  if (error) {
    console.error('Erreur Supabase :', error)
    return
  }

  console.log('Données récupérées :', data)
}

chargerDanses()
console.log(window)
console.log(window.supabase)
