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
    this.objTransform  = { V: false, H: false }
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

  get transformMode (){
    let mode = 0;
    if(this.objTransform.H&&!this.objTransform.V){
      mode = 1;
    }
    if(this.objTransform.V&&!this.objTransform.H){
      mode = 2;
    }
    if(this.objTransform.H&&this.objTransform.V){
      mode = 3;
    }
    return mode;
  }
  /**
   * При вращении и отражении фигуры, меняется позиция курсора.
   * Точки откуда берет начало фигура
   */
  get pointerX (){
    return TYPES[this.id].pointer[this.rotatePos][this.transformMode].x;
  }

  get pointerY (){
    return TYPES[this.id].pointer[this.rotatePos][this.transformMode].y;
  }
  /**
   * Сколько раз крутанули фигуру
   */
  get rotatePos (){
    return this.#n;
  }
  set rotatePos (n){
    this.#n = n;
  }
  flip (direction){
    if(direction==='H'){
        this.objTransform.H = !this.objTransform.H;
        this.shape =  this.shape.map( row => row.reverse() );
    }
    if(direction==='V'){
        this.objTransform.V = !this.objTransform.V;
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
          this.shape = this.shape.map(row => row.reverse());
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
figure_G.rotate(3); // max 3

*/

export default Figure;