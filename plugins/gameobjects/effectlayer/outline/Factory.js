import OutlineEffectLayer from './OutlineEffectLayer.js';

export default function (config) {
    var gameObject = new OutlineEffectLayer(this.scene, config);
    this.displayList.add(gameObject);
    return gameObject;
};