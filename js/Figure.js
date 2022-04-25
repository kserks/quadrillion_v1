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
  #n = 0;
  constructor (id, x, y){
    this.id = id
    this.color = TYPES[this.id].color;
    //this.pointerX = TYPES[this.id].pointer.rotate[this.rotatePos].x;
    //this.pointerY = TYPES[this.id].pointer.rotate[this.rotatePos].y;
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
  get transform (){
    let tr = 0;
    if(this.direction==='H'){
      tr = 1;
    }
    if(this.direction==='V'){
      tr = 2;
    }
    return tr;
  }
  get pointerX (){
    return TYPES[this.id].pointer1[this.rotatePos][this.transform].x
  }
  /*
  set pointerX (val){
    this.#pointerX = val;
  }
  */
  get pointerY (){
    return TYPES[this.id].pointer1[this.rotatePos][this.transform].y//this.#pointerY;
  }
  /*
  set pointerY (val){
    this.#pointerY = val;
  }
  */
  get rotatePos (){

    return this.#n;
  }
  set rotatePos (n){
    this.#n = n;
  }
  flip (direction){
    this.direction = direction
    if(direction==='H'){
          this.shape.forEach( (row, y) => row.reverse() );
    }
    if(direction==='V'){
          this.shape.reverse();


    }
  }

  rotate (n=0){
    this.rotatePos = n;
    // скольлко раз крутануть
    for(let i = 0; i<n; i++){
          // линейно меняем значения в матрице
          for (let y = 0; y < this.shape.length; ++y) {
            for (let x = 0; x < y; ++x) {
              [this.shape[x][y], this.shape[y][x]] =  [this.shape[y][x], this.shape[x][y]];

            }
          }
          this.shape.forEach(row => row.reverse());
    }

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