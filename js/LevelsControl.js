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
    currentLevel = null;
    constructor (board, figureControls){
      this.board = board;
      this.figureControls = figureControls; 
      this.mount();
      this.render();
    }
    mount (){
        openLevelsBtn.addEventListener('mousedown', ()=>{
          this.open();
        })

        closeModal.addEventListener('mousedown', ()=>{
          this.close()
        })

        levelsContainer.addEventListener('mousedown', e=>{
          if(!e.target.className.includes('levels__level')) return;
          const index = e.target.dataset.index;
          this.currentLevel = this.levels[index]
          this.setLevel();
          this.close();  
        })
    }
    render (){
      levelsContainer.innerHTML = '';
      this.levels.forEach( (item, index)=>{
          const tpl = `<img src="images/levels/l_${index+1}.png" data-index="${index}" class="levels__level"/>`
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
        this.board.reset();
        this.figureControls.enableAll();
        this.currentLevel.forEach(item=>{
          const { id , x, y, rotate, flipH, flipV } = item;
          const F = new Figure(id, x, y)
          F.rotate(rotate);
          if(flipH){
            F.flip('H');
          }
          if(flipV){
            F.flip('V');
          }
          if(!this.board.isFiguresCollide(F)){
             // alert('Не все ячейки свободны')
             // return;
          }
          this.board.setFigure(F);
          this.figureControls.disable(id)
        })
        this.board.render();
    }
}


export default LevelsControl;