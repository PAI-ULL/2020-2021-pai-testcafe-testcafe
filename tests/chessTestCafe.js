import { Selector } from 'testcafe'; // first import testcafe selectors
import { takeSnapshot } from 'testcafe-blink-diff';
import { Chess } from '../src/chess.js';


fixture('Snapshots')
  .page('http://localhost:5500/src/index.html');

test('Index testing', async t => {
	await takeSnapshot(t);
});
/*
test('Index testing after clicking on documentation', async t => {
	await t
		.click('#documentation'); // clicamos en el boton con id 'documentation'
	 
	await t.wait(5000); // esperamos 5 segundos
	await takeSnapshot(t, {
		fullPage: true,
		timeout:2000
	});
});*/

test('Solutions now invisible after clicking resetting the chess board"', async canvas => {
	await canvas
		.click('#solve')
		.click('#start')
		.expect(Selector('#coords').visible).ok();
});