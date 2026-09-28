# Sekcje karty v6 — co, skąd dane, jak się zachowuje

Legenda źródeł: **[pole]** = standardowe pole/moduł Shopera · **[opis]** = z opisu produktu (HTML w panelu) · **[ręcznie]** = treść per produkt do wpisania/ustalenia · **[sklep]** = ustawienia sklepu.

| # | Sekcja (v6) | Skąd dane | Telefon | Desktop | Zachowanie |
|---|---|---|---|---|---|
| 1 | Pasek gratisów „Odbierz w koszyku 2 gratisy…” | istniejący moduł | 36 px, jak dziś | jak dziś | bez zmian |
| 2 | Galeria | `product-gallery` [pole] | 300 px, przewijanie, kropki, licznik „1/8”, logo WMARK w rogu | 55 % szerokości, miniatury pionowo 80 px, strzałki | jak dziś, mniejsza wysokość na telefonie |
| 3 | Nazwa | `h1` [pole] | 21 px, 1–2 linie | 28 px | — |
| 4 | Ocena | `product-rating` [pole] | „★★★★★ 5.00 · 13 ocen · 2 recenzje”, link do #opinie | jw. | przewija do opinii |
| 5 | Cena + wysyłka | `product-price` + `product-shipping-time` [pole] | cena 32 px + zielona pastylka „Wysyłka w 24 h” w jednej linii | cena 36 px | pastylka z ikoną ciężarówki; brak stanu = pastylka szara „W oczekiwaniu na dostawę” + przycisk „Powiadom mnie” (stan do dopracowania po wyborze) |
| 6 | Kolor | moduł „Dostępne warianty” (produkty powiązane) [pole] | „Kolor: Czarna” + 4 próbki 48 px w jednej linii | 48 px | próbka = link do produktu w tym kolorze; aktywna z pomarańczową ramką |
| 7 | Dodaj do koszyka + ulubione | `buy-button`, `add-to-favourites` [pole]; `product-quantity` ukryty lub kompaktowy | pełna szerokość 54 px + serce 54 px | jw. | otwiera istniejący `added-to-basket-modal` |
| 8 | Gwarancje (4) | istniejący blok ikon w module ceny | 2×2, ikona 18 px czerwona, tekst 13 px szary | 2×2 | statyczne |
| 9 | Licznik wysyłki | istniejący moduł licznika | jedna linia: ikona zegara, „Paczka zostanie jutro wysłana · zamów przez 19 godz. 01 min. 07 sek.” | jw. | mechanizm sklepu; bez ramki i bez kafli |
| 10 | Technikalia: 4 kafle liczb | `product-short-description` / cechy [pole] + [ręcznie] rpm z opisu | 2×2 kafle beżowe, liczba Oswald 32 px, jednostka pod liczbą, podpis 13 px | 4 w rzędzie | dla NG-139: 8000–8500 obr./min · 8 nasadek (3–25 mm) · 0,5–2 mm samym ostrzem · 1,8 m kabel |
| 11 | Linijka nasadek | cecha „Regulacja długości strzyżenia” [pole] → lista mm | SVG skala 0–26 mm, 8 stopni + strefa ostrza 0,5–2; przyciski 44 px | jw. | JS: parsuje „3 mm, 6 mm, …” → stopnie; dotknięcie przesuwa wskaźnik i odczyt; przycisk „Samym ostrzem 0,5–2 mm” (z opisu) |
| 12 | Co jest w pudełku | cecha „Zawartość zestawu” [pole] → lista; zdjęcia [ręcznie] | 6 kafli 3×2, licznik „1×/8×”, zdjęcie lub ikona SVG | 6 w rzędzie | zdjęcia z wycinanek: maszynka `assets/ng139/cut/czarna-04.png` (zdjęcie sklepu „-5”, gfx 483), stacja `czarna-03.png` („-4”, gfx 480); reszta ikony SVG |
| 13 | Ostrza / Zasilanie | [opis] + cechy | 2 karty pod sobą: zdjęcie 96 px + tytuł Oswald + 2 zdania; w „Zasilanie” ostrzeżenie o ładowarce USB 5V 1A/2A (dosłownie z opisu) | jw., szerzej | statyczne |
| 14 | Pełna specyfikacja | `product-short-description` [pole] jako tabela 2 kol. | rozwijak zamknięty | jw. | `<details>` |
| 15 | Dla kogo | [opis] („Dla kogo”, FAQ o fade i zakresie) | 2 beżowe karty: „Przy fotelu”, „W domu”, po 2 zdania | 2 karty pod sobą obok wideo | statyczne |
| 16 | Wideo | `product-description` — dzisiejszy embed YouTube [pole] | 260 px szer., 9:16, miniatura + play | jw. | iframe `youtube-nocookie` ładuje się po kliknięciu (waga strony) |
| 17 | O maszynce + 3 kroki | [opis] (akapit intro + „Jak używać i dbać”) | intro 17 px + 3 karty kroków (numer w kółku) | 3 w rzędzie | bez „Co wyróżnia” (dubel kafli) |
| 18 | FAQ | [opis] (3 pytania) | akordeon `h-accordion` | jw. | zamknięty |
| 19 | Opinie | `product-review` [pole] | średnia 5.00 + „13 ocen · 2 recenzje”, przycisk „Oceń i opisz”, recenzje | jw. | jak dziś |
| 20 | Co mówią barberzy | moduł opinii ze strony głównej (Wiktoria Roszak, Akim Dashko, Jędrys) [istniejący blok HP] | 3 karty: cytat, zdjęcie 52 px, imię, „Barber @instagram”; podpis „Opinie ze strony głównej sklepu” | 3 w rzędzie na beżu | statyczne |
| 21 | Skompletuj zestaw | produkty z `added-to-basket-modal` [pole] + próg darmowej dostawy 250 zł [sklep] | 3 kafle + zdanie „Darmowa dostawa od 250 zł — z tą maszynką brakuje 20,01 zł” (liczone z ceny) | jw. | „Dodaj” → koszyk |
| 22 | Bezpieczeństwo produktu | istniejący `h-accordion` [pole] | zamknięty | jw. | bez zmian |
| 23 | Stopka | istniejąca | bez zmian | bez zmian | — |
| 24 | Sticky pasek (telefon) | `sticky-mobile-bars` [pole] + `product-price` | po przewinięciu głównego CTA: **cena + „Wysyłka w 24 h”** po lewej, przycisk po prawej | brak (szpalta sticky) | IntersectionObserver na głównym CTA (w makiecie) |

## Stany do dopracowania po wyborze (nie w tej paczce)
- Brak na stanie: pastylka szara, „Powiadom mnie o dostępności” zamiast CTA (istniejący `availability-notifier-btn`), sticky pasek bez ceny.
- Produkt bez cechy „Regulacja długości” (np. kosmetyk): sekcja Technikalia pokazuje tylko kafle z dostępnych cech, linijka ukryta.

## Czego nie ma w makiecie, a jest na żywym sklepie (celowo pominięte)
Okno cookies, popup zniżki (edrone), baner rat Przelewy24 pod przyciskiem (do decyzji: zostawić w rozwijaku „Raty” pod ceną).
