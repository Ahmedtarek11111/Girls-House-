/* ===== Girls'House 🎀 — App logic ===== */

const WHATSAPP_NUMBER = "201010288791";

const PRODUCTS = [
  {id:"summer-set-beige",name:"قطن سنجل ليكرا مستورد بنطلون وايد ليج طباعة تحفه",cat:"clothes",price:550,old:700,isNew:true,sale:true,best:true,
   sizes:["S","M","L","XL"],colors:[{name:"بيج",hex:"#d4b896"},{name:"وردي",hex:"#f7d5dc"}],
   img:"image/bg1.jpeg",
   hover:[
  "image/WhatsApp Image 2026-06-23 at 11.53.36 PM (1) copy.jpeg",
  "image/WhatsApp Image 2026-06-23 at 11.53.36 PM (2).jpeg",
  "image/WhatsApp Image 2026-06-23 at 11.53.36 PM (3).jpeg",
  "image/WhatsApp Image 2026-06-23 at 11.53.36 PM (4).jpeg",
  "image/WhatsApp Image 2026-06-23 at 11.53.36 PM.jpeg"
  ],
   desc:"طقم صيفي راقٍ من خامة قطنية ناعمة بلمسة عصرية أنيقة، مثالي لإطلالة يومية مميزة."},


  {id:"floral-dress",name:"فستان مزهر",cat:"clothes",price:700,isNew:true,best:true,
   sizes:["S","M","L"],colors:[{name:"وردي",hex:"#f7d5dc"},{name:"أبيض",hex:"#fff"}],
   img:"image/11.jpeg",
   hover:[
   "image/O (2).jpeg",
"image/O (1).jpeg",
"image/O (3).jpeg",
"image/O (4).jpeg"
   ],
   desc:"فستان أنيق بطبعات مزهرة ناعمة، مناسب للمناسبات النهارية والإطلالات الصيفية."},



  {id:"2dress",name:"دريس ",cat:"clothes",price:800,isNew:true,best:true,
   sizes:["S","M","L"],colors:[{name:"وردي",hex:"#f7d5dc"},{name:"أبيض",hex:"#fff"}],
   img:"image/672.jpeg",
   hover:[
"image/673.jpeg",
"image/674.jpeg",
"image/67.jpeg",
"image/675.jpeg"
   ],
   desc:"فستان أنيق بطبعات مزهرة ناعمة، مناسب للمناسبات النهارية والإطلالات الصيفية."},


    {id:"3dress",name:"كتان سي واي",cat:"clothes",price:500,isNew:true,best:true,
   sizes:["S","M","L"],colors:[{name:"وردي",hex:"#f7d5dc"},{name:"أبيض",hex:"#fff"}],
   img:"image/vv.jpeg",
   hover:[
"image/vv2.jpeg"
   ],
   desc:"فستان أنيق بطبعات مزهرة ناعمة، مناسب للمناسبات النهارية والإطلالات الصيفية."},



   
  {id:"dress",name:"دريس زراير فتحتين من الجنب",cat:"clothes",price:550,isNew:true,best:true,
   sizes:["S","M","L"],colors:[{name:"وردي",hex:"#f7d5dc"},{name:"أبيض",hex:"#fff"}],
   img:"image/y3.jpeg",
   hover:[
"image/y4.jpeg",
"image/y.jpeg",
"image/y5.jpeg",
"image/y2.jpeg"
   ],
   desc:"فستان أنيق بطبعات مزهرة ناعمة، مناسب للمناسبات النهارية والإطلالات الصيفية."},


   

  {id:"cardigan",name:"كارديجان ",cat:"clothes",price:650,old:800,sale:true,
   sizes:["S","M","L","XL"],colors:[{name:"بيج",hex:"#d4b896"}],
   img:"image/55 (6).jpeg",
    hover:[
    "image/55 (2).jpeg",
  "image/55 (4).jpeg",
  "image/55 (3).jpeg",
  "image/55 (5).jpeg",
  ],




   desc:"كارديجان دافئ بنسيج فاخر، يضيف لمسة من الأناقة لأي إطلالة."},
  {id:"gold-bag",name:"حقيبة ذهبية",cat:"bags",price: 400,isNew:true,best:true,
   sizes:["مقاس واحد"],colors:[{name:"ذهبي",hex:"#c9a96b"},{name:"أسود",hex:"#1a1414"}],
   img:"image/bag1 (3).jpeg",
   hover:[
"image/bag1 (2).jpeg",
"image/bag1 (8).jpeg",
"image/bag1 (9).jpeg",
"image/bag1 (7).jpeg",
"image/bag1 (3).jpeg",
   ],
   desc:"حقيبة يد فاخرة بلمسة ذهبية أنيقة، تجمع بين العملية والذوق الراقي."},

  {id:"mini-bag-pink",name:"حقيبة ميني ",cat:"bags",price:400,old:500,sale:true,
   sizes:["مقاس واحد"],colors:[{name:"وردي",hex:"#f7d5dc"}],
   img:"image/bag2.jpeg",
   hover:[
"image/bag2 (12).jpeg",
"image/bag2 (11).jpeg",
"image/bag2 (10).jpeg",
"image/bag1 (11).jpeg",
   ],
   desc:"حقيبة ميني عصرية بلون وردي ناعم، مثالية للإطلالات الكاجوال الأنيقة."},


   {id:"bag-bag-red",name:"حقيبة كبيرة حمراء",cat:"bags",price:400,old:550,sale:true,
   sizes:["مقاس واحد"],colors:[{name:"احمر",hex:"#ea0f0f"}],
   img:"image/bag331.jpeg",
   hover:[
"image/bag333.jpeg",
"image/bag38.jpeg",
"image/bag37.jpeg",
"image/bag36.jpeg",
"image/bag35.jpeg",
"image/bag34.jpeg",
"image/bag33.jpeg",
"image/bag3.jpeg",
   ],
   desc:"حقيبة كبيرة عصرية بلون وردي ناعم، مثالية للإطلالات الكاجوال الأنيقة."},

  {id:"swim-one-piece",name:"مايوه قطعة واحدة",cat:"swim",price:600,isNew:true,
   sizes:["S","M","L"],colors:[{name:"أسود",hex:"#1a1414"},{name:"بيج",hex:"#d4b896"}],
   img:"image/mau.jpeg",
    hover:[
"image/mau2.jpeg",
"image/mau3.jpeg",
"image/mau5.jpeg",

   ],
   desc:"مايوه راقٍ بإطلالة صيفية مميزة."},
/*
  {id:"gold-necklace",name:"عقد ذهبي رفيع",cat:"accessories",price:320,best:true,
   sizes:["مقاس واحد"],colors:[{name:"ذهبي",hex:"#c9a96b"}],
   img:"https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800",
   hover:"https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800",
   desc:"عقد ذهبي رفيع بتصميم أنيق يكمل أي إطلالة بلمسة من الفخامة."},

  {id:"sunglasses-classic",name:"نظارة شمسية كلاسيكية",cat:"accessories",price:450,old:580,sale:true,
   sizes:["مقاس واحد"],colors:[{name:"أسود",hex:"#1a1414"},{name:"بني",hex:"#8b6f47"}],
   img:"https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800",
   hover:"https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=800",
   desc:"نظارة شمسية بتصميم كلاسيكي خالد، تحمي عينيك وتضيف لمسة من الأناقة."}
   */
];

