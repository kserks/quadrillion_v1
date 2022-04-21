import Figure from './Figure.js';

const figure_G = new Figure('deepskyblue', 3, 0, [
      [2, 2, 2],
      [2, 0, 0],
      [0, 0, 0],
    ]);

const figure_A = new Figure('yellow', 0, 1, [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 1, 0, 0],
      [1, 1, 1, 1],
    ]);
const figure_K = new Figure('lightgreen', 0, 0, [
      [0, 1, 1],
      [0, 0, 1],
      [0, 1, 1]
    ]);
const figure_H = new Figure('cyan', 8, 2, [
      [0, 0, 1],
      [0, 0, 1],
      [1, 1, 1],
    ]);
const figure_I = new Figure('skyblue', 9, 0, [
      [1, 1],
      [0, 1],
    ]);

const figure_F = new Figure('magenta', 3, 1, [
      [0, 1, 1],
      [1, 1, 0],
      [1, 0, 0],
    ]);
const figure_B = new Figure('gold', 6, 2, [
      [0, 0, 1],
      [1, 1, 1],
      [0, 1, 0],
    ]);

const FIG = [ figure_A, figure_G, /*figure_K,figure_H, */ figure_I, /*figure_F, */figure_B  ]
 


export default FIG;