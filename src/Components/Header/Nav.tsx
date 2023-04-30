import React, {FC, useState} from 'react';
import {useTranslation} from "react-i18next";
import {navItemsListType, isActiveType} from "../../Type/Types";
import {NavLink} from "react-router-dom";
import Flag from "./Flag";
import FlagModal from "./FlagModal";
import styles from '../../Styles/Header.module.css';
import {useToggle} from "../Hooks/useToggle";

interface NavProps {
    activeNavbar: string,
    setValue: (value: boolean) => void
}

const Nav: FC<NavProps> = ({activeNavbar, setValue}) => {
    const [openFlagModal, toggleFlagModal, setOpenFlagModal] = useToggle(false)
    const {t} = useTranslation()
    const navItemsList: navItemsListType[] = [
        {path: '/', text: t('nav.home')},
        {path: '/About', text: t('nav.about')},
        {path: '/Projects', text: t('nav.projects')}
    ]
    const activeNav = ({isActive}: isActiveType) => {
        return isActive ? {fontFamily: 'Tilt Prism', color: 'red'} : undefined
    }
    return (
        <nav className={`${styles.Nav} ${activeNavbar}`}>
            <ul>
                {
                    navItemsList.map((item, index) => (
                        <li key={index}>
                            <NavLink style={activeNav} onClick={() => setValue(false)}
                                     to={item.path}>{item.text}</NavLink>
                        </li>
                    ))
                }
                <Flag toggleFlagModal={toggleFlagModal}/>
                <FlagModal activeModal={{
                    openFlagModal,
                    setOpenFlagModal,
                    setValue
                }}/>
            </ul>
        </nav>
    );
};

export default Nav;
