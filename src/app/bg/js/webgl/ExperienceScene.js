import { PlaneGeometry } from 'three';
import { InteractiveScene } from './InteractiveScene';
import { Background } from './Background';

export class ExperienceScene extends InteractiveScene {
  constructor({ camera, mouseMove, bgProps }) {
    super({ camera, mouseMove });

    this.planeGeometry = new PlaneGeometry(1, 1, 32, 32);
    this.background = new Background(bgProps);
    this.add(this.background);
  }

  //animateIn() { }

  update(updateInfo) {
    super.update(updateInfo);

    this.background.setMouse2D(this.mouse2D);
    this.background.update(updateInfo);
  }

  setLoadedAssets(assets) {
    this.loadedAssets = assets;
  }

  setRendererBounds(bounds) {
    super.setRendererBounds(bounds);

    this.background.setSize({
      width: this.rendererBounds.width * 1.001,
      height: this.rendererBounds.height * 1.001
    });
  }
  updateBgProps(newProps) {
    this.background.updateProps(newProps);
  }
  destroy() {
    super.destroy();

    this.background.destroy();
    this.remove(this.background);

    this.planeGeometry.dispose();
  }

}