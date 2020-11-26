let user=document.getElementById("user");
    let pass = document.getElementById("pass");

   function validation(){
     meassage();
     if(user.value=="admin"&&pass.value=="12345"){
       return true;
     }else{
      return false;
      
     }
   }
   function meassage(){
    if(user.value==""|| pass.value==""){
      alert("invalid")
       return false;
    }
     else if(user.value!="admin"|| pass.value!="12345"){
       alert("invalid")
     }
     
     else{
       return true;

     
   }}
