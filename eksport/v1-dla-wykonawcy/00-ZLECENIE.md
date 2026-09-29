# Zlecenie: nowa karta produktu w sklepie 4barber.pl (Shoper Storefront)

Data: 2026-09-29 · Zleceniodawca: Szymon Szczepkowski, 4barber.pl · Wersja makiety: **v6** (linia biała; w rozmowach nazywana „v1”)

## 1. Cel w dwóch zdaniach
Karta produktu ma wyglądać jak dzisiejszy sklep (te same kolory, fonty, przycisk), ale sprzedawać lepiej na telefonie: nazwa, ocena, cena, „Wysyłka w 24 h”,
kolor i „Dodaj do koszyka” w pierwszym ekranie, a technikalia pod spodem jako liczby, linijka nasadek i „Co jest w pudełku”, bez ściany tekstu.
Wzorcem jest **`01-makieta/pdp-v6.html`** (otwórz w przeglądarce: telefon 390 px i desktop 1440 px). Na żywo: https://szczepkowski-cpu.github.io/4barber-rozwoj/pdp-v6.html

## 2. Co dostajesz w tej paczce
| Folder | Co to |
|---|---|
| `01-makieta/` | Makieta HTML+CSS+JS z zasobami (działa offline, fonty z Google Fonts). Plik główny `pdp-v6.html`; CSS i JS wyjęte obok dla wygody. |
| `02-specyfikacja/` | `SEKCJE.md` (24 sekcje: skąd dane, układ, zachowanie), `README-WDROZENIE.md` (co widać w żywym szablonie, kolejność, tokeny, kryteria), fakty produktu `dane-ng139-2026-09-27.md`. |
| `03-pdf/` | `SPECYFIKACJA.pdf` (to zlecenie + sekcje + README w jednym), `raport-2026-09-27.pdf` (przegląd sklepu i propozycje), `porownanie-2026-09-27.pdf` (obecna karta vs nowa, z pomiarami). |
| `04-zrzuty/` | Zrzuty makiety v6 (telefon/desktop, pierwszy ekran i cała strona) oraz obecnej karty i koszyka (`obecna-karta/`). |
| `05-warianty-archiwum/` | Wcześniejsze warianty — tylko do wglądu, nie do wdrożenia. |

## 3. Zakres prac (co masz zrobić)
1. **Przebudować kartę produktu w Shoper Storefront** tak, by odpowiadała makiecie v6 na telefonie (390 px) i desktopie (1440 px) — kolejność i układ z `SEKCJE.md`.
   Z odczytu żywego szablonu: karta to kompozycja modułów (`product-gallery`, nazwa, `product-rating`, `product-short-description`, `product-price`, `product-quantity`, `buy-button`,
   `product-shipping-time`, `product-codes`, `product-description`, `product-review`, `h-accordion`), skin `shoper_basic_copy_108`. Spodziewamy się: przestawienia modułów w kreatorze,
   CSS w skinie i 2–3 własnych modułów HTML/JS (Technikalia z linijką nasadek i „Co jest w pudełku”, „Co mówią barberzy”, „Skompletuj zestaw” na karcie).
2. **Prawa szpalta (desktop) jako jedna karta**: nazwa → ocena → cena + zielona pastylka „Wysyłka w 24 h” → „Kolor: …” z próbkami w jednej linii → „Dodaj do koszyka” + serce →
   4 gwarancje (2×2, wyciszone) → licznik wysyłki jedną linią. Szpalta przyklejona przy przewijaniu.
3. **Telefon**: ta sama kolejność w jednej kolumnie; przyklejony pasek na dole ma pokazywać **cenę i dostępność obok przycisku** (dziś tylko przycisk).
4. **Technikalia pod zakupem** (patrz sekcje 10–14 w `SEKCJE.md`): cztery kafle liczb, linijka nasadek zbudowana z cechy „Regulacja długości strzyżenia”, „Co jest w pudełku” z cechy „Zawartość zestawu”,
   karty Ostrza/Zasilanie, pełna tabela parametrów w rozwijaku. Lista parametrów NIE może już stać przed ceną.
