// MusicPlayerContext.js
// mediaPlayerContext.js
import React, { createContext, useContext, useState } from 'react';

export const MusicPlayerContext = createContext();

export const MusicPlayerProvider = ({ children }) => {
    const [currentSong, setCurrentSong] = useState(null);
    const [songs, setSongs] = useState([]);
    console.log(songs);

    return (
        <MusicPlayerContext.Provider value={{ setSongs, songs, setCurrentSong }}>
            {children}
        </MusicPlayerContext.Provider>
    );
}


