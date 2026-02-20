import "./Body.css"
import { useEffect, useState } from "react"
import  Dropdown  from "./Dropdown"
import {type  Country } from "../types/country_type"

const Body = () => {
  const [data, setData] = useState<Country[]>([]);
  const [showCountry, setShowCountry] = useState(false);

 useEffect(() => {
  const fetchData = async () => {
    const response = await fetch("http://localhost:4001/countries");
    const res = await response.json();
    setData(res);
  };

  fetchData();
}, []);

  function handleDropdownClick(){
    setShowCountry(!showCountry);
  }

  return (
    <div className="dropdown">
      <div className="dropdown-btn">
        Countries
        <button onClick={handleDropdownClick}>arrow</button>
      </div>
      {showCountry && (
        <Dropdown countryData={data}/>
      )}
    </div>
  )
}

export default Body