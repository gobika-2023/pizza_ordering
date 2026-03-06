let pizzas = []

fetch("data/pizzas.json")
.then(res => res.json())
.then(data => {

pizzas = data
displayPizzas(pizzas)

})

function displayPizzas(list){

let container = document.getElementById("pizzaContainer")

if(!container) return

container.innerHTML = ""

list.forEach(p => {

let card = document.createElement("div")
card.className = "pizza-card"

card.innerHTML = `

<img src="${p.image}" alt="${p.name}">

<div class="pizza-info">

<h3>${p.name}</h3>

<p>${p.description}</p>

<b>Rs. ${p.price}</b>

<div class="size-select">

<select id="size-${p.id}">
<option value="small">Small</option>
<option value="medium">Medium</option>
<option value="large">Large</option>
</select>

</div>

<button class="add-btn" onclick="addToCart(${p.id})">
Add To Cart 🍕
</button>

</div>
`

container.appendChild(card)

})

}

function addToCart(id){

let cart = JSON.parse(localStorage.getItem("cart")) || []

let pizza = pizzas.find(p => p.id === id)

let size = document.getElementById(`size-${id}`).value

let price = pizza.price

if(size === "medium") price += 80
if(size === "large") price += 150

let item = {
name:pizza.name,
price:price,
size:size,
image:pizza.image
}

cart.push(item)

localStorage.setItem("cart",JSON.stringify(cart))

alert("Pizza Added To Cart 🍕")

}