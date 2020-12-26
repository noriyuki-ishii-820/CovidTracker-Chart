import styles from "./TopTen.module.css";
import React, {useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import { HorizontalBar } from 'react-chartjs-2';
import { fetchMostCases, fetchLeastCases } from "../../api"

const TopTen = ()  => {
  const [topData, setTopData] = useState([]);
  const [leastData, setLeastData] = useState([]);

  useEffect( () => {
      const fetchAPI = async() => {
        setTopData(await fetchMostCases());
  } 
  fetchAPI();
  },[]);

  useEffect( () => {
      const fetchAPI2 = async() => {
        setLeastData(await fetchLeastCases());
  } 
  fetchAPI2();
  },[]);

  const barChart = (

      <Grid container spacing={2} justify="center">
        <Grid item component={Card} xs={10} md={4} className={styles.grid}>
       
            <CardContent>
              <Typography variant="h5" component="h2">
              Countries/Regions with the Largest Number of Confirmed Cases
              </Typography>
                <HorizontalBar
                    data={{
                        labels: topData.map(({ country }) => country),
                        datasets: [{
                          data: topData.map(({ confirmed }) => confirmed),
                          label: 'Confirmed Cases',
                          backgroundColor:[
                            "rgba(255, 0, 0, 1)",
                            "rgba(255, 0, 0,.9)",
                            "rgba(255, 0, 0,.8)",
                            "rgba(255, 0, 0,.7)",
                            "rgba(255, 0, 0,.6)",
                            "rgba(255, 0, 0,.5)",
                            "rgba(255, 0, 0,.4)",
                            "rgba(255, 0, 0,.3)",
                            "rgba(255, 0, 0,.2)",
                            "rgba(255, 0, 0,.1)",
                          ],
                          fill: true,
                        }],
                        options: {
                          scales: {
                              yAxes: [{
                                  ticks: {
                                      beginAtZero: true
                                  }
                              }]
                          }
                      }
                    }}
                    
                />
                </CardContent>

        </Grid>

        <Grid item component={Card} xs={10} md={4} className={styles.grid}>
        
            <CardContent>
              <Typography variant="h5" component="h2">
              Countries/Regions with the Least Number of Confirmed Cases
              </Typography>
                <HorizontalBar
                    data={{
                        labels: leastData.map(({ country }) => country),
                        datasets: [{
                          data: leastData.map(({ confirmed }) => confirmed),
                          label: 'Confirmed Cases',
                          backgroundColor:[
                            "rgba(62,81,181,.1)",
                            "rgba(62,81,181,.2)",
                            "rgba(62,81,181,.3)",
                            "rgba(62,81,181,.4)",
                            "rgba(62,81,181,.5)",
                            "rgba(62,81,181,.6)",
                            "rgba(62,81,181,.7)",
                            "rgba(62,81,181,.8)",
                            "rgba(62,81,181,.9)",
                            "rgba(62,81,181,1)",
                          ],
                          fill: true,
                            
                        }]
                    }}
                    
                />
              </CardContent>
    
        </Grid>
      </Grid>
  )

  return (
      <div className={styles.container}>
        {barChart}
      </div>

  )

}

export default TopTen;




