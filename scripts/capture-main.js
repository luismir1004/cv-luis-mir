const puppeteer = require('puppeteer');

(async () => {
  console.log("Iniciando Puppeteer para capturar el landing page...");
  const browser = await puppeteer.launch({
    headless: "new",
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  
  // Viewport for desktop landing page
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });

  const urls = ['http://localhost:3000/', 'http://localhost:3001/'];
  let success = false;
  
  for (const url of urls) {
    try {
      console.log(`Intentando navegar a ${url}...`);
      await page.goto(url, { waitUntil: 'networkidle0', timeout: 15000 });
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

  // Esperar a que carguen las animaciones iniciales
  await new Promise(r => setTimeout(r, 3000));

  console.log("Tomando captura de pantalla de la página principal...");
  await page.screenshot({ path: 'landing-screenshot.png', fullPage: true });
  
  console.log("Captura guardada como landing-screenshot.png");
  await browser.close();
})();