/* ===== Storage ===== */
const store = {
  get cart(){ return JSON.parse(localStorage.getItem("gh_cart")||"[]") },
  set cart(v){ localStorage.setItem("gh_cart",JSON.stringify(v)); updateCounts() },
  get wish(){ return JSON.parse(localStorage.getItem("gh_wish")||"[]") },
  set wish(v){ localStorage.setItem("gh_wish",JSON.stringify(v)); updateCounts() }
};

function updateCounts(){
  const c = document.getElementById("cartCount"); if(c) c.textContent = store.cart.reduce((s,i)=>s+i.qty,0);
  const w = document.getElementById("wishCount"); if(w) w.textContent = store.wish.length;
}

function toast(msg){
  let t = document.querySelector(".toast");
  if(!t){ t = document.createElement("div"); t.className="toast"; document.body.appendChild(t); }
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(t._tm);
  t._tm = setTimeout(()=>t.classList.remove("show"),2400);
}

/* ===== Product card ===== */
function productCard(p){
  const inWish = store.wish.includes(p.id);
  return `
  <div class="product-card reveal">
    <a href="product-details.html?id=${p.id}" class="product-thumb">
      <img class="main" src="${p.img}" alt="${p.name}" loading="lazy" />
      <img class="hover" src="${
  Array.isArray(p.hover)
    ? p.hover[0]
    : (p.hover || p.img)
}" alt="" loading="lazy" />
      <div class="product-badges">
        ${p.isNew?'<span class="badge-tag badge-new">جديد</span>':''}
        ${p.sale?'<span class="badge-tag badge-sale">تخفيض</span>':''}
      </div>
    </a>
    <div class="product-actions">
      <button class="wish-btn ${inWish?'active':''}" data-id="${p.id}" title="المفضلة"><i class="fas fa-heart"></i></button>
      <button class="quick-btn" data-id="${p.id}" title="عرض سريع"><i class="fas fa-eye"></i></button>
    </div>
    <div class="product-info">
      <div class="product-cat">${catName(p.cat)}</div>
      <a href="product-details.html?id=${p.id}"><div class="product-name">${p.name}</div></a>
      <div class="product-price">
        <span class="price-now">${p.price} ج.م</span>
        ${p.old?`<span class="price-old">${p.old} ج.م</span>`:''}
      </div>
    </div>
  </div>`;
}

