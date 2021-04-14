const utils = require("./utils")
const puppeteer = require('puppeteer');
const fs = require('fs');

selected_countries = ["alGeria", "france", "germaNy", "jaPan", "italy"];

selected_countries = selected_countries.map(str => {
    return str.toLowerCase();
});

// console.log(selected_countries);

console.log(utils.countries);

const withBrowser = async (fn) => {
	const browser = await puppeteer.launch({
        executablePath: utils.pathToChrome,
        headless: false,
        ignoreHTTPSErrors: true,
        userDataDir: './tmp',
        defaultViewport: null,
        args: [
            '--start-maximized',
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-infobars',
            '--ignore-certifcate-errors',
            '--ignore-certifcate-errors-spki-list',
            '--user-agent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3312.0 Safari/537.36"'
        ],
    });
	try {
		return await fn(browser);
	} finally {
		// await browser.close();
	}
}

const withPage = (browser) => async (fn) => {
	const page = await browser.newPage();
	try {
		return await fn(page);
	} finally {
		// await page.close();
	}
}

(async () => {

    urls = [];

    for(country of selected_countries) {
        if((Object.keys(utils.countries)).includes(country)) {
            urls.push(`${utils.cia_link}${utils.countries[country]}`);
        }
        else {
            console.log(`country ${country} does not exist in the database`);
        }
    }
    
    
    const preloadFile = fs.readFileSync('./preload.js', 'utf8');

    const results = await withBrowser(async (browser) => {
        return Promise.all(urls.map(async (url) => {
            return withPage(browser)(async (page) => {
                await page.evaluateOnNewDocument(preloadFile);
                await page.goto(url);
                return ;
            });
        }))
    });
})();