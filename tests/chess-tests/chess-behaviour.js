import {Selector} from 'testcafe';

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