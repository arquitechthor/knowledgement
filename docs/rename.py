#!/usr/bin/env python3
"""
Knowledgement — Renombrador a kebab-case
=========================================
- Renombra archivos y carpetas de docs/content/ a kebab-case
- Actualiza las rutas en docs/js/config.js
- Actualiza los atributos src de imágenes dentro de los .html generados

Seguro para ejecutar varias veces (idempotente).
"""

import re
import unicodedata
from pathlib import Path

DOCS_DIR    = Path(__file__).parent.resolve()
CONTENT_DIR = DOCS_DIR / "content"
CONFIG_JS   = DOCS_DIR / "js" / "config.js"


# ── Slugificación ────────────────────────────────────────────────────────────

def slugify(text: str) -> str:
    """'Carrera Arquitechthor' → 'carrera-arquitechthor'"""
    text = re.sub(r'[¿¡?!]', '', text)
    text = unicodedata.normalize('NFD', text)
    text = text.encode('ascii', 'ignore').decode('ascii')
    text = text.lower()
    text = re.sub(r'[^a-z0-9]+', '-', text)
    text = re.sub(r'-+', '-', text)
    return text.strip('-')


def slugify_name(name: str) -> str:
    """Slugifica un nombre de archivo o directorio conservando la extensión."""
    if '.' in name and not name.startswith('.'):
        stem, ext = name.rsplit('.', 1)
        return slugify(stem) + '.' + ext.lower()
    return slugify(name)


def new_path_str(old: str) -> str:
    """
    Transforma cada segmento de una ruta relativa a docs/.
    'content/Carrera Arquitechthor/Scrum/Qué es agilidad.html'
      → 'content/carrera-arquitechthor/scrum/que-es-agilidad.html'
    El primer segmento ('content') se conserva tal cual.
    """
    parts = old.replace('\\', '/').split('/')
    out = [parts[0]]  # 'content' sin cambios
    for part in parts[1:]:
        out.append(slugify_name(part))
    return '/'.join(out)


# ── Actualización de config.js ───────────────────────────────────────────────

def update_config() -> int:
    text = CONFIG_JS.read_text(encoding='utf-8')
    new  = re.sub(
        r'(?<=["\'])content/[^"\']+(?=["\'])',
        lambda m: new_path_str(m.group(0)),
        text
    )
    if new != text:
        CONFIG_JS.write_text(new, encoding='utf-8')
        return text.count('\n') - new.count('\n')  # proxy for changes
    return 0


# ── Actualización de src en archivos .html ───────────────────────────────────

def update_html_srcs() -> int:
    updated = 0
    for f in CONTENT_DIR.rglob('*.html'):
        text = f.read_text(encoding='utf-8')
        new  = re.sub(
            r'src="(content/[^"]+)"',
            lambda m: f'src="{new_path_str(m.group(1))}"',
            text
        )
        if new != text:
            f.write_text(new, encoding='utf-8')
            updated += 1
    return updated


# ── Renombrado de archivos y carpetas ────────────────────────────────────────

def rename_all() -> int:
    count = 0

    # 1. Archivos primero (hojas del árbol)
    files = sorted(CONTENT_DIR.rglob('*'), key=lambda p: len(p.parts), reverse=True)
    for item in files:
        if not item.is_file():
            continue
        new_name = slugify_name(item.name)
        if new_name != item.name:
            item.rename(item.parent / new_name)
            count += 1

    # 2. Directorios de más profundo a más superficial
    dirs = sorted(
        [p for p in CONTENT_DIR.rglob('*') if p.is_dir()],
        key=lambda p: len(p.parts),
        reverse=True
    )
    for d in dirs:
        new_name = slugify(d.name)
        if new_name != d.name:
            d.rename(d.parent / new_name)
            count += 1

    return count


# ── Main ─────────────────────────────────────────────────────────────────────

def main():
    print("1. Actualizando config.js ...")
    update_config()
    print("   Listo.")

    print("2. Actualizando src de imagenes en archivos .html ...")
    n = update_html_srcs()
    print(f"   {n} archivo(s) actualizados.")

    print("3. Renombrando archivos y carpetas ...")
    n = rename_all()
    print(f"   {n} elemento(s) renombrados.")

    print("\nVerificacion final:")
    print(f"   .html en content/ : {len(list(CONTENT_DIR.rglob('*.html')))}")
    print(f"   .md  en content/  : {len(list(CONTENT_DIR.rglob('*.md')))}")


if __name__ == '__main__':
    main()
