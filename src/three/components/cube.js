import { BoxBufferGeometry, Mesh, MeshStandardMaterial, MathUtils } from 'three'

function createCube(pos) {
  // create a geometry
  const geometry = new BoxBufferGeometry(2, 2, 2)

  // create a default (white) standard material
  const material = new MeshStandardMaterial({ color: 'purple' })

  // create a Mesh containing the geometry and material
  const cube = new Mesh(geometry, material)

  const radiansPerSecond = MathUtils.degToRad(180)

  if (pos) cube.position.set(pos.x, pos.y, pos.z)
  // cube.rotation.x += 0.3

  cube.tick = (deltaT) => {
    cube.rotation.x += radiansPerSecond * deltaT
    cube.rotation.y += radiansPerSecond * deltaT
  }

  return cube
}

export { createCube }
