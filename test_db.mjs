import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ysolizxzydildsswcsep.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlzb2xpenh6eWRpbGRzc3djc2VwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk0MjY4NzQsImV4cCI6MjA5NTAwMjg3NH0.dONJ9ZuQpE9HW1tMO1Xmp9Ps6RlPAtrqf2oXK1MImaA';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function test() {
  const { data, error } = await supabase
    .from('solicitudes')
    .insert([
      { 
        nombre: "Test", 
        email: "test@test.com", 
        interes: "desarrollo", 
        descripcion: "Esto es una prueba" 
      }
    ]);

  if (error) {
    console.error("SUPABASE ERROR:", error);
  } else {
    console.log("SUCCESS:", data);
  }
}

test();
