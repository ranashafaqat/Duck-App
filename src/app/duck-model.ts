import { Duck } from './duck';

export class DuckModel implements Duck{
  id: number;
  name: string;
  fly: string;
  quack: string;
  swim: string;

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
}
