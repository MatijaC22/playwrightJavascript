// @ts-check

// playwright codegen //KORISTI ZA GENERIRANJE KODA KLIKANJA I SLICNO -> PROCITAJ I OVO https://playwright.dev/docs/next/codegen#emulation
// await page.pause(); //OVO JE CUDO ISTO, GDJE OCES STATI STANI I VIDI STO SLJEDECE
// https://playwright.dev/docs/next/trace-viewer -> PROUCI PRESKOCIO SI
import pw from 'playwright';
import retry from 'async-retry';


import { date } from './utils.js';
// const SBR_CDP = `wss://${process.env.USERNAME}:${process.
                                        // env.PASSWORD}@${process.env.HOST}`;
import ExcelJS from 'exceljs';


async function main() {

    // (await pw.request.newContext({baseURL})).delete('url', {data:{}}) //IGRAM SE DA VIDIM KAKO NAPRAVITI API REQUEST
    
    console.log('Connecting to Scraping browser....');
    // const browser = await pw.chromium.connectOverCDP('http://localhost:9222');
    const browser = await pw.chromium.launch(
        {
            // userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.0.0 Safari/537.36',
            headless:false,
            channel:'chrome',
        }
    );
    
    const context = await browser.newContext({
        // ...iPhone
      });
    console.log('Connected! Navigating....');
    const page = await context.newPage();
    
    await page.goto('https://www.google.com/search?q=mali+losinj+vespera&sca_esv=596363404&ei=zaWaZfi2NdqK9u8P74OqiAo&ved=0ahUKEwi40eLjr8uDAxVahf0HHe-BCqEQ4dUDCHE&uact=5&oq=mali+losinj+vespera&gs_lp=Egxnd3Mtd2l6LXNlcnAiE21hbGkgbG9zaW5qIHZlc3BlcmEyFBAuGIAEGMcBGK8BGJgFGJ4FGJkFMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgIQJjICECYyAhAmMgIQJjICECYyIxAuGIAEGMcBGK8BGJgFGJ4FGJkFGJcFGNwEGN4EGOAE2AEBSMSaAVDDCVjNlgFwBngBkAEAmAGWAaABjxWqAQQzLjIwuAEDyAEA-AEBwgIKEAAYRxjWBBiwA8ICDRAAGIAEGIoFGEMYsAPCAgsQABiABBiKBRiRAsICCxAuGIAEGMcBGNEDwgIFEAAYgATCAhAQLhiABBiKBRhDGMcBGNEDwgIKEAAYgAQYigUYQ8ICBRAuGIAEwgIfEC4YgAQYigUYQxjHARjRAxiXBRjcBBjeBBjgBNgBAcICERAuGIAEGIoFGJECGMcBGNEDwgIgEC4YgAQYigUYkQIYxwEY0QMYlwUY3AQY3gQY4ATYAQHCAgsQLhiABBiKBRiRAsICGhAuGIAEGIoFGJECGJcFGNwEGN4EGOAE2AEBwgIHEAAYgAQYCsICDRAuGIAEGAoYxwEY0QPCAgcQLhiABBgKwgINEC4YgAQYChjHARivAcICFhAuGIAEGAoYlwUY3AQY3gQY4ATYAQHCAgwQABiABBgKGEYYgALCAhgQABiABBgKGEYYgAIYlwUYjAUY3QTYAQLCAhQQLhiABBiXBRjcBBjeBBjgBNgBAcICChAAGIAEGEYYgALCAhYQABiABBhGGIACGJcFGIwFGN0E2AECwgIFECEYoAHCAhYQLhiABBgNGMcBGK8BGJgFGJ4FGJkFwgIIEAAYCBgeGA3CAgoQABgIGB4YDRgPwgIlEC4YgAQYDRjHARivARiYBRieBRiZBRiXBRjcBBjeBBjgBNgBAeIDBBgAIEGIBgGQBgq6BgYIARABGBS6BgYIAhABGBM&sclient=gws-wiz-serp', { timeout: 2 * 60 * 1000});
    console.log('Navigated! Scraping page content...');

    // setTimeout(async function() {
        
        await page.screenshot( { path:'pageImage1.png', fullPage: true, });
        await page.getByRole('button', { name: 'Prihvati sve' }).dispatchEvent('click');
        // setTimeout(async function() {
            
            await page.locator('div.PDzHbe:has-text("Provjerite dostupnost")').click();

        // },3000)
        
        // setTimeout(async function() {
        
            await page.screenshot( { path:'pageImage2.png', fullPage: true, });
            
            // setTimeout(async function() {
                await page.getByPlaceholder('Prijava').and(page.getByRole('textbox', {name:'Prijava'})).click();
                
                // setTimeout(async function() {
                    await page.getByLabel('sri, 1. svi').click();
                    await page.getByLabel('ned, 5. svi').click();

                    const element = await page.locator('button.VfPpkd-LgbsSe.VfPpkd-LgbsSe-OWXEXe-k8QpJ.VfPpkd-LgbsSe-OWXEXe-dgl2Hf.nCP5yc.AjY5Oe.DuMIQc.LQeN7.z18xM.rtW97.Q74FEc.D9Ipie')
                    await element.scrollIntoViewIfNeeded();
                    await element.click();
                    
                    // await page.getByText('Gotovo').click();

                    // setTimeout(async function() {
                        await page.screenshot( { path:'pageImage3.png', fullPage: true, });
                        await page.locator('div.R09YGb.WCYWbc').last().scrollIntoViewIfNeeded();
                        // setTimeout(async function() {
                            const workbook = new ExcelJS.Workbook();
                            const worksheet = workbook.addWorksheet('ScrapedData');
    
                            // const elements = await page.$$('div.R09YGb.WCYWbc:has-text("Sve opcije") div.ADs2Tc span.NiGhzc');
                            // for (const element of elements) {
                            //     const text = await element.innerText();
                            //     console.log(text);
                            // }
                            // const elements2 = await page.$$('div.R09YGb.WCYWbc:has-text("Sve opcije") div.ADs2Tc span.MW1oTb');
                            // for (const element of elements2) {
                            //     const text = await element.innerText();
                            //     console.log(text);
                            // }
                            
                            worksheet.addRow(['name', 'price']);
                            const e = (await page.$$('div.R09YGb.WCYWbc:has-text("Sve opcije") div.ADs2Tc'));
                            
                            for (const parentElement of e) {
                            //     // const name = await parentElement.$('span.NiGhzc').innerText();
                            //     // const price = await parentElement.$('span.MW1oTb').innerText();
                            //     const price = await parentElement.find('span.MW1oTb').innerText();//.$$('span.MW1oTb').textContent();
                                let pricef = ''
                                let namef = ''
                                const nameElement = await parentElement.$('span.NiGhzc');
                                if (nameElement) {
                                    const name = await nameElement.innerText();
                                    namef = name 
                                    console.log(name);
                                }
                                const nameElement2 = await parentElement.$('span.MW1oTb');
                                if (nameElement2) {
                                    const price = await nameElement2.innerText();
                                    pricef = price
                                    console.log(price);
                                }
                                worksheet.addRow([namef, pricef]);

                            //     // Log the extracted data
                            //     console.log('Name:', name);
                            //     console.log('Price:', price);

                            //     // Add data to the worksheet
                            //     worksheet.addRow([name, price]);
                            }
                            await workbook.xlsx.writeFile('scraped_data.xlsx');

                            setTimeout(async function() {
                                await context.close();
                                await browser.close();
                            }, 5000);
                        // }, 5000);
                    // }, 5000);
                // }, 5000);
            // }, 5000);            
        // }, 3000);
    // }, 3000);
    
}

await retry(main, {
    retries:3,
    onRetry:(error)=>{
        console.error('retry...', error)
    },
});

async function checkIfExist(page, selector, word){
    const element = await page.evaluate(() => {
        const elements = document.querySelectorAll(selector);
        for (const el of elements) {
            if (el.textContent.includes(word)) {
                console.log('aa')
                return el;
            }
        }
        return null;
    });
        
    if (element) {
        console.log('bb');
        await element.click();
    }
}



