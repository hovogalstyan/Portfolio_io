import React, {FC, useCallback, useMemo} from 'react';
import {flagListType, useAppSelector} from "../../Type/Types";
import {useTranslation} from "react-i18next";
import styles from '../../Styles/Header.module.css';
import {useActiveClass} from "../Hooks/useActiveClass";

interface FlagModalProps {
    activeModal: {
        openFlagModal: boolean,
        setOpenFlagModal: (value: boolean) => void
        setValue: (value: boolean) => void
    }
}

const FlagModal: FC<FlagModalProps> = ({activeModal}) => {
    const {openFlagModal, setOpenFlagModal, setValue} = activeModal
    const [activeClassFlagModal] = useActiveClass(openFlagModal,styles.active_modal)
    const {i18n: {changeLanguage}} = useTranslation()
    const stateFlagList = useAppSelector(state => state.FlagSlice);
    const editLanguage = useCallback((language: string) => {
        changeLanguage(language)
        setValue(false)
        setOpenFlagModal(false)
    }, [])
    return (
        <div className={`${styles.Flag_modal} ${activeClassFlagModal} `}>
            {
                stateFlagList.data.map((item:flagListType, index: number) => (
                    stateFlagList.flagLanguage !== item.flag &&
                    <figure key={index}
                            className={styles.flag_item}
                            onClick={() => editLanguage(item.language)}
                    >
                        <img src={item.flag} alt={item.language}/>
                    </figure>
                ))
            }
        </div>
    );
};

export default FlagModal;
