import { createClient } from "@supabase/supabase-js";
import { Database } from "./types/supabase";

const instanceUrl = import.meta.env.VITE_SUPABASE_URL;
const apiKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

export const supabaseClient = createClient<Database>(instanceUrl, apiKey);

export { instanceUrl, apiKey };
