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

'use strict';

import {ChessTest} from '../src/chess2.js';
import {JSDOM} from 'jsdom';
import {expect} from 'chai';

describe('Chess Class', () => {
  beforeEach(function() {
    const dom = new JSDOM('<html></html>', {url: 'http://localhost'});
    global.window = dom.window;
    global.document = dom.window.document;
    global.chess = new ChessTest();
  });

  it('Create Chess Object', () => {
    expect(chess).to.be.an.instanceof(ChessTest);
  });

  it('Algebraic notation works no queens', () => {
    const newboard = [
      [5, 4, 3, 1, 3, 3, 4, 5],
      [6, 6, 6, 6, 6, 6, 6, 6],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [12, 12, 12, 12, 12, 12, 12, 12],
      [11, 10, 9, 7, 1, 9, 10, 11],
    ];
    chess.setBoard(newboard);
    expect(chess.algebraicNotation()).to.be.eql([]);
  });

  it('Algebraic notation works sample sol', () => {
    const newboard = [
      [0, 0, 8, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 8, 0, 0],
      [0, 0, 0, 8, 0, 0, 0, 0],
      [8, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 8],
      [0, 0, 0, 0, 8, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 8, 0],
      [0, 8, 0, 0, 0, 0, 0, 0],
    ];
    chess.setBoard(newboard);
    expect(chess.algebraicNotation()).to.be.eql(
        ['h2', 'g5', 'f3', 'e0', 'd7', 'c4', 'b6', 'a1']);
  });

  it('Check if number of solutions are correct', () => {
    chess.eightQueen();
    expect(chess.getSolutionSize()).to.be.eql(92);
  });
});
