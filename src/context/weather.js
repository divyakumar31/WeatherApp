import { createContext } from "react";

const WeatherContext = createContext({
  getWeather: (city) => {},
  weather: {},
  loading: false,
});

export default WeatherContext;
