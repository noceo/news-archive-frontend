import { createCamera } from './components/camera.js'
import { createCube } from './components/cube.js'
import { createLights } from './components/lights.js'
import { createScene } from './components/scene.js'
import { createCustomPath } from './components/Path/Path'

// import { createControls } from './systems/controls.js'
import { createRenderer } from './systems/renderer.js'
import { Resizer } from './systems/Resizer.js'
import { Loop } from './systems/Loop.js'
import Stats from 'three/examples/jsm/libs/stats.module'
import { Vector3 } from 'three'

let camera
let scene
let renderer
let loop
let stats

class World {
  constructor(container) {
    camera = createCamera()
    scene = createScene()
    renderer = createRenderer()
    stats = new Stats()
    loop = new Loop(camera, scene, renderer, stats)
    container.appendChild(renderer.domElement)
    container.appendChild(stats.dom)

    const cube1 = createCube()
    const cube2 = createCube(new Vector3(4, 2, 25))
    const cube3 = createCube(new Vector3(0, 2, 0))
    const { mesh, curve } = createCustomPath()
    const { ambientLight, mainLight } = createLights()
    // createControls(camera, renderer.domElement)
    loop.updatableObjects.push(camera, cube2)
    scene.add(ambientLight, mainLight, cube1, cube2, cube3, mesh)

    camera.setPath(mesh, curve)

    new Resizer(container, camera, renderer)
  }

  render() {
    renderer.render(scene, camera)
  }

  start() {
    loop.start()
  }

  stop() {
    loop.stop()
  }
}

export { World }
