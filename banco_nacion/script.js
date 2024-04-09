import { launch } from 'puppeteer';
import { writeFile } from 'fs/promises';

(async () => {
  const browser = await launch();
  const page = await browser.newPage();
  await page.goto('https://www.bna.com.ar/Personas');
  await page.waitForSelector('div.tabSmall');
  const contenidoDiv = await page.$eval('div.tabSmall table tbody tr:first-child', div => div.innerHTML);
  await writeFile('index.html', `<html><head><link rel=stylesheet href="style.css"></head><body><table><thead><th>Divisa</th><th>Compra</th><th>Venta</th></thead><tbody>${contenidoDiv}</tbody></table></body></html>`);
  await browser.close();
})();
