#!/bin/bash
# Optimiert NEUE Bilder in assets/ in-place (max 2000px, JPEG q80).
# Erkennung über die BILDBREITE (nicht Dateigröße), damit bereits
# optimierte Bilder NIE erneut gespeichert werden (kein Qualitätsverlust):
#   - JPEG mit Breite <= 2200px  -> gilt als fertig, überspringen
#   - alles andere (Rohbild >2200px oder PNG) -> optimieren/konvertieren
# Aufruf: bash _tools/optimize.sh
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
MAX=2000; Q=80; done_count=0; skip_count=0
while IFS= read -r -d '' f; do
  case "$f" in *"/_review/"*) continue;; esac
  w=$(sips -g pixelWidth "$f" 2>/dev/null | awk '/pixelWidth/{print $2}')
  ext="${f##*.}"
  # bereits optimiertes JPEG (<=2200px)? -> in Ruhe lassen
  if { [ "$ext" = jpg ] || [ "$ext" = jpeg ] || [ "$ext" = JPG ] || [ "$ext" = JPEG ]; } \
     && [ -n "$w" ] && [ "$w" -le 2200 ]; then
    skip_count=$((skip_count+1)); continue
  fi
  case "${f##*.}" in
    png|PNG)  out="${f%.*}.jpg"; sips -Z $MAX -s format jpeg -s formatOptions $Q "$f" --out "$out" >/dev/null 2>&1 && [ "$out" != "$f" ] && rm -f "$f";;
    *)        sips -Z $MAX -s format jpeg -s formatOptions $Q "$f" --out "$f" >/dev/null 2>&1;;
  esac
  done_count=$((done_count+1)); echo "  optimiert: ${f#$ROOT/}"
done < <(find "$ROOT/assets" -type f \( -iname '*.jpg' -o -iname '*.jpeg' -o -iname '*.png' \) -print0)
echo "fertig — $done_count optimiert, $skip_count bereits ok"
