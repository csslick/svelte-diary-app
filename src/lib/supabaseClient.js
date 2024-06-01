import { createClient } from '@supabase/supabase-js'

// const projectURL = 'https://jkrsrzuthmaoyaidwndd.supabase.co'
// const anonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImprcnNyenV0aG1hb3lhaWR3bmRkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTcxNjc0MDcsImV4cCI6MjAzMjc0MzQwN30.Mv6E2PfOD6SRQYGCyRxMpoXLhAj6EESZl5DgVr2sbc4'
const projectURL = import.meta.env.VITE_DB_URL
const anonKey = import.meta.env.VITE_DB_KEY
console.log('supabase', projectURL, anonKey)

export const supabase = createClient(projectURL, anonKey)