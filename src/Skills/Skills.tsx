import React from 'react';
import style from './Skills.module.css';
import styleContainer from './../Common/Styles/Container.module.css'
import Skill from "./Skill/Skill";

function Skills() {

    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill title={'JS'} description={'Описание навыка про JS'}/>
                    <Skill title={'CSS'} description={'Описание навыка что-то про CSS'}/>
                    <Skill title={'TS'} description={'Описание навыка про великий TypeScript '}/>

                </div>
            </div>
        </div>
    );
}

export default Skills;
