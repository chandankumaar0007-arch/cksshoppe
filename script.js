const WHATSAPP_NUMBER = "916200864464"; 
const SELLER_NAME = "Chandan Kumar"; 

const products = [
  // ================= 📊 TALLY PRIME PLANS =================
  { id: 991, name: "Tally Prime 7.0 (Single User / 1 Year License)", price: 5699, category: "Business Software", image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&auto=format&fit=crop&q=60" },
  { id: 992, name: "Tally Prime 7.0 Silver (Single User / Lifetime License)", price: 16000, category: "Business Software", image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&auto=format&fit=crop&q=60" },
  { id: 993, name: "Tally Prime Gold (Multi User / 5 Users / 1 Year)", price: 9500, category: "Business Software", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&auto=format&fit=crop&q=60" },
  { id: 994, name: "Tally Prime Gold (Multi User / 5 Users / Lifetime)", price: 29000, category: "Business Software", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&auto=format&fit=crop&q=60" },

  // ================= 📺 OTT PLATFORMS & ENTERTAINMENT =================
  { id: 600, name: "Discovery plus 4k / Premium", price: 169, category: "OTT & Entertainment", image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=400&auto=format&fit=crop&q=60" },
  { id: 601, name: "Disney+ Hotstar Super / Premium", price: 149, category: "OTT & Entertainment", image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=400&auto=format&fit=crop&q=60" },
  { id: 602, name: "Disney+ Hotstar 4K Ultra HD", price: 249, category: "OTT & Entertainment", image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=400&auto=format&fit=crop&q=60" },
  { id: 603, name: "Sony LIV Premium Subscription", price: 149, category: "OTT & Entertainment", image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=400&auto=format&fit=crop&q=60" },
  { id: 604, name: "ZEE5 Premium All Access", price: 119, category: "OTT & Entertainment", image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=400&auto=format&fit=crop&q=60" },
  { id: 605, name: "Amazon Prime Video Subscription", price: 179, category: "OTT & Entertainment", image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=400&auto=format&fit=crop&q=60" },
  { id: 606, name: "Netflix UHD 4K", price: 199, category: "OTT & Entertainment", image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=400&auto=format&fit=crop&q=60" },
  { id: 607, name: "HOICHOI Premium Subscription", price: 149, category: "OTT & Entertainment", image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=400&auto=format&fit=crop&q=60" },
  { id: 608, name: "YouTube Premium (Ad-Free & Background Play)", price: 149, category: "OTT & Entertainment", image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&auto=format&fit=crop&q=60" },
  { id: 609, name: "Aha Gold Premium", price: 169, category: "OTT & Entertainment", image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=400&auto=format&fit=crop&q=60" },
  { id: 610, name: "Sun NXT Premium Subscription", price: 129, category: "OTT & Entertainment", image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=400&auto=format&fit=crop&q=60" },
  { id: 611, name: "ETV Win Premium", price: 119, category: "OTT & Entertainment", image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=400&auto=format&fit=crop&q=60" },
  { id: 612, name: "Apple TV+ Subscription", price: 199, category: "OTT & Entertainment", image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&auto=format&fit=crop&q=60" },

  // ================= 🤖 AI & PRODUCTIVITY =================
  { id: 701, name: "ChatGPT Plus (GPT-4o Access)", price: 699, category: "AI & Productivity", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&auto=format&fit=crop&q=60" },
  { id: 702, name: "Google Gemini Advanced", price: 1099, category: "AI & Productivity", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&auto=format&fit=crop&q=60" },
  { id: 703, name: "Lovable AI Subscription", price: 999, category: "AI & Productivity", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&auto=format&fit=crop&q=60" },
  { id: 704, name: "Canva Pro / Premium (Lifetime/1 Year)", price: 799, category: "AI & Productivity", image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&auto=format&fit=crop&q=60" },
  { id: 705, name: "Adobe Creative Cloud (All Apps)", price: 1999, category: "AI & Productivity", image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&auto=format&fit=crop&q=60" },

  // ================= 🎵 MUSIC PREMIUM =================
  { id: 801, name: "Spotify Premium Individual", price: 99, category: "Music Premium", image: "https://images.unsplash.com/photo-1614680376593-902f749f7ffc?w=400&auto=format&fit=crop&q=60" },
  { id: 802, name: "YouTube Music Premium", price: 99, category: "Music Premium", image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&auto=format&fit=crop&q=60" },
  { id: 803, name: "JioSaavn Pro Premium", price: 99, category: "Music Premium", image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&auto=format&fit=crop&q=60" },
  { id: 804, name: "Apple Music Individual Subscription", price: 119, category: "Music Premium", image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&auto=format&fit=crop&q=60" },

  // ================= 🎓 LEARNING PLATFORMS =================
  { id: 901, name: "Coursera Plus Subscription", price: 699, category: "Learning Platforms", image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=400&auto=format&fit=crop&q=60" },
  { id: 902, name: "edX Courses Verified Access", price: 599, category: "Learning Platforms", image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=400&auto=format&fit=crop&q=60" },

  // ================= 📈 SOCIAL MEDIA SERVICES =================
  { id: 951, name: "Instagram Followers Package (Real Active)", price: 399, category: "Social Media Services", image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=400&auto=format&fit=crop&q=60" },
  { id: 952, name: "Instagram Likes & Views Boost", price: 99, category: "Social Media Services", image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=400&auto=format&fit=crop&q=60" },

  // ================= 3D DESIGN TOOLS FOR MAC =================
  { id: 211, name: "AutoCAD (For Mac)", price: 2899, category: "Mac Software", image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&auto=format&fit=crop&q=60" },
  { id: 212, name: "Revit (For Mac / Parallels Supported)", price: 2899, category: "Mac Software", image: "https://images.unsplash.com/photo-1541888946425-d0fbb180c5f7?w=400&auto=format&fit=crop&q=60" },
  { id: 213, name: "Civil 3D (For Mac / Parallels Supported)", price: 2899, category: "Mac Software", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&auto=format&fit=crop&q=60" },
  { id: 214, name: "Navisworks Manage (For Mac Setup)", price: 3599, category: "Mac Software", image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&auto=format&fit=crop&q=60" },
  { id: 215, name: "3ds Max (For Mac Setup)", price: 4599, category: "Mac Software", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&auto=format&fit=crop&q=60" },
  { id: 216, name: "Recap Pro (For Mac)", price: 2899, category: "Mac Software", image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&auto=format&fit=crop&q=60" },
  { id: 217, name: "Forma (Web / Mac Supported)", price: 2599, category: "Mac Software", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&auto=format&fit=crop&q=60" },
  { id: 218, name: "Infraworks (For Mac)", price: 2099, category: "Mac Software", image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&auto=format&fit=crop&q=60" },

  // ================= MACBOOK & macOS SOFTWARES =================
  { id: 201, name: "Microsoft Office 2021 Home & Business (For Mac)", price: 2699, category: "Mac Software", image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&auto=format&fit=crop&q=60" },
  { id: 202, name: "Microsoft Office 2019 Home & Business (For Mac)", price: 2399, category: "Mac Software", image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&auto=format&fit=crop&q=60" },
  { id: 203, name: "CleanMyMac X (Lifetime License for macOS)", price: 1499, category: "Mac Software", image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=400&auto=format&fit=crop&q=60" },
  { id: 204, name: "Parallels Desktop Pro (Run Windows on Mac)", price: 2099, category: "Mac Software", image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&auto=format&fit=crop&q=60" },
  { id: 205, name: "Final Cut Pro (Apple Mac Video Editing)", price: 2599, category: "Mac Software", image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&auto=format&fit=crop&q=60" },
  { id: 206, name: "Logic Pro (Mac Music & Audio Production)", price: 1999, category: "Mac Software", image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400&auto=format&fit=crop&q=60" },
  { id: 207, name: "Kaspersky Standard Security (For Mac / 1 Year)", price: 799, category: "Mac Software", image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&auto=format&fit=crop&q=60" },
  { id: 208, name: "Quick Heal Total Security (For Mac / 1 Year)", price: 1499, category: "Mac Software", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&auto=format&fit=crop&q=60" },

  // ================= GUARDIAN =================
  { id: 1, name: "Guardian NetSecure Antivirus (1 User / 1 Year)", price: 380, category: "Guardian", image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&auto=format&fit=crop&q=60" },
  { id: 2, name: "Guardian NetSecure Antivirus (3 User / 1 Year)", price: 620, category: "Guardian", image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&auto=format&fit=crop&q=60" },
  { id: 3, name: "Guardian NetSecure Antivirus (1 User / 3 Years)", price: 610, category: "Guardian", image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&auto=format&fit=crop&q=60" },
  { id: 4, name: "Guardian Internet Security (1 User / 1 Year)", price: 380, category: "Guardian", image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=400&auto=format&fit=crop&q=60" },
  { id: 5, name: "Guardian Internet Security (3 User / 1 Year)", price: 650, category: "Guardian", image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=400&auto=format&fit=crop&q=60" },
  { id: 6, name: "Guardian Total Security (1 User / 1 Year)", price: 495, category: "Guardian", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&auto=format&fit=crop&q=60" },
  { id: 7, name: "Guardian Total Security (3 User / 1 Year)", price: 1050, category: "Guardian", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&auto=format&fit=crop&q=60" },
  { id: 8, name: "Guardian Total Security (1 User / 3 Years)", price: 999, category: "Guardian", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&auto=format&fit=crop&q=60" },

  // ================= QUICK HEAL =================
  { id: 9, name: "Quick Heal Pro Antivirus (1 User / 1 Year)", price: 549, category: "Quick Heal", image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&auto=format&fit=crop&q=60" },
  { id: 10, name: "Quick Heal Pro Antivirus (2 User / 1 Year)", price: 899, category: "Quick Heal", image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&auto=format&fit=crop&q=60" },
  { id: 11, name: "Quick Heal Pro Antivirus (3 User / 1 Year)", price: 1199, category: "Quick Heal", image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&auto=format&fit=crop&q=60" },
  { id: 12, name: "Quick Heal Pro Antivirus (1 User / 3 Years)", price: 950, category: "Quick Heal", image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&auto=format&fit=crop&q=60" },
  { id: 13, name: "Quick Heal Internet Security (1 User / 1 Year)", price: 650, category: "Quick Heal", image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=400&auto=format&fit=crop&q=60" },
  { id: 14, name: "Quick Heal Internet Security (3 User / 1 Year)", price: 1150, category: "Quick Heal", image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=400&auto=format&fit=crop&q=60" },
  { id: 15, name: "Quick Heal Total Security (1 User / 1 Year)", price: 999, category: "Quick Heal", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&auto=format&fit=crop&q=60" },
  { id: 16, name: "Quick Heal Total Security (2 User / 1 Year)", price: 1780, category: "Quick Heal", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&auto=format&fit=crop&q=60" },
  { id: 17, name: "Quick Heal Total Security (3 User / 1 Year)", price: 2880, category: "Quick Heal", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&auto=format&fit=crop&q=60" },
  { id: 18, name: "Quick Heal Total Security (5 User / 1 Year)", price: 4499, category: "Quick Heal", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&auto=format&fit=crop&q=60" },
  { id: 19, name: "Quick Heal Total Security (10 User / 1 Year)", price: 8999, category: "Quick Heal", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&auto=format&fit=crop&q=60" },
  { id: 20, name: "Quick Heal Total Security (1 User / 3 Years)", price: 1680, category: "Quick Heal", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&auto=format&fit=crop&q=60" },
  { id: 21, name: "Quick Heal Total Security (3 User / 3 Years)", price: 4499, category: "Quick Heal", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&auto=format&fit=crop&q=60" },

  // ================= KASPERSKY =================
  { id: 22, name: "Kaspersky Standard Antivirus (1 Device / 1 Year)", price: 410, category: "Kaspersky", image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&auto=format&fit=crop&q=60" },
  { id: 23, name: "Kaspersky Standard Antivirus (3 Device / 1 Year)", price: 699, category: "Kaspersky", image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&auto=format&fit=crop&q=60" },
  { id: 24, name: "Kaspersky Internet Security (1 User / 1 Year)", price: 459, category: "Kaspersky", image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=400&auto=format&fit=crop&q=60" },
  { id: 25, name: "Kaspersky Internet Security (3 User / 1 Year)", price: 799, category: "Kaspersky", image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=400&auto=format&fit=crop&q=60" },
  { id: 26, name: "Kaspersky Total Security (1 User / 1 Year)", price: 650, category: "Kaspersky", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&auto=format&fit=crop&q=60" },
  { id: 27, name: "Kaspersky Total Security (3 User / 1 Year)", price: 1050, category: "Kaspersky", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&auto=format&fit=crop&q=60" },
  { id: 28, name: "Kaspersky Plus (1 Device / 1 Year)", price: 599, category: "Kaspersky", image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&auto=format&fit=crop&q=60" },
  { id: 29, name: "Kaspersky Premium (1 Device / 1 Year)", price: 750, category: "Kaspersky", image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&auto=format&fit=crop&q=60" },

  // ================= K7 COMPUTING =================
  { id: 30, name: "K7 Antivirus Premium (1 User / 1 Year)", price: 390, category: "K7 Security", image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&auto=format&fit=crop&q=60" },
  { id: 31, name: "K7 Total Security (1 User / 1 Year)", price: 470, category: "K7 Security", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&auto=format&fit=crop&q=60" },
  { id: 32, name: "K7 Total Security (3 User / 1 Year)", price: 780, category: "K7 Security", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&auto=format&fit=crop&q=60" },
  { id: 33, name: "K7 Ultimate Security (1 User / 1 Year)", price: 550, category: "K7 Security", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&auto=format&fit=crop&q=60" },

  // ================= NET PROTECTOR (NPAV) =================
  { id: 34, name: "Net Protector AntiVirus Pro (1 User / 1 Year)", price: 420, category: "Net Protector", image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&auto=format&fit=crop&q=60" },
  { id: 35, name: "Net Protector Total Security (1 User / 1 Year)", price: 580, category: "Net Protector", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&auto=format&fit=crop&q=60" },
  { id: 36, name: "Net Protector Z-Security (1 User / 1 Year)", price: 899, category: "Net Protector", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&auto=format&fit=crop&q=60" },
  { id: 37, name: "Net Protector Total Security (3 User / 1 Year)", price: 1050, category: "Net Protector", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&auto=format&fit=crop&q=60" },

  // ================= BITDEFENDER & MCAFEE & ESET =================
  { id: 38, name: "McAfee Antivirus (1 User / 1 Year)", price: 475, category: "McAfee", image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&auto=format&fit=crop&q=60" },
  { id: 39, name: "McAfee Internet Security (1 User / 1 Year)", price: 520, category: "McAfee", image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=400&auto=format&fit=crop&q=60" },
  { id: 40, name: "McAfee Total Protection (1 User / 1 Year)", price: 620, category: "McAfee", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&auto=format&fit=crop&q=60" },
  { id: 41, name: "McAfee Total Protection (3 User / 1 Year)", price: 950, category: "McAfee", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&auto=format&fit=crop&q=60" },
  { id: 42, name: "Bitdefender Total Security (1 Device / 1 Year)", price: 599, category: "Bitdefender", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&auto=format&fit=crop&q=60" },
  { id: 43, name: "Bitdefender Total Security (5 Devices / 1 Year)", price: 1099, category: "Bitdefender", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&auto=format&fit=crop&q=60" },
  { id: 44, name: "ESET NOD32 Antivirus (1 User / 1 Year)", price: 499, category: "ESET", image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&auto=format&fit=crop&q=60" },
  { id: 45, name: "ESET Internet Security (1 User / 1 Year)", price: 620, category: "ESET", image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=400&auto=format&fit=crop&q=60" },

  // ================= WINDOWS OPERATING SYSTEMS =================
  { id: 46, name: "Microsoft Windows 10 Professional (OEM Key)", price: 699, category: "Windows OS", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&auto=format&fit=crop&q=60" },
  { id: 47, name: "Microsoft Windows 10 Professional (Retail Digital Key)", price: 899, category: "Windows OS", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&auto=format&fit=crop&q=60" },
  { id: 48, name: "Microsoft Windows 10 Home (Digital Key)", price: 650, category: "Windows OS", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&auto=format&fit=crop&q=60" },
  { id: 49, name: "Microsoft Windows 11 Professional (OEM Key)", price: 799, category: "Windows OS", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&auto=format&fit=crop&q=60" },
  { id: 50, name: "Microsoft Windows 11 Professional (Retail Digital Key)", price: 999, category: "Windows OS", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&auto=format&fit=crop&q=60" },
  { id: 51, name: "Microsoft Windows 11 Home (Digital License)", price: 799, category: "Windows OS", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&auto=format&fit=crop&q=60" },

  // ================= MICROSOFT OFFICE SUITES =================
  { id: 52, name: "Microsoft Office 2016 Professional Plus (Lifetime)", price: 899, category: "MS Office", image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&auto=format&fit=crop&q=60" },
  { id: 53, name: "Microsoft Office 2019 Professional Plus (Lifetime)", price: 1099, category: "MS Office", image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&auto=format&fit=crop&q=60" },
  { id: 54, name: "Microsoft Office 2019 Home & Student (Bind Key)", price: 1699, category: "MS Office", image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&auto=format&fit=crop&q=60" },
  { id: 55, name: "Microsoft Office 2019 Home & Business (Mac/PC)", price: 2399, category: "MS Office", image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&auto=format&fit=crop&q=60" },
  { id: 56, name: "Microsoft Office 2021 Professional Plus (Lifetime)", price: 1299, category: "MS Office", image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&auto=format&fit=crop&q=60" },
  { id: 57, name: "Microsoft Office 2021 Home & Business (Mac/PC)", price: 2699, category: "MS Office", image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&auto=format&fit=crop&q=60" },
  { id: 58, name: "Microsoft 365 Personal (1 User / 1 Year Subscription)", price: 3099, category: "MS Office", image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&auto=format&fit=crop&q=60" },
  { id: 59, name: "Microsoft 365 Family (6 Users / 1 Year Subscription)", price: 4099, category: "MS Office", image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&auto=format&fit=crop&q=60" },

  // ================= PROJECT, VISIO & WINDOWS SERVERS =================
  { id: 60, name: "Microsoft Project Professional 2019 Key", price: 1499, category: "MS Office", image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&auto=format&fit=crop&q=60" },
  { id: 61, name: "Microsoft Project Professional 2021 Key", price: 1399, category: "MS Office", image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&auto=format&fit=crop&q=60" },
  { id: 62, name: "Microsoft Visio Professional 2019 Key", price: 1499, category: "MS Office", image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&auto=format&fit=crop&q=60" },
  { id: 63, name: "Microsoft Visio Professional 2021 Key", price: 1399, category: "MS Office", image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&auto=format&fit=crop&q=60" },
  { id: 64, name: "Windows Server 2016 Standard (16 Core)", price: 2599, category: "Windows Server", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&auto=format&fit=crop&q=60" },
  { id: 65, name: "Windows Server 2019 Standard (16 Core)", price: 2599, category: "Windows Server", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&auto=format&fit=crop&q=60" },
  { id: 66, name: "Windows Server 2019 Datacenter", price: 2699, category: "Windows Server", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&auto=format&fit=crop&q=60" },
  { id: 67, name: "Windows Server 2022 Standard (16 Core)", price: 2599, category: "Windows Server", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&auto=format&fit=crop&q=60" },
  { id: 68, name: "Windows Server 2022 Datacenter", price: 3099, category: "Windows Server", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&auto=format&fit=crop&q=60" },
  { id: 69, name: "Windows Server 2022 User CALs (5 CALs)", price: 1999, category: "Windows Server", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&auto=format&fit=crop&q=60" }
];

function renderCatalog(items = products) {
  let grid = document.getElementById("ck-product-grid");
  if (!grid) {
    const container = 
      document.getElementById("products-container") || 
      document.getElementById("product-grid") || 
      document.getElementById("products") ||
      document.body;
      
    grid = document.createElement("div");
    grid.id = "ck-product-grid";
    grid.style.cssText = "display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 24px; padding: 20px 0; max-width: 1250px; margin: 0 auto;";
    container.appendChild(grid);
  }

  if (items.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; color: #94a3b8; padding: 50px 20px; font-size: 16px;">
        🔍 Koi product nahi mila. Dusra naam search karein.
      </div>
    `;
    return;
  }

  grid.innerHTML = items.map(item => `
    <div style="background: #1e293b; border: 1px solid #334155; border-radius: 12px; overflow: hidden; display: flex; flex-direction: column; justify-content: space-between; box-shadow: 0 4px 6px rgba(0,0,0,0.3);">
      <div style="width: 100%; height: 160px; background: #0f172a; overflow: hidden;">
        <img src="${item.image || 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400'}" alt="${item.name}" style="width: 100%; height: 100%; object-fit: cover; opacity: 0.9;">
      </div>
      <div style="padding: 16px; display: flex; flex-direction: column; flex-grow: 1; justify-content: space-between;">
        <div>
          <span style="background: #0369a1; color: #e0f2fe; font-size: 11px; font-weight: 700; padding: 3px 8px; border-radius: 12px; display: inline-block; margin-bottom: 8px;">${item.category}</span>
          <h3 style="font-size: 15px; color: #f8fafc; margin: 0 0 10px 0; font-weight: 600; line-height: 1.4; min-height: 42px;">${item.name}</h3>
        </div>
        <div>
          <div style="margin: 10px 0;">
            <span style="color: #94a3b8; font-size: 13px; text-decoration: line-through;">M.R.P: ₹${Math.round(item.price * 1.35)}</span>
            <div style="font-size: 22px; font-weight: 800; color: #38bdf8; margin-top: 2px;">₹${item.price}</div>
          </div>
          <button onclick="orderProduct('${item.name.replace(/'/g, "\\'")}', ${item.price})" style="background: #25D366; color: white; border: none; width: 100%; padding: 10px; font-size: 14px; font-weight: 700; border-radius: 8px; cursor: pointer; transition: 0.2s;">
            Order from Chandan
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

function handleSearch() {
  const searchInput = document.getElementById("searchInput") || document.querySelector("input[type='text']");
  if (!searchInput) return;

  const query = searchInput.value.trim().toLowerCase();
  
  if (query === "") {
    renderCatalog(products);
    return;
  }

  const searchResults = products.filter(p => 
    p.name.toLowerCase().includes(query) || 
    p.category.toLowerCase().includes(query)
  );

  renderCatalog(searchResults);
}

function orderProduct(productName, price) {
  const text = `Hello ${SELLER_NAME},\n\nI want to buy:\nProduct: *${productName}*\nPrice: *₹${price}*\n\nPlease provide payment details and delivery.`;
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank");
}

document.addEventListener("DOMContentLoaded", () => {
  renderCatalog();

  const searchInput = document.getElementById("searchInput") || document.querySelector("input[type='text']");
  const searchBtn = document.getElementById("searchBtn") || document.querySelector(".search-btn");

  if (searchInput) {
    searchInput.addEventListener("input", handleSearch);
    searchInput.addEventListener("keyup", handleSearch);
  }

  if (searchBtn) {
    searchBtn.addEventListener("click", handleSearch);
  }
});
