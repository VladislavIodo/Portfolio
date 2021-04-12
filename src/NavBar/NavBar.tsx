import React from 'react';
import style from './NavBar.module.css';

function NavBar() {
    return (
        <div className={style.navbar}>
            <a href="">Главная</a>
            <a href="">Скилы</a>
            <a href="">Проекты</a>
            <a href="">Контакты</a>
        </div>
    );
}

export default NavBar;
