# Portfolio Leo Jaerisch — Briefing

Statisches Portfolio (HTML/CSS/Vanilla-JS), ersetzt die alte Squarespace-Seite.
Deploy: GitHub Pages, später Domain leojaerisch.com. Kein Framework, kein Build-Tool.

## Wer

Leo Jaerisch — Hamburg. Art Director, Grafikdesigner, Galerist, Videograf, Fotograf.
Gründer der Künstlerbörse. Tiefes AI-Know-how, fest in den Workflow integriert.
Ziel der Seite: buchbar für Freelance-Projekte wirken — ohne aufdringlich zu verkaufen.
Ton: selbstbewusst, reduziert, nicht cringe, nicht nach KI klingend. Wenig Text. Sprache: Englisch.

## Design-Richtung (verbindlich)

Referenz: playfight.co — editorial, hell, ruhig, viel Weißraum.

- Grundfarbe Weiß/Off-White (#FCFCFA), Schrift Schwarz. Keine Akzentfarben, kein Neon.
- Hanken Grotesk führt (Leo-Entscheidung Juli 2026): saubere Grotesk für fast alles. Serife (Instrument Serif) NUR als seltener Akzent — Hero-Statement "Different is Everything.", kursive em-Einschübe, Footer "Let's talk.".
- Großzügige Seitenränder (--mx: clamp(28px,8vw,120px)). Achtung: padding-Kurzform in Sektionen überschreibt .wrap — immer padding-top/-bottom einzeln setzen.
- Schriftgrößen moderat halten, nichts Riesiges außer dem Hero-Statement.
- Werkliste & Formular sitzen rechts versetzt (width min(720px,62%), margin-left:auto) — bewusste Asymmetrie.
- Einstieg: zentriertes Serifen-Statement **"Different is Everything."** + kleine Subline. Das ist die Kernaussage der Seite.
- Um das Statement: verstreute Medien-Kacheln (Bilder UND Videos) in unterschiedlichen Größen, leicht gerundete Ecken.
- Scroll: weicher, gelerpter Parallax — Kacheln bewegen sich mit unterschiedlichen Geschwindigkeiten. Butterweich, nie ruckartig.
- Header: Logo "Leo Jaerisch" links, Hamburger rechts (öffnet weißes Fullscreen-Menü mit Serifenlinks). Vertikale Randnotizen: "© 2026" links, "Made in Hamburg." rechts.
- Hover-Effekte: subtil und überraschend, nicht laut. Serifentitel werden kursiv, Bilder zoomen minimal, Werkliste blendet nicht-gehoverte Einträge ab, schwebende Bildvorschau folgt der Maus.

## No-Gos (hart)

- KEIN Dark Mode / schwarzer Hintergrund
- KEINE bolden Display-Grotesken (Anton, Archivo Black, Bebas o.ä.)
- KEINE Outline-/Stroke-Typografie
- KEINE Akzentfarben, Gradients, Glassmorphism, Neon
- KEINE Marquees, keine rotierten Balken, kein Grain-Overlay
- KEIN typischer "KI-Website-Look" (Emoji-Icons, Feature-Cards mit Schatten, generische Hero-Patterns)
- Nicht zu viel Text. Keine Buzzwords, kein "Fantasie/wow/magisch"-Wording.

## Inhalte

### Showreel (Kachel in der Hero-Collage → früher, zentrierter Vollbild-Morph)
Die Reel-Kachel liegt von Anfang an in der floating Collage (HERO_TILES-Eintrag type:"anchor" = unsichtbarer Platzhalter; #reelMedia trackt dessen Rect). Sie wächst FRÜH (updateReel: growStartY = vh*0.2, growLen = vh*0.95 — bewusst FIXE Viewport-Anteile, NICHT von der Hero-Höhe abhängig; das war der Bug, der auf Mobile den Reel schon bei Scroll 0 aufblies). Wachstum ZENTRIERT (Mittelpunkt → Bildmitte), Rest der .reel-Strecke Verweilen, dann absolute ans Sektionsende → scrollt weg. Wichtig fürs Timing: der Reel muss wachsen, SOLANGE die Collage noch dahinter sichtbar ist (sonst wächst er gegen Weiß und der Blur verpufft) — deshalb Hero luftig 170vh + Anker relativ hoch (top:36%). Hintergrund (.hero) bekommt zunehmend `blur()` (MAXBLUR 16px) für den Fokus. prefers-reduced-motion: statische zentrierte Kachel (.reel.static).
Aktuell Platzhalter-Foto (On-Set-Portrait mit ©Thomas-Voigt-Wasserzeichen!) — sobald Leos Showreel-mp4 da ist: nach `assets/reel/showreel.mp4`, video-Tag ist auskommentiert vorbereitet. Wasserzeichen-Bild vor Launch ersetzen.

### Floating-Kacheln (Hero-Collage)
Statement-Text liegt auf der UNTERSTEN Ebene (.statement z-index:1, .tiles z-index:2). Leo-Feedback (wichtig): im RUHEZUSTAND darf KEIN Bild die Headline verdecken — sie muss frei/lesbar stehen; die Kacheln flankieren sie nur (SALTY flush links, below flush rechts). Der „Text-hinter-Bild"-Effekt entsteht erst beim SCROLLEN, wenn die Kacheln über den Text wandern. Also: Kachel-Positionen so wählen, dass sie die Headline-Box bei scrollY 0 nicht schneiden (per JS gemessen), Anordnung ansonsten luftig/scattered lassen. Kachel-Seitenverhältnis wird per JS (fitAspect in renderTiles) an das native Bildformat gekoppelt — das `ar` im TILES-Array ist nur noch Fallback gegen Layout-Sprung.

### Statement / Intro
"Different is Everything." — danach kurzer About-Block in großer Serife:
Galerist, Grafikdesigner, Art Director. Baut Marken, Kampagnen und Räume, in denen Kunst stattfindet.
AI-Satz (wichtig, aber unaufgeregt): "AI deep in the process. More iterations, sharper ideas — the signature stays mine."

### Seitenreihenfolge (Stand nach Leo-Umbau Juli 2026)
Hero/Showreel → 01 About → **02 Services** → **03 Selected Work** → 04 Founded → 05 Inquiry → Footer.
- **02 Services**: die interaktive Textliste (früher „Selected Work") mit schwebender Referenz-Bild-Vorschau beim Hovern (SERVICES-Array → #servicesList als .w-item, data-img = Beispielbild; nutzt denselben .preview-Mechanismus). Enthält die 6 Leistungen.
- **03 Selected Work**: aufgeräumtes **Raster** (.grid, 3 Spalten) aus PROJECTS mit Cover-Bildern, verlinkt zu den Projekt-Unterseiten (`work/<slug>.html`). Cover fehlt → helle Platzhalterkachel (.card.ph) mit Serifen-Titel. href leer → (noch) nicht klickbar. Nur Künstlerbörse hat aktuell eine Seite.
  - **Hover-Effekt** (Leo-Wunsch): radialer Fokus/Blur — eine unscharfe Bildkopie (.lens) liegt über dem scharfen Bild und wird per `mask:radial-gradient(circle … at var(--x) var(--y))` am Cursor „aufgestochen" (scharfer Kreis folgt der Maus, Rest bleibt unscharf). --x/--y setzt ein mousemove-Handler; nicht-gehoverte Karten dimmen. Radius/Blur in .card .lens tunen.
- **„What I do"-Grid ist RAUS** (durch die Services-Liste ersetzt) — .svc-CSS liegt ungenutzt brach, kann später weg.

### Bild-Assets (Juli 2026: Leos Export sortiert & optimiert)
Leos ~142 Projektbilder liegen optimiert (max 2000px, JPEG q80) in `assets/<projekt>/<projekt>-NN.jpg`. Sicher zugeordnet: `graphic-design` (26), `zoleo` (31), `porsche-ehs` (14, L101*=Porsche Taycan), `kuenstlerboerse` (6), `faces` (9, Model-Porträts), `sail-gp` (1), `portrait` (19, Leo selbst — für About/Hero). Das Raster/Founded/KB-Unterseite nutzen jetzt diese lokalen Pfade (nicht mehr Squarespace-CDN).
**Noch NICHT zugeordnet** (in `assets/_review/`, per .gitignore NICHT im Repo, warten auf Leos Bestätigung welche zu welchem Projekt): `helicopter` (DSCF*, Heli über Elbe), `event` (2J4A/0Y8A*, Vernissage/Straße), `mountain` (_MG*, Berg-Lifestyle), `unbenannt`, `screens` (UI-Screenshots), `misc` (u.a. Me_COPYRIGHT_TV = Wasserzeichen). Kandidaten-Projekte ohne Bilder: éclat Sauvage, Documentary, Cold Gentleman, Builders×EHS.
Hero-Collage, Services-Hover-Bilder und der Reel-Platzhalter zeigen noch auf Squarespace-CDN — vor Launch ebenfalls auf lokale assets migrieren (Squarespace-URLs sterben, sobald Leo das alte Abo kündigt). Original-Export als `~/Desktop/leojaerisch-Archiv.zip` gesichert.

### Projekt-Content (für Werkliste/Raster & Unterseiten)
1. Graphic Design — Brand & Campaign (FELL, Float Banking, PEACELESS, below, ACTIVA, FREAKS)
2. Künstlerbörse — Founder & Curation, 2024–26
3. éclat Sauvage × Klinkow — Video/Direction
4. Porsche × EHS — Video & Photo
5. Documentary — Film
6. Meraki Studios × Zoleo — Campaign
7. Faces — Photography
8. Cold Gentleman × Klinkow — Video
9. Builders × EHS — Photo & Documentary
10. Sail GP — Event & Photo

Hinweis auf der Seite nötig: Mit *EHS* markierte Arbeiten entstanden im Rahmen der Anstellung bei EHS Media (ehsmedia.de).

### Founded (Sektion 04 — ersetzt die reine Künstlerbörse-Sektion)
Zwei Einträge:
1. Künstlerbörse — Founder & Curator, 2024–26. Plattform für junge Künstler:innen, Revival eines Hamburger 90er-Formats. "Art & music, raw and real." Fakten: 4 Editionen · 250+ Gäste pro Vernissage · Locations: Cramer Wohnvilla & Schanzenhöfe. Link: kuenstlerboerse.net
2. Zoleo — Co-Founder. "Visual communication for architecture and space" (zoleo-hamburg.com). Bild: schwarzes Blockhaus (Leo_Jaerisch_ZOLEO-33.jpg vom Zoleo-Squarespace-CDN).
Layout bewusst asymmetrisch/dynamisch: KB Text links + Bild rechts (4/3), Zoleo Bild links schmaler (4/5, max 440px) + Text rechts versetzt; beide Bilder haben leichtes Parallax via data-speed.


### Inquiry-Formular (Sektion 05, vor dem Footer)
Name / Email / Project (Textarea), versendet über FormSubmit (formsubmit.co) an jaerisch.leo@gmail.com.
Wichtig: Beim ERSTEN echten Submit schickt FormSubmit eine Aktivierungsmail an Leos Adresse — einmal bestätigen, dann läuft es. _captcha=false, Honeypot-Feld gegen Spam.

### Footer
Einladung ("Open for freelance projects and collaborations."), großes "Let's talk." (mailto),
E-Mail, Instagram (instagram.com/leo_jaerisch), Künstlerbörse-Link, Impressum, ©-Zeile.
E-Mail-Adresse überall: jaerisch.leo@gmail.com.

## Technik & Struktur

- `index.html` aus diesem Ordner ist der Startpunkt (Stand aus vorherigem Chat) — weiterentwickeln, nicht wegwerfen, außer Leo sagt es.
- CSS und JS mittelfristig in eigene Dateien auslagern (`css/style.css`, `js/main.js`), damit Unterseiten sie teilen.
- Projektdaten zentral halten (PROJECTS-Array bzw. später `js/projects.js`) — neues Projekt = ein Eintrag.
- Bilder/Videos lokal unter `assets/` mit sprechenden Namen (`assets/work/fell-feed.png`, `assets/kb/edition-4.jpg`, `assets/reel/porsche.mp4`). Aktuell zeigen die src noch auf Squarespace-CDN — schrittweise migrieren. Bilder fürs Web optimieren (WebP/AVIF wo sinnvoll, lazy loading).
- Videos in Kacheln: mp4, `autoplay muted loop playsinline`, kurz und klein komprimiert.
- Projekt-Unterseiten: liegen in `work/` (Beispiel steht: `work/kuenstlerboerse.html`). Sie teilen sich `css/style.css` (Design-Tokens, Header/Menu/Footer, Sidenotes + Projekt-Detail-Layout: .proj-hero/.proj-body/.proj-gallery/.proj-facts/.proj-next). Achtung auch hier: .wrap-Sektionen NIE mit padding-Kurzform — immer padding-top/-bottom, sonst stirbt der Seitenrand.
  - Neue Projektseite = `work/<slug>.html` aus dem KB-Beispiel kopieren, Texte/Bilder/Meta tauschen, `next`-Link setzen. Galerie-Klassen: .span2 (breit), .tall (4/5), .wide (4/3).
  - Verlinkung von der Startseite: HERO_TILES-Eintrag bekommt `href:"work/<slug>.html"` (renderTiles macht daraus ein <a class="tile link"> — echter Link, Parallax bleibt) und der passende PROJECTS-Eintrag zeigt auf dieselbe Datei.
  - index.html nutzt weiterhin sein eigenes inline-CSS (bewusst nicht angefasst, damit die Startseite stabil bleibt); css/style.css ist die geteilte Basis für die Unterseiten und Ziel für eine spätere Migration der Startseite.
  - Bilder auf den Unterseiten sind aktuell Platzhalter (Squarespace-CDN); Leo liefert echte Projektbilder nach → dann `assets/<projekt>/…` einsetzen.
- SEO: sinnvolle Title/Meta/OG pro Seite, JSON-LD Person-Schema, semantisches HTML, Alt-Texte. Wenig sichtbarer Text ist okay — Meta-Ebene trägt das SEO.
- Responsive bis Mobil, `prefers-reduced-motion` respektieren.

## Arbeitsweise

- Kleine, gezielte Änderungen statt Komplett-Rewrites. Vor größeren Umbauten kurz nachfragen.
- Leo bewertet visuell — bei Design-Entscheidungen konkrete Alternativen anbieten statt lange erklären.
- Nach jeder Session daran erinnern, den Stand zu committen und zu pushen.
