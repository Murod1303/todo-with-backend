const elFormRegister = document.querySelector(".todo-register-form");
const elRegisterName = document.querySelector(".register-name");
const elRegisterEmail = document.querySelector(".register-email");
const elRegisterPhone = document.querySelector(".register-phone");
const elRegisterPasword = document.querySelector(".register-pasword");

async function registerForTodo() {
  try {
    const res = await fetch("http://192.168.43.111:5000/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_name: elRegisterName.value.trim(),
        phone: elRegisterPhone.value.trim(),
        email: elRegisterEmail.value.trim(),
        password: elRegisterPasword.value.trim(),
      }),
    });
    const data = await res.json();
    console.log(data);
    console.log(data.token);
    if(data.token){
      window.localStorage.setItem("token", data.token);
      window.location.pathname = "index.html";
    }
  } catch (error) {
    console.log(error);
  }
}

elFormRegister.addEventListener("submit", (evt) => {
  evt.preventDefault();
  registerForTodo();
});
