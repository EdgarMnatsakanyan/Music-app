import React, { useState } from 'react';
import cl from './MusicModal.module.css'
import MyInput from '../input/MyInput';


const MusicModal = ({visible, setVisible, onUpload}) => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [values, setValues] = useState(
        {
            id: Date.now(),
            songName: '',
            artistName: '',
            trackNumber: ''
        })

    const modal = [cl.container]
    if(visible) {
        modal.push(cl.active)
    }

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
    };

    const handleUpload = (el) => {
        el.preventDefault();
        setVisible(false);
        onUpload(selectedFile, values);
        setValues({
            id: Date.now(),
            songName: '',
            artistName: '',
            trackNumber: ''
            })
        
    };

    return (
        <div className={modal.join(' ')}>
            <div className={cl.sectionUploadMusic}>
                <input 
                    type="file" 
                    id='song-input'
                    name='file'
                    accept='.mp3, .wav' 
                    onChange={handleFileChange}
                    className={cl.chooseFileInput}
                />
                <MyInput 
                    value={values.songName} 
                    onChange={(el) => setValues({...values, songName: el.target.value})}
                    placeholder='Song Name'
                    className={cl.inputs}
                />
                <MyInput 
                    value={values.artistName} 
                    onChange={(el) => setValues({...values, artistName: el.target.value})}
                    placeholder='Artist Name'
                    className={cl.inputs}
                />
                <MyInput
                    value={values.trackNumber} 
                    onChange={(el) => setValues({...values, trackNumber: el.target.value})}
                    placeholder='Track Number'
                    className={cl.inputs}
                />
                <button onClick={handleUpload} className={cl.btnModal}>Upload</button>
            </div>
        </div>
    );
}

export default MusicModal;