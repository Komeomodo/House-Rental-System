
// let showPassword = document.querySelector(".show-password")
let adminSubmit = document.querySelector("#submit-admin")
// showPassword.addEventListener("click", showPass)
adminSubmit.addEventListener("submit", adminLogin)

function adminLogin(e) {
    e.preventDefault()

    let url = `http://localhost:3000/Admin`

    let email = document.querySelector("#email").value
    let password = document.querySelector("#password").value


    fetch(url)
    .then(res => res.json())
    .then(datas => {

        datas.forEach(data => {
            if(email == data.email){
                sessionStorage.setItem("admin", data.id)
            }
        })

        let find = datas.some(data => {
            if(email == data.email){
                return true
            }
            else{
                return false
            }
        })

        let pass = datas.some(data => {
            if(email == data.email && password == data.password){
                return true
            }
            else{
                return false
            }
        })
        
        if(!find) {
            // window.location = 'index.html'
            alert(`Invalid email or not register`)
        } else {
            if(!pass){
                alert("Invalid Password", "red")
            } else {
                window.location = 'admin.html'
            }
            
        }
    })
}
       