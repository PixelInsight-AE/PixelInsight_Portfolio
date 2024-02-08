import supabase from "../config/supabase";

const getAPIkey = async () => {
  const { data, error } = await supabase.rpc("fn_mailer_check_key");
  if (error) return error.message;
  return data;
};
const validateEmail = async (email) => {
  try {
    const apiKey = await getAPIkey();
    const response = await fetch(
      `https://app.mailercheck.com/api/check/single`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({ email: email }),
      }
    );
    const result = await response.json();
    console.log(result, "mailer check results");
    if (result.status === "valid") {
      return true;
    } else {
      console.log(result, "mailer check results");
      console.log(error, "error");

      return false;
    }
  } catch (err) {
    console.log(err);
    return false;
  }
};

export { validateEmail };
