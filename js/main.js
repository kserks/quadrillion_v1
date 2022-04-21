import knot from './knot.js';
import SelectFigureBar from './SelectFigureBar.js';

import Board from './Board.js';
import figures from './figures.js';

const emitter = knot();

const canvas = document.querySelector('.board__canvas');
const ctx = canvas.getContext('2d');


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


const board = new Board(canvas, ctx, figures);


board.on('click', event=>{
  board.grid.forEach( (row, y) => {
    row.forEach( (cell, x) => {
      const collision =  board.collision(cell, event);
      if(board.grid[y][x].select){

        board.grid[y][x].select = false;
        board.grid[y][x].value = 0
        board.grid[y][x].color =  board.color;
      }
      if(board.grid[y][x].value>0) return;
      if(collision){
            board.grid[y][x].select = true;
            board.grid[y][x].value = 1
            board.grid[y][x].color = 'darkgray';
      }

      
    })
  })

  board.render()

  console.log(board.grid)
  console.log('EVENT')
})

const D = 2000
setTimeout(()=>{
  board.figures[3].flip('H')
  board.reset();

}, D)

setTimeout( ()=>{
      board.figures[3].flip('H')
      board.reset();
      
} ,D*2)
setTimeout( ()=>{
      board.figures[3].flip('V')
      board.reset();
      
} ,D*3)
setTimeout( ()=>{
      board.figures[3].flip('V')
      board.reset();
      
} ,D*4)

setTimeout( ()=>{
      board.figures[0].rotate()
      board.reset();
      
} ,D*5)
setTimeout( ()=>{
      board.figures[1].y = 1;
      board.reset();
      
} ,D*6)

/*
function animate() {
  board.piece.draw();
  requestAnimationFrame(this.animate.bind(this));
}
*/
/**
 * play
 */

function play (){
  board.reset();


  //FIG.forEach(f=>f.render())

}

play ()
