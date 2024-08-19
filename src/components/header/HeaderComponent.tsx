import React from 'react';
import Link from "next/link";
import styles from './HeaderComponent.module.css';
import FormComponent from '../form/FormComponent';
import UserInfoComponent from '../UserInfo/UserInfoComponent';

const HeaderComponent = () => {
    return (
        <header className={styles.navbar}>
         <div className={styles.logo}>
            {/* <Link href={'/movie'}>M_DB</Link> */}
            <div>M_DB</div>
         </div>
         <nav className={styles.nav}>
            <ul>
                <li>
                    <Link href={{pathname: '/movie', query: {page: '1'}}}>Movie</Link>
                </li>
            </ul>
         </nav>
         <div className={styles.right_container}>
            <div className={styles.search}>
                <FormComponent/>
            </div>
            <UserInfoComponent name='MD'/> 
         </div> 
        </header>
    );
};

export default HeaderComponent;