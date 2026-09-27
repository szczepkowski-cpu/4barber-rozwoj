---
version: 1
slug: "pdp-v1-html"
primary_target: "pdp-v1.html"
related_targets: []
---

# Karta produktu v1 „Porządek” — ostrożna ewolucja (Persuade)

Zakres: `pdp-v1.html`, karta NG-139 Czarna, mobile 390 first + desktop 1440. Odbiorca: klient z reklamy na telefonie (barber albo „do domu”).
Zadanie: dodać do koszyka w mniej niż 10 s od lądowania. Dowody: fakty z `dane/ng139-2026-09-27.md` (bez wyjątków).
Nietykalne: wygląd obecnego sklepu (Inter, biel, CTA pomarańczowy #F57905, czerwień #C61D2E, Oswald w opisie), logo, treści karty.

## Direction contract
THESIS: Ta sama karta 4barber, ale ułożona pod telefon: cena, dostępność i „Dodaj do koszyka” w pierwszym ekranie, a CTA nigdy nie znika (sticky). Odrzuca obecny stos Shoper (galeria → licznik → nazwa → lista parametrów → cena → CTA ~1400 px niżej) i piętrowe popupy.
OWN-WORLD: Świat zastany 1:1 — biel #FFF, tekst #121212, Inter 400/600/700, CTA #F57905 r10 54 px, czerwień #C61D2E tylko w ikonach zaufania i akcentach, chipy #E2E5E9, karty z miękkim cieniem, Oswald 600 w nagłówkach opisu. Zero nowych kolorów.
STORY: Poznaję sklep → widzę 229,99 zł i „Wysyłka w 24 h” → widzę 5.00 (13 ocen) i ikony zaufania → wybieram kolor → dodaję → dowiaduję się, że do darmowej dostawy brakuje 20,01 zł.
FIRST VIEWPORT (390×844): pasek gratisów 36 px → nagłówek (logo, lupa, koszyk) → breadcrumb 1 linia → galeria 1:1 max 300 px z kropkami → H1 → gwiazdki „5.00 · 13 ocen” → cena 32 px + zielone „Wysyłka w 24 h” → 4 swatche kolorów → CTA pełna szerokość + serce → rząd 4 ikon zaufania. Desktop: galeria 55 % lewo, buy-box prawo sticky.
FORM: „Extend an existing surface” — świat odziedziczony, bez rzutu kierunku (seed be92ccb1 dotyczy v3).
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
