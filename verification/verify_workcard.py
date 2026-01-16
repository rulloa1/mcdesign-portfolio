from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        print("Navigating to localhost:3000...")
        page.goto("http://localhost:3000")

        # Wait for content to load
        print("Waiting for content...")
        page.wait_for_selector("text=Curated Works", timeout=10000)

        # Find the first WorkCard by its title
        project_name = "S. Florida - High Rise Luxe Condo"

        # Check if there is a link containing this text
        # We need to be careful because the text might be split across elements, but "S. Florida - High Rise Luxe Condo" is in an h3

        # Using a locator that finds an 'a' tag that contains the text
        link = page.locator(f"a:has-text('{project_name}')").first

        if link.count() > 0:
            print("Found WorkCard as a link!")
            href = link.get_attribute("href")
            target = link.get_attribute("target")
            rel = link.get_attribute("rel")

            print(f"Href: {href}")
            print(f"Target: {target}")
            print(f"Rel: {rel}")

            if href == "#" and target == "_blank":
                print("Verification SUCCESS: WorkCard is a link with correct attributes.")
            else:
                print("Verification FAILED: Attributes incorrect.")
        else:
            print("Verification FAILED: Could not find WorkCard as a link.")
            # check if it exists as div
            div_card = page.locator(f"div:has-text('{project_name}')").first
            if div_card.count() > 0:
                 print("Found WorkCard as DIV (incorrect).")
            else:
                 print("Could not find WorkCard at all.")

        # Screenshot
        page.screenshot(path="verification/verification.png")
        browser.close()

if __name__ == "__main__":
    run()
