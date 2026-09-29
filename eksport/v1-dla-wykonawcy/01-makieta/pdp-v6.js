/* JS wyjęte z pdp-v6.html. Zachowania: galeria (miniatury/kropki/strzałki), licznik do 16:00, sticky CTA (IntersectionObserver), swatche kolorów, wideo po kliknięciu, panel „Dodano do koszyka” (makieta), linijka nasadek (SVG). */
/* Zachowanie makiety: galeria, warianty, zakładki, wideo, licznik do 16:00, sticky CTA, panel koszyka. Bez zależności. */
(function () {
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  // Galeria: licznik/kropki/miniatury śledzą przewijany tor; miniatury i strzałki przewijają tor.
  var track = $('#track'), slides = $$('.slide', track), dots = $$('#dots span'), thumbs = $$('#thumbs button'), cur = 0;
  function mark(i) {
    cur = i; $('#gal-i').textContent = i + 1;
    dots.forEach(function (d, k) { d.classList.toggle('on', k === i); });
    thumbs.forEach(function (t, k) { t.setAttribute('aria-current', k === i ? 'true' : 'false'); });
  }
  function go(i) { i = (i + slides.length) % slides.length; track.scrollTo({ left: slides[i].offsetLeft - track.offsetLeft, behavior: 'smooth' }); mark(i); }
  track.addEventListener('scroll', function () { var i = Math.round(track.scrollLeft / track.clientWidth); if (i !== cur) mark(i); }, { passive: true });
  thumbs.forEach(function (t, k) { t.addEventListener('click', function () { go(k); }); });
  $$('.gal-arrow').forEach(function (b) { b.addEventListener('click', function () { go(cur + (+b.dataset.dir)); }); });

  // Warianty koloru: w sklepie to osobne produkty w tej samej cenie; tu podmieniamy nazwę i zdjęcie główne.
  $$('.swatch').forEach(function (s) {
    s.addEventListener('click', function () {
      $$('.swatch').forEach(function (o) { o.setAttribute('aria-pressed', o === s ? 'true' : 'false'); });
      var n = s.dataset.name; $('#v-name').textContent = n; $('#p-color').textContent = n; $('#added-color').textContent = n;
      $('#main-img').src = s.dataset.img; go(0);
    });
  });

  // Ulubione: tylko stan wizualny.
  $$('.fav').forEach(function (f) { f.addEventListener('click', function () { f.setAttribute('aria-pressed', f.getAttribute('aria-pressed') === 'true' ? 'false' : 'true'); }); });

  // Zakładki „Dla kogo” (klawiatura: strzałki).
  var tabs = $$('[role=tab]');
  function sel(t) {
    tabs.forEach(function (o) { var on = o === t; o.setAttribute('aria-selected', on); o.tabIndex = on ? 0 : -1; $('#' + o.getAttribute('aria-controls')).hidden = !on; });
    t.focus();
  }
  tabs.forEach(function (t, k) {
    t.addEventListener('click', function () { sel(t); });
    t.addEventListener('keydown', function (e) { if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') { e.preventDefault(); sel(tabs[(k + (e.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length]); } });
  });

  // Wideo: iframe dopiero po kliknięciu (nocookie).
  $('#video button').addEventListener('click', function () {
    var f = document.createElement('iframe');
    f.src = 'https://www.youtube-nocookie.com/embed/qas1XSsTVe8?autoplay=1&rel=0';
    f.title = 'Zobacz sprzęt w praktyce'; f.allow = 'autoplay; encrypted-media; picture-in-picture'; f.allowFullscreen = true;
    $('#video').replaceChildren(f);
  });

  // Licznik: do najbliższej 16:00 (dziś albo jutro).
  function pad(n) { return (n < 10 ? '0' : '') + n; }
  function tick() {
    var now = new Date(), t = new Date(now); t.setHours(16, 0, 0, 0); if (t <= now) t.setDate(t.getDate() + 1);
    var s = Math.floor((t - now) / 1000);
    $('#t-h').textContent = pad(Math.floor(s / 3600)); $('#t-m').textContent = pad(Math.floor(s % 3600 / 60)); $('#t-s').textContent = pad(s % 60);
  }
  tick(); setInterval(tick, 1000);

  // Sticky CTA: widoczny tylko, gdy główny przycisk jest poza ekranem.
  var sticky = $('#sticky'), stickyBtn = $('.js-add', sticky);
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (es) {
      var hide = es[0].isIntersecting;
      sticky.classList.toggle('show', !hide); sticky.setAttribute('aria-hidden', hide); stickyBtn.tabIndex = hide ? -1 : 0;
      document.body.classList.toggle('has-sticky', !hide);
    }).observe($('#main-cta'));
  }

  // Panel „Dodano do koszyka”.
  var dlg = $('#added');
  function openAdded() { $('#cart-count').textContent = '1'; dlg.showModal(); }
  $$('.js-add').forEach(function (b) { b.addEventListener('click', openAdded); });
  if (location.hash === '#dodano') openAdded(); // link podglądu panelu: pdp-v1.html#dodano
  $$('[data-close]', dlg).forEach(function (b) { b.addEventListener('click', function () { dlg.close(); }); });
  dlg.addEventListener('click', function (e) { if (e.target === dlg) dlg.close(); });
  $$('.js-x').forEach(function (b) {
    b.addEventListener('click', function () { var on = b.getAttribute('aria-pressed') !== 'true'; b.setAttribute('aria-pressed', on); b.textContent = on ? 'Dodano' : 'Dodaj'; });
  });
})();



/* v5: linijka nasadek — skala 0–26 mm rysowana z danych karty, osiem stopni + strefa samego ostrza; dotknięcie ustawia wskaźnik */
(function(){
  const NS='http://www.w3.org/2000/svg', mk=(t,a)=>{const e=document.createElementNS(NS,t);for(const k in a)e.setAttribute(k,a[k]);return e;};
  const X=mm=>10+mm*13;
  const base=document.getElementById('rulerBase'); if(!base) return;
  for(let mm=0;mm<=26;mm++){const h=mm%5?6:12;base.appendChild(mk('line',{x1:X(mm),y1:54,x2:X(mm),y2:54+h}));}
  const stops=[3,6,10,13,16,19,22,25], g=document.getElementById('rulerStops');
  stops.forEach(mm=>{g.appendChild(mk('line',{x1:X(mm),y1:40,x2:X(mm),y2:54,stroke:'#121212','stroke-width':1.5}));const t=mk('text',{x:X(mm),y:36,fill:'#121212','font-family':'Oswald, sans-serif','font-weight':600,'font-size':12,'text-anchor':'middle'});t.textContent=mm;g.appendChild(t);});
  const cur=document.getElementById('rulerCursor'), val=document.getElementById('stopVal'), txt=document.getElementById('stopTxt'), zone=document.getElementById('bladeZone');
  const setStop=mm=>{const blade=mm==='blade';cur.setAttribute('transform',`translate(${blade?X(1.25):X(mm)},72)`);val.textContent=blade?'0,5–2':mm;txt.textContent=blade?'samym ostrzem: kontury, wykończenia':'nasadka w zestawie';zone.setAttribute('opacity',blade?'.45':'.12');document.querySelectorAll('.stops button').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.mm===String(mm))));};
  document.querySelectorAll('.stops button').forEach(b=>b.addEventListener('click',()=>setStop(b.dataset.mm==='blade'?'blade':+b.dataset.mm)));
  setStop(3);
})();
