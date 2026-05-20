// === Annapurna Restaurant — data & i18n ===

// Images: real Unsplash food photography (curated hand-picked indian dishes)
const IMG = {
  // hero options
  heroAmbience: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1600&q=80", // warm restaurant
  heroAlt: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80", // warm interior
  heroFood: "https://images.unsplash.com/photo-1517244683847-7456b63c5969?auto=format&fit=crop&w=1400&q=80", // thali
  // dishes
  butterChicken: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=900&q=80",
  paneerTikka: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=900&q=80",
  biryani: "https://images.unsplash.com/photo-1633945274405-b6c8b6c6259f?auto=format&fit=crop&w=900&q=80",
  daltadka: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=900&q=80",
  thali: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=900&q=80",
  naan: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=80",
  samosa: "https://images.unsplash.com/photo-1601050690294-7c1b1c8b7eb3?auto=format&fit=crop&w=900&q=80",
  tikka: "https://images.unsplash.com/photo-1602253057119-44d745d9b860?auto=format&fit=crop&w=900&q=80",
  fish: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=900&q=80",
  noodles: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=900&q=80",
  soup: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80",
  paratha: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=900&q=80",
  // ambience
  spread1: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=1200&q=80",
  spread2: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1200&q=80",
  spread3: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=1200&q=80",
};

// Featured dishes for home carousel
const FEATURED = [
  {
    id: "f1",
    img: IMG.thali,
    name: { en: "Annapurna Special Thali", hi: "अन्नपूर्णा स्पेशल थाली", mr: "अन्नपूर्णा स्पेशल थाळी" },
    desc: { en: "Eight-piece feast: dal, sabzi, rice, two breads, raita, sweet & papad. The signature.", hi: "आठ-पीस दावत: दाल, सब्ज़ी, चावल, दो रोटी, रायता, मीठा और पापड़।", mr: "आठ पदार्थांची मेजवानी: डाळ, भाजी, भात, दोन रोट्या, रायता, गोड व पापड." },
    price: "₹340", veg: true,
  },
  {
    id: "f2",
    img: IMG.butterChicken,
    name: { en: "Butter Chicken", hi: "बटर चिकन", mr: "बटर चिकन" },
    desc: { en: "Tandoor-grilled chicken in a slow-cooked tomato-cashew gravy, finished with cream.", hi: "तंदूर में पका चिकन धीमी आँच की टमाटर-काजू ग्रेवी में।", mr: "तंदूरमध्ये भाजलेले चिकन हळुवार शिजवलेल्या टोमॅटो-काजू ग्रेव्हीत." },
    price: "₹380", veg: false,
  },
  {
    id: "f3",
    img: IMG.paneerTikka,
    name: { en: "Paneer Tikka Masala", hi: "पनीर टिक्का मसाला", mr: "पनीर टिक्का मसाला" },
    desc: { en: "Charcoal-smoked paneer cubes in a fragrant kasuri methi gravy.", hi: "कोयले में पका पनीर सुगंधित कसूरी मेथी ग्रेवी में।", mr: "कोळशावर भाजलेले पनीर सुगंधी कसूरी मेथी ग्रेव्हीत." },
    price: "₹320", veg: true,
  },
  {
    id: "f4",
    img: IMG.biryani,
    name: { en: "Hyderabadi Mutton Biryani", hi: "हैदराबादी मटन बिरयानी", mr: "हैदराबादी मटण बिर्याणी" },
    desc: { en: "Dum-cooked long-grain basmati layered with saffron, fried onions, and tender mutton.", hi: "दम पर पका बासमती, केसर, तले प्याज़ और नरम मटन की परतें।", mr: "दम पद्धतीने शिजवलेला बासमती, केशर, तळलेला कांदा व मऊसर मटण." },
    price: "₹420", veg: false,
  },
];

