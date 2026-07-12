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
- Serifenschrift für alles Große (aktuell: Instrument Serif). Neutrale Grotesk (Hanken Grotesk) nur für Kleines: Meta, Captions, Navigation.
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

### Statement / Intro
"Different is Everything." — danach kurzer About-Block in großer Serife:
Galerist, Grafikdesigner, Art Director. Baut Marken, Kampagnen und Räume, in denen Kunst stattfindet.
AI-Satz (wichtig, aber unaufgeregt): "AI deep in the process. More iterations, sharper ideas — the signature stays mine."

### Projekte (Werkliste — Grafikbereich bewusst nach vorn)
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

### Künstlerbörse (große eigene Sektion — wichtigste Referenz)
Plattform für junge Künstler:innen, gegründet von Leo. Revival eines Hamburger 90er-Formats.
"Art & music, raw and real." Kuration, Organisation, Design, Kommunikation aus einer Hand.
Fakten: 4 Editionen · 250+ Gäste pro Vernissage · Locations: Cramer Wohnvilla & Schanzenhöfe.
Link: kuenstlerboerse.net

### Services (kompakt, keine Cards)
Art Direction · Brand & Identity · Campaign & Communication · Design Systems · Image & Motion · Digital & Product

### Footer
Einladung ("Open for freelance projects and collaborations."), großes "Let's talk." (mailto),
E-Mail, Instagram (instagram.com/leo_jaerisch), Künstlerbörse-Link, Impressum, ©-Zeile.
E-Mail-Adresse: PLATZHALTER hello@leojaerisch.com — vor Launch durch echte Adresse ersetzen.

## Technik & Struktur

- `index.html` aus diesem Ordner ist der Startpunkt (Stand aus vorherigem Chat) — weiterentwickeln, nicht wegwerfen, außer Leo sagt es.
- CSS und JS mittelfristig in eigene Dateien auslagern (`css/style.css`, `js/main.js`), damit Unterseiten sie teilen.
- Projektdaten zentral halten (PROJECTS-Array bzw. später `js/projects.js`) — neues Projekt = ein Eintrag.
- Bilder/Videos lokal unter `assets/` mit sprechenden Namen (`assets/work/fell-feed.png`, `assets/kb/edition-4.jpg`, `assets/reel/porsche.mp4`). Aktuell zeigen die src noch auf Squarespace-CDN — schrittweise migrieren. Bilder fürs Web optimieren (WebP/AVIF wo sinnvoll, lazy loading).
- Videos in Kacheln: mp4, `autoplay muted loop playsinline`, kurz und klein komprimiert.
- Unterseiten pro Projekt sind geplant: gleiche Kopf/Fuß-Struktur, gleiches Stylesheet, z.B. `work/kuenstlerboerse.html`.
- SEO: sinnvolle Title/Meta/OG pro Seite, JSON-LD Person-Schema, semantisches HTML, Alt-Texte. Wenig sichtbarer Text ist okay — Meta-Ebene trägt das SEO.
- Responsive bis Mobil, `prefers-reduced-motion` respektieren.

## Arbeitsweise

- Kleine, gezielte Änderungen statt Komplett-Rewrites. Vor größeren Umbauten kurz nachfragen.
- Leo bewertet visuell — bei Design-Entscheidungen konkrete Alternativen anbieten statt lange erklären.
- Nach jeder Session daran erinnern, den Stand zu committen und zu pushen.
