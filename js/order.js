function loadOrderDetails() {
    document.getElementById("ordered-items").innerHTML = localStorage.getItem("orderedItems");
    document.getElementById("ordered-total").innerText = localStorage.getItem("orderedTotal");
    document.getElementById("order-date").innerText = localStorage.getItem("orderDate");

    // Optional: Disable any inputs or delete buttons from original cart
    const container = document.getElementById("ordered-items");
    const inputs = container.querySelectorAll("input, button");
    inputs.forEach(input => input.disabled = true);
  }