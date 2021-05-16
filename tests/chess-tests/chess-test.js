import {Selector} from 'testcafe';

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
