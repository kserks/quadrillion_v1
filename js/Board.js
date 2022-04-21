
class Board {
  
  constructor (canvas, ctx, figures){
    this.canvas = canvas;
    this.ctx = ctx;
    this.figures = figures;
    this.COLS = 11;
    this.ROWS = 5;
    this.BLOCK_SIZE = 80;
    this.width = this.COLS * this.BLOCK_SIZE + 11;
    this.height = this.ROWS * this.BLOCK_SIZE + 5;
    this.color = 'gray';
    this.events = {
      click: ()=>{}
    };
    this.init()
  }
  init (){
    // Устанавливаем размеры холста
    this.ctx.canvas.width = this.width;
    this.ctx.canvas.height = this.height;
    // Получаем координаты курсора мыши
    this.canvas.addEventListener('mousedown', e=>{
        const { left, top } = e.target.getBoundingClientRect();
        this.x = e.clientX - left;
        this.y = e.clientY - top;
        const eventData = { x: this.x, y: this.y, width: 0.5, height: 0.5 }
        this.events.click(eventData);
    })
  }

  on(event, handler){
    this.events[event] = handler;
  }
  //undo (){},
  reset (){
    this.grid = this.getEmptyGrid();
    this.mergeFiguresToGrid()
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.render();
  }
  /**
   * Подготавливаем данные на основе которых будет формироваться сетка
   */
  getEmptyGrid (){
    // step
    // (+1px) - необходимо добавить как отсуп между ячейками.
    // При сравнении пересечения площадей выбранной ячейки и площади объекта курсора.
    // Если расстояние между ячейками отсутсвует, то при клике я могу выделить несколько ячеек
    // Это происходит, когда кликаешь на стык между ячейками.
    // Происходит выделение от двух, до четырех ячеек. Но надо стараться попать на стык.
    const step = 1;
    // сумма отступа от предыдущей ячейки
    let stepX = 0;
    let stepY = 0;
    const grid = [];
    // проходим по строкам
    for(let row = 0; row < this.ROWS; row++){
          grid[row] = [];
          // проходим по столбцам
          for(let col = 0; col < this.COLS; col++){
                // пустая ячейка
                const cell = {
                        width: this.BLOCK_SIZE,
                        height: this.BLOCK_SIZE,
                        x: stepX,
                        y: stepY,
                        value: 0,
                        color: this.color,
                        select: false
                }
                // Смещение по X
                stepX += this.BLOCK_SIZE+step;
                grid[row].push(cell);
          }
          // начинаем отрисовывать каждую строчку с начала
          stepX = 0;
          // смещение по Y
          stepY += this.BLOCK_SIZE+step;
    }
    return grid;

  }
  render (){
    //this.grid[3][2].color = 'red'
    //this.ctx.strokeStyle = "silver";

    this.grid.forEach( (row, y) => {
        row.forEach( (cell, x) =>{
            this.ctx.fillStyle = cell.color;
            this.ctx.fillRect(cell.x, cell.y, cell.width, cell.height );
            //this.ctx.strokeRect(cell.x, cell.y, cell.width, cell.height);
        });
    });

  }
  valid (){

  }
  /**
   * Добавление пазлов в массив отрисовки
   */
  mergeFiguresToGrid (){
    this.figures.forEach(f=>{
        f.shape.forEach((row, y)=>{
            row.forEach((value, x)=>{
                if(value>0){
                  this.grid[y+f.y][x+f.x].value = value;
                  this.grid[y+f.y][x+f.x].color = f.color;
                }
            })
        })
    })    
  }
  /**
   * Проверка столкновения прямоугольников
   */
  collision(obj1, obj2){
    let XColl=false;
    let YColl=false;
    if ((obj1.x + obj1.width >= obj2.x) && (obj1.x <= obj2.x + obj2.width)) XColl = true;
    if ((obj1.y + obj1.height >= obj2.y) && (obj1.y <= obj2.y + obj2.height)) YColl = true;
    if (XColl&YColl){return true;}
    return false;
  }

}



export default Board;