import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const SUPABASE_URL = "https://sqtyosnnovpabbzxeojt.supabase.co";
const SUPABASE_KEY = "sb_publishable_XXXXXXXXXXXX"; // paste your real key

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
