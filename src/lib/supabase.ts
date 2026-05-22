import { createClient } from '@supabase/supabase-js';

// Usando las llaves directamente. Es 100% seguro porque configuramos el Row Level Security (RLS) en Supabase.
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://ysolizxzydlidsswcsep.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlzb2xpenh6eWRpbGRzc3djc2VwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk0MjY4NzQsImV4cCI6MjA5NTAwMjg3NH0.dONJ9ZuQpE9HW1tMO1Xmp9Ps6RlPAtrqf2oXK1MImaA';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
