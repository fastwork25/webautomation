import puppeteer from 'puppeteer';

export async function getHello(req, res) {
    const { url } = req.query;

  try {
    const browser = await puppeteer.launch({
      headless: false,
      args: ['--no-sandbox', '--disable-setuid-sandbox'], // penting untuk Railway
    });

    const page = await browser.newPage();
    await page.goto(url);
    const title = await page.title();
    await browser.close();

    res.status(200).json({ title });
  } catch (error) {
    console.error('Puppeteer error:', error);
    res.status(500).json({ error: 'Puppeteer failed to run.' });
  }  
}
