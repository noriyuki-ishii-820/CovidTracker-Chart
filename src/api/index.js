import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {

    let changeableUrl = url;

    if(country){
        changeableUrl = `${url}/countries/${country}`;
    }

    try{
        const { data: {confirmed, recovered, deaths, lastUpdate}} = await axios.get(changeableUrl)
        
        return {  confirmed, recovered, deaths, lastUpdate }
        
    } catch (error){
        console.log(error)
    }
}

export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`)

        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,

        }));

    return modifiedData;
    } catch (error) {

    }
}

export const fetchCountries = async () => {
    try{
        const { data: { countries }} = await axios.get(`${url}/countries`)
        
        return countries.map((country) => country.name)

    } catch (error){
        console.log(error)
    }
}

export const fetchMostCases = async () => {
    try {

            const { data } = await axios.get(`${url}/confirmed`);

            data.sort(function(a, b) {
                return parseFloat(b.confirmed) - parseFloat(a.confirmed)}  )

            const topTen = data.slice(0, 10)

            const topTenData = topTen.map((countryData) => ({
                region: countryData.combinedKey,
                confirmed: countryData.confirmed,
            }));
        
          
         return topTenData;

    } catch (error) {
        console.log(error)
    }
}

export const fetchLeastCases = async () => {
    try {

            const { data } = await axios.get(`${url}/confirmed`);

            data.sort(function(a, b) {
                return parseFloat(a.confirmed) - parseFloat(b.confirmed)}  )

            const leastTen = data.slice(0, 10)

            const leastTenData = leastTen.map((countryData) => ({
                region: countryData.combinedKey,
                confirmed: countryData.confirmed,
            }));
        
          
         return leastTenData;

    } catch (error) {
        console.log(error)
    }
}