import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl, Typography } from "@material-ui/core";
import { fetchCountries } from "../../api";

import styles from "./CountryPicker.module.css";

const CountryPicker = ({ handleCountryChange }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchMyAPI = async () => {
      setCountries(await fetchCountries());
    };
    fetchMyAPI();
  }, []);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect
        defaultValue=""
        onChange={(e) => handleCountryChange(e.target.value)}
      >
        <option className={styles.option} value="">
          Global
        </option>
        {countries.map((country, i) => {
          return (
            <option key={i} value={country}>
              {country}
            </option>
          );
        })}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
