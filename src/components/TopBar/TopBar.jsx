import React, { useState } from 'react';
import { FaAngleDown, FaAngleUp, FaPlay, FaPlus } from 'react-icons/fa';
import { TbArrowsSort } from 'react-icons/tb';
import cl from './TopBar.module.css'
import MusicModal from '../UI/UploadMusicModal/MusicModal';
import { IoIosSearch } from 'react-icons/io';
import MyInput from '../UI/input/MyInput';
import MySelect from '../UI/select/MySelect';


const TopBar = ({onUpload, setQuery}) => {
    const [arrows, setArrows] = useState(false);
    const [arrowsDown, setArrowsDown] = useState(false);
    const [modal, setModal] = useState(false);

    const section = () => {
        setArrows(!arrows)
    }

    const handleChange = (event) => {
        setQuery(event.target.value)
        console.log(setQuery)
    }


    const sectionTwo = () => {
        setArrowsDown(!arrowsDown)
    }

    return (
        <>
        <div className={cl.containerTopBar}>
            <div className={cl.topBarSection}>
                <div className={cl.TopBarContainer}>
                    <div className={cl.sectionBtn}>
                        <FaPlay className={cl.Icon}/>
                        <p>Play All</p>
                    </div>
                    <div className={cl.rowDown} onClick={section}>
                        {arrows ? <FaAngleUp /> : <FaAngleDown />}
                    </div>
                </div>
                
                <div className={cl.TopBarContainer}>
                    <div className={cl.sectionBtn} onClick={() => setModal(true)}>
                        <FaPlus className={cl.Icon}/>
                        <p>Add All</p>
                    </div>
                    <div className={cl.rowDown} onClick={sectionTwo}>
                        {arrowsDown ? <FaAngleUp /> : <FaAngleDown />}
                    </div>
                    <MusicModal onUpload={onUpload} visible={modal} setVisible={setModal} />
                    
                </div>
            </div>
            <div className={cl.topBarSection}>
            <div className={cl.containerfilter}>
                <TbArrowsSort />
                <MySelect 
                    setQuery={setQuery}
                    onChange={handleChange}
                    defaultValue="filter"
                    options={[
                        {value: 'songName', name: 'Song Name'},
                        {value: 'artistName', name: 'Artist Name'},
                        {value: 'trackNumber', name: 'Track Number'}
                    ]}
                    />

            </div>
            <div className={cl.containerInput}>
                <IoIosSearch className={cl.icon}/>
                <MyInput 
                    onChange={(e) => setQuery(e.target.value)}
                    className={cl.input}
                    placeholder="Filter"
                />
            </div>
            </div>
        </div>
        </>
    );
};

export default TopBar;