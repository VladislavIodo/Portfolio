import React from 'react';
import style from './MyWork.module.css';
import styleContainer from "../Common/Styles/Container.module.css";

function MyWork() {
    return (
        <div className={style.myWorkBlock}>
            <div className={`${styleContainer.container} ${style.myWorkContainer}`}>
                <h2 className={style.title}>My work</h2>
            </div>
        </div>
    );
}

export default MyWork;
