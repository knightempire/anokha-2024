import { EventDispatcher, PerspectiveCamera, WebGLRenderer } from 'three';

import { MouseMove } from './MouseMove';
import { ExperienceScene } from './ExperienceScene';

export class WebGL extends EventDispatcher {
  constructor({ rendererEl, bgProps }) {
    super();
    this.rafId = null;
    this.isResumed = true;
    this.mouseMove = MouseMove.getInstance();

    this.pixelRatio = 1;

    this.rendererEl = rendererEl;
    this.canvas = document.createElement('canvas');
    this.rendererEl.appendChild(this.canvas);
    this.camera = new PerspectiveCamera();
    this.renderer = new WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'default'
    });


    this.experienceScene = new ExperienceScene({
      camera: this.camera,
      mouseMove: this.mouseMove,
      bgProps: bgProps,
    });

    this.onVisibilityChange = () => {
      if (document.hidden) {
        this.stopAppFrame();
      } else {
        this.resumeAppFrame();
      }
    };

    this.renderOnFrame = (time) => {
      this.rafId = window.requestAnimationFrame(this.renderOnFrame);
      if (this.isResumed || !this.lastFrameTime) {
        this.lastFrameTime = window.performance.now();
        this.isResumed = false;
        return;
      }
      const delta = time - this.lastFrameTime;
      let slowDownFactor = delta / (1000 / 60);
      const slowDownFactorRounded = Math.round(slowDownFactor);
      if (slowDownFactor >= 1) {
        slowDownFactor = slowDownFactorRounded;
      }
      this.lastFrameTime = time;
      // Mouse movement
      this.mouseMove.update();
      this.experienceScene.update({ delta, slowDownFactor, time });
      this.renderer.render(this.experienceScene, this.camera);
    };

    this.onResize();
    this.addListeners();
    this.resumeAppFrame();
  }

  onResize() {
    const rendererBounds = this.rendererEl.getBoundingClientRect();
    const aspectRatio = rendererBounds.width / rendererBounds.height;
    this.camera.aspect = aspectRatio;
    this.camera.position.z = 1000;
    this.camera.fov = 2 * Math.atan(rendererBounds.height / 2 / this.camera.position.z) * (180 / Math.PI);
    this.renderer.setSize(rendererBounds.width, rendererBounds.height);
    this.pixelRatio = Math.min(window.devicePixelRatio, 2);
    this.renderer.setPixelRatio(this.pixelRatio);
    this.camera.updateProjectionMatrix();
    this.experienceScene.setPixelRatio(this.pixelRatio);
    this.experienceScene.setRendererBounds(rendererBounds);
  }

  addListeners() {
    window.addEventListener('resize', this.onResize.bind(this));
    window.addEventListener('visibilitychange', this.onVisibilityChange);
  }

  removeListeners() {
    window.removeEventListener('resize', this.onResize.bind(this));
    window.removeEventListener('visibilitychange', this.onVisibilityChange);
  }

  resumeAppFrame() {
    this.isResumed = true;
    if (!this.rafId) {
      this.rafId = window.requestAnimationFrame(this.renderOnFrame);
    }
  }

  stopAppFrame() {
    if (this.rafId) {
      window.cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
  }

  destroy() {
    if (this.canvas.parentNode) {
      this.canvas.parentNode.removeChild(this.canvas);
    }
    this.stopAppFrame();
    this.removeListeners();
    this.experienceScene.destroy();
  }
}