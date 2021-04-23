import React from 'react';
import style from './MyWork.module.css';

type MyWorkPropsType = {
    title: string,
    description: string
}

const MyWork: React.FC<MyWorkPropsType> = ({title, description}) => {
    return (
        <div className={style.myWork}>
            <div className={style.icon}>
            <button className={style.button}>Show</button>
            </div>
            <span className={style.description}>{description}</span>
        </div>
    );
}

export default MyWork;
