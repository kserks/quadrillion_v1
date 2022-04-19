class Figure {
  constructor (ctx, color, x, y, shape){
    this.ctx = ctx;
    this.color = color;
    this.x = x;
    this.y = y;
    this.shape = shape;
  }
  render (){
    this.ctx.fillStyle = this.color;
    this.shape.forEach((row, y) => {
        row.forEach((value, x) => {
            if(value > 0){
              this.ctx.fillRect(this.x + x, this.y + y, 1, 1);
            }

        })
    })
  }
}

export default Figure;