
const express = require('express');
const puppeteer = require("puppeteer");

const server = express();

server.get('/', async (request, response) => {
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

    response.send({
        "BTC": PageContent.BTC,
    });
});


const port = 3000;
server.listen(port, () => {
    console.log(`subiu com sucesso em http://localhost:${port}`);
})
