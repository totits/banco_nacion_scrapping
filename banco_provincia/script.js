import { launch } from 'puppeteer';
import { writeFile } from 'fs/promises';


(async () => {
  const browser = await launch();
  const page = await browser.newPage();
  await page.goto('https://www.bancoprovincia.com.ar/home/');
  await page.waitForSelector('div.sc-iBYQkv');
  const contenidoDiv = await page.$eval('div.sc-iBYQkv', div => div.innerHTML);
  await writeFile('index.html', `<html><head><link rel=stylesheet href="style.css"></head><body><h1>Banco Provincia</h1>${contenidoDiv}</body></html>`);
  await browser.close();
})();
