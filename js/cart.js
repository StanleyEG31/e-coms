function loadCart() {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartItemsContainer = document.getElementById('cart-items');
  const cartTotalEl = document.getElementById('cart-total');

  cartItemsContainer.innerHTML = '';
  let total = 0;

  cart.forEach((item, index) => {
    const itemEl = document.createElement('div');
    itemEl.className = 'cart-item';
    itemEl.innerHTML = `
      <p><strong>${item.title}</strong></p>
      <p>Price: ₱${item.price}</p>
      <p>Size: ${item.size} | Color: ${item.color}</p>
      <p>Quantity: ${item.quantity}</p>
      <p>Total: ₱${item.total}</p>
      <button onclick="removeItem(${index})">Remove</button>
      <hr>
    `;
    cartItemsContainer.appendChild(itemEl);
    total += item.total;
  });

  cartTotalEl.textContent = total.toFixed(2);
}

function removeItem(index) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  loadCart(); // Refresh the cart
}

function placeOrder() {
  const cartItems = document.getElementById("cart-items").innerHTML;
  const total = document.getElementById("cart-total").innerText;
  const orderDate = new Date().toLocaleString(); // format: "MM/DD/YYYY, HH:MM:SS"

  // Save order data
  localStorage.setItem("orderedItems", cartItems);
  localStorage.setItem("orderedTotal", total);
  localStorage.setItem("orderDate", orderDate);

  // Optional: Clear the cart
  localStorage.removeItem("cart"); // if you saved cart here
  document.getElementById("cart-items").innerHTML = "";
  document.getElementById("cart-total").innerText = "0";

  // Redirect
  window.location.href = "order.html";
}
