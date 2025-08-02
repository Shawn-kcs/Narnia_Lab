import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://lqedwcbmrmxlycwjodvx.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxxZWR3Y2Jtcm14bHljd2pvZHZ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQxMjU1NjMsImV4cCI6MjA2OTcwMTU2M30.nsDI1JQln4rY1gakaBMPgEalLfbg0WwUKH1zDJAFO0Y';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
