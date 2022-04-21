
class Figure {
  constructor (color, x, y, shape){

    this.color = color;
    this.x = x;
    this.y = y;
    this.shape = shape;
  }
  /*
  render (){
    this.ctx.fillStyle = this.color;
    this.shape.forEach((row, y) => {
        row.forEach((value, x) => {
            if(value > 0){
              this.ctx.fillRect(this.x + x, this.y + y, 1, 1);
            }
        });
    });
  }
  */
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