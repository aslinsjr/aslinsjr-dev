import { useState, useEffect } from 'react'

import './App.css'

import Header from './components/Header.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {

  const [scrollHeight, setScrollHeight] = useState(0)

  useEffect(() => {

    console.log(document.querySelector(".infos").offsetHeight)
    console.log(scrollHeight)
    navBarAnimation()
    animateInfos()

  }, [scrollHeight])

  document.addEventListener("scroll", () => {
    setScrollHeight(window.scrollY)
  })

  function navBarAnimation() {
    if (scrollHeight < 1) {
      document.querySelector(".container").classList.remove("header-mode")
      document.querySelector(".about").classList.remove("fade-in")
    } else {
      document.querySelector(".container").classList.add("header-mode")
      document.querySelector(".about").classList.add("fade-in")
    }

  }

  function animateInfos() {
    if (scrollHeight > document.querySelector(".infos").offsetHeight / 2 + document.querySelector(".infos").offsetHeight * 0.1) {
      document.querySelectorAll(".infos-li").forEach((info) => {
        info.classList.add("show")
      })
    } else {
      document.querySelectorAll(".infos-li").forEach((info) => {
        info.classList.remove("show")
      })
    }

    if (scrollHeight > document.querySelector(".infos").offsetHeight / 2 + document.querySelector(".infos").offsetHeight * 0.3) {

      document.querySelectorAll(".infos-li-delay").forEach((info) => {
        info.classList.add("show")
      })
    } else {
      document.querySelectorAll(".infos-li-delay").forEach((info) => {
        info.classList.remove("show")
      })
    }
  }

  return (
    <div className="app">
      <Header />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
