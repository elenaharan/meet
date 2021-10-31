import puppeteer from "puppeteer";

//Feature 2 "Show/Hide event details"

describe('show/hide an event details', () => {
    //Scenario 1 Elements collapsed by defult
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
  });

  //Scenario 2 User clicks on Details button and element expands
  test('User can expand an event to see its details', async () => {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      await page.goto('http://localhost:3000/');
      await page.waitForSelector('.event');
      await page.click('.showMore');
      const eventDetails = await page.$('.event .event-description');
      expect(eventDetails).toBeDefined();
      browser.close();
  })
});