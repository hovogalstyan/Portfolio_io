import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../Type/Types";
import {getVideoId} from "../Store/features/ProjectSlice";
import styles from '../Styles/VideoDescription.module.css';
import ReactPlayer from 'react-player';

const VideoDescription = () => {
    const state = useAppSelector(state => state.ProjectSlice.description)
    console.log(state)
    const {id} = useParams()
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getVideoId(Number(id)))
    }, [id])
    return (
        state &&
        <div className={styles.VideoDescription}>
            <div className={styles.container}>
                <ReactPlayer width={'100%'} height='100%'
                             url={state.url}
                             playing={true}
                             controls={true}
                />
            </div>
            <p>Github: <a href={state.git}>{state.git}</a></p>
        </div>
    );
};

export default VideoDescription;
