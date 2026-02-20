import "./Dropdown.css";
import { useMemo, useState } from "react";
import {type  Country } from "../types/country_type"
import Filter from "./Filter";

const Dropdown = ({ countryData }: { countryData: Country[] }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCountries = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    if (!query) return countryData;

    return countryData.filter((country) =>
      country.label.toLowerCase().startsWith(query)
    );
  }, [countryData, searchTerm]);

  return (
    <div className="dropdown-box">
      <Filter value={searchTerm} onChange={setSearchTerm} />

      {filteredCountries.length > 0 ? (
        filteredCountries.map((country) => (
          <div className="item-country" key={country.id}>
            {country.label}
          </div>
        ))
      ) : (
        <div>No countries found</div>
      )}
    </div>
  );
};

export default Dropdown;