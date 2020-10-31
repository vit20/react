import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={s.header}>
        <img src='https://cdn1.iconfinder.com/data/icons/sugar-glyph/64/174_sugar-white-cubes-512.png' />

        <div className={s.loginBlock}>
            { props.isAuth
                ? <div>{props.login} - <button onClick={props.logout}>Log out</button> </div>
                : <NavLink to={'/login'}>Login</NavLink> }
        </div>
    </header>
}

export default Header;