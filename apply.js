import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const SUPABASE_URL = "https://sqtyosnnovpabbzxeojt.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNxdHlvc25ub3ZwYWJienhlb2p0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU5NjA1MDksImV4cCI6MjA4MTUzNjUwOX0.RMtwB33qagEOmKJrHEb_iJZ8VeHh8kWcJe728Cr7YtM";
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const form = document.getElementById("creatorForm");
const msg = document.getElementById("msg");

form.addEventListener("submit", async (e) => {
e.preventDefault();

const payload = {
name: form.name.value,
email: form.email.value,
social_handle: form.social_handle.value,
platform: form.platform.value,
};

const { data, error } = await supabase.from("creators").insert([payload]);

if (error) {
console.error(error);
msg.textContent = "Error submitting form";
return;
}

console.log("Inserted:", data);
msg.textContent = "Application submitted!";
form.reset();
});
