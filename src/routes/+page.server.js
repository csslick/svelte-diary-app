import { supabase } from "$lib/supabaseClient";

export async function load() {
  const { data } = await supabase
    .from("diaries")
    .select()
    .order('created_at', { ascending: false });
    
  console.log('server: ', data)
  return {
    diaries: data ?? [],
  };
}