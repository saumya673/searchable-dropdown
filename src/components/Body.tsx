import "./Body.css"
import { useEffect, useState } from "react"
import  Dropdown  from "./Dropdown"
import {type  Country } from "../types/country_type"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

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
      <div className="btns">
        {/* Dropdown Button */}
        <div className="dropdown-btn">
          Countries
          <div onClick={handleDropdownClick}><ArrowDropDownIcon/></div>
        </div>

        {/* Add Button */}
        {showCountry && (
          <div className="add">
            <input className="add-input" type="text" placeholder="Add Country"/>
            <div className="add-btn">Add</div>
          </div>
        )}
      </div>
      {showCountry && (
        <Dropdown countryData={data}/>
      )}
    </div>
  )
}

export default Body