import {Selector} from  'testcafe';

fixture('Reading text of an element')
  .page('https://es.wikipedia.org/wiki/Elon_Musk');

  test('Reading text of an element', async signal => {
    const TITLE = await Selector('#firstHeading').textContent;
    await signal
      .expect(TITLE).eql('Elon Musk');
  });