// 17 menu categories — realistic Navi Mumbai veg/non-veg restaurant menu
const MENU = [
  {
    id: "veg-soup",
    name: { en: "Veg Soups", hi: "वेज सूप", mr: "व्हेज सूप" },
    items: [
      { n: "Sweet Corn Soup", d: "Velvety sweet corn kernels in a delicate broth.", p: "₹120", veg: true },
      { n: "Manchow Soup", d: "Indo-Chinese classic with crispy fried noodles.", p: "₹130", veg: true },
      { n: "Hot & Sour Soup", d: "Tangy, peppery, with bamboo shoots and tofu.", p: "₹140", veg: true },
      { n: "Tomato Shorba", d: "Slow-roasted tomatoes with cumin and ginger.", p: "₹120", veg: true },
      { n: "Lemon Coriander Soup", d: "Clear broth brightened with fresh herbs.", p: "₹130", veg: true },
    ],
  },
  {
    id: "nv-soup",
    name: { en: "Non-Veg Soups", hi: "नॉन-वेज सूप", mr: "नॉन-व्हेज सूप" },
    items: [
      { n: "Chicken Hot & Sour", d: "Shredded chicken in tangy chilli broth.", p: "₹160", veg: false },
      { n: "Chicken Manchow", d: "Loaded with chicken mince and crispy noodles.", p: "₹160", veg: false },
      { n: "Chicken Sweet Corn", d: "Hearty corn soup with poached chicken.", p: "₹150", veg: false },
      { n: "Mutton Paya Shorba", d: "Slow-cooked trotter broth with whole spices.", p: "₹220", veg: false },
    ],
  },
  {
    id: "veg-starter",
    name: { en: "Veg Starters", hi: "वेज स्टार्टर", mr: "व्हेज स्टार्टर" },
    items: [
      { n: "Paneer Tikka", d: "Charcoal-smoked paneer marinated in hung curd.", p: "₹280", veg: true, hero: true },
      { n: "Veg Manchurian Dry", d: "Crispy vegetable balls tossed in soy-garlic glaze.", p: "₹220", veg: true },
      { n: "Hara Bhara Kebab", d: "Spinach, peas and paneer patties with chaat masala.", p: "₹240", veg: true },
      { n: "Crispy Corn Salt & Pepper", d: "Tossed with curry leaves and crushed pepper.", p: "₹230", veg: true },
      { n: "Tandoori Mushroom", d: "Stuffed button mushrooms char-grilled in tandoor.", p: "₹260", veg: true },
      { n: "Veg Spring Roll", d: "Hand-rolled with stir-fried vegetables.", p: "₹200", veg: true },
    ],
  },
  {
    id: "nv-starter",
    name: { en: "Non-Veg Starters", hi: "नॉन-वेज स्टार्टर", mr: "नॉन-व्हेज स्टार्टर" },
    items: [
      { n: "Chicken 65", d: "Fiery South-Indian curry-leaf fried chicken.", p: "₹290", veg: false },
      { n: "Chilli Chicken Dry", d: "Indo-Chinese stir fry with bell peppers.", p: "₹290", veg: false },
      { n: "Chicken Lollipop", d: "Frenched chicken winglets, twice-fried.", p: "₹310", veg: false },
      { n: "Tandoori Chicken (Half)", d: "Yogurt-marinated, slow-cooked in clay oven.", p: "₹360", veg: false },
      { n: "Mutton Sukka", d: "Mangalore-style dry-roasted mutton with coconut.", p: "₹390", veg: false },
      { n: "Prawns Koliwada", d: "Mumbai-style batter-fried prawns.", p: "₹420", veg: false },
    ],
  },
  {
    id: "tandoori",
    name: { en: "Tikka & Tandoori", hi: "तंदूरी", mr: "तंदूरी" },
    items: [
      { n: "Murgh Malai Tikka", d: "Cream cheese marinade, kissed by charcoal.", p: "₹340", veg: false, hero: true },
      { n: "Reshmi Kebab", d: "Silky chicken mince with mace and cardamom.", p: "₹330", veg: false },
      { n: "Mutton Seekh Kebab", d: "Hand-minced mutton on iron skewers.", p: "₹360", veg: false },
      { n: "Tandoori Pomfret", d: "Whole pomfret in spiced yogurt marinade.", p: "₹520", veg: false },
      { n: "Paneer Achari Tikka", d: "Pickle-spiced paneer with bell peppers.", p: "₹290", veg: true },
    ],
  },
  {
    id: "veg-main",
    name: { en: "Veg Dishes", hi: "वेज मुख्य", mr: "व्हेज मुख्य" },
    items: [
      { n: "Paneer Butter Masala", d: "Tomato-cashew gravy, slow-finished with cream.", p: "₹290", veg: true, hero: true },
      { n: "Dal Tadka", d: "Yellow dal tempered with cumin and dried chilli.", p: "₹220", veg: true },
      { n: "Dal Makhani", d: "Black urad slow-cooked overnight on coal.", p: "₹270", veg: true },
      { n: "Palak Paneer", d: "Spinach purée with hand-cut paneer cubes.", p: "₹280", veg: true },
      { n: "Mixed Vegetable Jaipuri", d: "Royal Rajasthani recipe with fried okra crisp.", p: "₹260", veg: true },
      { n: "Kadhai Mushroom", d: "Wok-tossed with crushed coriander and ginger juliennes.", p: "₹270", veg: true },
      { n: "Malai Kofta", d: "Paneer dumplings in a saffron-cashew gravy.", p: "₹300", veg: true },
      { n: "Bhindi Do Pyaza", d: "Crisp okra with onions, three ways.", p: "₹240", veg: true },
    ],
  },
  {
    id: "nv-main",
    name: { en: "Non-Veg Dishes", hi: "नॉन-वेज मुख्य", mr: "नॉन-व्हेज मुख्य" },
    items: [
      { n: "Butter Chicken", d: "Tandoor chicken in tomato-cashew gravy.", p: "₹380", veg: false, hero: true },
      { n: "Chicken Tikka Masala", d: "Char-grilled chicken in onion-tomato masala.", p: "₹360", veg: false },
      { n: "Kadhai Chicken", d: "Wok-tossed with bell peppers and crushed spices.", p: "₹340", veg: false },
      { n: "Mutton Rogan Josh", d: "Kashmiri red gravy with whole spices.", p: "₹420", veg: false },
      { n: "Mutton Handi", d: "Slow-cooked in clay pot with yogurt and onions.", p: "₹440", veg: false },
      { n: "Chicken Chettinad", d: "Black pepper and roasted spice South-Indian curry.", p: "₹350", veg: false },
    ],
  },
  {
    id: "egg",
    name: { en: "Egg Dishes", hi: "अंडे की किस्म", mr: "अंडी" },
    items: [
      { n: "Egg Bhurji", d: "Scrambled with onions, tomatoes and pav.", p: "₹180", veg: false },
      { n: "Egg Masala Curry", d: "Boiled eggs in a spicy onion gravy.", p: "₹220", veg: false },
      { n: "Egg Korma", d: "Yogurt and cashew gravy, mildly spiced.", p: "₹230", veg: false },
    ],
  },
  {
    id: "fish",
    name: { en: "Fish Dishes", hi: "मछली की किस्म", mr: "मासे" },
    items: [
      { n: "Bombil Fry", d: "Mumbai bombay-duck, semolina-crusted.", p: "₹360", veg: false, hero: true },
      { n: "Surmai Tawa Fry", d: "King fish, masala-rubbed and pan-seared.", p: "₹460", veg: false },
      { n: "Prawn Curry", d: "Coconut and kokum gravy, Konkan-style.", p: "₹420", veg: false },
      { n: "Fish Tikka", d: "Basa cubes in spiced yogurt marinade.", p: "₹360", veg: false },
    ],
  },
  {
    id: "biryani",
    name: { en: "Pulao & Biryani", hi: "बिरयानी और पुलाव", mr: "बिर्याणी व पुलाव" },
    items: [
      { n: "Hyderabadi Chicken Biryani", d: "Dum-cooked with saffron and fried onions.", p: "₹340", veg: false },
      { n: "Mutton Biryani", d: "Slow-cooked with whole spices and mint.", p: "₹420", veg: false, hero: true },
      { n: "Veg Biryani", d: "Mixed vegetables, basmati, kewra water.", p: "₹260", veg: true },
      { n: "Paneer Tikka Pulao", d: "Aromatic rice with chargrilled paneer.", p: "₹280", veg: true },
      { n: "Jeera Rice", d: "Cumin-tempered long-grain basmati.", p: "₹160", veg: true },
    ],
  },
  {
    id: "veg-rice",
    name: { en: "Veg Rice & Noodles", hi: "वेज चावल और नूडल्स", mr: "व्हेज भात व नूडल्स" },
    items: [
      { n: "Veg Hakka Noodles", d: "Wok-tossed with cabbage, carrots and capsicum.", p: "₹190", veg: true },
      { n: "Schezwan Fried Rice", d: "Fiery Schezwan sauce, scallions, garlic.", p: "₹210", veg: true },
      { n: "Singapore Noodles", d: "Turmeric-tinged with bean sprouts.", p: "₹220", veg: true },
      { n: "Triple Schezwan Rice", d: "Manchurian, gravy, rice, noodles — together.", p: "₹260", veg: true },
    ],
  },
  {
    id: "nv-rice",
    name: { en: "Non-Veg Rice & Noodles", hi: "नॉन-वेज चावल और नूडल्स", mr: "नॉन-व्हेज भात व नूडल्स" },
    items: [
      { n: "Chicken Hakka Noodles", d: "Shredded chicken with classic wok flavour.", p: "₹240", veg: false },
      { n: "Egg Fried Rice", d: "Day-rested rice tossed with eggs and scallions.", p: "₹220", veg: false },
      { n: "Chicken Schezwan Rice", d: "Fiery chilli paste, chicken cubes, garlic.", p: "₹260", veg: false },
      { n: "Prawn Hakka Noodles", d: "Tiger prawns, sesame oil finish.", p: "₹320", veg: false },
    ],
  },
  {
    id: "thali",
    name: { en: "Thali", hi: "थाली", mr: "थाळी" },
    items: [
      { n: "Annapurna Special Thali", d: "Dal, sabzi, rice, two breads, raita, sweet, papad.", p: "₹340", veg: true, hero: true },
      { n: "Maharashtrian Thali", d: "Pithla, bhakri, varan-bhaat, koshimbir, lonche.", p: "₹320", veg: true },
      { n: "Punjabi Thali", d: "Dal makhani, paneer, naan, jeera rice, gulab jamun.", p: "₹360", veg: true },
      { n: "Mini Thali", d: "Light meal: dal, sabzi, rice, two chapatis.", p: "₹220", veg: true },
      { n: "Chicken Thali", d: "Chicken curry, kebab, rice, naan, salad.", p: "₹420", veg: false },
    ],
  },
  {
    id: "bread",
    name: { en: "Chapati & Bhakri", hi: "रोटी और भाकरी", mr: "चपाती व भाकरी" },
    items: [
      { n: "Tandoori Roti", d: "Whole-wheat flatbread, clay-oven baked.", p: "₹30", veg: true },
      { n: "Butter Naan", d: "Soft naan, finished with white butter.", p: "₹60", veg: true },
      { n: "Garlic Naan", d: "Naan strewn with garlic and coriander.", p: "₹70", veg: true },
      { n: "Jowar Bhakri", d: "Maharashtrian sorghum flatbread.", p: "₹40", veg: true },
      { n: "Bajra Bhakri", d: "Hand-patted pearl millet bread.", p: "₹40", veg: true },
      { n: "Missi Roti", d: "Chickpea flour with onions and spices.", p: "₹50", veg: true },
    ],
  },
  {
    id: "paratha",
    name: { en: "Paratha", hi: "पराठा", mr: "पराठा" },
    items: [
      { n: "Aloo Paratha", d: "Spiced potato stuffing, served with curd.", p: "₹110", veg: true },
      { n: "Paneer Paratha", d: "Cottage cheese, green chilli, coriander.", p: "₹140", veg: true },
      { n: "Lachha Paratha", d: "Hundred-layered, ghee-brushed paratha.", p: "₹80", veg: true },
      { n: "Methi Paratha", d: "Fresh fenugreek leaves, ajwain.", p: "₹100", veg: true },
    ],
  },
  {
    id: "rice",
    name: { en: "Rice (Steamed & Flavored)", hi: "चावल", mr: "भात" },
    items: [
      { n: "Steamed Basmati", d: "Long-grain, fragrant, perfectly cooked.", p: "₹140", veg: true },
      { n: "Curd Rice", d: "South-Indian-style with mustard tempering.", p: "₹180", veg: true },
      { n: "Lemon Rice", d: "Turmeric, peanuts, curry leaves.", p: "₹160", veg: true },
      { n: "Ghee Rice", d: "Steamed rice tossed in homemade ghee.", p: "₹170", veg: true },
    ],
  },
  {
    id: "dessert",
    name: { en: "Desserts", hi: "मिठाई", mr: "गोड पदार्थ" },
    items: [
      { n: "Gulab Jamun (2 pc)", d: "Warm khoya dumplings in saffron syrup.", p: "₹90", veg: true },
      { n: "Gajar Halwa", d: "Slow-cooked carrots, khoya, almonds.", p: "₹140", veg: true },
      { n: "Rasmalai", d: "Cottage cheese discs in cardamom-saffron milk.", p: "₹130", veg: true },
      { n: "Moong Dal Halwa", d: "Ghee-roasted lentils, classic winter sweet.", p: "₹160", veg: true },
    ],
  },
];

