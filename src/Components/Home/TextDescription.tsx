import React, {FC} from 'react';
import {useTranslation} from "react-i18next";
import styles from '../../Styles/Home.module.css'
import {useToggle} from "../Hooks/useToggle";

interface TextDescriptionProps {
    openContactModal:{
        setContactModal:(value:boolean)=> void,
        setResumeModal:(value:boolean)=> void
    }
}

const TextDescription: FC<TextDescriptionProps> = ({openContactModal}) => {
    const {t} = useTranslation()
    const {setContactModal,setResumeModal} = openContactModal
    return (
        <div className={styles.Description}>
            <h1>{t('home.hi')}</h1>
            <h2>{t('home.nameSureName')}</h2>
            <p>{t('home.description')}</p>
            <button className={styles.open_contact_modal} onClick={() => setContactModal(true)}>
                {t('home.contact')}
            </button>
            <button className={styles.open_contact_modal} onClick={()=> setResumeModal(true)}>
                {t('home.btn')}
            </button>
        </div>
    );
};

export default TextDescription;
