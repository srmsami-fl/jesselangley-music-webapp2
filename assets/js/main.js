/* JESSE LANGLEY — main.js (Bootstrap 5 + vanilla JS) */
(function () {
  "use strict";
  const S = window.SITE, $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const url = f => S.imgBase + encodeURI(f);

  /* pictures from config */
  $$("img[data-img]").forEach(el => { const f = S.img[el.dataset.img]; if (!f) return;
    el.addEventListener("error", () => { el.hidden = true; }); el.src = url(f); if (S.pos[el.dataset.img]) el.style.objectPosition = S.pos[el.dataset.img]; });
  $$("[data-bg]").forEach(el => { const f = S.img[el.dataset.bg]; if (!f) return; const im = new Image();
    im.onload = () => { el.style.setProperty("--img", `url("${url(f)}")`); el.classList.add("has-img"); }; im.src = url(f); });
  $$("img[data-logo]").forEach(el => { const f = S.img[el.dataset.logo]; if (!f) return;
    el.addEventListener("load", () => { el.classList.add("on"); const t = el.parentElement.querySelector(".brand-txt"); if (t) t.hidden = true; }); el.src = url(f); });
  const fav = $("link[rel=icon]"); if (fav && S.img.favicon) fav.href = url(S.img.favicon);

  /* social icons */
  const IC = { youtube: '<rect x="2.5" y="5" width="19" height="14" rx="4"/><path d="M10 9.5v5l4.5-2.5z" fill="currentColor"/>',
    spotify: '<circle cx="12" cy="12" r="9.5"/><path d="M6.8 9.6c3.4-1 7-.7 10.2 1M7.4 12.7c2.8-.8 5.6-.5 8.2.9M8 15.6c2.2-.5 4.3-.3 6.3.7"/>',
    soundcloud: '<path d="M3 14v3M6 12v5M9 10v7M12 8.5V17h6.2a3 3 0 0 0 .3-6A5.5 5.5 0 0 0 12 8.5z"/>',
    apple: '<path d="M9 17.5V7l9-2v10.5"/><circle cx="7" cy="17.5" r="2.2"/><circle cx="16" cy="15.5" r="2.2"/>',
    tiktok: '<path d="M14 4v10.5a3.5 3.5 0 1 1-3.5-3.5M14 4c.4 2.4 2 3.9 4.5 4"/>',
    instagram: '<rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17" cy="7" r=".8" fill="currentColor"/>',
    facebook: '<path d="M14 21v-8h2.7l.5-3.2H14V8c0-.9.4-1.6 1.7-1.6h1.6V3.5c-.4-.1-1.3-.2-2.3-.2-2.6 0-4.1 1.5-4.1 4.2v2.3H8.2V13h2.7v8z"/>' };
  const svg = n => `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${IC[n]}</svg>`;
  $$("[data-social]").forEach(b => { b.innerHTML = Object.keys(S.platforms).map(k => `<a class="soc" href="${esc(S.platforms[k].url)}" target="_blank" rel="noopener" aria-label="${S.platforms[k].name}">${svg(k)}</a>`).join(""); });
  $$("[data-platforms]").forEach(b => { b.innerHTML = Object.keys(S.platforms).map(k => `<a class="plat" href="${esc(S.platforms[k].url)}" target="_blank" rel="noopener">${svg(k)}<span>${S.platforms[k].name}</span></a>`).join(""); });

  /* navbar + progress + back to top */
  const nav = $("#nav"), prog = $("#prog"), top = $("#totop");
  const onS = () => { const y = scrollY, h = document.documentElement.scrollHeight - innerHeight;
    nav.classList.toggle("solid", y > 40 || $("#menu").classList.contains("show")); prog.style.width = (h > 0 ? y / h * 100 : 0) + "%"; top.hidden = y < 700; };
  addEventListener("scroll", onS, { passive: true }); onS();
  ["show.bs.collapse", "hidden.bs.collapse"].forEach(ev => $("#menu").addEventListener(ev, () => setTimeout(onS, 10)));
  top.addEventListener("click", () => scrollTo({ top: 0, behavior: "smooth" }));
  $$("#menu .nav-link").forEach(a => a.addEventListener("click", () => { const m = bootstrap.Collapse.getInstance($("#menu")); if (m) m.hide(); }));

  /* lightbox (Bootstrap modal) */
  const lbEl = $("#lbModal"), lb = new bootstrap.Modal(lbEl); let items = [], idx = 0;
  const show = () => { const it = items[idx]; $("#lbImg").src = it.src; $("#lbImg").alt = it.cap; $("#lbCap").textContent = it.cap; $("#lbN").textContent = `${idx + 1} / ${items.length}`; };
  const go = d => { idx = (idx + d + items.length) % items.length; show(); };
  function openLb(list, i) { items = list; idx = i; show(); lb.show(); }
  $("#lbPrev").addEventListener("click", () => go(-1)); $("#lbNext").addEventListener("click", () => go(1));
  lbEl.addEventListener("keydown", e => { if (e.key === "ArrowRight") go(1); if (e.key === "ArrowLeft") go(-1); });
  let x0 = null; lbEl.addEventListener("touchstart", e => { x0 = e.touches[0].clientX; }, { passive: true });
  lbEl.addEventListener("touchend", e => { if (x0 === null) return; const d = e.changedTouches[0].clientX - x0; if (Math.abs(d) > 50) go(d < 0 ? 1 : -1); x0 = null; });
  lbEl.addEventListener("hidden.bs.modal", () => { $("#lbImg").src = ""; });

  /* childhood + gallery + award */
  const chB = $("#childhood");
  if (chB) { const L = S.childhood.map(c => ({ src: url(c.file), cap: c.cap }));
    chB.innerHTML = S.childhood.map((c, i) => `<div class="col-6 ${i === 0 ? "col-lg-4" : "col-lg-4"}"><figure class="polaroid" data-rv><button class="pol-btn" data-i="${i}" aria-label="Open photo: ${esc(c.cap)}"><img src="${url(c.file)}" alt="${esc(c.cap)}" loading="lazy" onerror="this.closest('.col-6').hidden=true"></button><figcaption>${esc(c.cap)}</figcaption></figure></div>`).join("");
    chB.addEventListener("click", e => { const b = e.target.closest(".pol-btn"); if (b) openLb(L, +b.dataset.i); }); }
  const gB = $("#gallery");
  if (gB) { const L = S.gallery.map((f, i) => ({ src: url(f), cap: `Jesse Langley, photo ${i + 1}` }));
    gB.innerHTML = S.gallery.map((f, i) => `<button class="g" data-i="${i}" aria-label="Open photo ${i + 1}"><img src="${url(f)}" alt="Jesse Langley, photo ${i + 1}" loading="lazy" onerror="this.parentElement.hidden=true"></button>`).join("");
    gB.addEventListener("click", e => { const b = e.target.closest(".g"); if (b) openLb(L, +b.dataset.i); }); }
  $$("[data-zoom]").forEach(el => el.addEventListener("click", () => openLb([{ src: el.querySelector("img").src, cap: el.dataset.zoom }], 0)));

  /* YouTube Shorts */
  const ytId = u => { const m = String(u).match(/(?:shorts\/|v=|youtu\.be\/|embed\/)([\w-]{6,})/); return m ? m[1] : (/^[\w-]{6,}$/.test(u) ? u : ""); };
  const ytEl = $("#ytModal"), yt = new bootstrap.Modal(ytEl);
  $$("[data-shorts]").forEach(box => { const lim = +box.dataset.limit || S.shorts.length, list = S.shorts.slice(0, lim);
    box.innerHTML = list.map((s, i) => { const id = ytId(s.url); return `<div class="${box.dataset.cols || "col-6 col-md-4 col-lg-3"}"><button class="short ratio ratio-9x16" data-id="${id}" data-t="${esc(s.title)}" aria-label="Play ${esc(s.title)}">
      <span><img src="https://i.ytimg.com/vi/${id}/hq720.jpg" alt="" loading="lazy" data-id="${id}"><i class="play" aria-hidden="true"><svg viewBox="0 0 24 24" width="26" height="26"><path d="M8 5.5v13l11-6.5z" fill="currentColor"/></svg></i><b>${esc(s.title)}</b></span></button></div>`; }).join("");
    $$("img[data-id]", box).forEach(im => { const fb = () => { if (!im.dataset.f) { im.dataset.f = 1; im.src = `https://i.ytimg.com/vi/${im.dataset.id}/hqdefault.jpg`; } else im.hidden = true; };
      im.addEventListener("error", fb); im.addEventListener("load", () => { if (im.naturalWidth < 200) fb(); }); });
    box.addEventListener("click", e => { const b = e.target.closest(".short"); if (!b) return;
      $("#ytTitle").textContent = b.dataset.t; $("#ytLink").href = `https://www.youtube.com/shorts/${b.dataset.id}`;
      $("#ytFrame").src = `https://www.youtube-nocookie.com/embed/${b.dataset.id}?autoplay=1&rel=0&playsinline=1`; yt.show(); }); });
  ytEl.addEventListener("hidden.bs.modal", () => { $("#ytFrame").src = ""; });

  /* contact form -> Formspree */
  const f = $("#contactForm");
  if (f) f.addEventListener("submit", async e => { e.preventDefault(); f.classList.add("was-validated"); if (!f.checkValidity()) return;
    if ($("#website").value) return; /* honeypot */
    const btn = $("button[type=submit]", f), ok = $("#formOk"), bad = $("#formBad"); btn.disabled = true; btn.textContent = "Sending..."; bad.hidden = true;
    try { const r = await fetch(S.formspree, { method: "POST", body: new FormData(f), headers: { Accept: "application/json" } });
      if (!r.ok) throw new Error("bad"); f.hidden = true; ok.hidden = false; ok.focus(); }
    catch (_) { bad.hidden = false; btn.disabled = false; btn.textContent = "Send message"; } });

  /* scroll reveal */
  const rv = $$("[data-rv]");
  if ("IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const io = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } }), { threshold: .12 });
    rv.forEach(el => { el.classList.add("rv"); io.observe(el); });
  }
})();
