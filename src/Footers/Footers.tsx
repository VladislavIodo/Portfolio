import React from 'react';
import style from './Footers.module.css';
import styleContainer from './../Common/Styles/Container.module.css'
import Footer from "./Footer/Footer";

function Footers() {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h2 className={style.title}>Iodo Vladislav</h2>
                <div className={style.contacts}>
                    <Footer/>
                    <Footer/>
                    <Footer/>
                    <Footer/>
                    {/*<div>FaceBook</div>*/}
                    {/*<div>Twitter</div>*/}
                    {/*<div>Linkedin</div>*/}
                    {/*<div>Pinterest</div>*/}
                </div>
               <div>© 2021 All Rights Reserved.</div>
            </div>
        </div>
    );
}

export default Footers;
