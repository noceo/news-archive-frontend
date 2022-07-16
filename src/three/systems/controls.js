import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

function createControls(camera, canvas) {
  const controls = new OrbitControls(camera, canvas)
  // controls.target.copy(cube.position)
  controls.enablePan = false
  // controls.enableZoom = false
  // controls.enableDamping = true

  window.addEventListener('wheel', ({ deltaY }) => {
    controls.update()
  })

  controls.tick = () => controls.update()
  return controls
}

export { createControls }
