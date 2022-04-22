const SHAPES = {
  'A': [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 1, 0],
      [1, 1, 1, 1],
  ],
  /**
  'A': [
      [0, 0, 0, 0],
      [0, 0, 1, 0],
      [1, 1, 1, 1],
      [0, 0, 0, 0],
  ],   */
  'B': [
      [0, 0, 1],
      [1, 1, 1],
      [0, 1, 0],
  ],
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
  constructor (id, x, y, pointerY=0, color){
    this.id = id
    this.color = color;
    this.pointerY = pointerY;
    this.x = x;
    this.y = y + this.pointerY;
    this.shape = SHAPES[this.id];
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

*/

export default Figure;