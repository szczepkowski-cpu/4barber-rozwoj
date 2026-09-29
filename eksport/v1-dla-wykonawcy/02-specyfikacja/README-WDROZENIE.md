# Wdrożenie karty produktu 4barber.pl (linia biała, stan v6) na Shoper Storefront

> Paczka dla rozmowy, która pracuje z Shoperem. Przygotowana 2026-09-28 z repo `szczepkowski-cpu/4barber-rozwoj`.
> Źródło prawdy o wyglądzie: **`pdp-v6.html`** w tej paczce (na żywo: https://szczepkowski-cpu.github.io/4barber-rozwoj/pdp-v6.html).
> Porównanie z obecną kartą: https://szczepkowski-cpu.github.io/4barber-rozwoj/porownanie-2026-09-27.pdf

## 1. Co wdrażamy i po co (2 zdania)
Karta produktu w tym samym wyglądzie co dzisiejszy sklep (Inter, biel, pomarańczowy przycisk, czerwone akcenty), ale z inną kolejnością:
na telefonie nazwa, ocena, cena, „Wysyłka w 24 h”, kolor i „Dodaj do koszyka” mieszczą się w pierwszym ekranie, a technikalia idą pod spód
jako liczby, linijka nasadek i „Co jest w pudełku”. Dziś na żywej karcie (pomiar 27.09, szer. 390 px) nazwa zaczyna się na 811 px, cena ok. 1 280 px,
przycisk w treści na 1 881 px; przyklejony przycisk Shopera jest, ale bez ceny.

## 2. Zasady (twarde)
- **Nic nie wymyślamy.** Każda liczba, parametr, opinia pochodzi z karty produktu w Shoperze. Dla NG-139 komplet faktów z datą: `dane-ng139-2026-09-27.md`.
  Brak danych (czas pracy baterii, waga, gwarancja w miesiącach) = nie pokazujemy, nie dopisujemy.
- **Zmiany na żywym sklepie tylko po akceptacji Szymona** i najpierw na kopii szablonu / w podglądzie. Do tego czasu sklep i panel = read-only.
- **Nie ruszamy:** checkoutu, modala „Dodano do koszyka” (jest dobry), nagłówka i menu, okien cookies/zniżki (osobna decyzja), analityki/GTM/edrone.
- Repo makiet jest publiczne: do niego nie trafiają żadne dane z panelu Shopera.

## 3. Co widzieliśmy w żywym szablonie (odczyt DOM 28.09, read-only)
- Sklep: **Shoper Premium, Storefront** (web components). Skin: `shoper_basic_copy_108` (kopia `shoper_basic`; własny CSS ładuje się z
  `/userdata/public/skins/shoper_basic_copy_108/cache/….css`; dodatkowo `externals/custom/6895038893648/style.*.css`).
- Karta to **kompozycja modułów** (`div.grid > div.grid__row > div.grid__col > div.module`). W prawej kolumnie dziś kolejno:
  `product-gallery` (lewa kolumna) · nazwa `h1.section-title.product-section-title` · `product-rating` · `product-short-description` (lista ✓ parametrów)
  · `product-price` (+ 4 ikony zaufania w tym samym module) · `product-quantity` · `buy-button` (`button.btn.btn_primary.btn_full-width`) + `add-to-favourites`
  · `product-shipping-time` · `product-codes`. Niżej: `product-description` (opis + wideo YouTube), `h-accordion` „Bezpieczeństwo produktu”, `product-review`.
- Telefon: `<sticky-mobile-bars>` ma slot `buy-button` (przyklejony „Dodaj do koszyka”), a dolny pasek Menu/Szukaj/Konto/Koszyk chowa się przy przewijaniu.
- Po dodaniu: `added-to-basket-modal` (pasek do darmowej dostawy 250 zł, „Skompletuj zestaw”) — zostaje bez zmian.
- Licznik „Paczka zostanie jutro wysłana / zamów przez HH:MM:SS” już istnieje (moduł nad ceną) — przenosimy i odchudzamy, nie budujemy od nowa.
- Warianty kolorów to **osobne produkty** (Czarna /111, Żółta /94, Pomarańczowa /95, Różowa /107), dziś moduł „Dostępne warianty” z 4 dużymi kaflami.

**WNIOSEK:** większość zmian to zmiana kolejności modułów w kreatorze + własny CSS skinu + 2–3 własne moduły HTML/JS. Nie potrzeba nowego skinu.

## 4. Kolejność docelowa (v6)
Telefon (jedna kolumna): galeria (300 px, kropki, licznik 1/8) → H1 → ocena → **cena + pastylka „Wysyłka w 24 h”** → **Kolor: Czarna + 4 próbki 48 px**
→ **Dodaj do koszyka + serce** → 4 gwarancje (2×2, wyciszone) → licznik (jedna linia) → **Technikalia** (4 kafle liczb, linijka nasadek, „Co jest w pudełku”,
Ostrza, Zasilanie + ostrzeżenie o ładowarce, „Pełna specyfikacja” w rozwijaku) → Dla kogo (2 karty) → wideo → O maszynce (intro + 3 kroki) → FAQ (akordeon)
→ Opinie → Co mówią barberzy (3 cytaty ze zdjęciem) → Skompletuj zestaw (3 produkty + próg 250 zł) → Bezpieczeństwo produktu (rozwijak) → stopka.
Desktop (1024+): galeria 55 % lewo (miniatury pionowo), **prawa szpalta = jedna karta z obramowaniem, `position: sticky`**: H1 → ocena → cena+wysyłka →
kolor → CTA → gwarancje → licznik. Treść pod galerią w lewej kolumnie.

Szczegóły każdej sekcji, źródło danych i zachowanie: **`SEKCJE.md`**. Kod: `pdp-v6.html` (całość), `pdp-v6.css`, `pdp-v6.js` (wyjęte dla wygody portowania).

## 5. Tokeny (z żywego sklepu, odczyt 27.09)
Tekst `#121212`, drugorzędny `#454545`, tło `#fff`, beż sekcji `#F4F2EE`, chip `#E2E5E9`, linia `#C5CBD3`, **CTA pomarańcz `#F57905`** (radius 10 px, 54 px, tekst biały 700),
czerwień akcentów `#C61D2E` (ikony zaufania, badge), zieleń dostępności `#2E9B4E`, pastylka wysyłki tło `#E9F6EC` / tekst `#1E7B3A`.
Fonty: **Inter** (tekst, H1), **Oswald 600** (nagłówki sekcji, liczby w kaflach). Promienie 10/14 px, cień `0 4px 6px -4px rgba(17,19,22,.08), 0 12px 16px -4px rgba(17,19,22,.08)`.

## 6. Kryteria odbioru (mierzalne, Playwright/DevTools)
1. Telefon 390×844, produkt NG-139 Czarna, po zamknięciu okien: dolna krawędź „Dodaj do koszyka” **≤ 730 px**; widoczne nazwa, ocena, cena, „Wysyłka w 24 h”, 4 próbki koloru.
2. Desktop 1440×900: „Dodaj do koszyka” w całości nad 900 px; prawa szpalta przyklejona przy przewijaniu.
3. Przyklejony pasek na telefonie pokazuje **cenę i dostępność obok przycisku** (dziś tylko przycisk).
4. Lista parametrów NIE występuje przed ceną; technikalia raz (kafle + linijka + pudełko), pełna tabela tylko w rozwijaku.
5. Wideo ma miniaturę (iframe YouTube dopiero po kliknięciu). Warianty kolorów jako próbki, nie kafle.
6. Modal „Dodano do koszyka”, checkout, analityka (GA4/GTM/edrone/TikTok) i JSON-LD działają jak przed zmianą (sprawdzić dataLayer po dodaniu do koszyka).
7. Zero nowych liczb spoza karty produktu.

Pomiar (konsola):
```js
const r = document.querySelector('buy-button button, .btn_primary.btn_full-width').getBoundingClientRect(); console.log(r.top + scrollY, r.bottom + scrollY)
```

## 7. Zawartość paczki
- `pdp-v6.html` · `pdp-v6.css` · `pdp-v6.js` — makieta i jej kod (statyczny, bez zależności; fonty z Google Fonts).
- `SEKCJE.md` — sekcja po sekcji: co, skąd dane w Shoperze, jak na telefonie/desktopie, zachowanie.
- `KOMENTARZE-SEKCJI.md` — komentarze z kodu HTML (po co jest każdy blok).
- `dane-ng139-2026-09-27.md` — wszystkie fakty produktu z datą odczytu.
- `assets/` — zdjęcia ze sklepu (`ng139/`), wycinanki z przezroczystym tłem (`ng139/cut/`, zrobione z tych zdjęć), logo, zdjęcia barberów ze strony głównej, produkty do zestawu.
  Mapowanie plików na zdjęcia w Shoperze (`/userdata/public/gfx/<id>/…`): `czarna-01`=2015 (miniatura, przód na stacji) · `02`=320 („-2”, ostrze z góry) · `03`=480 („-4”, stacja)
  · `04`=483 („-5”, z boku) · `05`=481 („-6”, spód z zaczepem) · `06`=482 („-7”, ostrze pod kątem) · `07`=484 („-8”, tył) · `08`=485 („-9”). Warianty: żółta 2033, pomarańczowa 2016, różowa 2018.
  Produkty do zestawu: trymer NG-339 gfx 2034, shaver NG-984A gfx 2385, NOTBAD Blade Oil gfx 2231. W Shoperze używać oryginałów, nie kopii z paczki.
- `zrzuty/` — v6 (telefon/desktop, pierwszy ekran i cała strona) oraz `obecna-karta/` (stan 27.09 do porównania).
