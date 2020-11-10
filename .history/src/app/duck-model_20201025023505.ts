export class DuckModel {
  name: string;
  fly: string;
  quack: string;
  swim: string;

  constructor(values: Object = {}) {
    Object.assign(values);
  }
}
