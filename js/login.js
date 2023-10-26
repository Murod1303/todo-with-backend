// register section 

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



// login section
const elLoginForm = document.querySelector(".login__form")
const elLoginEmail = document.querySelector(".login__email")
const elLoginPasword = document.querySelector(".login__pasword")


async function loginTodo() {
  try {
    
    const loginObj = {
      email:elLoginEmail.value.trim(),
      password:elLoginPasword.value.trim()
    }
    const res = await fetch("http://192.168.43.111:5000/user/login", {
    method:"POST",
    headers: {
      "Content-Type" : "application/json",
    },
    body:JSON.stringify(loginObj)
  }) 
  const data = await res.json()
  console.log(data);
  if (data.token) {
    localStorage.setItem("token", data.token)
    window.location.pathname = "index.html"
  }
} catch (error) {
  console.log(error);
}
}


elLoginForm.addEventListener("submit", evt=>{
  evt.preventDefault()
  loginTodo()
})


// Animation login 

const elBtnAni = document.querySelector(".loginBtn")
elBtnAni.addEventListener("click", ()=> {
  document.querySelector(".login__cover").style.transform = "translate(0)"
  document.querySelector(".login__wrapper").style.display = "flex"
  document.querySelector(".register__wrapper").style.display = "none"
  elBtnAni.style.display = "none"
  elBtnRe.style.display = "block"
})

const elBtnRe = document.querySelector(".registerBtn")
elBtnRe.addEventListener("click", ()=> {
  document.querySelector(".login__cover").style.transform = "translate(100%)"
  document.querySelector(".login__wrapper").style.display = "none"
  document.querySelector(".register__wrapper").style.display = "flex"
  elBtnRe.style.display = "none"
  elBtnAni.style.display = "block"
})