5. **Treść pod spodem**: „Dla kogo” jako dwie krótkie karty, wideo z miniaturą (iframe YouTube dopiero po kliknięciu), „O maszynce” = intro + trzy kroki pielęgnacji, FAQ jako akordeon,
   opinie produktu, „Co mówią barberzy” (3 cytaty ze strony głównej), „Skompletuj zestaw” z progiem darmowej dostawy 250 zł, „Bezpieczeństwo produktu” w rozwijaku.
6. **Rozwiązanie ma być szablonowe**, nie tylko dla NG-139: sekcje budują się z pól produktu (cechy, opis, produkty powiązane). Gdy produkt nie ma danej cechy, sekcja się nie pokazuje (np. brak linijki dla kosmetyku).
   Treści opisowe (intro, kroki, „Dla kogo”) pochodzą z opisu produktu w panelu — uzgodnij z nami prostą konwencję (np. nagłówki w opisie), którą szablon rozpozna.
7. **Praca na kopii szablonu / w podglądzie**, publikacja dopiero po naszej akceptacji na wskazanych produktach (NG-139 Czarna jako wzorzec + 2 inne kategorie do sprawdzenia: trymer, kosmetyk).

## 4. Czego nie ruszać
Checkout, modal „Dodano do koszyka” (jest dobry), nagłówek i menu, okna cookies i zniżki (edrone), analityka (GA4/GTM, TikTok, edrone), JSON-LD produktu, treści produktów (nie edytujesz opisów bez uzgodnienia).

## 5. Twarde zasady
- **Zero wymyślonych danych.** Każda liczba i tekst na karcie pochodzi z pól produktu w Shoperze. Nie dopisujesz cech, których produkt nie ma (np. czas pracy baterii, gwarancja w miesiącach).
- Wygląd = tokeny z `README-WDROZENIE.md` (Inter, Oswald, pomarańcz `#F57905`, czerwień `#C61D2E`, promienie 10/14 px). Nie wprowadzaj nowych kolorów ani fontów.
- Wszystko, co dotyka analityki lub koszyka, sprawdzasz przed i po (dataLayer po „Dodaj do koszyka”, zdarzenia view_item / add_to_cart).

## 6. Kryteria odbioru (mierzymy, nie oceniamy „na oko”)
1. Telefon 390×844, NG-139 Czarna, po zamknięciu okien: dolna krawędź „Dodaj do koszyka” ≤ 730 px; w pierwszym ekranie widać nazwę, ocenę, cenę, „Wysyłka w 24 h” i próbki koloru.
2. Desktop 1440×900: „Dodaj do koszyka” w całości nad 900 px; prawa szpalta przyklejona.
3. Przyklejony pasek na telefonie pokazuje cenę i dostępność obok przycisku.
4. Parametry nie występują przed ceną; technikalia raz; pełna tabela tylko w rozwijaku.
5. Wideo ma miniaturę; warianty kolorów jako próbki, nie kafle.
6. Modal „Dodano do koszyka”, checkout, analityka i JSON-LD działają jak przed zmianą.
7. Działa na 3 produktach z różnych kategorii (maszynka, trymer, kosmetyk) bez błędów w konsoli; Lighthouse mobile Performance nie gorszy niż przed zmianą.
Pomiar w konsoli przeglądarki: `const r=document.querySelector('.btn_primary.btn_full-width').getBoundingClientRect(); console.log(r.top+scrollY, r.bottom+scrollY)`

## 7. Co dostarczasz
- Wdrożenie na kopii szablonu + link do podglądu; po akceptacji publikacja.
- Krótki opis, co zmieniłeś (moduły, pliki CSS/JS, własne moduły) — tak, żebyśmy mogli to utrzymać.
- Zrzuty telefon/desktop dla 3 produktów + wyniki pomiaru z punktu 6.

## 8. Otwarte punkty do ustalenia na starcie
- Stan „brak na stanie”: pastylka szara + „Powiadom mnie o dostępności” zamiast przycisku (istniejący mechanizm Shopera) — potwierdzić układ.
- Konwencja treści w opisie produktu (intro / „Dla kogo” / kroki / FAQ), żeby szablon je rozpoznawał.
- Baner rat Przelewy24 pod przyciskiem: zostawić jako rozwijak pod ceną czy usunąć z karty.

Kontakt w sprawie zlecenia: Szymon Szczepkowski (4barber.pl).
