function loadComponent(id,file){

fetch(file)
.then(res => {

if(!res.ok){
throw new Error("Component not found: "+file)
}

return res.text()

})
.then(data=>{

let element=document.getElementById(id)

if(element){
element.innerHTML=data
}

updateCart()
logoutSystem()

})
.catch(err=>{
console.error(err)
})

}

document.addEventListener("DOMContentLoaded",()=>{

loadComponent("navbar","components/navbar.html")

})

function updateCart(){

let cart=JSON.parse(localStorage.getItem("cart"))||[]

let badge=document.getElementById("cartCount")

if(badge){
badge.innerText=cart.length
}

}

function logoutSystem(){

let btn=document.getElementById("logoutBtn")

if(btn){

btn.onclick=function(){

localStorage.removeItem("user")

alert("Logged out")

location="index.html"

}

}

}