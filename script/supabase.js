npm install @supabase/supabase-js

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://enmwwlovnzzmpmebgqri.supabase.co'
const supabaseKey = 'sb_publishable_LNuAaplPR9o5lDQTuDE9iQ_52IEM05-'

export const supabase = createClient(supabaseUrl, supabaseKey)

const { data, error } = await supabase
  .from('Danse')
  .select('*')

console.log(data)