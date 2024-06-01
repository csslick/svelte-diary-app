import { createClient } from '@supabase/supabase-js'

const projectURL = import.meta.env.VITE_DB_URL
const anonKey = import.meta.env.VITE_DB_KEY

export const supabase = createClient(projectURL, anonKey)