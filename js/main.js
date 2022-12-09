//select elements
var nameInput = document.getElementById("nameInput");
var emailInput = document.getElementById("emailInput");
var passInput = document.getElementById("passInput");
var emptyAlert = document.getElementById("alertForEmpty");
var existAlert = document.getElementById("alertForExistance");
var successSignUpAlert = document.getElementById("done")
var signUpBtn = document.getElementById("signUp");
var signInLink = document.getElementById("signIn");
var emptyInputAlert = document.getElementById("emptyInputAlert");
var checkLogInAlert = document.getElementById("checkInputAlert")
var logInBtn = document.getElementById("logIn");
var signUpLink = document.getElementById("signUp");
var homePageLink = document.getElementById("homePageLink");
var userName = document.getElementById("userName");
var logOutLink = document.getElementById("logOut")
var logOutBtn = document.getElementById("logOutBtn");
var getName;
if(localStorage.getItem("userInfo")==null){
    var signArr = []
}
else{
    var signArr = JSON.parse(localStorage.getItem("userInfo"))
}
// display user name
if(userName){
    getName = JSON.parse(localStorage.getItem("nameOfUser"))
    if(getName){
     
        userName.innerHTML = `welcome ${getName}`
        
    }}
//check if the inputs empty or not
function checkEmptySignUpInputs(){
    if(nameInput.value == "" | emailInput.value == "" | passInput.value == ""){
        return true 
    }
    
}
// check if the account exist or not
function isAccountExist(){
    for (var i= 0 ; i<signArr.length ; i++){
        if(signArr[i].email.toLowerCase() == emailInput.value.toLowerCase()){
            return true
        }
       
        }
    
            }

//clear inputs
function clear(){
    nameInput.value=="";
    emailInput.value = "";
    passInput.value = ""
}

// sign up function
function signUp(){
    if(checkEmptySignUpInputs()== true){
    emptyAlert.classList.remove("d-none");
    successSignUpAlert.classList.add("d-none");
    existAlert.classList.add("d-none")
    }
    else if(isAccountExist()==true ){
        existAlert.classList.remove("d-none");
        emptyAlert.classList.add("d-none");
        successSignUpAlert.classList.add("d-none")
    }
    else  {
        var regsInfo = {
            name : nameInput.value,
            email: emailInput.value,
            password: passInput.value
        }
        
        signArr.push(regsInfo)
        localStorage.setItem("userInfo"  , JSON.stringify(signArr));
        
        console.log(signArr);
        successSignUpAlert.classList.remove("d-none");
        emptyAlert.classList.add("d-none");
        existAlert.classList.add("d-none")
        clear()
    }
}
if(signUpBtn){
    signUpBtn.addEventListener("click" , signUp)
}
function backToLogInPage(){
    signInLink.setAttribute("href", "index.html")
}
if(signInLink){
    signInLink.addEventListener("click" , backToLogInPage)
}
//check if log in inputs empty or not
function checkEmptyLogInInputs(){
    if(emailInput.value == "" | passInput.value == ""){
        return  true
    }
//    else{
//        return  false
//    }
}
//check log in
function checkLogIn(){
    for(var i = 0 ; i < signArr.length ; i++){
        if(signArr[i].email.toLowerCase() == emailInput.value.toLowerCase()
         && signArr[i].password.toLowerCase() == passInput.value.toLowerCase()){
        
            localStorage.setItem("nameOfUser" , JSON.stringify(signArr[i].name));
           
            return true

            }
            //ياباشمهندس هو لية لما بعمل else return false
            //وبعدين فى log in function 
            //لما بعمل 
            //else if(checkLogIn()==false)
            //لو دخلت ايميل صحيح مش بيعمل لوج اين
        //   else{
        //       return false
        //   }
       
        }
}
//log in function
function logIn(){
  if(checkEmptyLogInInputs()== true){
      emptyInputAlert.classList.remove("d-none");
      checkLogInAlert.classList.add("d-none");
      //emptyInputAlert.classList.add("d-none");
  }
 
 else  if(checkLogIn()!== true) {
    checkLogInAlert.classList.remove("d-none");
    //checkLogInAlert.classList.add("d-none");
      emptyInputAlert.classList.add("d-none");
  }
  else  {
    homePageLink.setAttribute("href" , "home page.html");
    checkLogInAlert.classList.add("d-none");
 }
}
if(logInBtn){
    logInBtn.addEventListener("click" , logIn)
}
function backToSignUpPage(){
    signUpLink.setAttribute("href" , "sign up.html")
}
if(signUpLink){
    signUpLink.addEventListener("click" , backToSignUpPage)
    
}
//log out
function logOut(){
logOutLink.setAttribute("href" , "index.html");
localStorage.removeItem("nameOfUser");
}
if(logOutBtn){
    logOutBtn.addEventListener("click" , logOut)
}
