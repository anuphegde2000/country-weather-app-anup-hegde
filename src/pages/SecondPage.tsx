import { Link, useLocation } from "react-router-dom";

const SecondPage = () => {
  const data: any = useLocation();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h2>Country {data.state[0]["name"]["common"]} </h2>
      <h4>Population : {data.state[0]["population"]}</h4>
      <h4>Latitude : {data.state[0]["latlng"][0]}</h4>
      <h4>Longitude : {data.state[0]["latlng"][1]}</h4>
      <h4>Flag:</h4>
      <img
        src={data.state[0]["flags"]["png"]}
        style={{ border: "1px solid black", margin: "10px" }}
      />

      <Link
        style={{
          padding: "8px 15px",
          textAlign: "center",
          borderRadius: "5px",
          textDecoration: "none",
          fontSize: "14px",
          margin: "4px 10px",
          background: "white",
        }}
        to={`third-page`}
        state={data.state[0]["capital"][0]}
      >
        {data.state[0]["capital"][0]}
      </Link>
    </div>
  );
};

export default SecondPage;
