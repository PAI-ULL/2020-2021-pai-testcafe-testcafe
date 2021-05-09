/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 * Práctica 11
 *
 * @author Pablo Bande Sanchez Giron
 * @since 29.apr.2021
 * @description Class that represent queen problem.
 * @see {@link https://github.com/PAI-ULL/pai-p11-ajedrez-alu0101225296.git}
 */

'use strict';

/**
* Given the position of two queens on a chess board,
* indicate whether or not they are positioned so that they can attack each other
* In the game of chess, a queen can attack pieces which are on the same row,
*  column, or diagonal.
*/
export class QueenAttack {
  /** @private */
  #black;
  #white;
  #board;

  /**
   * Creates a QueenAttack object
   */
  constructor({
    black: [blackRow, blackColumn] = [0, 3],
    white: [whiteRow, whiteColumn] = [7, 3],
  } = {}) {
    if (this.#validPosition(blackRow, blackColumn, whiteRow, whiteColumn)) {
      throw new Error('Queens cannot share the same space');
    }
    if (!this.#insideBoard(blackRow) || !this.#insideBoard(blackColumn) ||
    !this.#insideBoard(whiteRow) || !this.#insideBoard(whiteColumn)) {
      throw new Error('Queen must be placed on the board');
    }

    this.#black = [blackRow, blackColumn];
    this.#white = [whiteRow, whiteColumn];
    this.#createBoard();
  }

  /**
   * Function that checks if a position is inside the board
   * @param {Number} position position of the queen
   * @return {Boolean} inside board true or false
   */
  #insideBoard(position) {
    return position >= 0 && position <= 7;
  }

  /**
   * Function that checks two queen positions are valid
   * @param {Number} blackRow black queen row position
   * @param {Number} blackColumn black queen column position
   * @param {Number} whiteRow white queen row position
   * @param {Number} whiteColumn white queen column position
   * @return {Boolean} wether its true or false
   */
  #validPosition(blackRow, blackColumn, whiteRow, whiteColumn) {
    return (blackRow === whiteRow && blackColumn === whiteColumn);
  }

  /**
   * Function that creates a board with existing queens
   */
  #createBoard() {
    this.#board = new Array(8).fill(null).map(() => new Array(8).fill('_'));
    this.#board[this.#black[0]][this.#black[1]] = 'B';
    this.#board[this.#white[0]][this.#white[1]] = 'W';
  }

  /**
   * Function that returns white queen
   */
  get white() {
    return this.#white;
  }

  /**
   * Function that returns black queen
   */
  get black() {
    return this.#black;
  }

  /**
   * Function that returns string of the current board
   * @return {String} string of board with those separators
   */
  toString() {
    return this.#board.map((row) => row.join(' ')).join('\n');
  }

  /**
   * Function that checks if both queens can attack themselves
   * @return {Boolean} wether they can attack or not
   */
  get canAttack() {
    return ((this.#black[0] == this.#white[0]) || /** same row */
    (this.#black[1] == this.#white[1]) || /** same column */
    (this.#black[0] + this.#black[1]) == (this.#white[0] + this.#white[1]) ||
    (this.#black[0] - this.#black[1]) == (this.#white[0] - this.#white[1]));
  }
}
