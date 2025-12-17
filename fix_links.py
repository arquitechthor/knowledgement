#!/usr/bin/env python3
"""
Script para corregir enlaces que no fueron actualizados en el primer paso.
Busca enlaces con hashes y los actualiza a los nombres nuevos.
"""

import os
import re
from pathlib import Path
from urllib.parse import unquote


def find_actual_file(base_dir: Path, link_path: str) -> Path:
    """
    Encuentra el archivo real basándose en un enlace que puede tener hash.
    """
    # Decodificar URL
    decoded = unquote(link_path)
    
    # Construir ruta completa
    full_path = base_dir / decoded
    
    # Si existe, retornar
    if full_path.exists():
        return full_path
    
    # Si no existe, buscar en el directorio padre un archivo con nombre similar (sin hash)
    parent = full_path.parent
    if not parent.exists():
        return None
    
    # Extraer el nombre base sin hash
    name = full_path.stem
    # Eliminar hash (patrón: espacio seguido de hex)
    name_without_hash = re.sub(r'\s+[a-f0-9]{8,}$', '', name)
    
    # Buscar archivos que coincidan
    for file in parent.glob('*.md'):
        file_stem_lower = file.stem.lower()
        name_lower = name_without_hash.lower()
        
        # Comparar sin considerar mayúsculas/minúsculas y acentos
        if file_stem_lower == name_lower or file_stem_lower.replace(' ', '') == name_lower.replace(' ', ''):
            return file
    
    return None


def fix_links_in_file(file_path: Path, root_dir: Path) -> int:
    """Corrige enlaces rotos en un archivo."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        fixes = 0
        
        # Buscar todos los enlaces markdown [texto](ruta)
        def replace_link(match):
            nonlocal fixes
            link_text = match.group(1)
            link_path = match.group(2)
            
            # Solo procesar enlaces locales que contengan hashes
            if not link_path.startswith('http') and re.search(r'[a-f0-9]{8,}', link_path):
                # Intentar encontrar el archivo real
                actual_file = find_actual_file(file_path.parent, link_path)
                
                if actual_file and actual_file.exists():
                    # Calcular nueva ruta relativa
                    try:
                        new_rel_path = actual_file.relative_to(file_path.parent)
                        new_link = str(new_rel_path).replace(' ', '%20')
                        fixes += 1
                        return f"[{link_text}]({new_link})"
                    except ValueError:
                        pass
            
            return match.group(0)  # Devolver sin cambios
        
        # Reemplazar enlaces
        content = re.sub(r'\[([^\]]+)\]\(([^)]+)\)', replace_link, content)
        
        # Solo escribir si hubo cambios
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return fixes
        return 0
        
    except Exception as e:
        print(f"Error procesando {file_path}: {e}")
        return 0


def main():
    """Función principal."""
    root_dir = Path('/home/hguzman/Documentos/workspace/knowledgement')
    
    print("=" * 80)
    print("CORRECCIÓN DE ENLACES")
    print("=" * 80)
    print()
    
    total_fixes = 0
    files_updated = 0
    
    for md_file in root_dir.rglob('*.md'):
        fixes = fix_links_in_file(md_file, root_dir)
        if fixes > 0:
            files_updated += 1
            total_fixes += fixes
            rel_path = md_file.relative_to(root_dir)
            print(f"✓ {rel_path}: {fixes} enlaces corregidos")
    
    print()
    print("=" * 80)
    print(f"COMPLETADO: {total_fixes} enlaces corregidos en {files_updated} archivos")
    print("=" * 80)


if __name__ == '__main__':
    main()
