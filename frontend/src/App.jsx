import { useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./compnents/card";
import { useGetData } from "./hooks/useGetData";
import { DataContext } from "./store/data";

function App() {
  const [count, setCount] = useState(0);
  const [city, setCity] = useState("");
  const { display, setDisplay } = useContext(DataContext);
  const { loading, setDataFun } = useGetData();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await setDataFun({ city });

    setCity("");
  };

  return (
    <>
      <h1 className="text-3xl font-bold underline"> Weather Application </h1>

      <div className="flex  justify-center p-2">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button className="btn btn-active ml-2" onClick={handleSubmit}>
          Default
        </button>
      </div>

      {display && <Card />}
      {loading && <h1>Loading....</h1>}

      {/* <button className="btn btn-active btn-neutral">Neutral</button> */}
    </>
  );
}

export default App;
