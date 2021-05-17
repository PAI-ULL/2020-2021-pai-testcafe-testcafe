import {Selector} from 'testcafe';

fixture('Checking solution interface')
  .page('http://10.6.129.38:8081/pablo-bande-chess.html'); 

  test('Solutions is not visible onload', async solution => {
    await solution
      .wait(2000)
      .expect(Selector('#coords').visible).notOk();
  });

  test('Solutions is now visible after clicking on "generate solution"', async solution => {
    await solution
      .wait(2000)
      .click('#solve')
      .wait(2000)
      .expect(Selector('#coords').visible).ok();
  });

  test('Solutions now invisible after clicking resetting the chess board"', async solution => {
    await solution
      .wait(2000)
      .click('#solve')
      .wait(2000)
      .click('#start')
      .wait(2000)
      .expect(Selector('#coords').visible).notOk();
  });
