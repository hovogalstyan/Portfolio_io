import React, {useState} from 'react';
import TextDescription from "../Components/Home/TextDescription";
import AuthorPhoto from "../Components/AuthorPhoto";
import ContactModal from "../Components/ContactModal/ContactModal";
import ResumeModal from "../Components/ResumeModal/ResumeModal";
import AnimatedBox from "../Components/AnimatedBox";
import styles from '../Styles/Home.module.css';
import {useToggle} from "../Components/Hooks/useToggle";
const Home = () => {
    const [openContactModal,  setContactModal] = useToggle(false)
    const [openResumeModal,  setResumeModal] = useToggle(false)
    return (
        <div className={styles.Home}>
            <TextDescription openContactModal={{
                setContactModal,
                setResumeModal
            }}/>
            <AuthorPhoto  animatedBlock={<AnimatedBox/>}/>
            {
                openContactModal && <ContactModal activeModal={{
                    openContactModal,
                    setContactModal
                }}/>
            }
            {
                openResumeModal && <ResumeModal activeModal={{
                    openResumeModal,
                    setResumeModal
                }}/>
            }
        </div>
    );
};

export default Home;
