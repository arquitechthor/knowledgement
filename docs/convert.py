#!/usr/bin/env python3
"""
Knowledgement — Conversor Markdown -> HTML
==========================================
Convierte archivos .md de docs/content/ en fragmentos HTML
listos para ser servidos por la SPA (sin <html>/<head>/<body>).

Flujo para agregar contenido nuevo:
  1. Crea tu archivo .md en docs/content/Carrera Arquitechthor/...
  2. Ejecuta este script:  python docs/convert.py
  3. Agrega la entrada en docs/js/config.js con extension .html

Requisito:
    pip install markdown

Los archivos .md se eliminan tras la conversion.
"""

import os
import re
import sys
from pathlib import Path

# ── Instalar dependencia si falta ──────────────────────────────────────────
try:
    import markdown
except ImportError:
    print("Instalando paquete 'markdown'...")
    os.system(f'"{sys.executable}" -m pip install markdown')
    import markdown

# ── Rutas ──────────────────────────────────────────────────────────────────
DOCS_DIR    = Path(__file__).parent.resolve()
CONTENT_DIR = DOCS_DIR / "content"

MD_EXTENSIONS = [
    "tables",       # Tablas GFM
    "fenced_code",  # Bloques ```lang
    "nl2br",        # Saltos de línea
    "sane_lists",   # Listas más predecibles
    "attr_list",    # Atributos HTML en elementos
]


def fix_image_paths(html: str, md_path: Path) -> str:
    """
    Convierte rutas de imagen relativas al .md en rutas relativas a docs/,
    para que el navegador las resuelva correctamente desde index.html.
    """
    rel_dir = md_path.parent.relative_to(DOCS_DIR)
    prefix  = str(rel_dir).replace("\\", "/")

    def replace_src(m: re.Match) -> str:
        src = m.group(1)
        if src.startswith(("http", "/", "data:")):
            return m.group(0)
        return f'src="{prefix}/{src}"'

    return re.sub(r'src="([^"]*)"', replace_src, html)


def convert(md_path: Path) -> Path:
    text = md_path.read_text(encoding="utf-8", errors="replace")
    html = markdown.markdown(text, extensions=MD_EXTENSIONS)
    html = fix_image_paths(html, md_path)

    html_path = md_path.with_suffix(".html")
    html_path.write_text(html, encoding="utf-8")
    md_path.unlink()
    return html_path


def main() -> None:
    md_files = sorted(CONTENT_DIR.rglob("*.md"))
    if not md_files:
        print("No se encontraron archivos .md en", CONTENT_DIR)
        return

    print(f"Convirtiendo {len(md_files)} archivos...\n")
    ok = 0
    for md_file in md_files:
        try:
            html_file = convert(md_file)
            print(f"  OK  {html_file.relative_to(DOCS_DIR)}")
            ok += 1
        except Exception as exc:
            print(f"  ERR {md_file.name}: {exc}")

    print(f"\n{ok}/{len(md_files)} archivos convertidos.")


if __name__ == "__main__":
    main()
