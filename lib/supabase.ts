import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://qzkuonioltfvizsnpwnn.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF6a3VvbmlvbHRmdml6c25wd25uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcxNjY5ODIsImV4cCI6MjA2Mjc0Mjk4Mn0.QMNqc82HP1Ifh-2drp345baDz1DnYxl8cpsEfjV5SG8'

export const supabase = createClient(supabaseUrl, supabaseKey)