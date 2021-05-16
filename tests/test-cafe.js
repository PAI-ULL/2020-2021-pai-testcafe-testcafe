/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 * Práctica 11
 *
 * @author Pablo Bande Sanchez Giron
 * @since 02.may.2021
 * @description Tests for chess class.
 * @see {@link https://github.com/PAI-ULL/pai-p11-ajedrez-alu0101225296.git}
 */

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

fixture('Reading text of an element')
  .page('https://es.wikipedia.org/wiki/Elon_Musk');

  test('Reading text of an element', async signal => {
    const TITLE = await Selector('#firstHeading').textContent;
    await signal
      .expect(TITLE).eql('Elon Musk');
  });

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