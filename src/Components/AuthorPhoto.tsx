import React, {ReactNode} from 'react';
import globalStyles from '../Styles/Global.module.css';
interface  AuthorPhotoPropsType{
    animatedBlock?:ReactNode
}
const AuthorPhoto:React.FC<AuthorPhotoPropsType> = ({animatedBlock}) => {
    return (
        <div className={globalStyles.author_photo_block}>
            <figure className={globalStyles.author_photo}>
                <img src={require('./Images/author/sd.jpg')} alt={'Author'}/>
                {animatedBlock}
            </figure>
        </div>
    );
};

export default AuthorPhoto;
