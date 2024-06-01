import { createClient } from '@supabase/supabase-js'

const projectURL = import.meta.env.VITE_DB_URL
const anonKey = import.meta.env.VITE_DB_KEY
console.log('supabase', projectURL, anonKey)

export const supabase = createClient(projectURL, anonKey)