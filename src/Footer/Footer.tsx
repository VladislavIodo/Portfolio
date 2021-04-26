import React from 'react';
import style from './Footer.module.css';
import styleContainer from './../Common/Styles/Container.module.css'

function Footer() {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h2 className={style.title}>Iodo Vladislav</h2>
                <div className={style.contacts}>
                    <div>FaceBook</div>
                    <div>Twitter</div>
                    <div>Linkedin</div>
                    <div>Pinterest</div>
                </div>
               <div>© 2019 beingeorge, All Rights Reserved.</div>
            </div>
        </div>
    );
}

export default Footer;
