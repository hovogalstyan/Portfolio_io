import React, {FC, useMemo, useState} from 'react';
import {AiOutlineCloseSquare} from "react-icons/ai";
import AnimIconsBlock from "./AnimIconsBlock";
import styles from '../../Styles/ContactModal.module.css';
import globalStyles from '../../Styles/Global.module.css'
import {useActiveClass} from "../Hooks/useActiveClass";
import {useToggle} from "../Hooks/useToggle";
interface ContactModalProps {
    activeModal: {
        openContactModal: boolean,
        setContactModal: (value: boolean) => void
    }
}

const ContactModal: FC<ContactModalProps> = ({activeModal}) => {
    const {openContactModal, setContactModal} = activeModal
    const [activeIcon, setIcon] = useToggle(false)
    const [activeTel, setTel] = useToggle(false)
    const [toggleModalBlock] = useActiveClass(openContactModal,styles.active_contact_modal)
    return (
        <div className={`${styles.modal_block} ${toggleModalBlock}`}>
            <div className={styles.contact}>
                <AnimIconsBlock propsState={{
                    activeTel,
                    activeIcon,
                    setIcon,
                    setTel,
                    openContactModal
                }}/>
                <button
                    className={globalStyles.closeModal}
                    onClick={() => setContactModal(false)}
                >
                    <AiOutlineCloseSquare/>
                </button>
            </div>
        </div>
    );
};

export default ContactModal;