// Reviews
const REVIEWS = [
  { name: "Priya Sharma", text: "The Annapurna Special Thali is genuinely the best I've had in Navi Mumbai. The bhakri came hot off the tawa, and the dal had that homestyle smokiness that's hard to find anywhere else.", rating: 5, when: "2 weeks ago", cat: "Food Quality" },
  { name: "Rohan Mehta", text: "Came here for our anniversary. Staff arranged a small surprise without me even asking. Butter chicken was creamy without being heavy. We'll be back.", rating: 5, when: "1 month ago", cat: "Service" },
  { name: "Anjali Deshmukh", text: "Authentic Maharashtrian thali at last! The pithla-bhakri reminded me of my grandmother's kitchen. Reasonable prices for the portion sizes.", rating: 5, when: "3 weeks ago", cat: "Food Quality" },
  { name: "Vikram Iyer", text: "Mutton biryani is excellent — proper dum, not steamed. Could improve on the lighting in the dining area but everything else is on point.", rating: 4, when: "2 months ago", cat: "Food Quality" },
  { name: "Sneha Patil", text: "Family-friendly, never rushed. Took my parents and they loved how the chef came out to ask about preferences. Old-school hospitality.", rating: 5, when: "5 days ago", cat: "Service" },
  { name: "Aditya Kulkarni", text: "Best tandoori in Kharghar. The murgh malai tikka melts. Slightly slow during weekend dinner rush — better to reserve.", rating: 4, when: "1 week ago", cat: "Food Quality" },
  { name: "Meera Joshi", text: "Decor is warm and unfussy. Loved the small touches — copper bowls, hand-block prints. Felt like a proper meal, not just dinner.", rating: 5, when: "3 weeks ago", cat: "Ambiance" },
  { name: "Karan Singh", text: "Ordered through Swiggy. Packaging was thoughtful — gravies sealed separately, breads still warm. Surmai fry didn't get soggy in transit.", rating: 5, when: "4 days ago", cat: "Food Quality" },
  { name: "Pooja Naik", text: "Value for money is unbeatable. Two of us ate full meals with starters for under ₹900. Quality didn't suffer at all.", rating: 5, when: "1 month ago", cat: "Value for Money" },
  { name: "Rahul Verma", text: "Paneer butter masala had a homemade quality — not the usual restaurant heaviness. My kids ate without fuss for once.", rating: 4, when: "2 weeks ago", cat: "Food Quality" },
  { name: "Tanvi Bhat", text: "Reserved a table for 8 for a birthday. They set up beautifully and even brought out a complimentary halwa. Owner came by personally.", rating: 5, when: "6 weeks ago", cat: "Service" },
  { name: "Suresh Pillai", text: "Solid Indo-Chinese — Schezwan fried rice has real wok-flavour. Not as hot as some places but more refined.", rating: 4, when: "3 weeks ago", cat: "Food Quality" },
  { name: "Neha Kapoor", text: "Cosy, clean, well-lit. Perfect for a quick lunch break from office. The mini thali at ₹220 is a steal.", rating: 5, when: "1 week ago", cat: "Value for Money" },
  { name: "Manish Gupta", text: "Brought clients here for dinner. They asked where the chef trained. Speaks for itself.", rating: 5, when: "2 months ago", cat: "Food Quality" },
  { name: "Divya Rao", text: "Service is genuinely warm, not performative. Server remembered our order from a previous visit. Small things matter.", rating: 5, when: "4 weeks ago", cat: "Service" },
  { name: "Arjun Nair", text: "Mutton handi is the standout. Slow-cooked, fall-off-the-bone. Don't skip the bhakri — it pairs better than naan.", rating: 5, when: "1 week ago", cat: "Food Quality" },
];

