
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

board.on('outside', id=>{
    fig.enable(id);    
})
board.on('complete', ()=>{

    setTimeout(()=>{
      alert('Уровень пройден')
    },500)
})

console.log('Можно крутить не активные фигуры')
/**
 * Обработка клика по canvas
 */

board.on('click', (cell, x, y)=>{

            if(cell.id){
              fig.enable(cell.id);
              board.removeFigure(cell.id)
            };

            if(!ID) return;
            if(board.isExistFigure(ID)) return;

            fig.disable(ID);
            fig.reset();
            // Добавление фигуры
            const f =  new Figure(ID, x, y);
            f.rotate(rotate);
            if(flipH) f.flip('H');
            if(flipV) f.flip('V');
            board.setFigure(f);
            document.querySelector('.figure-json').innerText = JSON.stringify({id: ID, x, y, rotate, flipH, flipV})+','

            rotate = 0;
            flipH = false;
            flipV = false;
            ID = null;

            /*const f = board.getFigureById(F.id)
           
            f.forEach(pos=>{
                const cell = board.getCell (pos.x, pos.y)
                   console.log(cell)
            })*/



})


const levelsControl = new LevelsControl(board, fig);



