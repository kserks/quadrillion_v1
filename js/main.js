
import SelectFigureBar from './SelectFigureBar.js';
import Figure from './Figure.js';
import Board from './Board.js';

import LevelsControl from './LevelsControl.js';

const canvas = document.querySelector('.board__canvas');
const ctx = canvas.getContext('2d');




const fig = new SelectFigureBar();

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



/**
 * Обработка клика по canvas
 */


board.on('click', event=>{

  board.grid.forEach( (row, y) => {
    row.forEach( (cell, x) => {
      const collision =  board.collision(cell, event);
      if(collision){
            console.log(ID, rotate, flipH, flipV)
            if(!ID) return;
            if(board.isExistFigure(ID)) return;
            fig.disable(ID);
            fig.reset();
            const F =  new Figure(ID, x, y);
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
            document.querySelector('.figure-json').innerText = JSON.stringify({id: ID, x, y, rotate, flipH, flipV})+','
            board.setFigure(F);

            if(board.isLevelEnd()){
              setTimeout(()=>{
                alert('Уровень пройден')
              },500)
            }

            rotate = 0;
            flipH = false;
            flipV = false;
            ID = null;
      }

      
    })
  })
  board.update()



})


const levelsControl = new LevelsControl(board, fig);



