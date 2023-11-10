interface WeatherDescriptionProps {
  loader: boolean;
  weatherData: Object;
}
const WeatherDescription = (props: WeatherDescriptionProps) => {
  return (
    <div className="">
      {props.loader ? (
        <div className="w-40 h-40 border-t-4 border-blue-500 border-solid border-opacity-75 rounded-full border-r-4 animate-spin"></div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default WeatherDescription;
