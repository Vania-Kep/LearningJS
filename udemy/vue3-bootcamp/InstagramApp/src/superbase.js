import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://xuayslhplmadovjgvhkv.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh1YXlzbGhwbG1hZG92amd2aGt2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMxMjU0MzcsImV4cCI6MjA2ODcwMTQzN30.Xbzy3TAPS-KNWmlO4AUTM6wX56yEN6cwbXCMX3AUSn8'// process.env.SUPABASE_KEY

export const supabase = createClient(supabaseUrl, supabaseKey)
