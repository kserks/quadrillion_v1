
class SelectFigureBar {
  constructor (figures){
    this.figures = figures;
    this.id = null;
    this.rotate = 0; //123
    this.angle = 0;
    this.flipH = false;
    this.flipV = false;
    this.target = null;
    this.transformData = {scaleX: 1, scaleY: 1, rotate: 0 }
    this.view = {
      flipV: document.querySelector('.controls__item--flip-v'),
      flipH: document.querySelector('.controls__item--flip-h'),
      rotate: document.querySelector('.controls__item--rotate'),
      container: document.querySelector('.figures__container')
    }
    this.mount();
  }

  mount (){
    /**
     * Вешаем делегирование событий на каждую фигуру
     */
    this.view.container.addEventListener('click', e=>{
        if(!e.target.className.includes('figures__item')) return;
        this.angle = 0;
        this.id = e.target.getAttribute('data-id');
        this.target = e.target;

        this.onSelectItem(this.id, this.rotate, this.flipH, this.flipV);
        
    });
    /**
     * Крутим фигуры вокруг своей оси
     */
    this.view.rotate.addEventListener('click', ()=>{
      if(!this.target) return;
      this.transformData.rotate = this.rotate;
      this.angle +=90;
      this.transform();
      this.rotate++;
      if(this.rotate===4) this.rotate = 0;
      this.onSelectItem(this.id, this.rotate, this.flipH, this.flipV);
    });
    /**
     * Отразить по горизонтали
     */
    this.view.flipH.addEventListener('mousedown', ()=>{
      if(!this.target) return;
      if(this.flipH){
        this.flipH = false;
        this.transformData.scaleX = 1;
      }
      else{
        this.flipH = true;
        this.transformData.scaleX = -1;
      }
      this.transform();
      this.onSelectItem(this.id, this.rotate, this.flipH, this.flipV );
    });
    /**
     * Отразить по вертикали
     */

    this.view.flipV.addEventListener('mousedown', ()=>{
      if(!this.target) return;
      if(this.flipV){
        this.flipV = false;
        this.transformData.scaleY = 1;
      }
      else{
        this.flipV = true;
        this.transformData.scaleY = -1;
        //this.target.style.transform = `scale(1, -1)`;
      }
      this.transform();
      this.onSelectItem(this.id, this.rotate, this.flipH, this.flipV);
    });
    
    this.render();

  }
  render (){
    /**
     * Отрисовываем изображение
     */
      this.figures.forEach(item=>{
          const img = `<img src="${item.url}" class="figures__item figures__item--${item.id}" data-id="${item.id}" title="${item.id}"/>`;
          this.view.container.innerHTML += img;
      })
  }
  onSelect (onSelectItem){
    this.onSelectItem = onSelectItem;
    return this;
  }
  disable (id){
    const f = document.querySelector(`.figures__item[data-id="${id}"]`);
    f.style.opacity = 0.1;
    f.style.pointerEvents = 'none'
  } 
  transform (){
    this.target.style.transform = this.getTransformValue();
    console.log(this.target.style.transform)
  }
  getTransformValue (){
    const { scaleX, scaleY, rotate } = this.transformData;
    return `scale(${scaleX}, ${scaleY}) rotate(${this.angle}deg)`;
  }
  reset (){
    this.id = null;
    this.rotate = 0; //123
    this.angle = 0;
    this.flipH = false;
    this.flipV = false;
    this.target = null;
  }
}


export default SelectFigureBar;