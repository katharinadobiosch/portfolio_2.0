import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;

// ✅ Richtiger fetch mit Content-Type + username-Header
const customFetch = async (url, options = {}) => {
  const username = localStorage.getItem("username") || "";

  const headers = {
    "Content-Type": "application/json",
    apikey: supabaseKey,
    Authorization: `Bearer ${supabaseKey}`,

    // 🎯 Header, den Supabase in `request.headers.username` erkennt
    username: username,

    // bestehende Header nicht überschreiben
    ...(options.headers || {}),
  };

  return fetch(url, {
    ...options,
    headers,
  });
};

export const supabase = createClient(supabaseUrl, supabaseKey, {
  global: {
    fetch: customFetch,
  },
});
