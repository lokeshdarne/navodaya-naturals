  // ---------- PRODUCT DATA (pre-launch preview) ----------
  const IMG = {
    moringa: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJDsvJgzgGx-KH64F6XqfhT23tRtL3J22MGEaGsgvDe8jUOp8XacVmhzTfY8ouKVkF-gTYgBCz88RkMSm7f5lbrY5T0IzoYy96uWy4I40VO5mrBHUG0p2Uf9ZbSSZjQ-SKBwmTaA8S1niEiHB4VhxtkRciaNfKAvJSJ3yJLYmasi5QZDbCwuayo6MFFcP9V7sb14rYqlFIV8qU8AUFquwalxP0rZokz7EZrpVDAaZnrFCunDbp_I__",
    chia: "https://lh3.googleusercontent.com/aida-public/AB6AXuCfqUPeA9CVOmhjN2jfYbJFdrJp5ah54RghcQKUj80Wq8RCZQG8zhX6dqJMnNB2ajvSDtK5tucDII13jn5OiItL888JwyLgVF9HTTBYjb9vXubmNJ2mNRphQx7QamSn673oLixoraNiP6VOy4vHf8IhkEslFRDqCUU95-UUhZjQGslWZxJpTYd6l0iwKvP0HJnoMt9uqhEpCRiZpgJcoNfXxiJNPbDfvcOjwRBMbgNtBUwdfuU5HgRp",
    basil: "https://lh3.googleusercontent.com/aida-public/AB6AXuAmS5nIVyWs3dBtq5C7wWTvr862yPtC_M-OlWEv54CH8U8PAljbqTssVxZ-fL6gtZAa7jSXMmWUwr7wjmV5kz2mUMEbltqvI8DmzLTidbVASOwyi_gqlfbu-Bj16WnV_wflW5kVq1ORbjUg9xoLTjcFyC1UtPC84jLWWez4wvad8qMAesJbxTwsxT8NsP1parrjSyoeqFz3cPargBhIPAGLT7tuoQaqf6YAZFhP4LP2hX6zg0ES-U3E",
    tomato: "https://lh3.googleusercontent.com/aida-public/AB6AXuB-mdHj7NGpj9i7o05Z3mRiVMAEWpa0c7kmh6E5nntZ61_jPzI3ubTThRks6_LDhpegKGRF8Ge22WKrFkTfAWk7hMlSN3i3OtxEiDIsXiToJa1fxpofgZ0EvtdahfaMsS3lr2YP1yMODEDmWAjcYdHuu5VWTfGDTq0gI5HYL6ylsZ_d8ud64W92nQUBMOd0LZ9k89-P9H9SVleboJ0RcqYV34XMiUndrJV3b-KuOR8Np8c_Q8RQQhcm",
    garlic: "https://lh3.googleusercontent.com/aida-public/AB6AXuDKxvoWtO2Kge7pctgQxAObxr6SG2Fe7DSPqk_rVuYxT0f3iecFPa-wli5c4X-B1CX4nmGk3hUt2aEkCnSdRQnHD9jBhyxMbs0qe65ut-2CwsCSB7TLfCBGbKrZqF-nHvei7OgsMhGBGmCaMGW_a6mizAu_7rVK9cgMhON84LByMaAsPDF7SMpLaYqEN2UOFK7FkXxuD0kA8dQh9NxsgAOU1O6b1098VzL8mIqSWsNrkC0bapc979sW"
  };
  const PRODUCTS = [
    { id: "moringa", name: "Moringa Powder", category: "Superfoods", img: IMG.moringa, desc: "Nutrient-dense organic moringa leaf powder, harvested at dawn and gently air-dried." },
    { id: "chia", name: "Chia Seeds", category: "Pantry", img: IMG.chia, desc: "Premium raw organic chia seeds, a plant-powered source of omega-3 and fibre." },
    { id: "basil", name: "Dry Basil Leaves", category: "Herbs & Spices", img: IMG.basil, desc: "Sun-dried organic sweet basil leaves for aromatic, flavour-packed cooking." },
    { id: "tomato", name: "Tomato Powder", category: "Pantry", img: IMG.tomato, desc: "100% pure dehydrated tomato powder — rich, tangy depth for sauces and marinades." },
    { id: "garlic", name: "Garlic Powder", category: "Herbs & Spices", img: IMG.garlic, desc: "Fine organic garlic powder delivering robust, savoury flavour to any dish." }
  ];

  // ---------- RENDER PRODUCT GRID ----------
  const grid = document.getElementById("productGrid");
  grid.innerHTML = PRODUCTS.map((p, i) => `
    <article class="product-card reveal reveal-delay-${(i % 5) + 1}">
      <div class="product-media">
        <img alt="${p.name}" src="${p.img}" loading="lazy" decoding="async"/>
        <span class="soon-badge"><span class="pulse"></span> Coming Soon</span>
      </div>
      <div class="product-body">
        <span class="product-cat">${p.category}</span>
        <h3>${p.name}</h3>
        <p>${p.desc}</p>
        <a class="notify-link" href="#notify">
          Get notified <span aria-hidden="true">→</span>
        </a>
      </div>
    </article>
  `).join("");

  // ---------- NAVBAR SCROLL + SCROLL PROGRESS + MOBILE MENU ----------
  const navbar = document.getElementById("navbar");
  const scrollProgress = document.getElementById("scrollProgress");
  const heroMedia = document.querySelector(".hero-media");
  let ticking = false;
  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        navbar.classList.toggle("navbar-scrolled", window.scrollY > 12);
        const h = document.documentElement.scrollHeight - window.innerHeight;
        scrollProgress.style.width = (window.scrollY / h) * 100 + "%";
        if (heroMedia) heroMedia.style.transform = `translateY(${window.scrollY * 0.25}px)`;
        if (backTop) {
          const show = window.scrollY > 600;
          backTop.style.opacity = show ? "1" : "0";
          backTop.style.transform = show ? "translateY(0) scale(1)" : "translateY(16px) scale(0.9)";
          backTop.style.pointerEvents = show ? "auto" : "none";
        }
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  const mobileMenu = document.getElementById("mobileMenu");
  const menuBtn = document.getElementById("menuBtn");
  const backTop = document.getElementById("backTop");
  function toggleMenu(open) {
    mobileMenu.classList.toggle("open", open);
    menuBtn.classList.toggle("active", open);
    menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    document.body.style.overflow = open ? "hidden" : "";
  }
  menuBtn.addEventListener("click", () => toggleMenu(!mobileMenu.classList.contains("open")));
  mobileMenu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => toggleMenu(false)));

  backTop?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // ---------- CONTACT FORM → WhatsApp ----------
  const form = document.getElementById("contactForm");
  const formStatus = document.getElementById("formStatus");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value.trim();
    const text = encodeURIComponent(`Hello Navodaya Naturals!\n\nName: ${name}\nPhone: ${phone || "-"}\nSubject: ${subject}\n\n${message}`);
    window.open(`https://wa.me/918265098123?text=${text}`, "_blank");
    formStatus.style.display = "block";
    form.reset();
  });

  // ---------- NOTIFY (launch list) → WhatsApp ----------
  const notifyForm = document.getElementById("notifyForm");
  const notifyStatus = document.getElementById("notifyStatus");
  const toast = document.getElementById("toast");
  let toastTimer;

  function showToast(msg) {
    toast.textContent = msg;
    toast.style.opacity = "1";
    toast.style.transform = "translateX(-50%) translateY(0)";
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateX(-50%) translateY(20px)";
    }, 2600);
  }

  notifyForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("notifyEmail").value.trim();
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) { showToast("Please enter your email address."); return; }
    if (!emailRe.test(email)) { showToast("Please enter a valid email address."); return; }
    const text = encodeURIComponent(`Hello Navodaya Naturals! 🌿\n\nPlease add me to the launch list.\nEmail: ${email}`);
    window.open(`https://wa.me/918265098123?text=${text}`, "_blank");
    notifyStatus.textContent = "✅ Thanks! We'll reach out on WhatsApp to confirm.";
    notifyForm.reset();
    showToast("Thanks for joining the launch list!");
  });

  // ---------- SCROLL REVEAL ----------
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

  // ---------- DYNAMIC YEAR ----------
  document.getElementById("year").textContent = new Date().getFullYear();
