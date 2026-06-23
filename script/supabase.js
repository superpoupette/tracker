import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const supabaseUrl = 'https://enmwwlovnzzmpmebgqri.supabase.co'
const supabaseKey = 'sb_publishable_LNuAaplPR9o5lDQTuDE9iQ_52IEM05-'

const supabase = createClient(supabaseUrl, supabaseKey)

async function chargerDanses() {
  const { data, error } = await supabase
    .from('Danse')
    .select('*')

  console.log('data =', data)
  console.log('error =', error)
}

chargerDanses()
