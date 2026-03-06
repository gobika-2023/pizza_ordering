function loadComponent(id,file){
fetch(file)
.then(res=>res.text())
.then(data=>{
document.getElementById(id).innerHTML=data
updateCart()
logoutSystem()
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