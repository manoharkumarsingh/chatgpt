import React, { useState } from "react";
import WeatherLocation from "@/components/weatherLocation";
import WeatherDescription from "@/components/weatherDescription";

export default function Weather() {
  const [weatherData, setweatherData] = useState({});
  const [loader, setLoader] = useState(false);

  const handleSearch = (weatherInfo: Object) => {
    setweatherData(weatherInfo);
  };
  const updateLoader = (loader: boolean) => {
    setLoader(loader);
  };

  return (
    <div className="flex justify-between gap-10 m-10">
      <div className="w-1/2 bg-gray-200 px-6 py-10">
        <WeatherLocation
          handleSearch={handleSearch}
          updateLoader={updateLoader}
        ></WeatherLocation>
      </div>
      <div className="w-1/2 bg-gray-200 px-6 py-10 flex justify-center items-center">
        <WeatherDescription
          loader={loader}
          weatherData={weatherData}
        ></WeatherDescription>
      </div>
    </div>
  );
}
