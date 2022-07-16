import {
  CatmullRomCurve3,
  Mesh,
  ExtrudeBufferGeometry,
  MeshStandardMaterial,
  LineCurve3,
  Shape,
  Vector3,
  CurvePath,
} from 'three'

// class CutomPath {
//   constructor() {
//     this.geometry = new GrannyKnot()
//     this.material = new MeshStandardMaterial({ color: 'purple' })
//     this.mesh = new Mesh(this.geometry, this.material)
//   }
// }

function createCustomPath() {
  const randomPoints = [
    new Vector3(0, 0, 0),
    new Vector3(0, 0, 5),
    new Vector3(0, 0, 10),
  ]
  let z = 0
  for (let i = 3; i < 10; i++) {
    const x = randomFloatFromInterval(-1, 1)
    const y = randomFloatFromInterval(-0.5, 0.5)
    console.log(x, y)
    z += i * 5
    randomPoints.push(new Vector3(x, y, z))
  }
  console.log(randomPoints)

  const catmull = new CatmullRomCurve3(randomPoints)

  // const catmull = new CatmullRomCurve3([
  //   new Vector3(0, 0, 0),
  //   new Vector3(-2, 0, 5),
  //   new Vector3(0, 0, 10),
  //   new Vector3(2, -2, 15),
  //   new Vector3(0, 0, 20),
  // ])

  // console.log(catmull.computeFrenetFrames(9, false))

  const shape = new Shape()
  shape.moveTo(0, -0.3)
  shape.lineTo(0.2, -0.3)
  shape.lineTo(0.2, 0.3)
  shape.lineTo(0, 0.3)
  shape.lineTo(0, -0.3)

  const extrudeSettings = {
    steps: 1000,
    depth: 100,
    extrudePath: catmull,
  }

  const geometry = new ExtrudeBufferGeometry(shape, extrudeSettings)
  const material = new MeshStandardMaterial({ color: 0x00ff00 })
  const mesh = new Mesh(geometry, material)

  const lineCurve = new LineCurve3(
    new Vector3(10, 0, 10),
    new Vector3(20, 5, 20)
  )

  const curve = new CurvePath()

  curve.add(catmull)
  curve.add(lineCurve)

  // const points = curve.getPoints(50)
  // const geometry = new TubeBufferGeometry(curve, 100, 2, 8, false)

  // Create the final object to add to the scene
  // const material = new MeshStandardMaterial({
  //   color: 'white',
  //   wireframe: true,
  //   side: DoubleSide,
  // })
  // const line = new (geometry, material)
  // const line = new Mesh(geometry, material)
  return { mesh, curve }
}

function randomFloatFromInterval(min, max) {
  // min and max included
  return Math.random() * (max - min) + min
}

export { createCustomPath }
