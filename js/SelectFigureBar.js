
class SelectFigureBar {
  constructor (figures){
    this.figures = figures;
    this.id = null;
    this.position = 0; //123
    this.target = null;
    this.angle = 0;
    this.view = {
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
        this.onSelectItem(this.id, this.position)
    });
    /**
     * Крутим фигуры вокруг своей оси
     */
    this.view.rotate.addEventListener('click', ()=>{
      if(!this.target) return;
      this.target.style.transform = `rotate(${this.angle-=90}deg)`;
      this.position +=1;
      if(this.position===4) this.position = 0;
      this.onSelectItem(this.id, this.position);
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
}


export default SelectFigureBar;