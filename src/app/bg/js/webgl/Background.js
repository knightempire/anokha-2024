import { FrontSide, Mesh, PlaneGeometry, ShaderMaterial, Vector2 } from 'three';
import vertexShader from './shader/vertex.glsl';
import fragmentShader from './shader/fragment.glsl';
import { InteractiveObject } from './InteractiveObject';

const breakpoints = {
  tablet: 767,
  tabletLand: 992,
  desktop: 1920,
};

export class Background extends InteractiveObject {
  constructor(bgProps) {
    super();
    this.mesh = null;
    this.geometry = null;
    this.material = null;
    this.background = bgProps || {
      color1: [163 / 255, 189 / 255, 230 / 255],
      color2: [54 / 255, 211 / 255, 211 / 255],
      color3: [0 / 255, 0 / 255, 0 / 255],
      uLinesBlur: 0.25,
      uNoise: 0.075,
      uOffsetX: 0.34,
      uOffsetY: 0.0,
      uLinesAmount: 5.0,
    };
    this.mouse2D = [0, 0];
    this.planeBounds = { width: 100, height: 100 };

    this.setBackgroundObject();
  }

  setBackgroundObject() {
    this.geometry = new PlaneGeometry(1, 1, 32, 32);
    this.material = new ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uColor1: { value: this.background.color1 },
        uColor2: { value: this.background.color2 },
        uColor3: { value: this.background.color3 },
        uLinesBlur: { value: this.background.uLinesBlur },
        uNoise: { value: this.background.uNoise },
        uOffsetX: { value: this.background.uOffsetX },
        uOffsetY: { value: this.background.uOffsetY },
        uLinesAmount: { value: this._setLinesAmount(this.background.uLinesAmount) },
        uPlaneRes: { value: new Vector2(1.0, 1.0) },
        uMouse2D: { value: new Vector2(1.0, 1.0) },
        uBackgroundScale: { value: 1.0 },
      }
    });
    this.mesh = new Mesh(this.geometry, this.material);
    this.mesh.renderOrder = -1;
    this.add(this.mesh);
  }



  _setLinesAmount(value) {
    if (this.mesh) {
      if (this.planeBounds.width >= breakpoints.tablet) {
        this.mesh.material.uniforms.uLinesAmount.value = value;
      } else {
        this.mesh.material.uniforms.uLinesAmount.value = value * 3.8;
      }
    }
  }


  setSize(bounds) {
    this.planeBounds = bounds;

    if (this.mesh) {
      this._setLinesAmount(this.background.uLinesAmount);
      this.mesh.scale.x = this.planeBounds.width;
      this.mesh.scale.y = this.planeBounds.height;

      this.mesh.material.uniforms.uPlaneRes.value = new Vector2(this.mesh.scale.x, this.mesh.scale.y);
      if (this.planeBounds.width < breakpoints.tablet) {
        this.mesh.material.uniforms.uBackgroundScale.value = this.planeBounds.width * 0.001 * 1.45;
      } else {
        this.mesh.material.uniforms.uBackgroundScale.value = 1.0;
      }

    }
  }


  setMouse2D(mouse) {
    if (this.mesh) {
      this.mesh.material.uniforms.uMouse2D.value = new Vector2(mouse.current.x, mouse.current.y);
    }
  }

  update(updateInfo) {
    super.update(updateInfo);
    if (this.mesh) {
      this.mesh.material.uniforms.uTime.value = updateInfo.time * 0.001;
    }
  }

  destroy() {
    super.destroy();
    this.geometry?.dispose();
    this.material?.dispose();
    if (this.mesh) {
      this.remove(this.mesh);
    }
  }

}