const puppeteer = require('puppeteer')

puppeteer.launch({ 
    headless:false,
    args: ['--start-maximized']
  }).then( async browser => {  
    const page = await browser.newPage()
    await page.goto('http://globo.com')
    //hui-highlight__link
    const result = await page.evaluate(() => {
        const books = [];
        console.log('teste')
        Array.from(document.getElementsByClassName('hui-highlight__link'))
            .forEach(book => {
                console.log(book);
                if(book['alt'])
                    books.push({
                        src: book['src'],
                        alt: book['alt'],
                        title: book['title']
                    })
            });

        return books;
    });

    console.log(result);
    await browser.close();
  });