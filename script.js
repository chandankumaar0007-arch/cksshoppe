const products = [
  { id: 1, name: "Windows 11 Pro", cat: "Windows", price: 699, oldPrice: 1999, icon: "🪟" },
  { id: 2, name: "Windows 10 Pro", cat: "Windows", price: 499, oldPrice: 1499, icon: "🪟" },
  { id: 3, name: "MS Office 2021 Pro Plus", cat: "Office", price: 999, oldPrice: 3499, icon: "📄" },
  { id: 4, name: "MS Office 365 (1 Year)", cat: "Office", price: 1299, oldPrice: 4199, icon: "📄" },
  { id: 5, name: "Quick Heal Total Security", cat: "Antivirus", price: 549, oldPrice: 1599, icon: "🛡️" },
  { id: 6, name: "Guardian Total Security", cat: "Antivirus", price: 399, oldPrice: 1099, icon: "🛡️" },
  { id: 7, name: "Internet Download Manager", cat: "Tools", price: 799, oldPrice: 1999, icon: "🧰" },
  { id: 8, name: "Windows Server 2022", cat: "Windows", price: 1999, oldPrice: 5999, icon: "🪟" }
];

let cart = [];

function renderProducts(items) {
  const grid = document.getElementById("productGrid");
  if (!grid) return;
  grid.innerHTML = items.map(p => `
    <div class="product">
      <div class="icon">${p.icon}</div>
      <h3>${p.name}</h3>
      <div class="muted">${p.cat}</div>
      <div class="price">₹${p.price} <span class="old">₹${p.oldPrice}</span></div>
      <button onclick="addToCart(${p.id})">Add to Cart</button>
    </div>
  `).join("");
}

function filterCat(cat) {
  if (cat === "All") {
    renderProducts(products);
  } else {
    const filtered = products.filter(p => p.cat.toLowerCase() === cat.toLowerCase());
    renderProducts(filtered);
  }
}

function searchProducts() {
  const query = document.getElementById("search").value.toLowerCase();
  const filtered = products.filter(p => p.name.toLowerCase().includes(query) || p.cat.toLowerCase().includes(query));
  renderProducts(filtered);
}

function addToCart(id) {
  const item = products.find(p => p.id === id);
  if (item) {
    cart.push(item);
    updateCart();
  }
}

function updateCart() {
  document.getElementById("cartCount").innerText = cart.length;
  const cartItems = document.getElementById("cartItems");
  const total = document.getElementById("total");
  
  if (cartItems) {
    cartItems.innerHTML = cart.map((item, index) => `
      <div class="cartrow">
        <span>${item.name}</span>
        <span>₹${item.price} <b style="cursor:pointer;color:red;margin-left:8px;" onclick="removeFromCart(${index})">✕</b></span>
      </div>
    `).join("");
  }
  
  if (total) {
    const sum = cart.reduce((acc, curr) => acc + curr.price, 0);
    total.innerText = sum;
  }
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

function openCart() {
  document.getElementById("cartModal").style.display = "flex";
}

function closeCart() {
  document.getElementById("cartModal").style.display = "none";
}

// WhatsApp Direct Checkout Function
function checkout() {
  if (cart.length === 0) {
    alert("Aapka cart khaali hai!");
    return;
  }

  const phone = "916200864464";
  const totalAmount = cart.reduce((sum, item) => sum + item.price, 0);
  
  let productList = cart.map((item, i) => `${i + 1}. ${item.name} - ₹${item.price}`).join("%0A");
  
  let msg = `*🛒 New Order - CKS Shoppe*%0A%0A` +
            `*Items:*%0A${productList}%0A%0A` +
            `*Total Amount:* ₹${totalAmount}%0A%0A` +
            `Mujhe yeh software khareedna hai. Kripya payment link ya UPI QR code bhejein.`;

  window.open(`https://wa.me/${phone}?text=${msg}`, "_blank");
}

document.addEventListener("DOMContentLoaded", () => {
  renderProducts(products);
});
