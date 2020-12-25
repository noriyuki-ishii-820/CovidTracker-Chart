import React from 'react';
import {Navbar, Cards, Chart, CountryPicker, TopTen} from "./components";
import styles from "./App.module.css";
import { fetchData,fetchMostCases} from "./api";
import coronaImage from "./img/image.png"

class App extends React.Component {

    state = {
        data: {},
        country: "",

    }

    async componentDidMount(){
        const fetchedData = await fetchData();


        this.setState ({data:fetchedData})
    }

    handleCountryChange = async (country) => {

        // fetch the data
        const fetchedData = await fetchData(country);
        this.setState ({data:fetchedData, country:country})

        // set the state
    }

    render(){
        const { data, country } = this.state;
        return(
            <div className={styles.container}>
                <Navbar />
                <img className={styles.image} src={coronaImage} alt="COVID-19"></img>
                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country} />
                <TopTen />
            </div>
         ) }
}

export default App;