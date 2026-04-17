import { createClient } from "@supabase/supabase-js";

const instanceUrl = import.meta.env.VITE_SUPABASE_URL;
const apiKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;
const supabaseClient = createClient(instanceUrl, apiKey);

export default supabaseClient;
