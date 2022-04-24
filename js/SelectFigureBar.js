
class SelectFigureBar {
  constructor (figures){
    this.figures = figures;
    this.id = null;
    this.rotate = 0; //123
    this.flipH = false;
    this.flipV = false;
    this.target = null;
    this.angle = 0;
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
        this.onSelectItem(this.id, this.rotate)
    });
    /**
     * Крутим фигуры вокруг своей оси
     */
    this.view.rotate.addEventListener('click', ()=>{
      if(!this.target) return;

      this.target.style.transform = `rotate(${this.angle+=90}deg)`;
      this.rotate +=1;
      if(this.rotate===4) this.rotate = 0;
      this.onSelectItem(this.id, this.rotate, this.flipH, this.flipV);
    });
    /**
     * Отразить по горизонтали
     */

    this.view.flipH.addEventListener('click', ()=>{
      if(!this.target) return;
      if(this.flipH){
        this.flipH = false;
        this.target.style.transform = `scale(1, 1)`;
      }
      else{
        this.flipH = true;
        this.target.style.transform = `scale(-1, 1)`;
      }
      this.onSelectItem(this.id, this.rotate, this.flipH, this.flipV );
    });
    /**
     * Отразить по вертикали
     */

    this.view.flipV.addEventListener('click', ()=>{
      if(!this.target) return;
      if(this.flipV){
        this.flipV = false;
        this.target.style.transform = `scale(1, 1)`;
      }
      else{
        this.flipV = true;
        this.target.style.transform = `scale(1, -1)`;
      }
      
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

  }
  disable (id){
    const f = document.querySelector(`.figures__item[data-id="${id}"]`);
    f.style.opacity = 0.1;
    f.style.pointerEvents = 'none'
  } 
}


export default SelectFigureBar;