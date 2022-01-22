let email=document.getElementById("email");
let error=document.getElementById("error");
let phoneno=document.getElementById("phoneno");
    let password=document.getElementById("password");
   


    

    
     
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

       
        
         
    
     
    function valid() {
        let RegExp=/^([A-Za-z+0-9?])$/;
         if(RegExp.test(password.value)){}
          if(password.value.length<8){
          
         alert("Password is too weak");
         password.style.border = "2px solid red";
         return false;
     }
      if(password.value.length<=8){
        alert("Password is medium");
        password.style.border = "2px solid orange";
         return false;
     }
    else if(password.value.length>8){
       
        alert("Password is strong");
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
             alert("Email should be in the correct format.");
               error.innerHTML = "Invalid";
               error.style.color = "red";
               error.style.border = "2px soild red";
               return false;
           }
       }

    