import React, {FC} from 'react';
import {useTranslation} from "react-i18next";
import styles from '../../Styles/About.module.css';
const DescriptionText:FC = () => {
    const {t} = useTranslation()
    return (
        <div className={styles.Description_text}>
         <p>{t('about')}</p>
        </div>
    );
};

export default DescriptionText;