// Offers
const OFFERS = [
  {
    id: "o1", off: "20%", small: "OFF",
    title: { en: "Weekday Lunch Special", hi: "वीकडे लंच स्पेशल", mr: "आठवड्याचा लंच स्पेशल" },
    desc: { en: "Flat 20% off on all thali and lunch combos, Monday through Friday, 12pm–4pm. Dine-in only.", hi: "सोमवार से शुक्रवार, दोपहर 12-4 बजे, सभी थाली और लंच कॉम्बो पर 20% की छूट।", mr: "सोमवार ते शुक्रवार, दुपारी १२-४, सर्व थाळी व लंच कॉम्बोवर २०% सूट." },
    terms: "Valid 12:00–16:00, Mon–Fri. Dine-in only.",
    validity: "Valid until 30 June",
    code: "LUNCH20",
    img: IMG.thali,
    category: "Lunch Combos",
  },
  {
    id: "o2", off: "₹150", small: "OFF",
    title: { en: "Family Pack of 4", hi: "4 के लिए फैमिली पैक", mr: "४ जणांचे फॅमिली पॅक" },
    desc: { en: "Choose 2 main course + 2 starters + 4 breads + 1 dessert. Save ₹150 on combined order.", hi: "2 मुख्य व्यंजन + 2 स्टार्टर + 4 रोटी + 1 मिठाई। संयुक्त ऑर्डर पर ₹150 की बचत।", mr: "२ मुख्य पदार्थ + २ स्टार्टर + ४ रोट्या + १ गोड. एकत्रित ऑर्डरवर ₹१५० सूट." },
    terms: "Cannot be combined with other offers.",
    validity: "Ongoing",
    code: "FAMILY150",
    img: IMG.biryani,
    category: "Family Packages",
  },
  {
    id: "o3", off: "Buy 1", small: "GET 1",
    title: { en: "Weekend Biryani BOGO", hi: "वीकेंड बिरयानी BOGO", mr: "वीकेंड बिर्याणी BOGO" },
    desc: { en: "Order any biryani on Saturday or Sunday evening (6pm–9pm) and get a second of equal or lesser value free.", hi: "शनिवार/रविवार शाम 6-9 बजे, कोई भी बिरयानी ऑर्डर करें — दूसरी मुफ़्त।", mr: "शनिवार/रविवार संध्या ६-९, कोणतीही बिर्याणी ऑर्डर करा — दुसरी मोफत." },
    terms: "Saturday/Sunday only, 18:00–21:00.",
    validity: "Weekends until 31 July",
    code: "BIRYANI2X",
    img: IMG.biryani,
    category: "Weekend Specials",
  },
  {
    id: "o4", off: "15%", small: "OFF",
    title: { en: "Student Discount", hi: "स्टूडेंट डिस्काउंट", mr: "विद्यार्थी सूट" },
    desc: { en: "Show a valid student ID and get 15% off your bill, every day of the week. Minimum order ₹400.", hi: "वैध छात्र पहचान-पत्र पर 15% की छूट, सप्ताह के हर दिन। न्यूनतम ऑर्डर ₹400।", mr: "वैध विद्यार्थी ओळखपत्रावर १५% सूट, आठवड्याच्या प्रत्येक दिवशी. किमान ऑर्डर ₹४००." },
    terms: "Valid student ID required. Minimum bill ₹400.",
    validity: "Ongoing",
    code: "STUDENT15",
    img: IMG.paneerTikka,
    category: "Student Discounts",
  },
  {
    id: "o5", off: "10%", small: "OFF",
    title: { en: "Corporate Bulk Orders", hi: "कॉर्पोरेट बल्क ऑर्डर", mr: "कॉर्पोरेट बल्क ऑर्डर" },
    desc: { en: "10+ thali or biryani trays for office lunches — flat 10% off, free delivery within 5km.", hi: "10+ थाली या बिरयानी ट्रे (ऑफिस लंच) — 10% की छूट, 5 किमी तक मुफ़्त डिलीवरी।", mr: "१०+ थाळी किंवा बिर्याणी ट्रे (ऑफिस लंच) — १०% सूट, ५ किमीपर्यंत मोफत डिलिव्हरी." },
    terms: "Order 24 hours in advance.",
    validity: "Ongoing",
    code: "CORP10",
    img: IMG.thali,
    category: "Corporate Bulk Orders",
  },
  {
    id: "o6", off: "Free", small: "DESSERT",
    title: { en: "Birthday Dessert", hi: "जन्मदिन की मिठाई", mr: "वाढदिवस गोड" },
    desc: { en: "Reserve a table on your birthday and we'll bring a complimentary gajar halwa for the guest of honour.", hi: "जन्मदिन पर टेबल बुक करें — हम मेहमान-ए-ख़ास के लिए मुफ़्त गाजर का हलवा लाएंगे।", mr: "वाढदिवशी टेबल बुक करा — आम्ही पाहुण्यांसाठी मोफत गाजर हलवा आणू." },
    terms: "Reservation required. ID verification on arrival.",
    validity: "Ongoing",
    code: "—",
    img: IMG.spread1,
    category: "Seasonal Specials",
  },
];

