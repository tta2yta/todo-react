import React from "react"
import { NavLink  } from "react-router-dom"

const NavBar=()=>{
    const links = [
        {
          id: 1,
          path: "/",
          text: "Home",
        },
        {
          id: 2,
          path: "/about",
          text: "About",
        },
      ]
    return (
        <div className="navBar">
            <ul>
                {links.map(item=>{
                return    <NavLink  to={item.path}
                activeClassName="active-link">{item.text}</NavLink >
                })}
            </ul>
        </div>
    );
}

export default NavBar