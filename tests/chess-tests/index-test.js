import { Selector, ClientFunction } from 'testcafe'; // first import testcafe selectors

fixture('Index behaviour')
  .page('http://10.6.129.38:8081/index.html');

  test('Chess button navigates to chess.html', async index => {
    await index
      .click('#chess')
      .wait(1000)
      .navigateTo('http://10.6.129.38:8081/pablo-bande-chess.html');
  });

  const URL = ClientFunction(() => window.location.href);

  test('Chess button navigates to Chess HTML', async chess => {
    await chess
      .click('#chess')
      .wait(1000)
      .expect(URL()).eql('http://10.6.129.38:8081/pablo-bande-chess.html');
  });

  test('Checking the value of an element', async index => {
    const TEXT = await Selector('#practica11').textContent;
    await index
      .wait(1000)
      .expect(TEXT).eql('Práctica 11');
  });