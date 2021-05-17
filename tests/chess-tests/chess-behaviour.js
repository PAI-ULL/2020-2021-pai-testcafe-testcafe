import {Selector} from 'testcafe';

fixture('Correct behaviour')
  .page('http://10.6.129.38:8081/pablo-bande-chess.html');  

  test('Home button navigates to index', async home => {  
    await home
      .wait(1000)
      .click('#home')
      .wait(1000)
      .navigateTo('http://10.6.129.38:8081/index.html');
  });

  test('Canvas is generated', async canvas => {
    const BOARD = await Selector('#CANVAS').value;
    await canvas
      .wait(1000)
      .click('#solve')
      .wait(1000)
      .expect(BOARD).eql(undefined);
  });