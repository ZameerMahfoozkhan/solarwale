"""
SOLAR WALLAH - IMAGE & FAVICON OPTIMIZATION SUITE
1. Generates multi-device favicon suite: favicon.ico, 16x16, 32x32, 48x48, apple-touch-icon (180x180), android-chrome (192x192, 512x512)
2. Generates site.webmanifest
3. Optimizes logo.png and creates logo.webp (scaled cleanly for 3x Retina, sharp alpha)
4. Compresses all content photos to modern WebP + progressive optimized JPEG
"""

import os
import shutil
import json
from PIL import Image

ASSETS_DIR = 'assets/images'
ROOT_DIR = '.'

def generate_favicons():
    print("--- 1. Generating Multi-Device Favicons ---")
    master_fav_path = os.path.join(ROOT_DIR, 'android-chrome-512x512.png')
    if not os.path.exists(master_fav_path):
        master_fav_path = os.path.join(ROOT_DIR, 'favicon.png')
    if not os.path.exists(master_fav_path):
        print("Error: No source favicon image found")
        return

    with Image.open(master_fav_path) as master:
        master = master.convert("RGBA")
        
        # 1. Standard PNG favicons for devices
        sizes = {
            'favicon-16x16.png': (16, 16),
            'favicon-32x32.png': (32, 32),
            'apple-touch-icon.png': (180, 180),
            'android-chrome-192x192.png': (192, 192),
            'android-chrome-512x512.png': (512, 512)
        }

        for filename, size in sizes.items():
            resized = master.resize(size, Image.Resampling.LANCZOS)
            root_out = os.path.join(ROOT_DIR, filename)
            resized.save(root_out, 'PNG', optimize=True)
            kb = os.path.getsize(root_out) / 1024
            print(f"  Generated {filename:28} ({size[0]}x{size[1]}): {kb:.2f} KB")

        # 2. Modern 48x48 favicon.png
        fav_48 = master.resize((48, 48), Image.Resampling.LANCZOS)
        fav_48.save(os.path.join(ROOT_DIR, 'favicon.png'), 'PNG', optimize=True)
        print(f"  Optimized favicon.png (48x48): {os.path.getsize('favicon.png') / 1024:.2f} KB")

        # 3. Multi-resolution favicon.ico (16x16, 32x32, 48x48)
        ico_path_root = os.path.join(ROOT_DIR, 'favicon.ico')
        fav_48.save(ico_path_root, format='ICO', sizes=[(16, 16), (32, 32), (48, 48)])
        print(f"  Generated favicon.ico (multi-res 16, 32, 48): {os.path.getsize(ico_path_root) / 1024:.2f} KB")

    # 4. Generate site.webmanifest
    manifest = {
        "name": "Solar Wallah - Rooftop Solar Solutions",
        "short_name": "Solar Wallah",
        "description": "Professional rooftop solar panel installation and net metering in Uttar Pradesh",
        "icons": [
            {
                "src": "/android-chrome-192x192.png",
                "sizes": "192x192",
                "type": "image/png"
            },
            {
                "src": "/android-chrome-512x512.png",
                "sizes": "512x512",
                "type": "image/png"
            }
        ],
        "theme_color": "#0B1B3D",
        "background_color": "#FFFFFF",
        "display": "standalone",
        "start_url": "/"
    }
    
    with open(os.path.join(ROOT_DIR, 'site.webmanifest'), 'w', encoding='utf-8') as f:
        json.dump(manifest, f, indent=2)
    print("  Generated site.webmanifest")


def optimize_logo():
    print("\n--- 2. Optimizing Brand Logo ---")
    logo_path = os.path.join(ASSETS_DIR, 'logo.png')
    if not os.path.exists(logo_path):
        print(f"Error: {logo_path} not found")
        return

    orig_size = os.path.getsize(logo_path) / 1024
    with Image.open(logo_path) as img:
        img = img.convert("RGBA")
        orig_w, orig_h = img.size
        # Scaled to 600px width (crisp 3x Retina for max 160px CSS width)
        target_w = 600
        target_h = int(orig_h * (target_w / orig_w))
        resized = img.resize((target_w, target_h), Image.Resampling.LANCZOS)

        # WebP version
        webp_path = os.path.join(ASSETS_DIR, 'logo.webp')
        resized.save(webp_path, 'WEBP', quality=90, method=6)
        
        # PNG version
        png_path = os.path.join(ASSETS_DIR, 'logo.png')
        resized.save(png_path, 'PNG', optimize=True)

        print(f"  Original Logo: {orig_size:.1f} KB ({orig_w}x{orig_h})")
        print(f"  Optimized logo.png: {os.path.getsize(png_path) / 1024:.1f} KB ({target_w}x{target_h})")
        print(f"  Optimized logo.webp: {os.path.getsize(webp_path) / 1024:.1f} KB ({target_w}x{target_h})")


def optimize_content_photos():
    print("\n--- 3. Optimizing Content Photos ---")
    # Clean up test favicon.webp if exists
    test_fav_webp = os.path.join(ASSETS_DIR, 'favicon.webp')
    if os.path.exists(test_fav_webp):
        os.remove(test_fav_webp)

    photo_files = [
        'hero-rooftop-solar.jpg',
        'commercial-solar-rooftop.jpg',
        'project-ayodhya-residential.jpg',
        'solar-battery-hybrid.jpg',
        'solar-engineer-survey.jpg',
        'solar-inverter-installation.jpg'
    ]

    total_orig = 0
    total_opt = 0

    for f in photo_files:
        src = os.path.join(ASSETS_DIR, f)
        if not os.path.exists(src):
            continue
        
        orig_kb = os.path.getsize(src) / 1024
        total_orig += orig_kb

        with Image.open(src) as img:
            rgb = img.convert("RGB")
            
            # 1. Save modern WebP
            base, _ = os.path.splitext(f)
            webp_path = os.path.join(ASSETS_DIR, f"{base}.webp")
            rgb.save(webp_path, 'WEBP', quality=80, method=6)
            webp_kb = os.path.getsize(webp_path) / 1024
            
            # 2. Recompress progressive JPEG fallback
            rgb.save(src, 'JPEG', quality=82, progressive=True, optimize=True)
            jpg_kb = os.path.getsize(src) / 1024
            total_opt += webp_kb

            print(f"  {f:32} Orig: {orig_kb:6.1f} KB | WebP: {webp_kb:5.1f} KB | Opt JPEG: {jpg_kb:5.1f} KB")

    print(f"\nTotal Content Photos: {total_orig:.1f} KB -> WebP {total_opt:.1f} KB (Saved {(1 - total_opt/total_orig)*100:.1f}%)")


if __name__ == '__main__':
    generate_favicons()
    optimize_logo()
    optimize_content_photos()
    print("\n--- Image Optimization Suite Completed Successfully! ---")
