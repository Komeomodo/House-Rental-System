let sess = sessionStorage.getItem("lock")

if(sess) {
    let url = `http://localhost:3000/users/${sess}`
    fetch(url)
    .then(res => res.json())
    .then(data => {
        document.querySelector(".welcome").innerHTML = `Welcome, ${data.firstName}. We are glad to have you on board!! `
    })
    
}else{
    window.location = 'index.html'
}
//logout Session
document.querySelector("#logout").addEventListener("click", () => {
    sessionStorage.removeItem("lock")
    window.location = 'index.html'
})
