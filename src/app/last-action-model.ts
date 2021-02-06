import { LastActions } from './last-actions';

export class LastActionModel implements LastActions {
    
    canUndo: boolean;
    canRedo: boolean;


    constructor(values: Object = {}) {
        Object.assign(this, values);
      }
     
    canPerformUndo(): boolean {
        return this.canUndo;
    }

    canPerformRedo(): boolean  {
        return this.canRedo;
    }

    
}