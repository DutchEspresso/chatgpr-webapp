import { createClient } from '@supabase/supabase-js'
import * as os from 'os';

const supabaseUrl = 'https://huuhbsgpqtiyirmrsdkp.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh1dWhic2dwcXRpeWlybXJzZGtwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg3MTk4NzEsImV4cCI6MjAzNDI5NTg3MX0.xBGeGxfPPjb7hfMHGrpxJduKwoplLzPrsL7QwulWveg'

export const supabase_client = createClient(supabaseUrl, supabaseAnonKey)
