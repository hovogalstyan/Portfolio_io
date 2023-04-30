import React, {FC, useEffect, useMemo} from 'react';
import {FaFacebook} from "react-icons/fa";
import {AiFillInstagram, AiFillGithub} from "react-icons/ai";
import styles from '../../Styles/ContactModal.module.css';
import {useActiveClass} from "../Hooks/useActiveClass";

interface AnimIconsBlockProps {
    propsState: {
        activeTel: boolean,
        activeIcon: boolean,
        setIcon: (value: boolean) => void,
        setTel: (value: boolean) => void
        openContactModal: boolean
    }
}

const AnimIconsBlock: FC<AnimIconsBlockProps> = ({propsState}) => {
    const {activeIcon, activeTel, setTel, setIcon, openContactModal} = propsState;
    const tel = '098101130';
    const tolSplit = tel.split('');
    useEffect(() => {
        setTimeout(() => {
            if (openContactModal) {
                setIcon(true)
            }
        }, 1200)
    }, [openContactModal])
    useEffect(() => {
        if (activeIcon) {
            setTimeout(() => {
                setTel(true)
            }, 2000)
        }
    }, [activeIcon]);
    const [activeIconClass] = useActiveClass(activeIcon, styles.active_modal_icons)
    const [activeTelClass] = useActiveClass(activeTel, styles.tel_active_class)
    return (
        <div className={`${styles.Anim_icons_block} ${activeIconClass}`}>
            <div className={styles.icons_block}>
                   <span className={styles.icons}>
                <a href="https://www.facebook.com/ho.vo.10297" target={"_blank"}><FaFacebook/></a>
            </span>
                <span className={styles.icons}>
                <a href="https://instagram.com/hovo_99___?igshid=ZDdkNTZiNTM="
                   target={"_blank"}><AiFillInstagram/></a>
            </span>
                <span className={styles.icons}>
                <a href="https://github.com/hovogalstyan" target={"_blank"}><AiFillGithub/></a>
            </span>
            </div>
            <div className={styles.tel}>
                <a href={"tel:+37898101130"}>
                    {
                        tolSplit.map((item, index) => (
                            <span className={`${styles.icons_items} ${activeTelClass}`} key={index}>{item}</span>
                        ))
                    }
                </a>
            </div>
        </div>
    );
};

export default AnimIconsBlock;
