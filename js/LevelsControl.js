import maps from './maps.js';
import Figure from './Figure.js';

/**
 * LEVELS
 */

const modalLevels = document.querySelector('.modal-levels');
const closeModal = document.querySelector('.modal-levels__close');
const levelsContainer = document.querySelector('.modal-levels__levels');
const openLevelsBtn = document.querySelector('.controls__item--grid');

class LevelsControl {

    #open = false;
    levels = Object.values(maps).flat();
    constructor (board, figureControls){
      this.__board = board;
      this.__figureControls = figureControls; 
      this.mount();
      this.render();
    }
    mount (){
        openLevelsBtn.addEventListener('mousedown', ()=>{
          this.open();
        });

        closeModal.addEventListener('mousedown', ()=>{
          this.close()
        });

        levelsContainer.addEventListener('mousedown', e=>{
          if(e.target.tagName!=='IMG') return;
          const index = e.target.dataset.index;
          this.setLevel(index);
          this.close();  
        })
    }
    render (){
      levelsContainer.innerHTML = '';
      this.levels.forEach( (item, index)=>{
          const tpl = `<img src="images/levels/l_${index+1}.png" data-index="${index}" class="levels__level"/>`;
          levelsContainer.innerHTML += tpl;
      })
    }
    open (){
      this.#open = true;
      modalLevels.style.display = 'flex';
    }
    close (){
      this.#open = false;
      modalLevels.style.display = 'none';
    }
    setLevel (index){
      console.clear();
      console.info('Мутирует Figure')
        this.__board.reset();
        this.__figureControls.enableAll();
        this.levels[index].forEach(item=>{
          const { id , x, y, rotate, flipH, flipV } = item;
          const f = new Figure(id, x, y)
          f.rotate(rotate);
          if(flipH) f.flip('H');
          if(flipV) f.flip('V');
          //if(!this.__board.isFiguresCollide(F)){
             // alert('Не все ячейки свободны')
             // return;
          //}
          this.__board.setFigure(f);
          this.__figureControls.disable(id)
        })
        this.__board.render();
    }
}


export default LevelsControl;