import {Selector} from 'testcafe';

fixture ('Screenshots')
  .page `http://devexpress.github.io/testcafe/example/`;

test('Take a screenshot of a fieldset', async signal => {
  await signal
    .typeText('#developer-name', 'Peter Parker')
    .click('#tried-test-cafe')
    .typeText('#comments', 'I think TestCafe is awesome!')
    .takeElementScreenshot('#comments')
    .click('#submit-button')
    .takeScreenshot();
});