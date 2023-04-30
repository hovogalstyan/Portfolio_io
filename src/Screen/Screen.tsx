import React, {FC} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Header from "../Components/Header/Header";
import VideoDescription from "./VideoDescription";


const Screen: FC = () => {
    return (
        <BrowserRouter basename={'/Portfolio_io'}>
            <Header/>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/About'} element={<About/>}/>
                <Route path={'/Projects'} element={<Projects/>}/>
                <Route path={'/Video/:id'} element={<VideoDescription/>}/>
                <Route path={'*'} element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default Screen;
