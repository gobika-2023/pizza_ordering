let cart = JSON.parse(localStorage.getItem("cart")) || []

let container = document.getElementById("cartItems")

let total = 0

container.innerHTML = ""

if(cart.length === 0){

container.innerHTML = "<h3>Your cart is empty</h3>"

}

cart.forEach(item => {

let card = document.createElement("div")

card.className = "cart-item"

card.innerHTML = `

<img src="${item.image}" width="120">

<div>

<h3>${item.name}</h3>

<p>Size : ${item.size}</p>

<b>Rs. ${item.price}</b>

</div>
`

container.appendChild(card)

total += item.price

})

document.getElementById("cartTotal").innerText = "Total : Rs. " + total