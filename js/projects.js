/* ============================================================
   PROJEKTDATEN — eine zentrale Quelle für Raster (index.html)
   und Detailseiten (work/project.html).
   images/video werden bei jedem Bilder-Sync neu aus assets/
   generiert; Metadaten (title/meta/role/year/sub/note/link) hier
   von Hand pflegen. Pfade relativ zur Root (assets/…); work/project.html
   stellt beim Rendern "../" voran. EHS-Hinweis via note.
   ============================================================ */
const PROJECT_ORDER = ["graphic-design","kuenstlerboerse","zoleo","porsche-ehs","faces","sail-gp","eclat-sauvage","documentary","cold-gentleman","builders-ehs"];

const EHS_NOTE = "Created within the employment at EHS Media (ehsmedia.de).";

const PROJECTS_DATA = {
 "graphic-design": {
   title:"Graphic Design", meta:"Brand & Campaign", role:"Art Direction & Design", year:"2023 — 2026",
   sub:"Attitude, translated into a clear visual language.",
   images:["assets/graphic-design/graphic-design-02.jpg","assets/graphic-design/graphic-design-01.jpg","assets/graphic-design/graphic-design-03.jpg","assets/graphic-design/graphic-design-04.jpg","assets/graphic-design/graphic-design-05.jpg","assets/graphic-design/graphic-design-06.jpg","assets/graphic-design/graphic-design-07.jpg","assets/graphic-design/graphic-design-08.jpg","assets/graphic-design/graphic-design-09.jpg","assets/graphic-design/graphic-design-10.jpg","assets/graphic-design/graphic-design-11.jpg","assets/graphic-design/graphic-design-12.jpg","assets/graphic-design/graphic-design-13.jpg","assets/graphic-design/graphic-design-14.jpg","assets/graphic-design/graphic-design-15.jpg","assets/graphic-design/graphic-design-16.jpg","assets/graphic-design/graphic-design-17.jpg","assets/graphic-design/graphic-design-18.jpg","assets/graphic-design/graphic-design-19.jpg","assets/graphic-design/graphic-design-20.jpg","assets/graphic-design/graphic-design-21.jpg","assets/graphic-design/graphic-design-22.jpg","assets/graphic-design/graphic-design-23.jpg","assets/graphic-design/graphic-design-24.jpg","assets/graphic-design/graphic-design-25.jpg","assets/graphic-design/graphic-design-26.jpg","assets/graphic-design/graphic-design-27.jpg"], video:""
 },
 "kuenstlerboerse": {
   title:"Künstlerbörse", meta:"Founder & Curation", role:"Founder & Curator", year:"2024 — 2026",
   sub:"Art & music, <em>raw and real.</em>",
   link:{href:"https://www.kuenstlerboerse.net/", label:"kuenstlerboerse.net"},
   facts:[["4","editions"],["250+","guests per night"],["HH","Schanze & Villa"]],
   body:"A platform for emerging artists — no gallery walls, no gatekeeping. What began as the revival of a 90s Hamburg format is now a movement: vernissages with house beats, creatives meeting collectors. Curation, spatial concept, visual identity and communication — all from one hand.",
   images:["assets/kuenstlerboerse/kuenstlerboerse-01.jpg","assets/kuenstlerboerse/kuenstlerboerse-02.jpg","assets/kuenstlerboerse/kuenstlerboerse-03.jpg"], video:""
 },
 "zoleo": {
   title:"Meraki Studios × Zoleo", meta:"Campaign", role:"Art Direction · Photography", year:"2025",
   sub:"Visual communication for <em>architecture and space.</em>",
   link:{href:"https://www.zoleo-hamburg.com/", label:"zoleo-hamburg.com"},
   images:["assets/zoleo/zoleo-01.jpg","assets/zoleo/zoleo-02.jpg","assets/zoleo/zoleo-03.jpg","assets/zoleo/zoleo-04.jpg","assets/zoleo/zoleo-05.jpg","assets/zoleo/zoleo-06.jpg","assets/zoleo/zoleo-07.jpg","assets/zoleo/zoleo-08.jpg","assets/zoleo/zoleo-09.jpg","assets/zoleo/zoleo-10.jpg","assets/zoleo/zoleo-11.jpg","assets/zoleo/zoleo-12.jpg","assets/zoleo/zoleo-13.jpg","assets/zoleo/zoleo-14.jpg","assets/zoleo/zoleo-24.jpg","assets/zoleo/zoleo-25.jpg","assets/zoleo/zoleo-26.jpg","assets/zoleo/zoleo-27.jpg","assets/zoleo/zoleo-28.jpg","assets/zoleo/zoleo-29.jpg","assets/zoleo/zoleo-30.jpg","assets/zoleo/zoleo-31.jpg","assets/zoleo/zoleo-32.jpg"], video:""
 },
 "porsche-ehs": {
   title:"Porsche × EHS", meta:"Video & Photo", role:"Video & Photography", year:"2024",
   sub:"Electric icon, shot after dusk.", note:EHS_NOTE,
   images:["assets/porsche-ehs/porsche-ehs-01.jpg","assets/porsche-ehs/porsche-ehs-02.jpg","assets/porsche-ehs/porsche-ehs-03.jpg","assets/porsche-ehs/porsche-ehs-04.jpg","assets/porsche-ehs/porsche-ehs-05.jpg","assets/porsche-ehs/porsche-ehs-06.jpg","assets/porsche-ehs/porsche-ehs-07.jpg","assets/porsche-ehs/porsche-ehs-08.jpg","assets/porsche-ehs/porsche-ehs-09.jpg","assets/porsche-ehs/porsche-ehs-10.jpg","assets/porsche-ehs/porsche-ehs-11.jpg","assets/porsche-ehs/porsche-ehs-12.jpg","assets/porsche-ehs/porsche-ehs-13.jpg"], video:"assets/porsche-ehs/porsche-ehs-web.mp4"
 },
 "faces": {
   title:"Faces", meta:"Photography", role:"Photography", year:"2023 — 2026",
   sub:"Portraits — people, light, presence.",
   images:["assets/faces/faces-01.jpg","assets/faces/faces-15.jpg","assets/faces/faces-16.jpg","assets/faces/faces-17.jpg","assets/faces/faces-18.jpg","assets/faces/faces-19.jpg","assets/faces/faces-20.jpg","assets/faces/faces-21.jpg","assets/faces/faces-22.jpg","assets/faces/faces-23.jpg","assets/faces/faces-24.jpg","assets/faces/faces-25.jpg","assets/faces/faces-26.jpg","assets/faces/faces-27.jpg","assets/faces/faces-28.jpg","assets/faces/faces-29.jpg","assets/faces/faces-30.jpg","assets/faces/faces-31.jpg","assets/faces/faces-32.jpg","assets/faces/faces-33.jpg","assets/faces/faces-34.jpg","assets/faces/faces-35.jpg","assets/faces/faces-36.jpg","assets/faces/faces-37.jpg","assets/faces/faces-38.jpg","assets/faces/faces-39.jpg","assets/faces/faces-40.jpg","assets/faces/faces-41.jpg","assets/faces/faces-42.jpg","assets/faces/faces-43.jpg","assets/faces/faces-44.jpg","assets/faces/faces-45.jpg","assets/faces/faces-46.jpg","assets/faces/faces-47.jpg","assets/faces/faces-48.jpg","assets/faces/faces-49.jpg"], video:""
 },
 "sail-gp": {
   title:"Sail GP", meta:"Event & Photo", role:"Event & Photography", year:"2024",
   sub:"Foiling boats, full speed on the water.",
   images:["assets/sail-gp/sail-gp-01.jpg"], video:"assets/sail-gp/sail-gp-web.mp4"
 },
 "eclat-sauvage": {
   title:"éclat Sauvage × Klinkow", meta:"Video · Direction", role:"Direction · Video", year:"2025",
   sub:"A film with teeth — direction and edit.",
   images:["assets/eclat-sauvage/eclat-sauvage-01.jpg","assets/eclat-sauvage/eclat-sauvage-02.jpg","assets/eclat-sauvage/eclat-sauvage-03.jpg","assets/eclat-sauvage/eclat-sauvage-04.jpg","assets/eclat-sauvage/eclat-sauvage-05.jpg"], video:"assets/eclat-sauvage/eclat-sauvage-web.mp4"
 },
 "documentary": {
   title:"Documentary", meta:"Film", role:"Film · Photography", year:"2024",
   sub:"Hamburg from above and within.",
   images:["assets/documentary/documentary-01.jpg","assets/documentary/documentary-02.jpg","assets/documentary/documentary-03.jpg","assets/documentary/documentary-04.jpg","assets/documentary/documentary-05.jpg","assets/documentary/documentary-06.jpg","assets/documentary/documentary-07.jpg","assets/documentary/documentary-08.jpg","assets/documentary/documentary-09.jpg","assets/documentary/documentary-10.jpg","assets/documentary/documentary-11.jpg","assets/documentary/documentary-12.jpg","assets/documentary/documentary-13.jpg","assets/documentary/documentary-14.jpg","assets/documentary/documentary-15.jpg","assets/documentary/documentary-16.jpg","assets/documentary/documentary-17.jpg"], video:""
 },
 "cold-gentleman": {
   title:"Cold Gentleman × Klinkow", meta:"Video", role:"Video", year:"2024",
   sub:"Cold air, sharp cut.",
   images:["assets/cold-gentleman/cold-gentleman-01.jpg"], video:"assets/cold-gentleman/cold-gentleman-web.mp4"
 },
 "builders-ehs": {
   title:"Builders × EHS", meta:"Photo & Documentary", role:"Photo & Documentary", year:"2024",
   sub:"The people who build the city.", note:EHS_NOTE,
   images:["assets/builders-ehs/builders-ehs-01.jpg"], video:"assets/builders-ehs/builders-ehs-web.mp4"
 }
};
