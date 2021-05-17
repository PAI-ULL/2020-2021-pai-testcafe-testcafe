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
 * @see {@link https://github.com/PAI-ULL/pai-p11-ajedrez-alu0101225296.git}
 */

'use strict';

import { Selector } from 'testcafe';

fixture.only `My fixture`
    .page `http://example.com`;

test('My fixture - Test', () => {});


fixture `My Fixture 2`;

test.skip('My fixture 2 - Test 1', () => {});
test.only('My fixture 2 - Test 2', () => {});
test('My fixture 2 - Test 3', () => {});