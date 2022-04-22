
import SelectFigureBar from './SelectFigureBar.js';
import Figure from './Figure.js';
import Board from './Board.js';
//import figures from './figures.js';


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
const _A = new Figure('A', 0, 0, null, 'yellow');
//_A.flip('V')
//_A.rotate()
const _figures = [  ]

const board = new Board(canvas, ctx, _figures);

 board.setFigure(_A);
board.on('click', event=>{
  board.grid.forEach( (row, y) => {
    row.forEach( (cell, x) => {
      const collision =  board.collision(cell, event);
      if(board.grid[y][x].select){
        board.grid[y][x].select = false;
        board.grid[y][x].value = 0
        board.grid[y][x].color =  board.color;
      }
      if(collision&&board.grid[y][x].value>0){

      };
      if(collision){
            //board.grid[y][x].select = true;
            //board.grid[y][x].value = 1
            //board.grid[y][x].color = 'darkgray';
            /* click*/
            //_A.x = x
           // _A.y = y
            //_A.flip('V')
            //_A.rotate()
          
           const cell = board.getCurrentCell(x, y)
          //cell.select = true
          //cell.value = 1
          //cell.color = 'magenta';
         // const coords = board.getFigureById('A')
          board.removeFigure('A');
         
      }

      
    })
  })
  //board.reset();
  board.render()



})



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