// === i18n strings ===
const I18N = {
  // navigation
  nav: {
    home: { en: "Home", hi: "होम", mr: "होम" },
    menu: { en: "Menu", hi: "मेनू", mr: "मेनू" },
    about: { en: "About", hi: "हमारे बारे में", mr: "आमच्याबद्दल" },
    reservations: { en: "Reservations", hi: "आरक्षण", mr: "बुकिंग" },
    contact: { en: "Contact", hi: "संपर्क", mr: "संपर्क" },
    reviews: { en: "Reviews", hi: "समीक्षाएँ", mr: "अभिप्राय" },
    offers: { en: "Offers", hi: "ऑफ़र", mr: "ऑफर्स" },
  },
  // hero
  hero: {
    eyebrow: { en: "Since 2004 · Kharghar, Navi Mumbai", hi: "2004 से · खारघर, नवी मुंबई", mr: "२००४ पासून · खारघर, नवी मुंबई" },
    title: { en: "A table\nlaid with care.", hi: "ध्यान से सजी\nएक थाली।", mr: "मायेने सजवलेले\nएक ताट." },
    titleType: { en: "Annapurna", hi: "अन्नपूर्णा", mr: "अन्नपूर्णा" },
    titleTypeSub: { en: "the kitchen, the hearth, the host.", hi: "रसोई, चूल्हा, मेज़बानी।", mr: "स्वयंपाकघर, चूल, यजमान." },
    sub: { en: "Twenty-two years of plating hand-cooked North Indian, Maharashtrian and Indo-Chinese dishes for the families of Kharghar.", hi: "खारघर के परिवारों के लिए, बाईस वर्षों से हाथ से बना हुआ उत्तर भारतीय, महाराष्ट्रीयन और इंडो-चायनीज़ खाना।", mr: "खारघरच्या कुटुंबांसाठी, बावीस वर्षांपासून हाताने बनवलेले उत्तर भारतीय, महाराष्ट्रीयन व इंडो-चायनीज जेवण." },
    cta1: { en: "Reserve a table", hi: "टेबल बुक करें", mr: "टेबल बुक करा" },
    cta2: { en: "Order online", hi: "ऑनलाइन ऑर्डर करें", mr: "ऑनलाइन ऑर्डर करा" },
  },
  stats: {
    years: { en: "Years Serving", hi: "वर्षों की सेवा", mr: "वर्षांची सेवा" },
    diners: { en: "Daily Diners", hi: "रोज़ाना मेहमान", mr: "दररोजचे पाहुणे" },
    dishes: { en: "Signature Dishes", hi: "ख़ास व्यंजन", mr: "खास पदार्थ" },
    rating: { en: "Avg. Rating", hi: "औसत रेटिंग", mr: "सरासरी रेटिंग" },
  },
  // home sections
  featured: { en: "Featured Dishes", hi: "ख़ास व्यंजन", mr: "खास पदार्थ" },
  featuredSub: { en: "Four plates the regulars order without thinking. Each made-to-order in our open kitchen.", hi: "चार ऐसी थालियाँ जो हमारे ग्राहक बिना सोचे ऑर्डर करते हैं। हर एक हमारे खुले रसोईघर में आपके लिए बनाई जाती है।", mr: "नियमित पाहुणे न विचारता मागवतात अशा चार पदार्थ. प्रत्येक आमच्या खुल्या स्वयंपाकघरात तयार होतो." },
  whyChooseUs: { en: "Why Annapurna", hi: "क्यों अन्नपूर्णा", mr: "का अन्नपूर्णा" },
  whyChooseUsSub: { en: "What twenty-two years in the same kitchen has taught us about feeding people well.", hi: "एक ही रसोई में बाईस साल बिताकर हमने सीखा कि लोगों को अच्छा कैसे खिलाया जाए।", mr: "एकाच स्वयंपाकघरात बावीस वर्षे काढून आम्ही शिकलो—लोकांना चांगले कसे खाऊ घालायचे." },
  whyItems: [
    { t: { en: "Family recipes", hi: "पारिवारिक नुस्ख़े", mr: "घराण्याच्या पाककृती" }, p: { en: "Every gravy traces back to a hand-written diary from our chef's grandmother in Lucknow.", hi: "हर ग्रेवी हमारे शेफ़ की दादी की हाथ से लिखी डायरी से आती है।", mr: "प्रत्येक रस्सा आमच्या शेफच्या आजीच्या हस्तलिखित डायरीतून येतो." } },
    { t: { en: "From scratch", hi: "हर रोज़ ताज़ा", mr: "रोज ताजे" }, p: { en: "Masalas ground daily. Paneer set in-house. Bread off the tawa, not from a freezer.", hi: "हर दिन ताज़े मसाले पीसे जाते हैं। पनीर घर पर बनता है। रोटी तवे से, फ्रीज़र से नहीं।", mr: "रोज ताजे मसाले. घरचे पनीर. भाकरी तव्यावरून, फ्रीजरमधून नाही." } },
    { t: { en: "Family-first", hi: "परिवार-पहले", mr: "कुटुंब प्रथम" }, p: { en: "High-chairs, jain-friendly modifications, and a quiet corner if your child needs naptime.", hi: "बच्चों के लिए कुर्सी, जैन-अनुकूल बदलाव, और अगर ज़रूरत हो तो शांत कोना।", mr: "बाळांसाठी खुर्ची, जैन-अनुकूल पर्याय, गरज पडल्यास शांत कोपरा." } },
    { t: { en: "Honest pricing", hi: "साफ़ क़ीमतें", mr: "साधे दर" }, p: { en: "No hidden taxes. Portions are honest. Two can share a main and a thali for under ₹800.", hi: "कोई छिपा कर नहीं। हिस्से सच्चे हैं। दो लोग ₹800 से कम में एक थाली और मेन शेयर कर सकते हैं।", mr: "लपवाछपवी नाही. वाटा प्रामाणिक. दोघे ₹८०० च्या आत एक थाळी व मुख्य वाटून घेऊ शकतात." } },
  ],
  reviewsTitle: { en: "What guests are saying", hi: "मेहमान क्या कहते हैं", mr: "पाहुणे काय म्हणतात" },
  reviewsSub: { en: "Aggregated from Google, Zomato and Swiggy. Read all 487 reviews →", hi: "Google, Zomato और Swiggy से। सभी 487 समीक्षाएँ पढ़ें →", mr: "Google, Zomato व Swiggy वरून. सर्व ४८७ अभिप्राय वाचा →" },
  orderOnline: { en: "Order online", hi: "ऑनलाइन ऑर्डर करें", mr: "ऑनलाइन ऑर्डर करा" },
  orderOnlineSub: { en: "Full menu, hot in 30 minutes. Pick your platform.", hi: "पूरा मेनू, 30 मिनट में आपके पास। अपना प्लेटफ़ॉर्म चुनें।", mr: "संपूर्ण मेनू, ३० मिनिटांत. आपला प्लॅटफॉर्म निवडा." },
  // misc
  reserveTable: { en: "Reserve a table", hi: "टेबल बुक करें", mr: "टेबल बुक करा" },
  viewMenu: { en: "See the full menu", hi: "पूरा मेनू देखें", mr: "संपूर्ण मेनू पहा" },
  callNow: { en: "Call now", hi: "अभी कॉल करें", mr: "लगेच कॉल करा" },
};

// helper: pick lang
function t(node, lang) {
  if (!node) return "";
  if (typeof node === "string") return node;
  return node[lang] || node.en || "";
}

// expose globals (Babel scripts don't share scope)
Object.assign(window, { IMG, FEATURED, MENU, REVIEWS, OFFERS, I18N, t });
