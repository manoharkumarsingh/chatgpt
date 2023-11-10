import Search from "./search";
import React, { useState } from "react";

interface weatherLocationProps {
  handleSearch: (data: Object) => void;
  updateLoader: (data: boolean) => void;
}

const WeatherLocation = (props: weatherLocationProps) => {
  const handleSearchLocation = (weatherInfo: Object) => {
    props.handleSearch(weatherInfo);
  };
  const updateLoaderLocation = (loader: boolean) => {
    props.updateLoader(loader);
  };

  return (
    <div className="text-center">
      <div className="text-5xl mb-10">Current Weather</div>
      <Search
        handleSearchLocation={handleSearchLocation}
        updateLoaderLocation={updateLoaderLocation}
      />
    </div>
  );
};

export default WeatherLocation;
