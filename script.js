

window.document.body.addEventListener("click",event =>{

   const item = event.target
   if(item.classList.contains("nav-link")){
      const active = document.querySelector(".active")
      active.classList.remove("active")
   }
   item.classList.add("active")
})