function catName(c){return {clothes:"ملابس",bags:"حقائب",swim:"سباحة",accessories:"إكسسوارات"}[c]||c}

function bindProductActions(){
  document.querySelectorAll(".wish-btn").forEach(b=>b.onclick=e=>{
    e.preventDefault();
    const id = b.dataset.id;
    let w = store.wish;
    if(w.includes(id)){ w = w.filter(x=>x!==id); b.classList.remove("active"); toast("أُزيل من المفضلة"); }
    else{ w.push(id); b.classList.add("active"); toast("أُضيف إلى المفضلة 💖"); }
    store.wish = w;
  });
  document.querySelectorAll(".quick-btn").forEach(b=>b.onclick=e=>{
    e.preventDefault();
    openQuickView(b.dataset.id);
  });
}

/* ===== Quick view ===== */
function openQuickView(id){
  const p = PRODUCTS.find(x=>x.id===id); if(!p) return;
  const modal = document.getElementById("quickModal");
  if(!modal) return;
  document.getElementById("modalBody").innerHTML = `
    <img src="${p.img}" alt="${p.name}" />
    <div class="modal-info">
      <span class="eyebrow">${catName(p.cat)}</span>
      <h2>${p.name}</h2>
      <div class="pd-price">
        <span class="price-now">${p.price} ج.م</span>
        ${p.old?`<span class="price-old">${p.old} ج.م</span>`:''}
      </div>
      <p style="color:var(--muted);margin-bottom:20px">${p.desc}</p>
      <div class="pd-actions">
        <a href="product-details.html?id=${p.id}" class="btn btn-primary">عرض التفاصيل</a>
        <a href="https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('أرغب في طلب: '+p.name+' — '+p.price+' ج.م')}" target="_blank" class="btn whats-btn"><i class="fab fa-whatsapp"></i> اطلبي عبر واتساب</a>
      </div>
    </div>`;
  modal.classList.add("open");
}

