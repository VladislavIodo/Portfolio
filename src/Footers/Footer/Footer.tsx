import React from 'react';
import style from './Footer.module.css';

type SkillPropsType = {
}

const Footer: React.FC<SkillPropsType> = () => {
    return (
        <div className={style.footer}>
            <div className={style.icon}></div>
        </div>
    );
}

export default Footer;
