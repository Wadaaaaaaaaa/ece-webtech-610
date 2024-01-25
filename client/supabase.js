import { createClient } from "@supabase/supabase-js";






const supabaseUrl = 'https://tlamqakrieduehjsuhka.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRsYW1xYWtyaWVkdWVoanN1aGthIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM0Mzk2MTAsImV4cCI6MjAxOTAxNTYxMH0.ZzKmAoL8H12cWhisVB1HRBKGrkPrgPShUumSaipGZsM'
export const supabase = createClient(supabaseUrl, supabaseKey)


/* export const supabase = createClient(
	process.env.REACT_APP_SUPABASE_URL,
	process.env.REACT_APP_SUPABASE_ANON_KEY
); */