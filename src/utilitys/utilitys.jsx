const validateEmail = (email) => {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
};

const emailValidation = (email) => {
  const options = { method: "GET" };

  fetch(
    `https://emailvalidation.abstractapi.com/v1?api_key=542f3202b0b5453486ba8ab9447c1c1f&email=${email}`,
    options
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
  if (response.deliverability === "DELIVERABLE") {
    return true;
  } else {
    return false;
  }
};

export { validateEmail, emailValidation };
