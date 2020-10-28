
/*const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
      headless: false,
  });

  
  const page = await browser.newPage();
  await page.goto('https://ifood.edusense.com.br/');

  await page.waitForNavigation();
  await page.type('#username', '47444216878')
 // await browser.close();
})();*/

const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();
  await page.goto('https://unsplash.com/');

  // - Acessa a página de login
  await page.click('[href="/login"]');

  // Troque os valores de process.env.UNSPLASH_EMAIL e process.env.UNSPLASH_PASS pelo seu login e senha :)
  await page.type('[name="user[email]"]', 'email')
  await page.type('#user_password', 'senha')

  await page.click('[type="submit"]')

  await page.waitForNavigation();




  // await browser.close();
})();