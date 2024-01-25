import React, { useState } from 'react';
import { FaPlay, FaAngleDown, FaAngleUp } from "react-icons/fa";
import cl from './PlayButton.module.css';


const PlayButton = () => {
    const [arrows, setArrows] = useState(false)

    const section = () => {
        setArrows(!arrows)
    }
    return (
        <div className={cl.container}>
            <div className={cl.sectionBtn}>
                <FaPlay className={cl.Icon}/>
                <p>Play All</p>
            </div>
            <div className={cl.rowDown} onClick={section}>
                {arrows ? <FaAngleUp /> : <FaAngleDown />}
            </div>
        </div>
    );
};

export default PlayButton;