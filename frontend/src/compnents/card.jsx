import React, { useContext } from "react";
import { DataContext } from "../store/data";

const card = () => {
  const { data, setData } = useContext(DataContext);

  return (
    <>
      <div className="min-h-screen flex items-center justify-center ">
        <div className="flex flex-col bg-white rounded p-4 w-full max-w-xs border-black border-2">
          <div className="font-bold text-xl">{data.name}</div>
          <div className="text-sm text-gray-500">Thursday 10 May 2020</div>
          <div className="mt-6 text-6xl self-center inline-flex items-center justify-center rounded-lg text-indigo-400 h-24 w-24">
            <svg
              className="w-32 h-32"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
              ></path>
            </svg>
          </div>
          <div className="flex flex-row items-center justify-center mt-6">
            <div className="font-medium text-6xl">{data.temp}</div>
            <div className="flex flex-col items-center ml-6">
              <div>{data.description}</div>
              <div className="mt-1">
                <span className="text-sm">
                  <i className="far fa-long-arrow-up"></i>
                </span>
                <span className="text-sm font-light text-gray-500">
                  {data.temp_max}
                </span>
              </div>
              <div>
                <span className="text-sm">
                  <i className="far fa-long-arrow-down"></i>
                </span>
                <span className="text-sm font-light text-gray-500">
                  {data.temp_min}
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between mt-6">
            <div className="flex flex-col items-center">
              <div className="font-medium text-sm">Wind</div>
              <div className="text-sm text-gray-500">{data.wind}k/h</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="font-medium text-sm">Humidity</div>
              <div className="text-sm text-gray-500">{data.humidity}%</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="font-medium text-sm">Visibility</div>
              <div className="text-sm text-gray-500">{data.visibility}m</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default card;
