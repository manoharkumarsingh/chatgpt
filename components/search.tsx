import React, { useState, useEffect, useRef, ChangeEvent } from "react";
import fetchData from "@/Services/service";

interface searchProps {
  handleSearchLocation: (data: Object) => void;
  updateLoaderLocation: (data: boolean) => void;
}
export default function Search(props: searchProps) {
  const [debouncedValue, setDebouncedValue] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const onSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value;
    setDebouncedValue(text);
  };

  const handleSubmit = async () => {
    props.updateLoaderLocation(true);
    const weatherData = await fetchData(debouncedValue);
    props.handleSearchLocation(weatherData);
    props.updateLoaderLocation(false);
  };

  return (
    <>
      <div className="mb-2 text-lg">Enter location:</div>
      <input
        className="h-10 pl-2 w-4/5 rounded outline-blue-500 border-2 border-blue-300"
        onChange={(e) => onSearch(e)}
        ref={inputRef}
        placeholder="Search City"
      />
      <div className="mt-5">
        <button
          onClick={handleSubmit}
          className="bg-blue-600 w-20 h-8 text-white rounded font-semibold"
        >
          Submit
        </button>
      </div>
    </>
  );
}
