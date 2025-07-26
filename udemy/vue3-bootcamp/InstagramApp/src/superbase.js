import { createClient } from '@supabase/supabase-js';

console.log('supabaseUrl', import.meta.env.VITE_SUPABASE_URL);
console.log('supabaseKey', import.meta.env.VITE_SUPABASE_KEY);

export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_KEY
)
