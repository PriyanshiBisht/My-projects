let eyeicon=document.getElementById("eyeicon");
let Password=document.getElementById("Password");
eyeicon.onclick=function(){
  if(Password.type=="password"){
Password.type="text";
eyeicon.src="eye-open.png";
  }else{
    Password.type="password";
    eyeicon.src="eye-close.png";
  }
}