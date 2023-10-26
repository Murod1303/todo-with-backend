const token = localStorage.getItem("token")
setTimeout(() => {
  if (!token) {
    window.location.pathname = "../login.html"
  }
}, 5000);

// const elForm = document.querySelector(".form")
// const elInput = document.querySelector(".js-input")

async function getTodo() {
  try {
    const res = await fetch("http://192.168.43.111:5000/todo", {
    headers : {
      // "Content-type": "application/json",
      Authorization : token
    }
  })
  const data = await res.json()
  console.log(data);
  
} catch (error) {
  console.log(error);
}
}
getTodo()

// async function PostTodo() {
//   try {
//     const res = await fetch("http://192.168.43.111:5000/todo", {
//     method : "POST",
//     headers : {
//       "Content-type": "application/json",
//       Authorization : token
//     },
//     body : JSON.stringify({
//       text : elInput.value.trim()
//     }),
//   })
//   const data = await res.json()
//   console.log(data);
  
// } catch (error) {
//   console.log(error);
// }
// }

// getTodo()
// elForm.addEventListener("submit", (evt)=> {
//   evt.preventDefault()
//   PostTodo()
// })

if (token) {
  document.querySelector(".header__list").style.display = "none"
  document.querySelector(".header__user").style.display = "flex"
}else {
  document.querySelector(".header__list").style.display = "flex"
  document.querySelector(".header__user").style.display = "none"
}


