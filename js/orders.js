let orders = JSON.parse(localStorage.getItem("orders")) || [];

let container = document.getElementById("ordersList");

if(orders.length === 0){
container.innerHTML = "<h3 style='color:white'>No orders yet</h3>";
}

orders.forEach(order => {

let div = document.createElement("div");

div.style.background = "#132a45";
div.style.padding = "20px";
div.style.marginBottom = "20px";
div.style.borderRadius = "10px";

let html = `
<h3>Order ID: ${order.id}</h3>
<p>Date: ${order.date}</p>
<p><b>${order.items.length} pizzas</b></p>
<hr>
`;

order.items.forEach(item => {

html += `
<p>${item.name} - ${item.size} - ₹${item.price}</p>
`;

});

div.innerHTML = html;

container.appendChild(div);

});