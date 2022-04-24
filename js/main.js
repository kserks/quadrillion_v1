
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
let rotate = 0;
let flipH = false;
let flipV = false;
fig.onSelect((id, r, fH, fV)=>{

    ID = id
    rotate = r;
    flipH = fH;
    flipV = fV;
})




const board = new Board(canvas, ctx);
board.update();
window.board = board


function setMap (){

  maps['Новичёк'][0].forEach(item=>{
    const { id , x, y, rotate, flipH, flipV } = item;

    const F = new Figure(id, x, y)
    for(let i = 0; i<rotate;i++){
        F.rotate();
    }
    if(flipH){
      F.flip('H');
    }
    if(flipV){
      F.flip('V');
    }
    if(!board.isFiguresCollide(F)){
       // alert('Не все ячейки свободны')
       // return;
    }
    board.setFigure(F);
    fig.disable(id)
  })
  board.render();

}

setMap();



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
            fig.disable(ID)
            /*
             * Трансформации
             */
            for(let i = 0; i<rotate;i++){
                F.rotate();
            }
            if(flipH){
              F.flip('H');
            }
            if(flipV){
              F.flip('V');
            }
            rotate = 0;
            flipH = false;
            flipV = false;
            ID = null;
            board.setFigure(F);

      }

      
    })
  })
  //board.reset();
  board.render()



})


//alert('Может отказаться от canvas? в пользу DOM')

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

