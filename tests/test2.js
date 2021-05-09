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

fixture('Correct behaviour')
  .page('http://192.168.1.37:8081/pablo-bande-chess.html');  

  test('Home button navigates to index', async home => {  
    await home
      .click('#home')
      .navigateTo('http://192.168.1.37:8081/index.html');
  });

  test('Canvas is generated', async canvas => {
    const BOARD = await Selector('#CANVAS').value;
    await canvas
      .click('#solve')
      .expect(BOARD).eql(undefined);
  });

fixture('Checking solution interface')
  .page('http://192.168.1.37:8081/pablo-bande-chess.html'); 

  test('Solutions is not visible onload', async solution => {
    await solution
      .expect(Selector('#coords').visible).notOk();
  });

  test('Solutions is now visible after clicking on "generate solution"', async solution => {
    await solution
      .click('#solve')
      .expect(Selector('#coords').visible).ok();
  });

  test('Solutions now invisible after clicking resetting the chess board"', async solution => {
    await solution
      .click('#solve')
      .click('#start')
      .expect(Selector('#coords').visible).notOk();
  });
