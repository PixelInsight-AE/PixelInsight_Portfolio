const getAPIkey = async () => {
  const { data, error } = await supabase.rpc("fn_mailer_check_key");
  if (error) return setError(error.message);
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
      alert("Please enter a valid email");
      return false;
    }
  } catch (err) {
    return {
      error: err,
      valid: false,
    };
  }
};

export { validateEmail };
