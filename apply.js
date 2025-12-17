import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabase = createClient(
  "https://sqtyosnnovpabbzxeojt.supabase.co",
  "PASTE_YOUR_ANON_PUBLIC_KEY_HERE"
);

const form = document.getElementById("creatorForm");
const msg = document.getElementById("msg");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const { error } = await supabase.from("creators").insert([{
    name: form.name.value,
    email: form.email.value,
    social_handle: form.social_handle.value,
    platform: form.platform.value
  }]);

  msg.textContent = error ? "Error submitting form" : "Application submitted";
});
