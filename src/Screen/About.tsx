import React from 'react';
import AuthorPhoto from "../Components/AuthorPhoto";
import AnimatedBox from "../Components/AnimatedBox";
import DescriptionText from "../Components/About/DescriptionText";
import styles from '../Styles/About.module.css';
const About = () => {
    return (
        <div className={styles.About}>
            <DescriptionText/>
            <AuthorPhoto/>
            <AnimatedBox/>
        </div>
    );
};

export default About;
