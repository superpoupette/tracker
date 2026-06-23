import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const supabaseUrl = 'https://enmwwlovnzzmpmebgqri.supabase.co'
const supabaseKey = '...'

export const supabase = createClient(supabaseUrl, supabaseKey)

export async function chargerDanses() {
  const { data, error } = await supabase
    .from('Danse')
    .select('*')

  if (error) {
    console.error(error)
    return []
  }

  return data
}


