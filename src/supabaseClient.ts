import { createClient } from '@supabase/supabase-js'
import * as os from 'os';

const supabaseUrl = process.env.SUPABASE_URL
const supabaseAnonKey = process.env.SUPABASE_SECRET_KEY

export const supabase_client = createClient(supabaseUrl, supabaseAnonKey)
