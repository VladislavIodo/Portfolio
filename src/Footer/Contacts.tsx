import React from 'react';
import style from './Contacts.module.css';
import styleContainer from './../Common/Styles/Container.module.css'

function Contacts() {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h2 className={style.title}>Contacts</h2>
                <div className={style.contacts}>
                    <form action="" className={style.form}>
                        <input type="text"/>
                        <input type="text"/>
                        <textarea name="" ></textarea>
                    </form>
                </div>
                <button>Send</button>
            </div>
        </div>
    );
}

export default Contacts;
