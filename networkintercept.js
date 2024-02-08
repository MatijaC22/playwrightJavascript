// const { chromium } = require('playwright');
import {chromium} from 'playwright'
(async () => {
  const browser = await chromium.launch({
    headless: false,
    devtools:true
  });

  const context = await browser.newContext();

  // Open new page
  const page = await context.newPage();

  

    await page.goto('http://amazon.com/');

  //   await page.route('**\/*.{png,jpg,jpeg,svg}',(request) => {

  //   if(request.request().resourceType() === 'image') {
  //       request.abort();
  //   }
  //   else {
  //       request.continue();
  //   }
  // });
  
   //await browser.close();
 
 })();