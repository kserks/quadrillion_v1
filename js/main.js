import knot from './knot.js';
import SelectFigureBar from './SelectFigureBar.js';

import { Board, ctx } from './Board.js';
import Figure from './Figure.js';

const emitter = knot();




const FIGURES = [
  { id: 'A', url: 'images/A.png' },
  { id: 'B', url: 'images/B.png' },
  { id: 'C', url: 'images/C.png' },
  { id: 'D', url: 'images/D.png' },
  { id: 'E', url: 'images/E.png' },
  { id: 'F', url: 'images/F.png' },
  { id: 'G', url: 'images/G.png' },
  { id: 'H', url: 'images/H.png' },
  { id: 'I', url: 'images/I.png' },
  { id: 'J', url: 'images/J.png' },
  { id: 'K', url: 'images/K.png' },
  { id: 'L', url: 'images/L.png' }
]



const fig = new SelectFigureBar(FIGURES);

fig.onSelect((id, pos)=>{
    console.log(id, pos)
})

const board = new Board();

const figure_G = new Figure(ctx, 'deepskyblue', 3, 0, [
      [2, 2, 2],
      [2, 0, 0],
      [0, 0, 0],
    ]);

const figure_A = new Figure(ctx, 'yellow', 0, 1, [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 1, 0, 0],
      [1, 1, 1, 1],
    ]);
const figure_K = new Figure(ctx, 'lightgreen', 0, 0, [
      [0, 1, 1],
      [0, 0, 1],
      [0, 1, 1]
    ]);
const figure_H = new Figure(ctx, 'cyan', 8, 2, [
      [0, 0, 1],
      [0, 0, 1],
      [1, 1, 1],
    ]);
const figure_I = new Figure(ctx, 'skyblue', 9, 0, [
      [1, 1],
      [0, 1],
    ]);

const figure_F = new Figure(ctx, 'magenta', 3, 1, [
      [0, 1, 1],
      [1, 1, 0],
      [1, 0, 0],
    ]);
const figure_B = new Figure(ctx, 'gold', 6, 2, [
      [0, 0, 1],
      [1, 1, 1],
      [0, 1, 0],
    ]);
function play (){
  board.reset();

  const FIG = [ figure_A, figure_G, figure_K, figure_H, figure_I, figure_F, figure_B , ]
  FIG.forEach(f=>f.render())
  setTimeout(()=>{
    console.table(board.grid)
  },300)
}

play ()
