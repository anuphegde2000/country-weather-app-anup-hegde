import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { useDebounce } from "./hooks/useDebounce";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const url = "https://restcountries.com/v3.1/name/";
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState(null);
  const debouncedUrl = useDebounce(url + searchText);
  const [inputState, setInputState] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const handleFetchStories = useCallback(async () => {
    try {
      const response = await axios.get(debouncedUrl);
      if (response.data.length < 2 && response.data.length > 0) {
        setInputState(true);
        setData(response.data);
      }
      if (inputState === true && response.data.length > 1) {
        setInputState(false);
      }
    } catch {
      if (inputState === true) {
        setInputState(false);
      }
    }
  }, [debouncedUrl]);

  useEffect(() => {
    handleFetchStories();
  }, [handleFetchStories]);

  return (
    <div className="body">
      <form action="/" method="get">
        <input
          type="text"
          id="header-search"
          placeholder="Country Name"
          onChange={onChange}
          style ={{
            padding: "8px 15px",
            textAlign: "center",
            fontSize: "14px",
            margin: "4px 10px",
          }}
        />
        <Link
          id="button"
          to={"/second-page"}
          state={data}
          className="inputButton"
          style={{
            pointerEvents: inputState ? "auto" : "none",
            padding: "8px 15px",
            textAlign: "center",
            borderRadius: "5px",
            textDecoration: "none",
            fontSize: "14px",
            margin: "4px 10px",
            background: "white",
          }}
        >
          Submit
        </Link>
      </form>
    </div>
  );
};

export default SearchBar;
