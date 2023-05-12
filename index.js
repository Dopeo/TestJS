let customerForm = document.getElementById("customerForm");
let firstName = document.getElementById("firstname");
let lastName = document.getElementById("lastname");
let cityName = document.getElementById("city");
let emailAdd = document.getElementById("email");
let submitBtn = document.getElementById("submitBtn");
const spinner = document.getElementById("buttonSpinner");
const btnText = document.getElementById("buttonText");
const errorAlert = document.getElementById("errorAlert")


function afterSubmit(e){
  e.preventDefault();
  if (customerForm.checkValidity() === false) {
    event.stopPropagation();
    for(let field of customerForm.elements) {
      if(!field.checkValidity()){
        field.classList.add("is-invalid");
      }
    }
    return;
  }

  for(let field of customerForm.elements) {
      field.classList.remove("is-invalid");
    }
  
  let info = {
    first: firstName.value,
    last: lastName.value,
    email: emailAdd.value,
    city: cityName.value,
  };

  const url = "https://script.google.com/macros/s/AKfycbzhBUXF7S1Oh2uGdKhpn5yCF15_pwgVgWsh26ovYUN0C4SUVKyjJBC72XowLnokmARsMQ/exec"
  
  spinner.classList.remove("d-none");
  btnText.textContent = "Sending...";
  submitBtn.disabled = true;

  fetch(url,{
    method: 'POST',
    cache: 'no-cache',
    redirect: 'follow',
    body: JSON.stringify(info)
  })
  .then(res => res.json())
  .then(res => {
    console.log(res);
    customerForm.reset();
    spinner.classList.add("d-none");
    btnText.textContent = "Send";
    submitBtn.disabled = false;
  })
  .catch(err => {
    console.log(err);
    console.log("Something Went Wrong!");
    errorAlert.classList.remove("d-none");
    setTimeout(function(){
      errorAlert.classList.add("d-none");
      spinner.classList.add("d-none");
      btnText.textContent = "Send";
      submitBtn.disabled = false;
    },3000);
  });
};

customerForm.addEventListener("submit", afterSubmit);
