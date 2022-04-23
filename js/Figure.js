import TYPES from './types.js'

/**
 * pointerY - точка построения. Смещение. 
 * В обычном режиме фигура строится с верхнего левого угла
 * Но нам надо при клике построить фигуру так, что бы она интуитивно занимало
 * место определенным углом от места клика.
 */
class Figure {
  #x = 0;
  #y = 0;
  #pointerX = 0;
  #pointerY = 0;
  constructor (id, x, y){
    this.id = id
    this.color = TYPES[this.id].color;
    this.pointerX = TYPES[this.id].pointerX;
    this.pointerY = TYPES[this.id].pointerY;
    this.x = x;
    this.y = y;
    this.shape = TYPES[this.id].shape;
  }
  set x (val){
      this.#x = val;
  }
  get x (){
    return this.#x - this.pointerX;
  }
  set y (val){
      this.#y = val;
  }
  get y (){
    return this.#y - this.pointerY;
  }
  get pointerX (){
    return this.#pointerX;
  }
  set pointerX (val){
    this.#pointerX = val;
  }
  get pointerY (){
    return this.#pointerY;
  }
  set pointerY (val){
    this.#pointerY = val;
  }
  flip (direction){
    if(direction==='H'){
          this.shape.forEach( (row, y) => row.reverse() );
          //const [x, y] = TYPES[this.id].poiner.flipH;
          //this.pointerX = x;
          //this.pointerY = y;
    }
    if(direction==='V'){
          this.shape.reverse();


    }
  }
  rotate (){
    for (let y = 0; y < this.shape.length; ++y) {
      for (let x = 0; x < y; ++x) {
        [this.shape[x][y], this.shape[y][x]] =  [this.shape[y][x], this.shape[x][y]];

      }
    }
    this.shape.forEach(row => row.reverse());
  }

}

/** Usage 

const figure_G = new Figure(ctx, 'deepskyblue', 3, 0, [
      [2, 2, 2],
      [2, 0, 0],
      [0, 0, 0],
    ]);
figure_G.flip('H');
figure_G.flip('V');
figure_G.rotate();

*/

export default Figure;