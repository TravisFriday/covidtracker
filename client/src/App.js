import React, { Component } from "react";

import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";

class App extends Component {
  //contructor is created in the backend
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    //fetch the data
    const fetchedData = await fetchData(country);
    //set the state
    console.log(fetchedData);
  };

  render() {
    const { data } = this.state;

    return (
      <div className={styles.container}>
        <Cards data={data}></Cards>
        <CountryPicker
          handleCountryChange={this.handleCountryChange}
        ></CountryPicker>
        <Chart></Chart>
      </div>
    );
  }
}

export default App;
