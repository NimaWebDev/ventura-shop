import { createClient } from "@supabase/supabase-js";

const supabaseURL = 'https://yenggibixljjiknqobgd.supabase.co'
const supabaseAnnoyKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InllbmdnaWJpeGxqamlrbnFvYmdkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc0MDU3MzAsImV4cCI6MjA2Mjk4MTczMH0.ESRq9reIGwbq8RtEZ9eGj5s_9zFCg56dvqjN-hSVX64'

export const supabase = createClient(supabaseURL , supabaseAnnoyKey)