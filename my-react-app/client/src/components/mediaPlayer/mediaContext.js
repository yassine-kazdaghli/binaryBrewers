import { useState } from "react";
import { createContext } from "react";

export const MyContext = createContext();

const MediaProvider = ({ children }) => {
  const [songs, setSongs] = useState([]);
  const [currentSong,setcurrentSong] = useState("")


  console.log(songs);

  return (
    <MyContext.Provider value={{ songs, setSongs ,currentSong,setcurrentSong }}>
      {children}
    </MyContext.Provider>
  );
};

export default MediaProvider;
