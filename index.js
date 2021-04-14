const utils = require("./utils")
const puppeteer = require('puppeteer');

selected_countries = ["algeria", "france", "germany", "japan", "italy"];

(async () => {
    const browser = await puppeteer.launch({
        executablePath: utils.pathToChrome,
        headless: false,
        ignoreHTTPSErrors: true,
        userDataDir: './tmp',
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-infobars',
            '--window-position=0,0',
            '--ignore-certifcate-errors',
            '--ignore-certifcate-errors-spki-list',
            '--user-agent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3312.0 Safari/537.36"'
        ],
    });

    pages = [];

    for(country of selected_countries) {

        if(utils.countries.keys().includes(country)) {
            const page = await browser.newPage();
            pages.push((page, country));
    
            const preloadFile = fs.readFileSync('./preload.js', 'utf8');
            await page.evaluateOnNewDocument(preloadFile);
    
            await page.goto(utils.cia_link);
        }
        else {
            console.log(`country ${country} does not exist in the database`);
        }
        
    }
});