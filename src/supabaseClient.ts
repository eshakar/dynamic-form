import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://qbqjqwosxysmqvtbhszn.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFicWpxd29zeHlzbXF2dGJoc3puIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYzMDU1MDAsImV4cCI6MjAzMTg4MTUwMH0.-WbmG-DWGx5-tbFKC9KEc4wIVa9h0LX6lLAtUtaYynI';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
