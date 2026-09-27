# 4barber-rozwoj — przewodnik dla agenta (repo)

Rozwój **obecnego sklepu 4barber.pl** — nowa wersja, która wychodzi od tego, jak sklep wygląda i działa DZIŚ,
i robi go lepszym (sprzedaż, telefon, szybkość, zaufanie). Brief i kontekst: `../ui-4barber/BRIEF-ROZWOJ-4BARBER.md`.

## Zasady
- **Punkt wyjścia = żywy 4barber.pl (Shoper Premium), oglądany read-only.** Nie opieraj się na starych projektach
  (repo `4barber-sklep`: kierunki z lipca, `pdp-v1`, `pdp-v2`, `SPEC-PDP-V2.md`) — ani jako wzorze, ani jako anty-wzorze.
- **Żywy sklep i panel Shoper = READ-ONLY.** Żadnych zmian, zamówień, logowań.
- **Dane tylko ze źródła:** ceny, dostępność, parametry, opinie — z żywych stron (JSON-LD, treść), z datą odczytu. Braki opisuj jako brak.
- **Repo jest PUBLICZNE** (GitHub Pages) → zero sekretów, kluczy i danych z paneli.
- **Publikacja:** push na `main` → Pages https://szczepkowski-cpu.github.io/4barber-rozwoj/ . Po bootstrapie zmiany przez PR.
- **Wersjonowanie:** każda istotna zmiana = nowy plik/wersja z chipem (v1, v2…), poprzednie zostają; `index.html` = galeria wersji.
- **Propozycje dla Szymona = link + zrzuty w wiadomości** (obrazki markdown z absolutną ścieżką; mobile 390×844 i desktop 1440).
- **Jakość:** Impeccable (bramka `impeccable detect` przed merge, cel 0), frontend-design, ecom-cro. Ścieżki `assets/` relatywne, `<meta charset="UTF-8">`.

## Obowiązek dokumentacji
Po każdej wersji w tym samym commicie: „Stan projektu” niżej + `README.md`; poza repo: brief tematu i pamięć
`…/memory/4barber-rozwoj.md` + linijka w `MEMORY.md` (dopisywana `>>`).

## Stan projektu
- **2026-09-27 · bootstrap** — repo, Pages, pusta galeria. Robota startuje w wątku T3 „4barber: rozwój sklepu od obecnego 4barber.pl”.
- **2026-09-27 · przegląd + 3 propozycje karty produktu (v1–v3)** — `przeglad-2026-09-27.html` (zrzuty żywego sklepu mobile/desktop + diagnoza: na karcie NG-139 nazwa 811 px / cena ≈1 280 px / CTA w treści 1 881 px na telefonie; ⚠️ KOREKTA 27.09 noc: Shoper MA przyklejony „Dodaj do koszyka” na mobile (bez ceny) — wcześniejszy wpis „brak sticky CTA” był błędny; 3 warstwy popupów przy wejściu; checkout i modal po dodaniu do koszyka = zostają). Karta bestsellera **Maszynka WMARK NG-139 Czarna** (fakty z datą: `dane/ng139-2026-09-27.md`, zasoby `assets/`): **`pdp-v1.html`** „Porządek” (ten sam wygląd, nowa kolejność, sticky CTA; Opus), **`pdp-v2.html`** „Stanowisko” (ciemna mata, 3 liczby, barberzy z nazwiskiem; Opus), **`pdp-v3.html`** „Karta techniczna” (czarny arkusz spec, linijka nasadek, skala obrotów; Fable, kierunek z rzutu Impeccable seed be92ccb1). `PRODUCT.md` (Impeccable init, wywiad zastąpiony briefem — założenia oznaczone), kontrakty kierunków w `.impeccable/surfaces/`. Rekomendacja: v3 jako kierunek, z buy-boxem i sticky CTA z v1. Czeka na wybór Szymona → potem stany (brak na stanie, po dodaniu) i kolejne strony.
- **2026-09-27 · decyzja Szymona + v4 + PDF** — Szymon: „czarną rób tylko 1; biała powinna też mieć w prawej szpalcie technikalia jak aktualnie (osobna wersja); zrób PDF”. Zrobione: **`pdp-v4.html`** = v1 z listą parametrów (ptaszki) w prawej szpalcie pod oceną jak na obecnym sklepie (desktop), na telefonie lista pod ikonami zaufania (cena+CTA zostają w 1. ekranie); tabela „Parametry” usunięta (dubel). Czarna = **v3** (v2 wycofana z galerii, plik zostaje). **`raport-2026-09-27.pdf`** (z `raport-2026-09-27.html`, Playwright A4): przegląd + v1/v4/v3 + porównanie + rekomendacja. Galeria: v1, v4, v3 + link do PDF.
- **2026-09-27 · v5 + PDF porównawczy** — Szymon: „rozwiń v1, uporządkuj szpaltę, technikalia fajnie pod spodem, ale pokażmy kreatywniej” + „porównanie PDF nowe vs stara”. **`pdp-v5.html`** = v1 rozwinięte: szpalta (kolor w linii z próbkami, zaufanie jednym rzędem, smukły licznik), sekcja „Technikalia” zamiast tabeli (4 kafle liczb, linijka nasadek jak w v3 w jasnej palecie, „Co jest w pudełku” 6 kafli ze zdjęciami/ikonami, materiał+zasilanie, pełna tabela w `<details>`). **`porownanie-2026-09-27.pdf`** (A4 poziomo, z `porownanie-2026-09-27.html`): obecna karta (pomiar Playwright: nazwa 811 px, CTA 1 881 px na telefonie; CTA 1 039 px na desktopie) vs v5/v4/v3 + tabela różnic. Galeria: v5, v4, v3 (v1, v2 = historia).
