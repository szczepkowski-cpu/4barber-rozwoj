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
