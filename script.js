const WHATSAPP_NUMBER = "916200864464"; 
const SELLER_NAME = "Chandan Kumar"; 

const products = [
  // ================= MACBOOK & macOS SOFTWARES (NEW) =================
  { 
    id: 201, 
    name: "Microsoft Office 2021 Home & Business (For Mac)", 
    price: 2699, 
    category: "Mac Software", 
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&auto=format&fit=crop&q=60" 
  },
  { 
    id: 202, 
    name: "Microsoft Office 2019 Home & Business (For Mac)", 
    price: 2399, 
    category: "Mac Software", 
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&auto=format&fit=crop&q=60" 
  },
  { 
    id: 203, 
    name: "CleanMyMac X (Lifetime License for macOS)", 
    price: 1499, 
    category: "Mac Software", 
    image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=400&auto=format&fit=crop&q=60" 
  },
  { 
    id: 204, 
    name: "Parallels Desktop Pro (Run Windows on Mac)", 
    price: 1899, 
    category: "Mac Software", 
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&auto=format&fit=crop&q=60" 
  },
  { 
    id: 205, 
    name: "Final Cut Pro (Apple Mac Video Editing)", 
    price: 1999, 
    category: "Mac Software", 
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&auto=format&fit=crop&q=60" 
  },
  { 
    id: 206, 
    name: "Logic Pro (Mac Music & Audio Production)", 
    price: 1999, 
    category: "Mac Software", 
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400&auto=format&fit=crop&q=60" 
  },
  { 
    id: 207, 
    name: "Kaspersky Standard Security (For Mac / 1 Year)", 
    price: 499, 
    category: "Mac Software", 
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&auto=format&fit=crop&q=60" 
  },
  { 
    id: 208, 
    name: "Quick Heal Total Security (For Mac / 1 Year)", 
    price: 999, 
    category: "Mac Software", 
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&auto=format&fit=crop&q=60" 
  },

  // ================= PROFESSIONAL DESIGN TOOLS =================
  { id: 101, name: "AutoCAD (Windows / Mac)", price: 1499, category: "Design Software", image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&auto=format&fit=crop&q=60" },
  { id: 102, name: "Revit", price: 1499, category: "Design Software", image: "https://images.unsplash.com/photo-1541888946425-d0fbb180c5f7?w=400&auto=format&fit=crop&q=60" },
  { id: 103, name: "Civil 3D", price: 1499, category: "Design Software", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&auto=format&fit=crop&q=60" },
  { id: 104, name: "Navisworks Manage", price: 1499, category: "Design Software", image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&auto=format&fit=crop&q=60" },
  { id: 105, name: "3ds Max", price: 1499, category: "Design Software", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&auto=format&fit=crop&q=60" },
  { id: 106, name: "Recap Pro", price: 1499, category: "Design Software", image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&auto=format&fit=crop&q=60" },
  { id: 107, name: "Forma", price: 1499, category: "Design Software", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&auto=format&fit=crop&q=60" },
  { id: 108, name: "Infraworks", price: 1499, category: "Design Software", image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&auto=format&fit=crop&q=60" },

  // ================= WINDOWS & ANTIVIRUS =================
  { id: 1, name: "Guardian NetSecure Antivirus (1 User / 1 Year)", price: 380, category: "Antivirus", image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&auto=format&fit=crop&q=60" },
  { id: 2, name: "Guardian Total Security (1 User / 1 Year)", price: 495, category: "Antivirus", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&auto=format&fit=crop&q=60" },
  { id: 3, name: "Quick Heal Total Security (1 User / 1 Year)", price: 999, category: "Antivirus", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&auto=format&fit=crop&q=60" },
  { id: 4, name: "Windows 11 Professional (Retail Key)", price: 999, category: "Windows OS", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&auto=format&fit=crop&q=60" },
  { id: 5, name: "Microsoft Office 2021 Pro Plus (Windows)", price: 1299, category: "MS Office", image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&auto=format&fit=crop&q=60" }
];

function renderProductCatalog() {
  const container = document.getElementById("ck-product-grid");
  if (!container) return;

  container.innerHTML = products.map(item => `
    <div style="background: #1e293b; border: 1px solid #334155; border-radius: 12px; overflow: hidden; display: flex; flex-direction: column; justify-content: space-between; box-shadow: 0 4px 6px rgba(0,0,0,0.3);">
      <div style="width: 100%; height: 160px; background: #0f172a; overflow: hidden;">
        <img src="${item.image}" alt="${item.name}" style="width: 100%; height: 100%; object-fit: cover; opacity: 0.9;">
      </div>
      <div style="padding: 16px; display: flex; flex-direction: column; flex-grow: 1; justify-content: space-between;">
        <div>
          <span style="background: #0369a1; color: #e0f2fe; font-size: 11px; font-weight: 700; padding: 3px 8px; border-radius: 12px; display: inline-block; margin-bottom: 8px;">${item.category}</span>
          <h3 style="font-size: 15px; color: #f8fafc; margin: 0 0 10px 0; font-weight: 600; line-height: 1.4; min-height: 42px;">${item.name}</h3>
        </div>
        <div>
          <div style="margin: 10px 0;">
            <span style="color: #94a3b8; font-size: 13px; text-decoration: line-through;">M.R.P: ₹${item.price + 1000}</span>
            <div style="font-size: 22px; font-weight: 800; color: #38bdf8; margin-top: 2px;">₹${item.price}</div>
          </div>
          <button onclick="orderProduct('${item.name.replace(/'/g, "\\'")}', ${item.price})" style="background: #25D366; color: white; border: none; width: 100%; padding: 10px; font-size: 14px; font-weight: 700; border-radius: 8px; cursor: pointer;">
            Order from Chandan
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

function orderProduct(productName, price) {
  const text = `Hello ${SELLER_NAME},\n\nI want to buy:\nProduct: *${productName}*\nPrice: *₹${price}*\n\nPlease share payment details and Mac installation setup.`;
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank");
}

document.addEventListener("DOMContentLoaded", renderProductCatalog);
