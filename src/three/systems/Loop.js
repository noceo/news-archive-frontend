import { Clock } from 'three'

const clock = new Clock()

class Loop {
  constructor(camera, scene, renderer, stats) {
    this.camera = camera
    this.scene = scene
    this.renderer = renderer
    this.frameId = null
    this.stats = stats
    this.animate = this.animate.bind(this)
    this.updatableObjects = []
  }

  start() {
    this.frameId = requestAnimationFrame(this.animate)
    clock.start()
  }

  stop() {
    cancelAnimationFrame(this.frameId)
    clock.stop()
    this.frameId = null
  }

  animate() {
    this.tick()
    this.renderer.render(this.scene, this.camera)
    this.stats.update()
    this.frameId = requestAnimationFrame(this.animate)
  }

  tick() {
    const delta = clock.getDelta()
    for (const object of this.updatableObjects) {
      object.tick(delta)
    }
  }
}

export { Loop }
