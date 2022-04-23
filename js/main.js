
import SelectFigureBar from './SelectFigureBar.js';
import Figure from './Figure.js';
import Board from './Board.js';
import maps from './maps.js';


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

let ID = null

fig.onSelect((id, pos)=>{
    ID = id
})


maps['Новичёк'][0].forEach(item=>{
  console.log(item)
})


const board = new Board(canvas, ctx);
window.board = board
//const _A =  new Figure('A', 0, 0);
//const _B =  new Figure('B', 3, 2);
 //     board.setFigure(_B);
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
          // board.removeFigure('A');
      };
      if(collision){
            //board.grid[y][x].select = true;
            //board.grid[y][x].value = 1
            //board.grid[y][x].color = 'darkgray';
            /* click*/
            if(!ID) return;

            const isID = board.figures.find(f=>{
                return f.id===ID
            })
            if(isID) return;
            const F =  new Figure(ID, x, y);
            console.log(board.isFiguresCollide(F))
            if(!board.isFiguresCollide(F)){
              console.log('Не все ячейки свободны')
              return;
            }
             //F.flip('H')
            //_A.rotate()
           board.setFigure(F);
           ID = null;
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
  board.update();

const D = 3000

/*
setTimeout(()=>{
  board.figures[0].rotate();
  board.render();
}, D)*/

}

play ()

