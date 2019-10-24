// Admin session 
let adminSess = sessionStorage.getItem("admin")
if(adminSess) {
    let url = `http://localhost:3000/users/${adminSess}`
    fetch(url)
    .then(res => res.json())
    .then(data => {
        document.querySelector(".welcome").innerHTML = `Welcome, ${data.firstName}. We are glad to have you on board!! `
    })
    
}else{
    window.location = 'admin_login.html'
}

document.querySelector("#logout").addEventListener("click", () => {
    sessionStorage.removeItem("admin")
    window.location = 'admin_login.html'
})