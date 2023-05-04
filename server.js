const express = require('express');
const puppeteer = require("puppeteer");

const server = express();

server.get('/', async (request, response) => {
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    await page.goto('https://data.worldbank.org/indicator/EG.ELC.ACCS.ZS?end=2020&locations=1W&start=2010&view=chart')

    

    const PageContent = await page.evaluate(() => {
        return {
            paises: document.querySelector('.body .infinite').innerHTML,
        };
    });
    console.log("PageContent", PageContent);

    await browser.close();

    response.send({
        "paises":PageContent.paises,
    });
});


const port = 3000;
server.listen(port, () => {
    console.log(`subiu com sucesso em http://localhost:${port}`);
})
