import { createContext, useState } from "react";

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [data, setData] = useState({
    city: "",
    humidity: "",
    temp: "",
    wind: "",
    visibility: "",
    pressure: "",
    name: "",
    icon: "",
    description: "",
    temp_max: "",
    temp_min: "",
  });
  const [display, setDisplay] = useState(false);
  return (
    <DataContext.Provider value={{ data, setData, display, setDisplay }}>
      {children}
    </DataContext.Provider>
  );
};
