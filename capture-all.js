const puppeteer = require('puppeteer');
const path = require('path');

const projects = [
  { id: "superautos-code", url: "https://superautos-code.vercel.app/" },
  { id: "caribe-stay", url: "https://caribe-stay.vercel.app/" },
  { id: "tienda-alfareria", url: "https://alfareria-code.vercel.app/" },
  { id: "tienda-online", url: "https://tiendaonline-git.vercel.app/" },
  { id: "pizzeria", url: "https://pizzeria-la-foccacia.vercel.app/" },
  { id: "blog-vision", url: "https://blog-vision-seven.vercel.app/" },
  { id: "startup-proyecto", url: "https://startup-proyecto-app.vercel.app/" },
  { id: "portfolio-v1", url: "https://portafolioluis-gamma.vercel.app/" }
];

(async () => {
  console.log("Iniciando Puppeteer para capturar proyectos...");
  const browser = await puppeteer.launch({
    headless: "new",
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  // Configurar viewport estándar para tarjetas de portafolio
  await page.setViewport({ width: 1280, height: 800, deviceScaleFactor: 2 });

  for (const proj of projects) {
    try {
      console.log(`Intentando capturar ${proj.id} desde ${proj.url}...`);
      await page.goto(proj.url, { waitUntil: 'networkidle2', timeout: 45000 });
      // Esperar 4 segundos adicionales para animaciones o fuentes
      await new Promise(r => setTimeout(r, 4000));
      const outputPath = path.join(__dirname, 'public', `${proj.id}.png`);
      await page.screenshot({ path: outputPath });
      console.log(`✓ Captura guardada con éxito en: ${outputPath}`);
    } catch (e) {
      console.error(`✗ Error al capturar ${proj.id}: ${e.message}`);
    }
  }

  await browser.close();
  console.log("Capturas completadas.");
})();
