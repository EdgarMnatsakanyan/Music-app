import React, { useState } from 'react';
import cl from './SongsSection.module.css';
import TopBar from '../components/TopBar/TopBar';
import TrackSection from '../components/UI/songModal/TrackSection';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const SongsSection = () => {
  const [selectedTrack, setSelcetedTrack] = useState();
  const [trackList, setTrackList] = useState([]);
  const [values, setValues] = useState([]);
  const [query, setQuery] = useState('');
  

  
  const handleUpload = (file, newValue) => {
    console.log(file)
    console.log(newValue)

    setTrackList((prev) => ([...prev, file]))
    setValues((values) => ([...values, newValue]))
  }

  return (
    <>
      <TopBar onUpload={handleUpload} setQuery={setQuery}/>
      <div className={cl.container}>
        <div className={cl.template}>
          <div className={cl.content}/>
          <div className={cl.templateSections}>
            <p>Songs Name</p>
          </div>
          <div className={cl.templateSections}>
            <p>Artist Name</p>
          </div>
          <div className={cl.templateSections}>
            <p>Track</p>
          </div>
          <div className={cl.contentEnd}/>
        </div>

        <div className={cl.songContainer}>
          {trackList.filter((track) => track.name.toLowerCase().includes(query)
          ).map((track) => 
              <div 
                key={track.name}
                onClick={() => setSelcetedTrack(URL.createObjectURL(track))}
                className={cl.songMenu}
                />
              )}
        </div>
          <div className={cl.titleContainer}>
            {values.filter((data) => data.songName.toLowerCase().includes(query)
            ).map((data) => 
              <TrackSection key={data.id} data={data}/>
            )}
          </div>
      </div>
    {selectedTrack && (
      <AudioPlayer
        src={selectedTrack}
        type={selectedTrack.type}
        className={cl.rhap_container}
        key={selectedTrack.name}
        onPlay={e => console.log('onPlay')}
      />
    )}
    </>
  );
    
};

export default SongsSection;