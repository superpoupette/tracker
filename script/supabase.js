import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const supabaseUrl = 'https://enmwwlovnzzmpmebgqri.supabase.co'
const supabaseKey = 'sb_publishable_LNuAaplPR9o5lDQTuDE9iQ_52IEM05-'

const supabase = createClient(supabaseUrl, supabaseKey)

async function chargerDanses() {
  const { data, error } = await supabase
    .from('Danse')
    .select('*')

  if (error) {
    console.error(error);
    return [];
  }

  return data;
}


const mesChorees = await chargerDanses();
console.log(mesChorees);