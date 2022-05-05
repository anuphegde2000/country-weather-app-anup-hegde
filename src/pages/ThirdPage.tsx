import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ThirdPage = () => {
  const capital: any = useLocation();
  const url = `http://api.weatherstack.com/current?access_key=096c3d180a73489d416a0b26d23e3421&query=${capital.state}`;
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(url).then((response) => {
      setData(response.data);
    });
  }, [url]);

  if (data !== null) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h4>Temperature : {data["current"]["temperature"]}</h4>
        <h4>Wind Speed : {data["current"]["wind_speed"]}</h4>
        <h4>Time Zone Id : {data["location"]["timezone_id"]}</h4>
        <img src={data["current"]["weather_icons"][0]} />
      </div>
    );
  }

  return <h1>Loading</h1>;
};

export default ThirdPage;
