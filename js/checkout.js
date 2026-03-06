let cart = JSON.parse(localStorage.getItem("cart")) || []

let container = document.getElementById("checkoutItems")
let total = 0

cart.forEach(item => {

let div = document.createElement("div")

div.innerHTML = `
<p>${item.name} (${item.size}) - Rs. ${item.price}</p>
`

container.appendChild(div)

total += item.price

})

document.getElementById("checkoutTotal").innerText = "Total: Rs. " + total


/* PAYMENT SELECTION */

let paymentRadios = document.querySelectorAll('input[name="payment"]')

paymentRadios.forEach(radio => {

radio.addEventListener("change", () => {

document.getElementById("upiBox").style.display = "none"
document.getElementById("cardBox").style.display = "none"

if(radio.value === "upi"){
document.getElementById("upiBox").style.display = "block"
}

if(radio.value === "card"){
document.getElementById("cardBox").style.display = "block"
}

})

})


/* PLACE ORDER */

function placeOrder(){

if(cart.length === 0){
alert("Cart is empty!")
return
}

alert("🎉 Order placed successfully!")

localStorage.removeItem("cart")

window.location.href = "order-success.html"

}