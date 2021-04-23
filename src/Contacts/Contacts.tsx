import React from 'react';
import style from './Contacts.module.css';
import styleContainer from './../Common/Styles/Container.module.css'

function Contacts() {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h2 className={style.title}>Contacts</h2>
                <div className={style.contacts}>
                    {/*<form action="/action_page.php" method="post">*/}
                    {/*    First name: <input type="text" name="fname"><br>*/}
                    {/*    Last name: <input type="text" name="lname"><br>*/}
                    {/*    <input type="submit" value="Submit">*/}
                    {/*</form>*/}
                </div>
            </div>
        </div>
    );
}

export default Contacts;
