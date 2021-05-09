/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 * Práctica 11
 *
 * @author Pablo Bande Sanchez Giron
 * @since 02.may.2021
 * @description Class that represent chess board and draws all 8-queen
 * solutions.
 *  Piezas:
 * 0 vacio
 * 1 rey blanco
 * 2 reina blanco
 * 3 alfil blanco
 * 4 caballo blanco
 * 5 torre blanco
 * 6 peon blanco
 * 7 rey negro
 * 8 reina negro
 * 9 alfil negro
 * 10 caballo negro
 * 11 torre negro
 * 12 peon negro
 * @see {@link https://github.com/PAI-ULL/pai-p11-ajedrez-alu0101225296.git}
 */

'use strict';

/**
 * Create  a chess board, places all pieces, also calculates
 * and draws 8-queen problem solutions
 */
export class Chess {
  /** @private */
  #canvas;
  /** @private */
  #ctx;
  /** @private */
  #board;
  /** @private */
  #solutions = [];
  /** @private */
  #soluciones;

  /**
   * Creates a Chess object
   */
  constructor() { // deberia ir en el constructor
    this.#canvas = document.getElementById('CANVAS');
    this.#canvas.height = 800;
    this.#canvas.width = 800;
    this.#ctx = this.#canvas.getContext('2d');
    const content = document.body.querySelector('.content');
    content.appendChild(this.#canvas);
    this.#soluciones = document.getElementById('coords');
    this.#soluciones.style.visibility = 'hidden';
    this.resetBoard = this.resetBoard.bind(this);
    this.solve = this.solve.bind(this);
    this.#eightQueen();
    this.#drawBoard();
    const startButton = document.querySelector('.start');
    const solveButton = document.querySelector('.solve');
    startButton.addEventListener('click', this.resetBoard);
    solveButton.addEventListener('click', this.solve);
  }

  /**
   * Set the value of the board elements
   * @param {Array} board nueva tabla
   */
  setBoard(board) {
    this.#board = board;
  }

  /**
   * Return the number of solutions of the queen problem
   * @return {Number}
   */
  getSolutionSize() {
    return this.#solutions.length();
  }

  /**
   * Draws the board without any piece
   * @private
   */
  #drawBoard() {
    const squareSize = this.#canvas.height / 8;
    let col = 104;
    this.#ctx.font = '12px Arial';
    for (let pixelx = 0; pixelx < 8; pixelx ++) {
      for (let pixely = 0; pixely < 8; pixely ++) {
        this.#ctx.beginPath();
        this.#ctx.fillStyle = ((pixelx + pixely) % 2) ? '#B58863' : '#F0D9B5';
        this.#ctx.fillRect(pixelx * squareSize, pixely * squareSize,
            squareSize, squareSize);
        this.#ctx.closePath();
        this.#ctx.fillStyle = ((pixelx + pixely) % 2) ? '#F0D9B5' : '#B58863';
        if (pixelx == 7) {
          this.#ctx.fillText(pixely + 1, pixelx * squareSize + 0.9 * squareSize,
              pixely * squareSize + 13);
        }
        if (pixely == 7) {
          this.#ctx.fillText(String.fromCharCode(col), pixelx * squareSize + 3,
              pixely * squareSize + 0.95 * squareSize);
        }
      }
      col --;
    }
  }

  /**
   * Draws the pieces of the board
   * @private
   */
  #drawPieces() {
    for (let squarex = 0; squarex < 8; squarex ++) {
      for (let squarey = 0; squarey < 8; squarey ++) {
        this.#drawPiece(squarex, squarey);
      }
    }
  }

  /**
   * Draws a piece given a position.
   * @private
   * @param {Number} squarex position in x
   * @param {Number} squarey position in y
   */
  #drawPiece(squarex, squarey) {
    const squareSize = this.#canvas.height / 8;
    const pieceName = this.#board[squarex][squarey];
    const piece = new Image();
    switch (pieceName) {
      case 1:
        piece.src = 'img/WhiteKing.png';
        break;
      case 2:
        piece.src = 'img/WhiteQueen.png';
        break;
      case 3:
        piece.src = 'img/WhiteBishop.png';
        break;
      case 4:
        piece.src = 'img/WhiteKnight.png';
        break;
      case 5:
        piece.src = 'img/WhiteRook.png';
        break;
      case 6:
        piece.src = 'img/WhitePawn.png';
        break;
      case 7:
        piece.src = 'img/BlackKing.png';
        break;
      case 8:
        piece.src = 'img/BlackQueen.png';
        break;
      case 9:
        piece.src = 'img/BlackBishop.png';
        break;
      case 10:
        piece.src = 'img/BlackKnight.png';
        break;
      case 11:
        piece.src = 'img/BlackRook.png';
        break;
      case 12:
        piece.src = 'img/BlackPawn.png';
        break;
      default:
        break;
    }
    piece.onload = () => {
      this.#ctx.drawImage(piece, squarey * squareSize,
          squarex * squareSize, squareSize, squareSize);
    };
  }

  /**
   * Draws the whole chess, including all elements.
   * @private
   */
  #drawChess() {
    this.#drawBoard();
    this.#drawPieces();
  }

  /**
   * Resets the board and sets it as a new game.
   */
  resetBoard() {
    this.#board = [
      [5, 4, 3, 1, 2, 3, 4, 5],
      [6, 6, 6, 6, 6, 6, 6, 6],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [12, 12, 12, 12, 12, 12, 12, 12],
      [11, 10, 9, 7, 8, 9, 10, 11],
    ];
    this.#soluciones.style.visibility = 'hidden';
    this.#drawChess();
  }

  /**
   * saves all queen positions in algebraic notation
   * @return {Array} array of positions of solutions
   */
  #algebraicNotation() {
    const positions = [];
    let posx = 0;
    for (let positionx = 104; positionx > 96; positionx --) {/** columnas */
      for (let positiony = 0; positiony < 8; positiony ++) {/** filas */
        if (this.#board[positiony][posx] === 8) {
          positions.push(`${String.fromCharCode(positionx)}${positiony + 1}`);
        }
      }
      posx ++;
    }
    return positions;
  }

  /**
   * Generates a random 8-queen problem solution.
   */
  solve() {
    this.#board =
    this.#solutions[Math.floor(Math.random() * this.#solutions.length)];
    this.#drawChess();
    this.#soluciones.style.visibility = 'visible';
    this.#soluciones.innerHTML =
    this.#algebraicNotation().join('\n');
    console.log(this.#soluciones.innerHTML.split('\n').length);
  }
  /**
   * Checks if it's a safe spot to place a queen
   * @private
   * @param {Array} board current board
   * @param {Number} row row to place
   * @param {Number} col col to place
   * @return {Boolean} wheter it's safe or not
   */
  #isSafe(board, row, col) {
    /** Checks the line */
    for (let position = 0; position < col; position ++) {
      if (board[row][position] === 8) {
        return false;
      }
    }
    /** Checks left diagonal */
    for (let positionx = row, positiony = col; positionx >= 0 && positiony >= 0;
      positionx --, positiony --) {
      if (board[positionx][positiony] === 8) {
        return false;
      }
    }
    /** Checks right diagonal */
    for (let positionx = row, positiony = col;
      positiony >= 0 && positionx < 8; positionx ++, positiony --) {
      if (board[positionx][positiony] === 8) {
        return false;
      }
    }
    return true;
  }

  /**
   * Generates solutions in a recursive way
   * @private
   * @param {Array} board current board
   * @param {Number} col col to place
   * @return {Boolean}
   */
  #recursiveEightQueen(board, col) {
    if (col === 8) {
      this.#solutions.push(board.map((arr) => {
        return arr.slice();
      }));
      return;
    }

    for (let iterator = 0; iterator < 8; iterator ++) {
      if (this.#isSafe(board, iterator, col)) {
        board[iterator][col] = 8;
        this.#recursiveEightQueen(board, col + 1);
        board[iterator][col] = 0;
      }
    }
    return false;
  }
  /**
   * Creates the board and generate solutions
   * @private
   */
  #eightQueen() {
    const board = new Array(8).fill(null).map(() => new Array(8).fill(0));
    this.#recursiveEightQueen(board, 0);
  }
}

const chess = new Chess();