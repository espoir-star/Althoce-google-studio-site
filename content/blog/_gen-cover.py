#!/usr/bin/env python3
"""Generateur de covers blog Althoce 1200x630 - template unifie."""
from PIL import Image, ImageDraw, ImageFont
import sys

INK   = (9, 9, 11)
BLUE  = (37, 99, 235)
WHITE = (255, 255, 255)
GREY  = (128, 128, 136)
DIM   = (113, 113, 122)

W, H = 1200, 630
FB = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"
FR = "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"
REF = "/sessions/zen-clever-ride/mnt/Althoce-google-studio-site/public/blog/covers/automatiser-achats-ia-cover.png"
OUT_DIR = "/sessions/zen-clever-ride/mnt/Althoce-google-studio-site/public/blog/covers"


def wrap(draw, text, font, max_w):
    words, lines, cur = text.split(), [], ""
    for w_ in words:
        trial = (cur + " " + w_).strip()
        if draw.textlength(trial, font=font) <= max_w:
            cur = trial
        else:
            if cur:
                lines.append(cur)
            cur = w_
    if cur:
        lines.append(cur)
    return lines


def make(title, subtitle, category, filename):
    img = Image.new("RGB", (W, H), INK)
    d = ImageDraw.Draw(img)

    # --- Bloc identite : logo + wordmark repris a l'identique de la cover de reference
    ref = Image.open(REF).convert("RGB")
    img.paste(ref.crop((60, 70, 320, 132)), (60, 70))

    # --- Badge categorie (pill bleu, haut droite)
    fbadge = ImageFont.truetype(FB, 22)
    label = category.upper()
    tw = d.textlength(label, font=fbadge)
    pad_x, bh = 24, 36
    bw = tw + 2 * pad_x
    bx1, by0 = 1130, 82
    bx0 = bx1 - bw
    d.rounded_rectangle([bx0, by0, bx1, by0 + bh], radius=bh // 2, fill=BLUE)
    d.text((bx0 + pad_x, by0 + bh / 2), label, font=fbadge, fill=WHITE, anchor="lm")

    # --- Filet bleu
    d.rounded_rectangle([70, 165, 130, 169], radius=2, fill=BLUE)

    # --- Titre : 2 a 3 lignes, taille adaptative
    max_w = 1000
    for size in (68, 62, 56, 50, 46):
        ftitle = ImageFont.truetype(FB, size)
        lines = wrap(d, title, ftitle, max_w)
        if len(lines) <= 3:
            break
    lh = int(size * 1.10)
    y = 209
    for ln in lines[:3]:
        d.text((70, y), ln, font=ftitle, fill=WHITE)
        y += lh

    # --- Sous-titre
    fsub = ImageFont.truetype(FR, 24)
    sub_lines = wrap(d, subtitle, fsub, 1010)[:2]
    ys = max(y + 26, 448)
    for ln in sub_lines:
        d.text((72, ys), ln, font=fsub, fill=GREY)
        ys += 32

    # --- Pied : URL + point bleu
    furl = ImageFont.truetype(FR, 19)
    d.text((71, 539), "althoce.com/blog", font=furl, fill=DIM)
    d.ellipse([1112, 542, 1130, 560], fill=BLUE)

    path = f"{OUT_DIR}/{filename}"
    img.save(path, "PNG", optimize=True)
    print("OK", path, img.size, f"{len(lines)} ligne(s) titre @ {size}px")


if __name__ == "__main__":
    make(
        "Combien de temps pour déployer un agent IA ?",
        "Le calendrier réel d'un déploiement en PME, étape par étape",
        "Guide",
        "temps-deploiement-agent-ia-cover.png",
    )
    make(
        "RAG, fine-tuning, prompt engineering expliqués",
        "Les 3 concepts que tout décideur de PME doit savoir distinguer",
        "Guide",
        "rag-fine-tuning-prompt-cover.png",
    )
