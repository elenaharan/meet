import puppeteer from "puppeteer";

//Feature 2 "Show/Hide event details"

describe('show/hide an event details', () => {
    let browser;
    let page;
    beforeAll(async () => {
      
      browser = await puppeteer.launch();
      page = await browser.newPage();
      await page.goto('http://localhost:3000/');
      await page.waitForSelector('.event');
    });

    afterAll(() => {
        browser.close();
    });

  //Scenario 1 Elements collapsed by defult
  test('An event element is collapsed by default', async () => { 
    jest.setTimeout(300000);
    const eventDetails = await page.$('.event .event-description');
    expect(eventDetails).toBeNull();
  });

  //Scenario 2 User clicks on Details button and element expands
  test('User can expand an event to see its details', async () => {
    jest.setTimeout(300000);
    await page.click('.event .showMore');
    const eventDetails = await page.$('.event .event-description');
    expect(eventDetails).toBeDefined();  
  });

  //Scenario 3 User can collapse an event to hide details
  test('User can collapse an event to hide its details', async () => {
    jest.setTimeout(300000);  
    await page.click('.event .showLess');
      const eventDetails = await page.$('.event .event-description');
      expect(eventDetails).toBeNull();
  });
  
});