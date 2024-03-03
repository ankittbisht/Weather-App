export const WEATHER_API =
  "https://api.openweathermap.org/data/2.5/weather?q={city%20name}&appid={API%20key}";

export const API_KEY = "6cd2b3accdeeaa317eac33bf3b6376f2";

export const MOCK_DATA = {
  weather: [
    {
      id: 721,
      main: "Haze",
      description: "haze",
    },
  ],
  main: {
    temp: 293.2,
    feels_like: 292.1,
    humidity: 32,
  },
  wind: {
    speed: 2.06,
    deg: 320,
  },
  name: "Delhi",
};
