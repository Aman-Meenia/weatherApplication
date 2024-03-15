import { useContext, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { DataContext } from "../store/data";

export const useGetData = () => {
  const [loading, setLoading] = useState(false);

  const { data, setData } = useContext(DataContext);
  const { display, setDisplay } = useContext(DataContext);

  const setDataFun = async ({ city }) => {
    if (!city) {
      toast.error("Please enter city name ");
      return;
    }
    setDisplay(false);
    setLoading(true);
    const link = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=71ab7952b3fa31b7cc4330d1c11ee6aa`;
    await axios
      .get(link)
      .then((res) => {
        setData({
          name: city,
          humidity: res.data.main.humidity,
          temp: (res.data.main.temp - 273.15).toFixed(2),
          pressure: res.data.main.pressure,
          visibility: res.data.visibility,
          wind: res.data.wind.speed,
          icon: res.data.weather[0].icon,
          description: res.data.weather[0].description,
          temp_max: (res.data.main.temp_max - 273.15).toFixed(2),
          temp_min: (res.data.main.temp_min - 273.15).toFixed(2),
        });
        setDisplay(true);
      })
      .catch(() => {
        toast.error("City Not Found");
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return { loading, setDataFun };
};
