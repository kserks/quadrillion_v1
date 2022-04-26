
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

//setMap();

console.log('DOM render | выделение фигуры')

board.on('click', event=>{

  board.grid.forEach( (row, y) => {
    row.forEach( (cell, x) => {
      const collision =  board.collision(cell, event);
      if(collision){

            if(!ID) return;


            /**
             * if(board.isExistFigure(ID)) return;
             */
            const F =  new Figure(ID, x, y);
            //console.log(board.isFiguresCollide(F))
            if(!board.isFiguresCollide(F)){
              console.log('Не все ячейки свободны')
             // return;
            }
            /**
             * fig.disable(ID)
             */
            /*
             * Трансформации
             */
            F.rotate(rotate);
            if(flipH){
              F.flip('H');
            }
            if(flipV){
              F.flip('V');
            }
            document.querySelector('.figure-json').innerText = JSON.stringify({id: ID, x, y, rotate, flipH, flipV})
            board.setFigure(F);
            rotate = 0;
            flipH = false;
            flipV = false;
            ID = null;
      }

      
    })
  })
  //board.reset();
  board.update()



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

