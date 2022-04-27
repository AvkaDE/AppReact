import React from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { events } from "../../store/index";


const isActive = (_ , location) => {
  if (location.pathname === "/" || location.pathname === "/event" || location.pathname === `/event/:id?`) {
    return true;
  }
}

const Header = () => {

  const { archiveData } = events

  const handleClear = (evt) => {
    evt.preventDefault()
    events.deleteArchiveEvents()
  }

  const path = useLocation()
    
    return (
        <section className="main__header">
        <section className="main__header-wrap">
          <span className="main__header-logo">SomeList</span>
          <div className="main__header-group-lnk">
            <NavLink to="/" className="main__header-lnk" activeClassName="lnk-active" isActive={isActive} exact>События</NavLink>
            <NavLink to="/archive" className="main__header-lnk" activeClassName="lnk-active" exact>Архив</NavLink>
            { path.pathname === "/archive" && (<div className="main__header-lnk" onClick={handleClear} style={{cursor: 'pointer'}}>Очистить</div>) }
            
          </div>
        </section>
      </section>
    )
}

export default Header;