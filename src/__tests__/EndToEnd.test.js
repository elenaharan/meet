import puppeteer from "puppeteer";

//Feature 2 "Show/Hide event details"

describe('show/hide an event details', () => {
    //Scenario 1
    beforeAll(async () => {
        jest.setTimeout(300000);
    });

  test('An event element is collapsed by default', async () => { 
    const browser = await puppeteer.launch();

      const page = await browser.newPage();
      await page.goto('http://localhost:3000/');

      await page.waitForSelector('.event');

      const eventDetails = await page.$('.event .event-description');
      expect(eventDetails).toBeNull();
      browser.close();
  })
})