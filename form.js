 let email=document.getElementById("email");
 let error=document.getElementById("error");
 let phoneno=document.getElementById("phoneno");
let password = document.getElementById("password");
   
// if((email.trim()=="") && (password.trim()=="")){
//   alert("Feilds cannot be blank");
//   return false;
// }

    

    
     
       function validate(){
            let regexp=/^([0-9+]{10})$/;
            if(regexp.test(phoneno.value)){
            error.innerHTML = "Valid";
             error.style.color = "green";
       //    // alert("valid")
             return true;
             
        }
         else {
              error.innerHTML = "Invalid :Phone No should be in the format XXXXXXXXXX";
             alert("Invalid :Phone No should be in the format XXXXXXXXXX");
            error.style.color = "red";
            return false;
         }
        
        }

       
        
         
    
        
    function valid(){
      let password = document.getElementById("password");
         let RegExp=/^([A-Za-z0-9])$/;
           if(RegExp.test(password.value)){};
          if(password.value.length<8){
          error.innerHTML = "Password is too weak";
          error.style.color = "red";
         alert("Password is too weak");
         password.style.border = "2px solid red";
         return false;
     }
      if(password.value.length<=8){
        alert("Password is medium");
        error.innerHTML = "Password is medium";
        error.style.color = "orange";
        password.style.border = "2px solid orange";
         return false;
     }
    else if(password.value.length>8){
       
        alert("Password is strong");
        error.innerHTML = "Password is stroong";
        error.style.color = "green";
        password.style.border = "2px solid green";
        return true;
     }
    
       }
       function validation(){
           let eregexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
           if(eregexp.test(email.value)){
               
               error.innerHTML = "Valid";
               error.style.color = "green";
               return true;
           }
           else{
             alert("Email should be eg@gmail.xxx format.");
               error.innerHTML = "Invalid";
               error.style.color = "red";
               error.style.border = "2px soild red";
               return false;
           }
       }
 function submitter(){
   if (!validate())return false;
   if (!valid())return false;
   if (!validation())return false;
   return true;
 }
    