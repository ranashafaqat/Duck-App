import { Duck } from './duck';

export class DuckModel implements Duck{
  id: number;
  name: string;
  fly: string;
  quack: string;
  swim: string;
  isFlyingDuck: boolean;
  ducks: Duck[];
  shapeLevel: number;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
 
  
  getId() {
    return this.id;
  }
  getName() {
    return this.name;
  }
  getFly() {
    return this.fly;
  }
  getSwim() {
    return this.swim;
  }
  getQuack() {
    return this.quack;
  }
  
  getFlyGifImage() {
    switch (this.fly) {
      case 'I am flying with rocket power..':
        return '../assets/images/rocket.gif';
      case 'I am flying with wings..':
        return '../assets/images/mallared.gif';
      default:
        return '../assets/images/rubber.gif';
    }
  }

  getImage() {
    if (this.name === 'Mallard Duck') {
      return '../assets/images/MallardDuck.jpg';
    } else if (this.name === 'Redhead Duck') {
      return '../assets/images/redhead.jpg';
    } else {
      return '../assets/images/RubberDuck.jpg';
    }
  }

  getSound() {
    if (this.quack === 'I quack...') {
      return '../assets/images/quack.mp3';
    } else if (this.quack === 'I squeck...') {
      return '../assets/images/squeck.mp3';
    }
  }

  isFlying() {
    return this.isFlyingDuck;
  }

  setFlying(fly: boolean) {
    this.isFlyingDuck = fly;
  }

  hasChild() {
    return this.ducks && this.ducks.length;
  }

  getChilds() {
    return this.ducks.map(duck => new DuckModel(duck));
  }

  setShapeLevel() {
    if (this.shapeLevel < 3) {
      this.shapeLevel++;
    }
  }

  getShapeLevel(){
    return this.shapeLevel ? this.shapeLevel : 0;
  }
}
