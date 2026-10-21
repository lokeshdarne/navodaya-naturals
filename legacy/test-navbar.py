from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    b = p.chromium.launch()
    ctx = b.new_context(viewport={"width": 375, "height": 667})
    pg = ctx.new_page()
    pg.goto("http://localhost:8080", wait_until="networkidle")
    pg.wait_for_timeout(1200)
    # Scroll down -> navbar should hide
    pg.evaluate("window.scrollTo(0, 500)")
    pg.wait_for_timeout(800)
    hidden_down = pg.evaluate("document.getElementById('navbar').classList.contains('navbar-hidden')")
    pg.screenshot(path="screenshots/nav-scrolled-down.png")
    # Scroll up -> navbar should return
    pg.evaluate("window.scrollTo(0, 300)")
    pg.wait_for_timeout(800)
    hidden_up = pg.evaluate("document.getElementById('navbar').classList.contains('navbar-hidden')")
    pg.screenshot(path="screenshots/nav-scrolled-up.png")
    print("hidden-after-scroll-down:", hidden_down)
    print("hidden-after-scroll-up:", hidden_up)
    b.close()
print("nav test done")
