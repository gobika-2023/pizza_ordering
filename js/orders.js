let orders=JSON.parse(localStorage.getItem("orders"))||[]

let container=document.getElementById("ordersList")

orders.forEach(order=>{

let div=document.createElement("div")

div.className="card"

div.innerHTML=`
<h3>Order ID: ${order.id}</h3>
<p>${order.items.length} pizzas</p>
`

container.appendChild(div)

})