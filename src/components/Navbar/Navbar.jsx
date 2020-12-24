import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import styles from "./Navbar.module.css";

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
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            COVID-19 TRACKER
          </Typography>
          <Button variant="outlined" className={styles.SNSbtn}><TwitterIcon /></Button>
          <Button variant="outlined"  className={styles.SNSbtn}><GitHubIcon /></Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
