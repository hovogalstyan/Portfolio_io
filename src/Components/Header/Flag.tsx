import React, {FC, ReactNode, useCallback, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../Type/Types";
import {useTranslation} from "react-i18next";
import {getLanguage} from "../../Store/features/FlagSlice";
import styles from '../../Styles/Header.module.css';

interface FlagProps {
    toggleFlagModal: any
}

const Flag: FC<FlagProps> = ({toggleFlagModal}) => {
    const flagState = useAppSelector(state => state.FlagSlice.flagLanguage)
    const {i18n: {language}} = useTranslation();
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getLanguage(language))
    }, [language])
    return (
        <figure className={styles.Flag} onClick={toggleFlagModal}>
            <img src={flagState} alt={'logo'}/>
        </figure>
    );
};

export default Flag;
