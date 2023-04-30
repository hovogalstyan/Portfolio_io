import React, {FC, useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {ProjectsItemTypes, useAppDispatch} from "../../Type/Types";
import {Link} from "react-router-dom";
import {MdFavoriteBorder, MdFavorite} from "react-icons/md";
import {FaShareAlt} from "react-icons/fa";
import ContactIcons from "./ContactIcons";
import {AiFillPlaySquare} from "react-icons/ai";
import styles from '../../Styles/Projects.module.css';
import {getVideoId} from "../../Store/features/ProjectSlice";
import {useToggle} from "../Hooks/useToggle";
import {useActiveClass} from "../Hooks/useActiveClass";

interface ProjectListProps {
    item: ProjectsItemTypes,
    index: number,
    setItemIndex: (value: number) => void,
    itemIndex: number | null
}

const ProjectsList: FC<ProjectListProps> = ({item, index, setItemIndex, itemIndex}) => {
    // const [favorite, setFavorite] = useState(false);
    const [isFavorite, toggleFavorite] = useToggle(false)
    const [activeFavorite] = useActiveClass(isFavorite, styles.active_favorite)
    const [activeContactIcons, setContactIcons] = useState(false)
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [currentTime, setCurrentTime] = useState(0);
    const activeItemsVideo = useCallback((index: number) => {
        setItemIndex(index)
        setIsPlaying(!isPlaying)
    }, [isPlaying])
    useEffect(() => {
        window.setInterval(function () {
            if (videoRef.current) {
                setCurrentTime(videoRef.current.currentTime);
            }
        }, 1000);
    }, [])
    useEffect(() => {
        if (itemIndex === index) {
            if (videoRef.current) {
                videoRef.current.play()
            }
        } else {
            setIsPlaying(false)
            videoRef.current?.pause()
            setContactIcons(false)
        }
        if (!isPlaying) {
            videoRef.current?.pause()
        }
    }, [itemIndex, index, isPlaying])
    useEffect(() => {
        if (videoRef.current && isPlaying) {
            if (videoRef.current.currentTime === currentTime) {
                setIsPlaying(false)
            }
        }
    }, [currentTime])

    const ItemsToggle = useMemo(() => {
        return isPlaying ? styles.active_items : ''
    }, [isPlaying]);
    return (
        <div className={`${styles.items} ${ItemsToggle}`}>
            <div className={styles.video_block}>
                <video src={item.url} ref={videoRef}/>
                {
                    activeContactIcons && <ContactIcons iconsList={item.contactList} activeIcons={activeContactIcons}/>
                }
            </div>
            <Link to={'/Video/' + item.id}>{item.name}</Link>
            <div className={styles.icons_block}>
                <div className={styles.left_block}>
                    <span
                        style={isFavorite ? {color: 'red'} : undefined}
                        onClick={toggleFavorite}
                        className={`${styles.favorite} ${activeFavorite}`}
                    >
                        {
                            isFavorite ?
                                <MdFavorite/>
                                : <MdFavoriteBorder/>
                        }
                    </span>
                    <button className={styles.contact_icons_btn}
                            style={activeContactIcons ? {color: 'red'} : undefined}
                            onClick={() => setContactIcons(!activeContactIcons)}
                    >
                        <FaShareAlt/>
                    </button>
                </div>
                <button
                    className={styles.btn_bottom_active}
                    onClick={() => activeItemsVideo(index)}
                >
                    <AiFillPlaySquare/>
                </button>
            </div>
        </div>
    );
};

export default ProjectsList;
