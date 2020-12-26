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

            const dataTest = data.map((confirmedData) => ({
                country:confirmedData.countryRegion,
                confirmed: confirmedData.confirmed
            }))

            var countries = {}
            var countries_count = {}
            var newArraySeries = []
            dataTest.forEach(
                function(e){
                    if(!countries[e.country]){
                        countries[e.country] = 0
                        countries_count[e.country] = 0
                    }
                    countries[e.country] += e.confirmed
                }
            )
            for(var country in countries){
                newArraySeries.push({country : country, confirmed : countries[country] })
            }

            newArraySeries.sort(function(a, b) {
                return parseFloat(b.confirmed) - parseFloat(a.confirmed)}  )


        console.log(newArraySeries)
        
        const topTenData = newArraySeries.slice(0, 10)
        
        return topTenData;


    } catch (error) {
        console.log(error)
    }
}

export const fetchLeastCases = async () => {
    try {

        const { data } = await axios.get(`${url}/confirmed`);

        const dataTest = data.map((confirmedData) => ({
            country:confirmedData.countryRegion,
            confirmed: confirmedData.confirmed
        }))

        var countries = {}
        var countries_count = {}
        var newArraySeries = []
        dataTest.forEach(
            function(e){
                if(!countries[e.country]){
                    countries[e.country] = 0
                    countries_count[e.country] = 0
                }
                countries[e.country] += e.confirmed
            }
        )
        for(var country in countries){
            newArraySeries.push({country : country, confirmed : countries[country] })
        }

        newArraySeries.sort(function(a, b) {
            return parseFloat(a.confirmed) - parseFloat(b.confirmed)}  )


    console.log(newArraySeries)
    
    const topTenData = newArraySeries.slice(0, 10)
    
    return topTenData;


} catch (error) {
    console.log(error)
}
}