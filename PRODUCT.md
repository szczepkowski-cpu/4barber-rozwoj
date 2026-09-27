# Product

<!-- impeccable:product-schema 1 -->

> Zapisane 2026-09-27 na podstawie briefu `ui-4barber/BRIEF-ROZWOJ-4BARBER.md` i odczytu żywego 4barber.pl (27.09.2026).
> Wywiad Impeccable nie mógł się odbyć (wątek autonomiczny, Szymon nie odpowiada w trakcie) — pozycje oznaczone
> **[z briefu]** pochodzą wprost od Szymona, **[odczyt]** ze sklepu z datą, **[założenie]** to moje wnioski do potwierdzenia.

## Platform

web

## Stack

static HTML/CSS (+ minimalny JS) publikowane przez GitHub Pages — **[z briefu / CLAUDE.md repo]**. Makiety, nie kod produkcyjny;
docelowe wdrożenie na Shoper Premium (szablon sklepu) — **[odczyt]** stopka „Sklep internetowy Shoper Premium”.

## Users

- **Barberzy zawodowi** (praca przy fotelu, sprzęt na co dzień, liczy się moc, ostrza, ergonomia, serwis) — **[z briefu]**.
- **Prosumenci / „do domu”** (strzyżenie siebie i rodziny; szukają pewnego wyboru bez fachowej wiedzy) — **[odczyt]** kategoria
  „Do domu”, opisy „dla osób strzygących się w domu”, opinie klientek (Beata, Barbara).
- Sytuacja wejścia: **telefon, ruch płatny z Meta/Instagram** → lądowanie często bezpośrednio na karcie produktu — **[z briefu]**.
- Popup edrone segmentuje przy wejściu: „Barber” / „Prywatnie” — **[odczyt]** (sklep sam już rozróżnia dwie grupy).

## Product Purpose

Sklep 4barber.pl sprzedaje sprzęt barberski (maszynki, trymery, shavery, suszarki, nożyczki, kosmetyki, akcesoria, zestawy, części).
Cel projektu: **lepiej sprzedająca wersja obecnego sklepu**, rozpoznawalna dla dzisiejszych klientów jako ten sam 4barber,
zaczynając od karty produktu (mobile first). Sukces = wyższa konwersja karty (view_item → add_to_cart → purchase) — **[z briefu]**.

## Positioning

- **Oficjalny dystrybutor WMARK w Polsce** — **[odczyt]** pasek USP na stronie głównej; jedyna marka w kategorii Maszynki (32/32 produkty WMARK).
- **„Sprawdzone przez barberów”** + „Doradztwo barbera” + „Serwis w Polsce / door2door” + „Oryginalny sprzęt” — **[odczyt]** ikony
  zaufania pod ceną na karcie produktu i pasek USP.
- Najlepszy stosunek jakości do ceny (maszynka bestseller 229,99 zł vs marki premium) — **[odczyt]** USP + treść opinii
  („lepiej niż Babyliss i Dyson”, „nie spodziewałem się tego za taką cenę”).
- Oś „Oshix jest barberem, sprawdza sprzęt, ocenia i poleca” (Szymon, 17.07) — **[odczyt 27.09]** na żywym sklepie
  słowo „Oshix” **nie występuje** (strona główna, karta produktu). Oś istnieje w formie bezosobowej („Sprawdzone przez barberów”,
  „Doradztwo barbera”, wideo „Zobacz sprzęt w praktyce”, opinie barberów z Instagramem). **[założenie]** można ją wzmocnić,
  ale bez wymyślania osoby, której sklep dziś nie pokazuje.

## Operating Context

- Klient z reklamy ląduje na karcie; decyduje na telefonie, często w salonie między klientami — **[założenie]**.
- Zamówienie do godziny granicznej = wysyłka następnego dnia roboczego (licznik „Paczka zostanie jutro wysłana”) — **[odczyt]**.
- Dostawa: InPost Paczkomat / Kurier 9,99 zł, **darmowa od 250 zł**, pobranie +9,99 zł; płatności Przelewy24 (BLIK, karty,
  Google/Apple Pay, raty P24, PayPo) — **[odczyt koszyka 27.09]**.
- Promocja: „2 gratisy w koszyku za zakupy powyżej 599 zł” (pasek na górze każdej strony) — **[odczyt]**.
- Kontakt: Pon–Pt 8:00–16:00; Jolanta (obsługa) +48 535 206 437; Dawid (doradztwo techniczne) +48 791 659 359; kontakt@4barber.pl — **[odczyt]**.
- Checkout Shoper jednostronicowy (koszyk + dane + płatność + dostawa na jednej stronie) — **[odczyt]**.

## Capabilities and Constraints

