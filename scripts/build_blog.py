#!/usr/bin/env python3
"""
GIFAA — Generador de datos del blog
Lee los archivos Markdown en blog/posts/ y actualiza blog/posts-data.js
para garantizar funcionamiento tanto en local (file://) como en web (https://).
"""

import json
import os

def build_blog():
    base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    json_path = os.path.join(base_dir, 'blog', 'posts.json')
    data_js_path = os.path.join(base_dir, 'blog', 'posts-data.js')

    if not os.path.exists(json_path):
        print(f"Error: {json_path} no encontrado.")
        return

    with open(json_path, 'r', encoding='utf-8') as f:
        data = json.load(f)

    for post in data.get('posts', []):
        file_path = os.path.join(base_dir, 'blog', post['file'])
        if os.path.exists(file_path):
            with open(file_path, 'r', encoding='utf-8') as mf:
                post['content'] = mf.read()
        else:
            print(f"Advertencia: Archivo {file_path} no existe.")

    output_content = (
        "/**\n"
        " * GIFAA — Datos y contenido de los artículos de GIFAA pre-empaquetados.\n"
        " * Permite el funcionamiento tanto en protocolos http/https como en local (file://) sin bloqueos CORS.\n"
        " */\n"
        f"window.GIFAA_BLOG_DATA = {json.dumps(data, indent=2, ensure_ascii=False)};\n"
    )

    with open(data_js_path, 'w', encoding='utf-8') as out:
        out.write(output_content)

    print(f"✓ {data_js_path} generado exitosamente con {len(data['posts'])} artículos.")

if __name__ == '__main__':
    build_blog()
