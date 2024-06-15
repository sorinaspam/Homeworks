const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const male = document.getElementById("male");
const female = document.getElementById("female");
const message = document.getElementById("message");
const form = document.getElementById("form");
const confirmationBanner = document.getElementById("confirmationBanner");
const confirmationBannerText = document.getElementById(
  "confirmationBannerText"
);
const button = document.getElementById("submit");
const maleLabel = document.getElementById("maleLabel");
const femaleLabel = document.getElementById("femaleLabel");
const close = document.getElementById("close");

// que significa realmente esta parte?
form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
});
// hasta aqui

firstName.addEventListener("textInput", () => {
  firstName.style.borderColor = "black";
});
lastName.addEventListener("textInput", () => {
  lastName.style.borderColor = "black";
});
message.addEventListener("textInput", () => {
  message.style.borderColor = "black";
});

function gender() {
  if (male.checked || female.checked) {
    maleLabel.style.color = "black";
    femaleLabel.style.color = "black";
  }
}
submit.addEventListener("click", (e) => {
  if (firstName.value === "") {
    firstName.style.borderColor = "red";
  }
  if (lastName.value === "") {
    lastName.style.borderColor = "red";
  }
  if (!male.checked || !female.checked) {
    maleLabel.style.color = "red";
    femaleLabel.style.color = "red";
  }
  if (message.value === "") {
    message.style.borderColor = "red";
  }
  if (
    firstName.value &&
    lastName.value &&
    message.value &&
    (male.checked || female.checked)
  ) {
    confirmationBannerText.innerText = `Thank you for contacting us, ${firstName.value}`;
    confirmationBanner.style.backgroundColor = "#def0d8";
    close.style.display = "inline";
    gender();
    // hay alguna otra forma de seleccionar solamente uno de los dos generos?
    console.log(
      `First name is: ${firstName.value}; Last name is: ${lastName.value}; Gender is: male: ${male.checked} female:${female.checked}; Message is: ${message.value}`
    );
  }
});

function clearAllFields() {
  firstName.value = "";
  lastName.value = "";
  male.checked = false;
  female.checked = false;
  message.value = "";
}
close.addEventListener("click", () => {
  confirmationBannerText.innerText = ``;
  confirmationBanner.style.backgroundColor = "white";
  close.style.display = "none";
  clearAllFields();
});