- **Żywy sklep i panel = READ-ONLY.** Zero zmian, zamówień, logowań — **[z briefu]**.
- **Dane tylko ze źródła z datą odczytu**; brak = opisany brak. Zero zmyślonych cen, parametrów, opinii — **[z briefu]**.
- Repo publiczne → zero sekretów, zero danych z paneli — **[z briefu]**.
- Wersjonowanie: każda istotna zmiana = nowy plik z chipem (v1, v2…), stare zostają; `index.html` = galeria — **[CLAUDE.md repo]**.
- Nie korzystamy ze starych makiet (`4barber-sklep`, pdp-v1/v2, SPEC-PDP-V2) — **[z briefu]**.
- Decyzje designu podejmuje Szymon; ja daję warianty z rekomendacją — **[z briefu]**.
- Terminologia sklepu: maszynka, trymer, shaver, nasadki, ostrza ceramiczne, fade, kontury, „do domu” — **[odczyt]**.
- Warianty kolorystyczne to **osobne produkty** (NG-139 Czarna/Żółta/Pomarańczowa/Różowa = 4 URL-e) — **[odczyt]**.

## Brand Commitments

- Nazwa i logo „4BARBER” (SVG z sklepu: `assets/brand/4barber-logo-a.svg`; na mobile skrót „4b.”) — **[odczyt]**.
- Kolory dziś na sklepie **[odczyt CSS 27.09]**: czerwień marki `#C61D2E` (rgb 198,29,46 — hero, akcenty, ikony zaufania),
  **przycisk „Dodaj do koszyka” pomarańczowy `#F57905`** (rgb 245,121,5), gwiazdki pomarańczowe, tekst `#121212`, tło białe,
  jasny beż `#F4F2EE` w sekcjach hero. Fonty: **Inter** (body, H1), **Oswald 600** (nagłówki opisu), **Barlow** (hero, akcenty).
- Ton: konkretny, fachowy, bez „wciskania” („Pokazujemy konkretne parametry, testy i różnice między modelami — bez wciskania,
  że każdy sprzęt jest dla każdego”) — **[odczyt strony głównej]**.
- Nowa wersja ma być **rozpoznawalna jako ten sam sklep** — **[z briefu]**.

## Evidence on Hand

- Produkt referencyjny: **Maszynka WMARK NG-139 Czarna**, 229,99 zł, ocena 5.00 (13 ocen, 2 recenzje tekstowe: Beata 08.04.2026,
  Barbara 14.10.2025), wysyłka 24 h, kod M_139 Cz, GTIN 6971196418013, 8 zdjęć (`assets/ng139/`), wideo YouTube `qas1XSsTVe8`,
  parametry i opis z karty — **[odczyt 27.09, JSON-LD]**. Zapis faktów: `dane/ng139-2026-09-27.md`.
- Cross-sell z modala „Skompletuj zestaw”: Trymer NG-339 Czarny 169,99 zł; Shaver NG-984A Czarny 169,99 zł; NOTBAD Blade Oil 60 ml 19,99 zł — **[odczyt]**.
- Opinie barberów ze strony głównej (imię, „Barber @instagram”, cytat, zdjęcie): Akim Dashko, Piotr Mucha, Łukasz Bronikowski,
  Wiktoria Roszak, Jędrys; klienci: Krzysztof, Łucja, Svitlana, Bartek, Marta (Fryzjer), Magda (Barberka, 20 lat), Beata (Fryzjer) — **[odczyt]**.
- Zrzuty stanu obecnego: `zrzuty/audyt-2026-09-27/`.
- **Brak:** liczb sprzedaży/CR, danych o zwrotach (link „Zwroty i reklamacje” istnieje, treści nie odczytano), okresu gwarancji
  (tylko hasło „Serwis i gwarancja — door2door”), osoby „Oshix” na żywym sklepie. Tych rzeczy nie wymyślamy.

## Product Principles

1. **Karta sprzedaje na telefonie w 10 sekund**: cena, dostępność, CTA i najważniejszy powód zakupu bez scrolla.
2. **Dowód zamiast przymiotnika**: parametry, wideo, opinie barberów z nazwiskiem — nic, czego nie ma w źródle.
3. **Ten sam sklep, lepszy**: klient z reklamy ma poznać 4barber, nie uczyć się nowej marki.
4. **Uczciwa pilność**: realny licznik wysyłki, realny próg darmowej dostawy, realna dostępność; zero fałszywych timerów.
5. **Jedna ścieżka**: mniej rozpraszaczy (popupy, paski) między lądowaniem a „Dodaj do koszyka”.

## Accessibility & Inclusion

Standardowe minimum WCAG AA (kontrast tekstu, cele dotykowe ≥44 px, treść bez polegania wyłącznie na kolorze). Brak dodatkowych wymagań od Szymona — **[założenie]**.
