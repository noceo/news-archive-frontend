import { World } from '../../../three/World'
import React, { useRef, useEffect } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import {
//   selectArticles,
//   selectStatus,
// } from '../../../store/articles/articlesSlice'
import './Explorer.scss'

export function Explorer() {
  // const articles = useSelector(selectArticles)
  // const status = useSelector(selectStatus)
  // const dispatch = useDispatch()
  const container = useRef(null)
  // const controls = useRef(null)

  // const articleList =
  //   articles.length > 0 ? (
  //     articles.map((article, index) => <li key={index}>{article.title}</li>)
  //   ) : (
  //     <p>No Articles</p>
  //   )

  // const [isAnimating, setAnimating] = useState(true)
  // const animateRef = useRef(null)
  // animateRef.current = isAnimating
  const world = useRef(null)

  // function onClick() {
  //   if (isAnimating) {
  //     world.current.stop()
  //   } else {
  //     world.current.start()
  //   }
  //   setAnimating(!isAnimating)
  // }

  useEffect(() => {
    if (!world.current) {
      world.current = new World(container.current)
      world.current.start()
    }

    // function animate() {
    //   // cube.rotation.x += 0.01
    //   if (animateRef.current) {
    //     cube.rotation.y += 0.01
    //   }

    //   renderScene()
    //   frameId = window.requestAnimationFrame(animate)
    // }

    // function start() {
    //   frameId = requestAnimationFrame(animate)
    // }

    // function stop() {
    //   cancelAnimationFrame(frameId)
    //   frameId = null
    // }

    // explorer.current.appendChild(renderer.domElement)
    // window.addEventListener('resize', handleResize)
    // start()

    // controls.current = { start, stop }

    // window.addEventListener('wheel', (event) => updateCamera(event.deltaY))

    // return () => {
    // stop()
    // window.removeEventListener('resize', handleResize)
    // explorer.current.removeChild(renderer.domElement)
    // scene.remove(cube)
    // geometry.dispose()
    // material.dispose()
    // }
  }, [])

  // useEffect(() => {
  //   if (isAnimating) {
  //     controls.current.start()
  //   } else {
  //     controls.current.stop()
  //   }
  // }, [isAnimating])

  return <div className="explorer" ref={container} />
}
