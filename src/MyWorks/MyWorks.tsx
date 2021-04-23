import React from 'react';
import style from './MyWorks.module.css';
import styleContainer from "../Common/Styles/Container.module.css";
import MyWork from "./MyWork/MyWork";

export const MyWorks = () => {
    return (
        <div className={style.myWorksBlock}>
            <div className={`${styleContainer.container} ${style.myWorksContainer}`}>
                <h2 className={style.title}>My work</h2>
                <div className={style.MyWorks}>
                <MyWork title={'SocialNetwork'} description={'Социальная кастомная соцсеть'}/>
                <MyWork title={'TodoList'} description={'Кастомный список дел'}/>
                </div>
            </div>
        </div>
    );
}
