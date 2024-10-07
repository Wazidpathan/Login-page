var btn = document.getElementById("loginBtn");
var content = document.getElementById("content")

btn.addEventListener("click", function(){
   if(content.style.opacity == 0){
      content.style.opacity = 1;
   }
   else{
      content.style.opacity = 0;
   }
})