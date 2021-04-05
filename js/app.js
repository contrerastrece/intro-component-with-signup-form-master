const $form=document.getElementById("form");
const emailRegex =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


// $form.name.focus();

$form.addEventListener("submit",e=>{
  console.clear();
  e.preventDefault();
  for(let i=0;i<4;i++){   
        $form[i].parentNode.classList.remove("error")
        $form[i].classList.remove("success");  
      if(String($form[i].value).trim()==="" ){        
        $form[i].classList.add("error");
        $form[i].parentNode.classList.add("error");        
      }else{  
        $form[i].classList.remove("error");      
        $form[i].classList.add("success");      
        $form[i].parentNode.classList.remove("error")
      }
      if(emailRegex.test($form.email.value)){
        $form.email.classList.add("success");
        $form.email.parentNode.classList.remove("error")
      }else{
        $form.email.classList.remove("success");
        $form.email.classList.add("error");
        $form.email.parentNode.classList.add("error")
      }
      console.log($form[i].value,emailRegex.test($form[i].value))
      console.log($form.email.isConnected,"Is connected?")
  }
})