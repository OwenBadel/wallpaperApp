import { createClient } from '@supabase/supabase-js'
import { environment } from 'src/environments/environment'

// Create a single supabase client for interacting with your database
export const supabase = createClient(
    'https://kawcvkucmuvpxaizzhzv.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imthd2N2a3VjbXV2cHhhaXp6aHp2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg0ODcxNzQsImV4cCI6MjA3NDA2MzE3NH0.XXjzq1dcrQqPEfmg9Bq7AGocvBoxe6WmshTVz5x9C3k'
);