from playwright.sync_api import sync_playwright
import os

DEVICES = [
    ("iphone-se", 375, 667),
    ("iphone-12", 390, 844),
    ("iphone-14-pro-max", 430, 932),
    ("pixel-7", 412, 915),
    ("galaxy-s21", 360, 800),
    ("ipad-mini", 768, 1024),
    ("desktop", 1440, 900),
]

OUT_DIR = r"D:\deveopment\navodaya-naturals\screenshots"
os.makedirs(OUT_DIR, exist_ok=True)

with sync_playwright() as p:
    browser = p.chromium.launch()
    for name, w, h in DEVICES:
        ctx = browser.new_context(viewport={"width": w, "height": h}, device_scale_factor=2)
        page = ctx.new_page()
        page.goto("http://localhost:8080", wait_until="networkidle")
        page.wait_for_timeout(1500)
        # Scroll through the page to trigger IntersectionObserver reveals
        page.evaluate("""
            async () => {
                const delay = ms => new Promise(r => setTimeout(r, ms));
                // Scroll slowly through the page to trigger IntersectionObserver
                const step = window.innerHeight * 0.4;
                const maxScroll = document.body.scrollHeight;
                for (let y = 0; y <= maxScroll; y += step) {
                    window.scrollTo(0, y);
                    await delay(200);
                }
                // Wait for transitions
                await delay(500);
                // Force-reveal any remaining hidden elements
                document.querySelectorAll(".reveal:not(.is-visible)").forEach(el => el.classList.add("is-visible"));
                await delay(300);
                // Scroll back to top for fold screenshot
                window.scrollTo(0, 0);
                await delay(300);
            }
        """)
        page.wait_for_timeout(500)
        # Full page screenshot
        page.screenshot(path=os.path.join(OUT_DIR, f"{name}-full.png"), full_page=True)
        # Just above-the-fold
        page.screenshot(path=os.path.join(OUT_DIR, f"{name}-fold.png"), full_page=False)
        ctx.close()
        print(f"  {name} ({w}x{h}) done")
    browser.close()
print("All screenshots saved to", OUT_DIR)
