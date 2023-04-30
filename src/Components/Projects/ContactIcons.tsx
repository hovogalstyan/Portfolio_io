import React, {FC, useMemo} from 'react';
import styles from '../../Styles/Projects.module.css';
import {iconsTypes} from "../../Type/Types";
import ContactIconsList from "./ContactIconsList";
interface ContactIconsProps{
 iconsList:iconsTypes[],
 activeIcons:boolean
}
const ContactIcons:FC<ContactIconsProps> = ({iconsList,activeIcons}) => {
    const toggle =useMemo(()=>{
        return activeIcons ? styles.active_contact_projects_icons:''
    },[activeIcons])
    return (
        <div className={`${styles.Contact_icons_projects} ${toggle}`}>
            {
                iconsList.map((items,index)=>(
                    <ContactIconsList key={index} ulr={items} contactIndex={index}/>
                ))
            }
        </div>
    );
};

export default ContactIcons;
