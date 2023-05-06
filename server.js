const express = require('express');
const puppeteer = require("puppeteer");
const cors = require('cors');

const server = express();
server.use(cors());

let pageContent = {};

server.get('/', async (request, response,) => {
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    await page.goto('https://dolarhoje.com/bitcoin-hoje/')
    const PageContent = await page.evaluate(() => {
        return {
            BTC: document.querySelector('#nacional').value,
        };
    });

    await browser.close();

    response.json({
        "BTC": PageContent.BTC,
    });
    pageContent = PageContent; // atualiza pageContent com PageContent obtido
});


const port = 3000;
server.listen(port, () => {

    console.log(`subiu com sucesso em http://localhost:${port}`);
})

module.exports = pageContent;

