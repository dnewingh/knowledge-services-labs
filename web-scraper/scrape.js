const puppeteer = require('puppeteer');

async function scrapeData() {
  // Launch a headless browser
  //const browser = await puppeteer.launch();

  // Launch a non-headless browser
  const browser = await puppeteer.launch({ headless: false });

  // Create a new page
  const page = await browser.newPage();

  // Navigate to the website you want to scrape
  await page.goto('https://example.com');

  // Now, you can interact with the page to scrape the data you need
  const title = await page.title();
  console.log('Title:', title);

  /*
  // You can also extract data by using selectors
  const [element] = await page.$x('//*[@id="example"]');
  const text = await element.getProperty('textContent');
  const exampleText = await text.jsonValue();
  console.log('Example Text:', exampleText);
  */

  // Close the browser once you're done
  await browser.close();
}

// Call the function to start scraping
scrapeData();
