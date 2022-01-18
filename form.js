  
   


    

    
     
       function validate(){
            let regexp=/^([0-9+]{10})$/;
            if(regexp.test(phoneno.value)){
            error.innerHTML = "Valid";
             error.style.color = "green";
       //    // alert("valid")
             return true;
   
        }
         else {
              error.innerHTML = "Invalid :Username must contain 10 digits";
             alert("Invalid :Username must contain 10 digits");
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

    