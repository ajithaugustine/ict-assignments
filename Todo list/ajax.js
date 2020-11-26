function ajax(){
    var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
        if(this.readyState==4&&this.status==200){
            var response=JSON.parse(this.responseText);
            var output="";
            for(var i=0;i<response.length/10;i++){
                output+= "<input type=checkbox onclick=checkfn()>  "+response[i].title+"  </input><br>";
            }
            document.getElementById("list").innerHTML=output;
        }
    }
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    xhttp.send();
}


function checkfn() {
    
    let check = document.getElementsByTagName("input");
    let count =  0;
    let mark = new Promise(function(Resolve, Reject) {
  
    for (var i = 0; i < check.length; i++) {
      
        if (check[i].checked) {
            count++;
            if(count ===5){
                alert(" Congrats 5 Tasks have been successfully completed.");
                 Resolve("Successfully completed  tasks");
                
            }
            else {
                Reject("Error");
           }
        }
       
    }
   });
  }