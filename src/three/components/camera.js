import { PerspectiveCamera, Vector3 } from 'three'

function createCamera() {
  const camera = new PerspectiveCamera(
    35, // fov = Field Of View
    1, // aspect ratio (dummy value)
    0.1, // near clipping plane
    200 // far clipping plane
  )

  // move the camera back so we can view the scene
  camera.position.set(0, 0, 10)

  // const loopTime = 5
  // const clock = new Clock()

  camera.tick = (deltaT) => {
    // const time = clock.getElapsedTime()
    // const t = (time % loopTime) / loopTime
    // const t2 = ((time + 0.01) % loopTime) / loopTime
    // const pos = camera.path.geometry.parameters.path.getPointAt(t)
    // const pos2 = camera.path.geometry.parameters.path.getPointAt(t2)
    // camera.position.copy(pos)
    // camera.lookAt(pos2)
    // console.log(t, t2)
  }
  let t = 0.0001
  let t2 = 0
  window.addEventListener('wheel', ({ deltaY }) => {
    if (t > 0 && t <= 1) {
      t += deltaY / 100000
      if (deltaY > 0) {
        t2 = t + 0.01
      } else {
        t2 = t - 0.01
      }
    } else {
      t = 0.0001
      t2 = 0.0002
    }
    const pos = camera.curve.getPointAt(t)
    pos.y += 0.3
    const pos2 = camera.curve.getPointAt(t2)
    pos2.y += 0.3
    console.log(pos, pos2)
    camera.position.copy(pos)
    camera.lookAt(pos2)
  })

  camera.setPath = (path, curve) => {
    camera.path = path
    camera.curve = curve
    const pos = camera.curve.getPointAt(0)
    pos.y += 0.3
    camera.position.copy(pos)
    camera.lookAt(new Vector3(0, 0.3, 1))
  }

  return camera
}

export { createCamera }
