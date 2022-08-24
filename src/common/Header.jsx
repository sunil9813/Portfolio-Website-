import React, { useState } from "react"
import { Link } from "react-router-dom"
import { menu } from "../data/data"
import { RiMenu3Line } from "react-icons/ri"
import { AiOutlineClose } from "react-icons/ai"

export const Header = () => {
  const [mobile, setMobile] = useState(false)
  const handleActive = () => {}
  return (
    <>
      <header>
        <ul className={`${mobile ? "mobile-nav" : "menu"}`}>
          {menu.map((item) => (
            <li key={item.id}>
              <Link to={item.url} onClick={handleActive} className='link'>
                {item.text}
              </Link>
              <span>{item.icon}</span>
            </li>
          ))}
        </ul>
        <div className='icons'>
          <button onClick={() => setMobile(!mobile)}>{mobile ? <AiOutlineClose /> : <RiMenu3Line />}</button>
        </div>
      </header>
    </>
  )
}
