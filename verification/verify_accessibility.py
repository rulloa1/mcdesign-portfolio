from playwright.sync_api import sync_playwright, expect

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Navigate to the app
        page.goto("http://localhost:3000")

        # Wait for hydration
        page.wait_for_timeout(2000)

        # 1. Verify Desktop Theme Toggle

        # Find the button by aria-label that is visible
        theme_toggle = page.locator('button[aria-label="Toggle Dark Mode"]').filter(has_text="", has=None).locator("visible=true")

        # Note: .locator("visible=true") is not a standard selector, using pseudo-class :visible
        theme_toggle = page.locator('button[aria-label="Toggle Dark Mode"]:visible')

        count = theme_toggle.count()
        print(f"Found {count} VISIBLE theme toggle buttons with aria-label.")

        if count == 0:
            print("FAILED: No visible theme toggle button found with aria-label.")
            # Let's dump the HTML to see what's going on if needed, or just list all buttons
            all_toggles = page.locator('button[aria-label="Toggle Dark Mode"]')
            print(f"Total toggles in DOM: {all_toggles.count()}")
            for i in range(all_toggles.count()):
                print(f"Toggle {i} visible: {all_toggles.nth(i).is_visible()}")

            browser.close()
            exit(1)

        # Verify it works (click it)
        theme_toggle.first.click()
        page.wait_for_timeout(500)

        # Take a screenshot
        page.screenshot(path="verification/screenshot.png")
        print("Screenshot taken.")

        browser.close()

if __name__ == "__main__":
    run()
