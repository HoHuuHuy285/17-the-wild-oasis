import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://usmjqxxrlalhughopcjh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVzbWpxeHhybGFsaHVnaG9wY2poIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc1Mjc4NzksImV4cCI6MjAyMzEwMzg3OX0.ts5yxbk_YXVQLq0V4i5FLW0XERDObfrAnywQbREy4oY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
