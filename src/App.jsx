import { useEffect, useState } from "react";
import backgroundImage from "./assets/sunset.jpg";
import { MOCK_DATA } from "./utils/constant";

function App() {
  
  const [data, setData] = useState(MOCK_DATA);
  const [location, setLocation] = useState("");

  const apiKey = import.meta.env.VITE_API_KEY;
  const apiUrl = import.meta.env.VITE_API_URL;
  // const api = process.env.REACT_APP_WEATHER_API;
  // const apiKey = process.env.REACT_APP_KEY;

  const searchLocation = async (event) => {
    if (event.key === "Enter") {
      const response = await fetch(
        `${apiUrl} +${location}+ &units=imperial&appid= +  ${apiKey} `
      );
      const json = await response.json();

      console.log(json);
      setData(json);
      setLocation("");
    }
  };
  const celsius = (((data?.main?.temp - 32) * 5) / 9).toFixed(); // Convert Fahrenheit to Celsius

  return (
    <div className=" box-border m-0 p-0 ">
      {/* /APP */}
      <div className="relative w-full h-screen  bg-opacity-40 bg-black text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        >
          {/* SearchBox */}
          <div className="text-center p-8">
            <input
              className="p-2 md:p-4 text-lg md:text-3xl rounded-full 
            border border-white border-opacity-80 bg-opacity-10 text-gray-700 text-center"
              type="text"
              value={location}
              onChange={(event) => setLocation(event.target.value)}
              onKeyPress={searchLocation}
              placeholder="Enter Location"
            />
          </div>

          {/* container */}
          <div className="max-w-700 h-700 mx-auto px-8 py-6 relative top-10 flex flex-col justify-between">
            {/* top */}
            <div className="w-full my-4 mx-auto">
              {/* location */}
              <div className="location">
                <p className="text-2xl md:text-4xl font-bold pb-4">
                  {data.name}
                </p>
              </div>
              {/* Temperature */}
              <div className="temp">
                <h1 className="text-4xl md:text-7xl font-bold">{celsius}°C</h1>
              </div>
              {/* Description */}
              <div className="relative right-[-90%] -rotate-90 origin-[0_0] ">
                {data.weather ? (
                  <p className="text-lg md:text-3xl font-bold">
                    {data.weather[0].main}
                  </p>
                ) : null}
              </div>
            </div>

            {data.name !== undefined && (
              // bottom
              <div className="flex justify-evenly  text-center w-full mt-10 mx-auto p-4 border rounded-xl bg-opacity-20 bg-white ">
                <div className="feels">
                  {data.main ? (
                    <p className="text-lg md:text-3xl font-bold">
                      {data.main.feels_like.toFixed()}°F
                    </p>
                  ) : null}
                  <p className="text-lg md:text-3xl font-semibold">
                    Feels Like
                  </p>
                </div>
                <div className="Humidity">
                  {data.main ? (
                    <p className="text-lg md:text-3xl font-bold">
                      {data.main.humidity}%
                    </p>
                  ) : null}
                  <p className="text-lg md:text-3xl font-semibold">Humidity</p>
                </div>
                <div className="wind">
                  {data.wind ? (
                    <p className="text-lg md:text-3xl font-bold">
                      {data.wind.speed.toFixed()} MPH
                    </p>
                  ) : null}
                  <p className="text-lg md:text-3xl font-semibold">
                    Wind Speed
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
