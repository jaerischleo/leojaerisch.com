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

### Founded (Sektion 03 — ersetzt die reine Künstlerbörse-Sektion)
Zwei Einträge:
1. Künstlerbörse — Founder & Curator, 2024–26. Plattform für junge Künstler:innen, Revival eines Hamburger 90er-Formats. "Art & music, raw and real." Fakten: 4 Editionen · 250+ Gäste pro Vernissage · Locations: Cramer Wohnvilla & Schanzenhöfe. Link: kuenstlerboerse.net
2. Zoleo — Co-Founder. "Visual communication for architecture and space" (zoleo-hamburg.com). Bild: schwarzes Blockhaus (Leo_Jaerisch_ZOLEO-33.jpg vom Zoleo-Squarespace-CDN).
Layout bewusst asymmetrisch/dynamisch: KB Text links + Bild rechts (4/3), Zoleo Bild links schmaler (4/5, max 440px) + Text rechts versetzt; beide Bilder haben leichtes Parallax via data-speed.

### Services (kompakt, keine Cards)
Art Direction · Brand & Identity · Campaign & Communication · Design Systems · Image & Motion · Digital & Product

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
- Unterseiten pro Projekt sind geplant: gleiche Kopf/Fuß-Struktur, gleiches Stylesheet, z.B. `work/kuenstlerboerse.html`.
- SEO: sinnvolle Title/Meta/OG pro Seite, JSON-LD Person-Schema, semantisches HTML, Alt-Texte. Wenig sichtbarer Text ist okay — Meta-Ebene trägt das SEO.
- Responsive bis Mobil, `prefers-reduced-motion` respektieren.

## Arbeitsweise

- Kleine, gezielte Änderungen statt Komplett-Rewrites. Vor größeren Umbauten kurz nachfragen.
- Leo bewertet visuell — bei Design-Entscheidungen konkrete Alternativen anbieten statt lange erklären.
- Nach jeder Session daran erinnern, den Stand zu committen und zu pushen.
