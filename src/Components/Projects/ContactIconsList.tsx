import React, {FC} from 'react';
import {FaFacebook} from "react-icons/fa";
import {AiFillInstagram, AiFillGithub} from "react-icons/ai";
const iconsList = [<FaFacebook/>, <AiFillInstagram/>, <AiFillGithub/>]

interface ContactIconsListProps {
    ulr: any,
    contactIndex: number,

}

const ContactIconsList: FC<ContactIconsListProps> = ({ulr, contactIndex}) => {
    return (
        <>
            {
                iconsList.map((item, index) => (
                    contactIndex === index &&
                    <a href={ulr.urls} key={index}>{item}</a>
                ))
            }
        </>
    );
};

export default ContactIconsList;
