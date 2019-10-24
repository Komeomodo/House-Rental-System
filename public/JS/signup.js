let submitRegister = document.querySelector("#submit-register")

submitRegister.addEventListener("submit", registerUser)

function registerUser(e) {
    e.preventDefault()

    let url = `http://localhost:3000/users`

    let firstName = document.querySelector("#fname").value
    let phoneNumber = document.querySelector("#pnum").value
    let email = document.querySelector("#email-login").value
    let password = document.querySelector("#pass-login").value

    let data = {
        firstName,
        phoneNumber,
        email,
        password
    }

    fetch(url)
    .then(res => res.json())
    .then(datas => {

        if(firstName == '' || phoneNumber == '' || email == '' || password == '') {
            showAlert("Fields are empty", "red")
        }else {
            let find = datas.some(data => {
                if(email == data.email){
                    return true
                }
                else{
                    return false
                }
            })
            
            if(find){
                alert("Email exist already!!!", "red")
            }else{
                if(password.length < 4){
                    alert("Password is less than 4", "red")
                } else {
                    fetch(url, {
                        method: 'post',
                        headers: {
                            'Accept': 'application/json',
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(data)
                    })
                    .then(res => res.json())
                    .then(() => {
                        alert("You have register successfully")
                        window.location = 'dashboard.html'
                    })
                }
            }
        }
    })
}


