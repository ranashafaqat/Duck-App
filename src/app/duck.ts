export interface Duck {

    id: number;
    name: string;
    fly: string;
    quack: string;
    swim: string;
  
    getId();
    getName();
    getFly();
    getSwim();
    getQuack();
    getFlyGifImage();
    getImage();
    getSound();
    isFlying();
    setFlying(fly: boolean);
    hasChild();
    getChilds();
    setShapeLevel();
    getShapeLevel();
}