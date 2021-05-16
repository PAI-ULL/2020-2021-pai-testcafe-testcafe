/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 * TestCafe
 *
 * @author Pablo Bande Sanchez Giron
 * @since 02.may.2021
 * @description Tests for metadata.
 * @see {@link https://github.com/PAI-ULL/pai-p11-ajedrez-alu0101225296.git}
 */

'use strict';

import { Selector } from 'testcafe';

fixture `My fixture`
    .page `http://example.com`;

test
    .page `http://devexpress.github.io/testcafe/blog/`
    .meta('device', 'mobile');
    ('Mobile test', async t => {});

test
    .page `http://devexpress.github.io/testcafe/blog/`
    .meta('device', 'pc');
    ('PC test', async t => {});