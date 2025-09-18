import { createClient } from '@supabase/supabase-js'

// replace with your project URL + anon key from Supabase dashboard
const supabaseUrl = "https://okdgxxaraoogbqnuqxdw.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9rZGd4eGFyYW9vZ2JxbnVxeGR3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc2MDAwNzcsImV4cCI6MjA3MzE3NjA3N30.IRSxr-Nu-_w9r14bTr6wMSmmzqdLUxJJsOZh2WYa22w"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)