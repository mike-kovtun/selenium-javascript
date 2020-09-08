require('chromedriver');
const assert = require('assert');
const {
  Builder,
  Key,
  By,
  until
} = require('selenium-webdriver');

describe('Checkout progect in page', function() {
  let driver;

  before(async function() {
    driver = await new Builder().forBrowser('chrome').build();
  });

  it('Search on Google', async function() {
    await driver.get('https://dashboard-test.sken.ai');
    await driver.sleep(3000);
    await driver.findElement(By.id("okta-signin-username")).sendKeys('testfortestfortes@sharklasers.com', Key.RETURN);
    await driver.findElement(By.id("okta-signin-password")).sendKeys('foSDHzuxRpVZ1', Key.RETURN);
    await driver.findElement(By.id("okta-signin-submit")).click();

    await driver.wait(until.elementLocated(By.className("topbar__logo")), 10000);
    // let title = await driver.getTitle();
    // assert.equal(title, 'dalenguyen - Google Search');

  });

  after(() => driver && driver.quit());
})