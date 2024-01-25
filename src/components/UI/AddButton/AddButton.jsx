import React, { useState } from 'react';
import { FaAngleDown, FaAngleUp, FaPlus, } from 'react-icons/fa';
import cl from './AddButton.module.css'
import MusicModal from '../UploadMusicModal/MusicModal';
const AddButton = () => {
    const [arrows, setArrows] = useState(false);
    const [modal, setModal] = useState(false);
    
    const section = () => {
        setArrows(!arrows)
    }
    return (
        <div className={cl.container}>
            <div className={cl.sectionBtn} onClick={() => setModal(true)}>
                <FaPlus className={cl.Icon}/>
                <p>Add All</p>
            </div>
            <div className={cl.rowDown} onClick={section}>
                {arrows ? <FaAngleUp /> : <FaAngleDown />}
            </div>
            <MusicModal visible={modal} setVisible={setModal} />
        </div>
    );
};

export default AddButton;