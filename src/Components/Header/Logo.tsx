import React from 'react';
import styles from '../../Styles/Header.module.css'

const Logo = () => {
    const text = 'Portfolio';
    const splitText = text.split('')

    return (
        <div className={styles.Logo}>
            <div className={styles.name_logo}>
                <h2>H.</h2>
                <h2>G.</h2>
            </div>
            <div>
                {
                    splitText.map((item, index) => {
                        return <span key={index} className={styles.anim_text_item}>{item}</span>
                    })
                }
            </div>
        </div>
    );
};

export default Logo;
