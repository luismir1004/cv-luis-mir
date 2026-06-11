const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  console.log("Iniciando Puppeteer...");
  const browser = await puppeteer.launch({
    headless: "new",
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  
  // Set viewport to A4 size approximately (landscape or portrait? the CV is A4 portrait)
  await page.setViewport({ width: 1200, height: 1600, deviceScaleFactor: 2 });

  // Handle the print dialog automatically
  page.on('dialog', async dialog => {
    console.log("Dialog intercepted:", dialog.type());
    await dialog.dismiss();
  });

  // Try localhost:3000, if not 3001
  const urls = ['http://localhost:3000/cv', 'http://localhost:3001/cv'];
  let success = false;
  
  for (const url of urls) {
    try {
      console.log(`Intentando navegar a ${url}...`);
      await page.goto(url, { waitUntil: 'networkidle0', timeout: 10000 });
      success = true;
      break;
    } catch (e) {
      console.log(`Fallo al cargar ${url}: ${e.message}`);
    }
  }

  if (!success) {
    console.error("No se pudo cargar el localhost en los puertos 3000 o 3001.");
    await browser.close();
    process.exit(1);
  }

  // Wait extra 2 seconds for any animations or fonts
  await new Promise(r => setTimeout(r, 2000));

  console.log("Tomando captura de pantalla...");
  await page.screenshot({ path: 'cv-screenshot.png', fullPage: true });
  
  console.log("Captura guardada como cv-screenshot.png");
  await browser.close();
})();
