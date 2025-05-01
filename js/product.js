// js/product.js

const products = [
    {
      id: 1,
      title: "Wireless Headphones",
      price: 899,
      image: "images/headphones.png"
    },
    {
      id: 2,
      title: "Stylish Sneakers",
      price: 1299,
      image: "images/sneakers.png"
    },
    {
      id: 3,
      title: "Smartphone Case",
      price: 199,
      image: "images/smartphone.png"
    },
    {
      id: 4,
      title: "SmartPhone",
      price: 3999,
      image: "images/phones.png"
    },
    {
      id: 5,
      title: "Ps5 Controller",
      price: 2999,
      image: "images/console.png"
    },
    {
      id: 6,
      title: "Nintedo Switch",
      price: 3999,
      image: "images/nintendo.png"
    },
    {
      id: 7,
      title: "Fisherman Sweater",
      price: 599,
      image: "images/clothes.png"
    },
    {
      id: 8,
      title: "Red Lipstick",
      price: 599,
      image: "images/redlips.png",
    },
    {
      id: 9,
      title: "Pink Bag",
      price: 799,
      image: "images/bag.png",
    }
  ];
  
  function getProductById(id) {
    return products.find(product => product.id === id);
  }
  
  function loadProduct() {
    const params = new URLSearchParams(window.location.search);
    const productId = parseInt(params.get("id"));
  
    const product = getProductById(productId);
    if (!product) return;
  
    document.getElementById("product-title").textContent = product.title;
    document.getElementById("product-price").textContent = `₱${product.price}`;
    document.getElementById("product-image").src = product.image;
  
    // Optional: store product in localStorage for later use
    localStorage.setItem("currentProduct", JSON.stringify(product));
  }
  
  function addToCart() {
  const product = JSON.parse(localStorage.getItem("currentProduct"));

  const size = document.getElementById("size").value;
  const color = document.getElementById("color").value;
  const quantity = parseInt(document.getElementById("quantity").value);

  if (!product || isNaN(product.price)) {
    alert("Product info is missing. Try again.");
    return;
  }

  const item = {
    title: product.title,
    price: product.price,
    image: product.image,
    size,
    color,
    quantity,
    total: product.price * quantity
  };

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(item);
  localStorage.setItem("cart", JSON.stringify(cart));

  alert("Added to cart!");
}

  