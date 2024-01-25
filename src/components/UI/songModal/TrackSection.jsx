import React from 'react';
import cl from './TrackSection.module.css';
import { IoIosShareAlt, IoMdHeart } from "react-icons/io";
import { MdOutlineDone } from "react-icons/md";
import { FaCaretDown, FaPlay } from "react-icons/fa";
import { RxDragHandleDots2 } from "react-icons/rx";


const TrackSection = ({data}) => {
    

    return (
        <div className={cl.container} key={data.id}>
            <div>
                <RxDragHandleDots2 className={cl.icons}/>
                <FaPlay className={cl.icons}/>
            </div>
                <p className={cl.songName}>{data.songName}</p>
                <p className={cl.artistName}>{data.artistName}</p>
                <p className={cl.tacknumber}>{data.trackNumber}</p>
            <div className={cl.iconsContainer}>
                <IoMdHeart className={cl.icons}/>
                <MdOutlineDone className={cl.icons}/>
                <IoIosShareAlt className={cl.icons}/>
                <FaCaretDown className={cl.icons}/>
            </div>
        </div>
    );
};

export default TrackSection;