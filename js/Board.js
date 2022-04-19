const BLOCK_SIZE = 80;
const COLS = 11;
const ROWS = 5;
const canvas = document.querySelector('.board__canvas');
export const ctx = canvas.getContext('2d');
// Устанавливаем размеры холста
ctx.canvas.width = COLS * BLOCK_SIZE;
ctx.canvas.height = ROWS * BLOCK_SIZE;

ctx.scale(BLOCK_SIZE, BLOCK_SIZE);

export class Board {
  constructor (){

    
  }

  //undo (){},
  reset (){
    this.grid = this.getEmptyBoard();
  }
  getEmptyBoard (){
    return Array.from({ length: ROWS }, ()=>Array(COLS).fill(0) )
  }

}


