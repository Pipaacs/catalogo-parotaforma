// supabase-config.js
const supabaseUrl = 'https://nhkhavmgfdpbrnvekrme.supabase.co'; // Reemplaza con tu URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5oa2hhdm1nZmRwYnJudmVrcm1lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjcyMDg0MjUsImV4cCI6MjA4Mjc4NDQyNX0.xvbD_5jIiVfrKymlt5UGUW5rKOq0RIM3KkjqDKAIITA'; // Reemplaza con tu Llave Anon

const supabaseClient = window.supabase.createClient(supabaseUrl, supabaseKey);