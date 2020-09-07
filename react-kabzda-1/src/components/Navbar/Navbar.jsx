import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';


const Navbar = (props) => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to='/profile' activeClassName={s.activeLink}>Profile</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/dialogs' activeClassName={s.activeLink}>Massages</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/news' activeClassName={s.activeLink}>News</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/music' activeClassName={s.activeLink}>Music</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/settings' activeClassName={s.activeLink}>Settings</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/friends' activeClassName={s.activeLink}>Friends<div>
        <img src="https://vignette.wikia.nocookie.net/james-camerons-avatar/images/a/a1/Eytukanswrgrw.jpg/revision/latest?cb=20100125020236&path-prefix=pl" />
        <img src="https://vignette.wikia.nocookie.net/james-camerons-avatar/images/a/a1/Eytukanswrgrw.jpg/revision/latest?cb=20100125020236&path-prefix=pl" />
        <img src="https://vignette.wikia.nocookie.net/james-camerons-avatar/images/a/a1/Eytukanswrgrw.jpg/revision/latest?cb=20100125020236&path-prefix=pl" />
          </div></NavLink>
      </div>
    </nav>

  )
}

export default Navbar;