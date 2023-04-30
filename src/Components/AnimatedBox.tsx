import React, {FC} from 'react';
import globalStyles from '../Styles/Global.module.css'
const AnimatedBox:FC = () => {
    return (
        <ul className={globalStyles.animate_container}>
            {
                [...Array(10)].map((_, i) => <li key={i}></li>)
            }
        </ul>
    );
};

export default AnimatedBox;
