import React, {FC, useEffect} from 'react';
import Logo from "./Logo";
import Nav from "./Nav";
import {AiOutlineCloseSquare} from "react-icons/ai";
import {GiHamburgerMenu} from "react-icons/gi";
import {useToggle} from "../Hooks/useToggle";
import {useActiveClass} from "../Hooks/useActiveClass";
import styles from '../../Styles/Header.module.css';
import {Link} from "react-router-dom";

const Header: FC = () => {
    const [isActive, toggleVisible, setValue] = useToggle(false)
    const [activeNavbar] = useActiveClass(isActive, styles.Active_navbar_media)
    const [isActiveScroll, toggleScroll, setValueScroll] = useToggle(false)
    const [activeScroll] = useActiveClass(isActiveScroll, styles.Active_scroll)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 40) {
                setValueScroll(true)
            }
            if (window.pageYOffset === 0) {
                setValueScroll(false)
            }
        })
    }, [isActiveScroll])
    return (
        <div className={styles.Header}>
            <div className={`${styles.scroll_header} ${activeScroll}`}>
               <Link to={'/'}>
                   <Logo/>
               </Link>
                <Nav activeNavbar={activeNavbar} setValue={setValue}/>
                <button className={styles.menu_navbar}
                        onClick={toggleVisible}
                >
                    {
                        isActive ? <AiOutlineCloseSquare/>
                            : <GiHamburgerMenu/>
                    }
                </button>
            </div>
        </div>
    );
};

export default Header;
