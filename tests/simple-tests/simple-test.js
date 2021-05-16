import {Selector} from 'testcafe';

fixture('Simple test')
  .page('https://www.google.com/');

  test('Checking some text elements on the WebPage', async signal => {
    await signal
      .typeText(Selector('[name="q"]'), 'testcafe')
      .wait(3000)
      .pressKey('enter')
      .wait(3000);
  });

  test('Other option but pressing Search button', async signal => {
    await signal
      .typeText(Selector('[name="q"]'), 'testcafe')
      .takeScreenshot()
      .click(Selector('[name="btnK"]'))
  });