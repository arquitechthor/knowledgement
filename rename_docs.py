#!/usr/bin/env python3
"""
Script para renombrar archivos markdown basándose en sus títulos H1.
Elimina sufijos hash y actualiza todos los enlaces internos.
"""

import os
import re
import unicodedata
from pathlib import Path
from typing import Dict, Tuple, Optional


def remove_accents(text: str) -> str:
    """Elimina acentos de un texto."""
    nfd = unicodedata.normalize('NFD', text)
    return ''.join(char for char in nfd if unicodedata.category(char) != 'Mn')


def extract_title(file_path: Path) -> Optional[str]:
    """Extrae el título H1 de un archivo markdown."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            for line in f:
                line = line.strip()
                if line.startswith('# '):
                    return line[2:].strip()
    except Exception as e:
        print(f"Error leyendo {file_path}: {e}")
    return None


def clean_title(title: str) -> str:
    """
    Limpia el título para convertirlo en nombre de archivo.
    - Convierte a minúsculas
    - Capitaliza solo la primera letra
    - Mantiene espacios entre palabras
    - Elimina caracteres especiales excepto espacios y letras
    """
    # Reemplazar caracteres especiales comunes
    title = title.replace('¿', '')
    title = title.replace('?', '')
    title = title.replace('¡', '')
    title = title.replace('!', '')
    title = title.replace('/', ' ')
    title = title.replace('&', 'and')
    
    # Eliminar otros caracteres especiales pero mantener espacios y letras
    title = re.sub(r'[^\w\s-]', '', title)
    
    # Normalizar espacios múltiples
    title = re.sub(r'\s+', ' ', title).strip()
    
    # Convertir a minúsculas y capitalizar primera letra
    title = title.lower()
    if title:
        title = title[0].upper() + title[1:]
    
    return title


def generate_new_filename(old_path: Path) -> str:
    """Genera el nuevo nombre de archivo basado en el título H1."""
    title = extract_title(old_path)
    
    if not title:
        # Si no hay título, usar el nombre actual sin el hash
        name = old_path.stem
        # Eliminar el hash (patrón: espacio seguido de caracteres hexadecimales)
        name = re.sub(r'\s+[a-f0-9]{32}$', '', name)
        name = re.sub(r'\s+[a-f0-9]{8,}$', '', name)
        cleaned = clean_title(name)
    else:
        cleaned = clean_title(title)
    
    return f"{cleaned}.md"


def build_rename_map(root_dir: Path) -> Dict[Path, Path]:
    """
    Construye un mapeo de rutas antiguas a nuevas rutas.
    Excluye README.md del renombrado.
    """
    rename_map = {}
    
    for md_file in root_dir.rglob('*.md'):
        # Saltar README.md
        if md_file.name == 'README.md':
            continue
            
        new_name = generate_new_filename(md_file)
        new_path = md_file.parent / new_name
        
        # Solo agregar si el nombre cambia
        if md_file != new_path:
            rename_map[md_file] = new_path
    
    return rename_map


def url_encode_path(path: str) -> str:
    """Codifica una ruta para uso en URLs markdown."""
    # Reemplazar espacios con %20
    return path.replace(' ', '%20')


def update_links_in_file(file_path: Path, rename_map: Dict[Path, Path], root_dir: Path):
    """Actualiza todos los enlaces en un archivo markdown."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Buscar todos los enlaces markdown [texto](ruta)
        def replace_link(match):
            link_text = match.group(1)
            link_path = match.group(2)
            
            # Decodificar URL
            decoded_path = link_path.replace('%20', ' ')
            
            # Resolver la ruta relativa desde el archivo actual
            if not decoded_path.startswith('http'):
                try:
                    # Construir ruta absoluta del enlace
                    if file_path.parent == root_dir:
                        # Estamos en el directorio raíz
                        abs_link_path = root_dir / decoded_path
                    else:
                        # Estamos en un subdirectorio
                        abs_link_path = (file_path.parent / decoded_path).resolve()
                    
                    # Verificar si este archivo está en el mapa de renombrado
                    if abs_link_path in rename_map:
                        new_abs_path = rename_map[abs_link_path]
                        
                        # Calcular la nueva ruta relativa
                        try:
                            new_rel_path = new_abs_path.relative_to(file_path.parent)
                        except ValueError:
                            # Si no se puede hacer relativa, usar ruta desde root
                            new_rel_path = new_abs_path.relative_to(root_dir)
                        
                        # Codificar para URL
                        new_link = url_encode_path(str(new_rel_path))
                        return f"[{link_text}]({new_link})"
                except Exception as e:
                    print(f"  Error procesando enlace '{link_path}' en {file_path}: {e}")
            
            return match.group(0)  # Devolver sin cambios
        
        # Reemplazar enlaces
        content = re.sub(r'\[([^\]]+)\]\(([^)]+)\)', replace_link, content)
        
        # Solo escribir si hubo cambios
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        return False
        
    except Exception as e:
        print(f"Error actualizando enlaces en {file_path}: {e}")
        return False


def main():
    """Función principal."""
    root_dir = Path('/home/hguzman/Documentos/workspace/knowledgement')
    
    print("=" * 80)
    print("RENOMBRADO DE ARCHIVOS DE DOCUMENTACIÓN")
    print("=" * 80)
    print()
    
    # Paso 1: Construir mapa de renombrado
    print("Paso 1: Analizando archivos y construyendo mapa de renombrado...")
    rename_map = build_rename_map(root_dir)
    
    print(f"\nArchivos a renombrar: {len(rename_map)}")
    print("\nPrimeros 10 cambios:")
    for i, (old_path, new_path) in enumerate(list(rename_map.items())[:10]):
        old_rel = old_path.relative_to(root_dir)
        new_rel = new_path.relative_to(root_dir)
        print(f"  {old_rel}")
        print(f"  → {new_rel}")
        print()
    
    # Confirmar
    response = input("\n¿Continuar con el renombrado? (s/n): ")
    if response.lower() != 's':
        print("Operación cancelada.")
        return
    
    # Paso 2: Actualizar enlaces en todos los archivos
    print("\nPaso 2: Actualizando enlaces en todos los archivos markdown...")
    updated_count = 0
    for md_file in root_dir.rglob('*.md'):
        if update_links_in_file(md_file, rename_map, root_dir):
            updated_count += 1
            print(f"  ✓ {md_file.relative_to(root_dir)}")
    
    print(f"\nArchivos con enlaces actualizados: {updated_count}")
    
    # Paso 3: Renombrar archivos
    print("\nPaso 3: Renombrando archivos...")
    renamed_count = 0
    for old_path, new_path in rename_map.items():
        try:
            old_path.rename(new_path)
            renamed_count += 1
            print(f"  ✓ {old_path.name} → {new_path.name}")
        except Exception as e:
            print(f"  ✗ Error renombrando {old_path}: {e}")
    
    print()
    print("=" * 80)
    print(f"COMPLETADO: {renamed_count} archivos renombrados")
    print("=" * 80)


if __name__ == '__main__':
    main()
