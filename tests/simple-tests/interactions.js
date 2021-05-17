/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 * TestCafe
 *
 * @author Pablo Bande Sanchez Giron
 * @since 02.may.2021
 * @description Tests for skip and only.
 * @see {@link }
 */

'use strict';

import { Selector } from 'testcafe';

/** Click */http://10.6.129.38:8081
fixture `Click example`
    .page `https://devexpress.github.io/testcafe/example/`;

test('Click test', async t => {
  const selectBasedOnText = Selector('label').withText('I have tried TestCafe');
  await t
    .wait(3000)
    .click(selectBasedOnText);
});

/** Type */
test('Type Text test', async t => {
  await t
    .wait(1000)
    .typeText('#developer-name', 'John Doe');
});

/** Press key */
test('Press Key test', async t => {
    await t
      .wait(3000)
      .click('#tried-test-cafe')
      .wait(3000)
      .pressKey('space')
}); 

/** Hover */
test
  .page `https://js.devexpress.com`;
    ('Hover test', async t => {
    await t
      .wait(3000)
      .hover('.map-container');
});

/** Drag */
test('Drag test', async t => {
    const triedCheckbox = Selector('label').withText('I have tried TestCafe');
    await t
      .wait(3000)
      .click(triedCheckbox)
      .wait(3000)
      .drag('#slider', 360, 0, { offsetX: 10, offsetY: 10 })
      .wait(3000);
});