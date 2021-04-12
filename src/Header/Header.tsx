import React from 'react';
import style from './Header.module.css';
import NavBar from "../NavBar/NavBar";

function Header() {
    return (
        <div className={style.header}>
            <NavBar/>

        </div>
    );
}

export default Header;
