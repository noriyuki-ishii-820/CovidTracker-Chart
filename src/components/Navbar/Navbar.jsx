import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import styles from "./Navbar.module.css";
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width:"100%",
    height:"50px",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },

}));

export default function Navbar () {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={styles.root}> 
          <a href="https://github.com/noriyuki-ishii-820/CovidTracker-Chart" target="_blank"><Button variant="outlined" className={styles.SNSbtn}><TwitterIcon /></Button></a>
          <a href="https://twitter.com/nishiiSydDev" target="_blank"><Button variant="outlined"  className={styles.SNSbtn}><GitHubIcon /></Button></a>
        </Toolbar>
      </AppBar>
    </div>
  );
}
