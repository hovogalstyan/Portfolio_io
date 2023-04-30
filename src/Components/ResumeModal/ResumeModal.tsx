import React, {FC, useCallback, useMemo} from 'react';
import {AiOutlineCloseSquare} from "react-icons/ai";
import styles from '../../Styles/ResumeModal.module.css';
import globalStyles from '../../Styles/Global.module.css';
import {useTranslation} from "react-i18next";

interface ResumeModalProps {
    activeModal: {
        openResumeModal: boolean,
        setResumeModal: (value: boolean) => void
    }
}

const ResumeModal: FC<ResumeModalProps> = ({activeModal}) => {
    const {openResumeModal, setResumeModal} = activeModal;
    const close = useCallback(() => {
        setResumeModal(false)
    }, [])
    const {t} = useTranslation()
    const toggle = useMemo(()=>{
        return openResumeModal ? styles.active_resume_modal: ''
    },[openResumeModal])
    return (
        <div className={`${styles.Resume_modal} ${toggle}`}>
            <div className={styles.resume}>
                <button className={globalStyles.closeModal} onClick={close}>
                    <AiOutlineCloseSquare/>
                </button>
                <a
                    href={'Resume.pdf'}
                    target={'_blank'}
                    onClick={close}
                >
                    {t('home.view_resume')}
                </a>
                <a onClick={close} href="Resume.pdf" download={'Resume.pdf'}>{t('home.download_resume')}</a>
            </div>
        </div>
    );
};

export default ResumeModal;
