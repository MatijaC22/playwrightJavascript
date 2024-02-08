import scrapy
from scrapy.http import Request
from playwright_instance import playwright_instance

class ExampleSpider(scrapy.Spider):
    name = 'example'
    start_urls = ['http://example.com']

    def start_requests(self):
        # Start browser before the spider starts
        playwright_instance.launch_browser()
        
        for url in self.start_urls:
            yield Request(url=url, callback=self.parse)

    def parse(self, response):
        # Extract links using Scrapy link extraction
        links = response.css('a::attr(href)').getall()

        # Process other data if needed
        # ...

        # Build Scrapy requests without actually making HTTP requests
        for link in links:
            request = Request(url=link, callback=self.process_link_with_playwright)
            request.meta['link_to_process'] = link
            yield request

    def process_link_with_playwright(self, response):
        # Extract the link from the metadata
        link = response.meta.get('link_to_process')

        # Use Playwright logic on each link
        page = playwright_instance.browser.new_page()
        page.goto(link)

        # Playwright logic goes here
        title = page.title()
        content = page.evaluate('(document.getElementsByTagName("body")[0]).innerText')

        # Use the extracted data as needed
        self.log({
            'url': link,
            'title': title,
            'content': content,
        })

    def closed(self, reason):
        # Close browser when the spider is closed
        playwright_instance.close_browser()
