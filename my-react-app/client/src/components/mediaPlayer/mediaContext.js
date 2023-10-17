import { useState } from "react";
import { createContext } from "react";

export const MyContext = createContext();

const MediaProvider = ({ children }) => {
  const [songs, setSongs] = useState([]);


  console.log(songs);

  return (
    <MyContext.Provider value={{ songs, setSongs  }}>
      {children}
    </MyContext.Provider>
  );
};

export default MediaProvider;
