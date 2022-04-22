const TYPES = {
  'A': {
    pointerX: 0, /**/
    pointerY: 2,
    pointer: {
      default: [0, 2],
      flipV: [0, 1],
      flipH: [4, 2],
      pos_1: [0, 2], // rotate
    },
    color: 'yellow',
    shape: [
      [0, 0, 0, 0],
      [0, 0, 1, 0],
      [1, 1, 1, 1],
      [0, 0, 0, 0],
    ]
  },
  'B': {
    pointerX: 0, /**/
    pointerY: 2,
    pointer: {
      default: [0, 2],
      flipV: [0, 1],
      flipH: [4, 2],
      pos_1: [0, 2], // rotate
    },
    color: 'gold',
    shape: [
      [0, 0, 1],
      [1, 1, 1],
      [0, 1, 0],
    ]
  },
  'C': [
      [1, 1, 1, 1],
      [0, 0, 0, 1],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
  ],
  'D':  [
      [0, 1, 0],
      [1, 1, 0],
      [1, 0, 0],
  ],
  'F':  [
      [0, 1, 1],
      [1, 1, 0],
      [1, 0, 0],
  ],
  'G': [
      [2, 2, 2],
      [2, 0, 0],
      [0, 0, 0],
  ],
  'H': [
      [0, 0, 1],
      [0, 0, 1],
      [1, 1, 1],
  ],
  'I': [
      [1, 1],
      [0, 1],
  ],
  'K': [
      [0, 1, 1],
      [0, 0, 1],
      [0, 1, 1]
  ],

}
/**
 * pointerY - точка построения. Смещение. 
 * В обычном режиме фигура строится с верхнего левого угла
 * Но нам надо при клике построить фигуру так, что бы она интуитивно занимало
 * место определенным углом от места клика.
 */
class Figure {
  #x = 0;
  #y = 0;
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
  flip (direction){
    if(direction==='H'){
          this.shape.forEach( (row, y) => row.reverse() )
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