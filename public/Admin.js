$(document).ready(function(){
    let submitRegister = document.querySelector("#submit-Register")
    submitRegister.addEventListener('submit', registerUser)

function registerUser(e){
    e.preventDefault();
    
    let url = 'http://localhost:3000/users'

    let fname = document.querySelector('#fname').value
    let lname = document.querySelector('#lname').value
    let email = document.querySelector('#email-login').value
    let password = document.querySelector('#pass-login').value

    let user_data = {
        fname, lname, email, password

    }

    fetch(url)
    .then(Resp => Resp.json())
    .then(datas =>{

        if(fname == '' || lname == '' || email == '' || password == ''){
            alert("fields are Empty!")
        }else{
            let find_data = datas.some(data =>{
                if(email == user_data.email){
                    return true
                }else{
                    return false
                }
            })
            if(find_data){
                alert('Email already exist!')
            }else{
                if(password.length < 5){
                    alert('password should not be less than 5')
                }else{
                    fetch(url, {
                        method: 'post',
                        headers: {
                            'Accept': 'application/json',
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(user_data)
                    })
                    .then(resp => resp.json())
                    .then(() =>{
                        alert('Registration Successful')
                        window.location ='index.html'
                    })
                }
            }
        }
    })
}
})