var loginValue;

const loginButton = document.getElementById('login_btn')
const registerButton = document.getElementById('rgstr_btn')
const regMessageElement = document.getElementById('register-message')
const loginMessageElement = document.getElementById('login-message')


registerButton.addEventListener("click",()=> store())

loginButton.addEventListener("click",function(event){
    event.preventDefault();
    check()
})





function store(){
    
    var name = document.getElementById('name');
    var pw = document.getElementById('pw');
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;

    if(name.value.length == 0){
        
    }else if(pw.value.length == 0){
        
    }else if(name.value.length == 0 && pw.value.length == 0){
       
    }
    else if(pw.value.length < 8){
        document.getElementById('long').style.backgroundColor = "red";
    }else if (!pw.value.match(numbers)){
        // regMessageElement.innerHTML = "<p>Password Must Contain a Number</p>"
        document.getElementById('number').style.backgroundColor = "red";     

    }else if(!pw.value.match(upperCaseLetters)){
        // alert('please add 1 uppercase letter');
        document.getElementById('alphU').style.backgroundColor = "red";  

    }else if(!pw.value.match(lowerCaseLetters)){
        // alert('please add 1 lovercase letter');
        document.getElementById('alphU').style.backgroundColor = "red"; 
    }else{
        localStorage.setItem('name', name.value);
        localStorage.setItem('pw', pw.value);
        alert('Account Successfully Created');
       

    }
}

function check(){
  
    var storedName = localStorage.getItem('name');
    var storedPw = localStorage.getItem('pw');

    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPw');
    var userRemember = document.getElementById("rememberMe");

    if(userName.value == storedName && userPw.value == storedPw){
        // alert('You are logged in.');
        
        loginMessageElement.innerHTML = "<p style='color:green;'>Login Successful ✔ </p>"
        loginValue = true
    }else{
        // alert('Error on login');
        loginMessageElement.innerHTML = "<p style='color:red;' >Error : Invalid username or password 🗴 </p>"
        loginValue = false
    }
    // console.log(loginValue)
    button(loginValue)

}



const authButton = document.getElementById('authButton');

function button(loginValue){

    if(loginValue){
        authButton.style.display = "block";
        authButton.addEventListener("click",function(event){
            event.preventDefault();
            window.location.href = "../html/option.html"
        })
    }

}

