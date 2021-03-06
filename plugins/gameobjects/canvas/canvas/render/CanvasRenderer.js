// copy from Phaser.GameObjects.Text

var CanvasRenderer = function (renderer, src, camera, parentMatrix) {
    if ((src.width === 0) || (src.height === 0)) {
        return;
    }
    renderer.batchSprite(src, src.frame, camera, parentMatrix);
};

export default CanvasRenderer;