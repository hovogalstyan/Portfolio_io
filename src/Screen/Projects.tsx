import React, {FC, useState} from 'react';
import styles from '../Styles/Projects.module.css'
import {ProjectsItemTypes, useAppSelector} from "../Type/Types";
import ProjectsList from "../Components/Projects/ProjectsList";
const Projects:FC = () => {
    const projectList = useAppSelector(state=> state.ProjectSlice.data)
    const [itemsIndex, setItemsIndex] = useState<null | number>(null)

    return (
        <div className={styles.Projects}>
            {
                projectList.map((item:ProjectsItemTypes,index:number)=>(
                    <ProjectsList key={item.id} item={item} index={index} setItemIndex={setItemsIndex} itemIndex={itemsIndex}/>
                ))
            }
        </div>
    );
};

export default Projects;
