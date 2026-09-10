# LMAO-World Project Page

Anonymous project page for **LMAO-World: Loco-Manipulation VLA Optimization inside a World Model**.

The site is static and self-contained. It uses no analytics, remote fonts, CDNs, or external JavaScript.

## Local Preview

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Final Hero Video

Place the final cut at `media/videos/hero.mp4`, then replace the `hero-video-placeholder` block in `index.html` with:

```html
<video class="hero-video" muted loop playsinline controls preload="metadata">
  <source src="media/videos/hero.mp4" type="video/mp4">
</video>
```

The academic-project page structure is adapted from the Nerfies project-page format.
