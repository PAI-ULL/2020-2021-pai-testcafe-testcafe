import { Selector, ClientFunction } from 'testcafe'; // first import testcafe selectors

fixture('Index behaviour')
  .page('http://192.168.1.37:8081/index.html');

  test('Chess button navigates to chess.html', async index => {
    await index
      .click('#chess')
      .navigateTo('http://192.168.1.37:8081/pablo-bande-chess.html');
  });

  const URL = ClientFunction(() => window.location.href);

  test('Chess button navigates to Chess HTML', async chess => {
    await chess
      .click('#chess')
      .expect(URL()).eql('http://192.168.1.37:8081/pablo-bande-chess.html');
  });

  test('Checking the value of an element', async index => {
    const TEXT = await Selector('#practica11').textContent;
    await index
      .expect(TEXT).eql('Práctica 11');
  });