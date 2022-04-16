import React from "react";
import { NavLink } from "react-router-dom";


const isActive = (match , location) => {
  if (location.pathname === "/" || location.pathname === "/event" || location.pathname === "/event/123") {
    return true;
  }
}

const Header = () => {
    
    return (
        <section className="main__header">
        <section className="main__header-wrap">
          <span className="main__header-logo">SomeList</span>
          <div className="main__header-group-lnk">
            <NavLink to="/" className="main__header-lnk" activeClassName="lnk-active" isActive={isActive} exact>События</NavLink>
            <NavLink to="/archive" className="main__header-lnk" activeClassName="lnk-active" exact>Архив</NavLink>
          </div>
        </section>
      </section>
    )
}

export default Header;