/* ===== Header & UI ===== */
function setupHeader(){
  const header = document.getElementById("header");
  window.addEventListener("scroll",()=>{
    header?.classList.toggle("scrolled",window.scrollY>20);
    document.getElementById("scrollTop")?.classList.toggle("show",window.scrollY>400);
  });
  document.getElementById("menuBtn")?.addEventListener("click",()=>document.getElementById("navLinks").classList.toggle("open"));
  document.getElementById("scrollTop")?.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));

  const searchBtn = document.getElementById("searchBtn");
  const searchDrawer = document.getElementById("searchDrawer");
  searchBtn?.addEventListener("click",()=>{ searchDrawer.classList.toggle("open"); document.getElementById("searchInput")?.focus(); });
  document.getElementById("closeSearch")?.addEventListener("click",()=>searchDrawer.classList.remove("open"));
  document.getElementById("searchInput")?.addEventListener("input",e=>{
    const q = e.target.value.trim().toLowerCase();
    const r = document.getElementById("searchResults");
    if(!q){ r.innerHTML=""; return; }
    const res = PRODUCTS.filter(p=>p.name.toLowerCase().includes(q)||catName(p.cat).includes(q)).slice(0,8);
    r.innerHTML = res.map(p=>`<a href="product-details.html?id=${p.id}" class="mini"><img src="${p.img}" alt=""><p>${p.name}</p></a>`).join("") || `<p style="color:var(--muted);padding:20px">لا توجد نتائج</p>`;
  });

  document.getElementById("modalClose")?.addEventListener("click",()=>document.getElementById("quickModal").classList.remove("open"));
  document.getElementById("quickModal")?.addEventListener("click",e=>{ if(e.target.id==="quickModal") e.currentTarget.classList.remove("open"); });

  document.getElementById("wishBtn")?.addEventListener("click",()=>{
    const w = store.wish;
    if(!w.length){ toast("المفضلة فارغة"); return; }
    toast(`لديكِ ${w.length} منتج في المفضلة 💖`);
  });
  document.getElementById("cartBtn")?.addEventListener("click",()=>{
    const c = store.cart;
    if(!c.length){ toast("السلة فارغة"); return; }
    const total = c.reduce((s,i)=>s+i.price*i.qty,0);
    const msg = "أرغب في طلب:\n" + c.map(i=>`• ${i.name} ×${i.qty} — ${i.price*i.qty} ج.م`).join("\n") + `\n\nالإجمالي: ${total} ج.م`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`,"_blank");
  });

  document.getElementById("newsletterForm")?.addEventListener("submit",e=>{ e.preventDefault(); e.target.reset(); toast("تم الاشتراك بنجاح 🎀"); });
  document.getElementById("contactForm")?.addEventListener("submit",e=>{ e.preventDefault(); e.target.reset(); toast("تم إرسال رسالتك ✨"); });
}

/* ===== Reveal on scroll ===== */
function setupReveal(){
  const io = new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add("visible")),{threshold:.12});
  document.querySelectorAll(".reveal").forEach(el=>io.observe(el));
}

/* ===== Home ===== */
function initHome(){
  const newA = document.getElementById("newArrivals");
  const best = document.getElementById("bestSellers");
  if(newA) newA.innerHTML = PRODUCTS.filter(p=>p.isNew).map(productCard).join("");
  if(best) best.innerHTML = PRODUCTS.filter(p=>p.best).map(productCard).join("");
  bindProductActions();
}

/* ===== Categories ===== */
function initCategories(){
  const grid = document.getElementById("productGrid"); if(!grid) return;
  const params = new URLSearchParams(location.search);
  let cat = params.get("cat") || "all";
  let sort = "default", maxPrice = 2000;

  document.querySelectorAll("#catFilters button").forEach(b=>{
    if(b.dataset.cat===cat) b.classList.add("active"); else b.classList.remove("active");
    b.onclick = ()=>{
      document.querySelectorAll("#catFilters button").forEach(x=>x.classList.remove("active"));
      b.classList.add("active"); cat = b.dataset.cat; render();
    };
  });
  document.getElementById("sortBy").onchange = e=>{ sort = e.target.value; render(); };
  const range = document.getElementById("priceRange");
  range.oninput = e=>{ maxPrice = +e.target.value; document.getElementById("priceVal").textContent = maxPrice; render(); };

  function render(){
    let list = PRODUCTS.filter(p=>(cat==="all"||p.cat===cat) && p.price<=maxPrice);
    if(sort==="low") list.sort((a,b)=>a.price-b.price);
    else if(sort==="high") list.sort((a,b)=>b.price-a.price);
    else if(sort==="new") list.sort((a,b)=>(b.isNew?1:0)-(a.isNew?1:0));
    document.getElementById("resultCount").textContent = `${list.length} منتج`;
    grid.innerHTML = list.map(productCard).join("") || `<p style="grid-column:1/-1;text-align:center;padding:40px;color:var(--muted)"> لا توجد منتجات الان</p>`;
    bindProductActions(); setupReveal();
    const titles = {all:"جميع المنتجات",clothes:"الملابس",bags:"الحقائب",swim:"ملابس السباحة",accessories:"الإكسسوارات"};
    const t = document.getElementById("pageTitle"); if(t) t.textContent = titles[cat];
  }
  render();
}

/* ===== Product details ===== */
function initProduct(){
  const root = document.getElementById("productPage"); if(!root) return;
  const id = new URLSearchParams(location.search).get("id");
  const p = PRODUCTS.find(x=>x.id===id) || PRODUCTS[0];
  document.title = `${p.name} | Girls'House 🎀`;
  document.getElementById("bcName").textContent = p.name;

  let selSize = p.sizes[0], selColor = p.colors[0].name, qty = 1;
 const images = [
  p.img,
  ...(Array.isArray(p.hover) ? p.hover : [p.hover || p.img])
];

  function render(){
    root.innerHTML = `
      <div class="pd-gallery">
        <div class="main-img"><img id="mainImg" src="${images[0]}" alt="${p.name}"></div>
        <div class="pd-thumbs">
          ${images.map((src,i)=>`<img src="${src}" data-i="${i}" class="${i===0?'active':''}" alt="">`).join("")}
        </div>
      </div>
      <div class="pd-info">
        <span class="eyebrow">${catName(p.cat)}</span>
        <h1>${p.name}</h1>
        <div class="pd-price">
          <span class="price-now">${p.price} ج.م</span>
          ${p.old?`<span class="price-old">${p.old} ج.م</span>`:''}
          ${p.sale?'<span class="badge-tag badge-sale">تخفيض</span>':''}
        </div>
        <p class="pd-desc">${p.desc}</p>
        <div class="pd-options">
          <h4>المقاس</h4>
          <div class="opt-row" id="sizeRow">${p.sizes.map(s=>`<button data-s="${s}" class="${s===selSize?'selected':''}">${s}</button>`).join("")}</div>
        </div>
        <div class="pd-options">
          <h4>اللون: <span style="color:var(--muted);font-weight:400" id="colorLabel">${selColor}</span></h4>
          <div class="opt-row" id="colorRow">${p.colors.map(c=>`<button class="color-dot ${c.name===selColor?'selected':''}" data-c="${c.name}" style="background:${c.hex}"></button>`).join("")}</div>
        </div>
        <div class="qty-row">
          <h4 style="margin:0">الكمية:</h4>
          <div class="qty-control">
            <button id="qMinus">−</button>
            <span id="qVal">1</span>
            <button id="qPlus">+</button>
          </div>
        </div>
        <div class="pd-actions">
          <button class="btn btn-primary" id="addCart"><i class="fas fa-shopping-bag"></i> أضف إلى السلة</button>
          <button class="btn whats-btn" id="whatsOrder"><i class="fab fa-whatsapp"></i> اطلبي عبر واتساب</button>
          <button class="btn btn-outline" id="wishToggle"><i class="fas fa-heart"></i></button>
        </div>
        <div style="margin-top:24px;padding-top:20px;border-top:1px solid var(--line);display:grid;gap:10px;font-size:.9rem;color:var(--muted)">
          <span><i class="fas fa-truck" style="color:var(--gold-dark)"></i> شحن سريع لجميع المحافظات</span>
          <span><i class="fas fa-undo" style="color:var(--gold-dark)"></i> إرجاع خلال 2 يوم</span>
          <span><i class="fas fa-shield-alt" style="color:var(--gold-dark)"></i> دفع آمن عند الاستلام</span>
        </div>
      </div>`;

    document.querySelectorAll(".pd-thumbs img").forEach(im=>im.onclick=()=>{
      document.querySelectorAll(".pd-thumbs img").forEach(x=>x.classList.remove("active"));
      im.classList.add("active");
      document.getElementById("mainImg").src = im.src;
    });
    document.querySelectorAll("#sizeRow button").forEach(b=>b.onclick=()=>{
      selSize=b.dataset.s;
      document.querySelectorAll("#sizeRow button").forEach(x=>x.classList.remove("selected"));
      b.classList.add("selected");
    });
    document.querySelectorAll("#colorRow button").forEach(b=>b.onclick=()=>{
      selColor=b.dataset.c;
      document.querySelectorAll("#colorRow button").forEach(x=>x.classList.remove("selected"));
      b.classList.add("selected");
      document.getElementById("colorLabel").textContent = selColor;
    });
    document.getElementById("qMinus").onclick=()=>{ if(qty>1){qty--;document.getElementById("qVal").textContent=qty;} };
    document.getElementById("qPlus").onclick=()=>{ qty++;document.getElementById("qVal").textContent=qty; };
    document.getElementById("addCart").onclick=()=>{
      const c = store.cart;
      const key = `${p.id}-${selSize}-${selColor}`;
      const ex = c.find(i=>i.key===key);
      if(ex) ex.qty += qty;
      else c.push({key,id:p.id,name:p.name,price:p.price,size:selSize,color:selColor,qty,img:p.img});
      store.cart = c; toast("أُضيف إلى السلة 🛍️");
    };
    document.getElementById("whatsOrder").onclick=()=>{
      const msg = `مرحباً Girls'House \nأرغب في طلب:\n\n• المنتج: ${p.name}\n• المقاس: ${selSize}\n• اللون: ${selColor}\n• الكمية: ${qty}\n• السعر: ${p.price*qty} ج.م`;
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`,"_blank");
    };
    const wb = document.getElementById("wishToggle");
    if(store.wish.includes(p.id)) wb.classList.add("active");
    wb.onclick=()=>{
      let w = store.wish;
      if(w.includes(p.id)){ w=w.filter(x=>x!==p.id); wb.classList.remove("active"); toast("أُزيل من المفضلة"); }
      else{ w.push(p.id); wb.classList.add("active"); toast("أُضيف إلى المفضلة 💖"); }
      store.wish = w;
    };
  }
  render();

  const rel = document.getElementById("related");
  if(rel){
    rel.innerHTML = PRODUCTS.filter(x=>x.cat===p.cat && x.id!==p.id).slice(0,4).map(productCard).join("");
    bindProductActions();
  }
}

/* ===== Init ===== */
window.addEventListener("load",()=>setTimeout(()=>document.getElementById("loader")?.classList.add("hidden"),500));
document.addEventListener("DOMContentLoaded",()=>{
  setupHeader();
  updateCounts();
  initHome();
  initCategories();
  initProduct();
  setupReveal();
});
