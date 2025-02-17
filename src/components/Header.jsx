import './Header.css'

import { useLayoutEffect, useState } from 'react'

const Header = () => {

  const [menuImg, setMenuImg] = useState()

  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
      setMenuImg("./menu-dark.png")
    } else {
      setMenuImg("./menu-light.png")
    }
  }, [])

  function handleMenuMobile() {
    if (menuImg === "./menu-dark.png") {
      setMenuImg("./close-dark.png");
      document.querySelector(".header-mode .nav-bar nav").style.display = "flex"
    }

    if (menuImg === "./menu-light.png") {
      setMenuImg("./close-light.png");
      document.querySelector(".header-mode .nav-bar nav").style.display = "flex"
    }

    if (menuImg === "./close-dark.png") {
      setMenuImg("./menu-dark.png");
      document.querySelector(".header-mode .nav-bar nav").style.display = "none"
    }

    if (menuImg === "./close-light.png") {
      setMenuImg("./menu-light.png");
      document.querySelector(".header-mode .nav-bar nav").style.display = "none"
    }

  }

  return (
    <section className="container">
      <div className="logo" onClick={() => window.scroll(0, 0)}></div>
      <div className="seta" onClick={() => window.scroll(0, 1)}></div>
      <div className="nav-bar">
        <nav>
          <ul>
            <li><a href="#about">Sobre</a></li>
            <li><a href="#projects">Projetos</a></li>
            <li><a href="#contact">Contato</a></li>
            <div className="socials">
              <li><a href="https://www.linkedin.com/in/aslinsjr/" target='_blank'><div className='icons' id="linkedin"></div></a></li>
              <li><a href="https://github.com/aslinsjr" target='_blank'><div className='icons' id="github"></div></a></li>
            </div>
          </ul>
        </nav>
      </div>
      <button className="menu-mobile">
        <img src={menuImg} onClick={() => handleMenuMobile()} alt="" />
      </button>
    </section>
  )
}

export default Header