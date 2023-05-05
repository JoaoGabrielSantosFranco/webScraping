
const express = require('express');
const puppeteer = require("puppeteer");

const server = express();




server.get('/userRoute', async (request, response) => {
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    await page.goto('https://dolarhoje.com/bitcoin-hoje/')


    const PageContent = await page.evaluate(() => {
        return {
            BTC: document.querySelector('#nacional').value,
        };
    });
    console.log("PageContent", PageContent);

    await browser.close();

    response.json({
        "BTC": PageContent.BTC,
    });

});

const port =  process.env.SERVER_PORT || 3000;
server.listen(port, () => {
    console.log(`subiu com sucesso em http://localhost:${port}`);
})


