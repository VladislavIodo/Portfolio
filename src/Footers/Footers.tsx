import React from 'react';
import style from './Footers.module.css';
import styleContainer from './../Common/Styles/Container.module.css'
import Footer from "./Footer/Footer";

function Footers() {
    return (
        <div className={style.footersBlock}>
            <div className={`${styleContainer.container} ${style.footersContainer}`}>
                <div className={style.title}>Iodo Vladislav</div>
                <div className={style.footers}>
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
