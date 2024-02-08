from playwright.sync_api import sync_playwright

class PlaywrightInstance:
    def __init__(self):
        self.browser = None

    def launch_browser(self):
        self.browser = sync_playwright().chromium.launch()

    def close_browser(self):
        if self.browser:
            self.browser.close()

# Create a global instance
playwright_instance = PlaywrightInstance()


