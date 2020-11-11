import React from 'react';
import { useHistory } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import { ORG_NAME } from '../../../configs/constant';

const ButtonAppBar = () => {
  let history = useHistory();

  const handleLogout = (path) => {
    localStorage.removeItem('token');
    history.push(path);
  }

  const handleOnClick = (path) => {
    history.push(path);
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container>
          <Grid item xs={7}>
            <Typography variant="h6">
              {ORG_NAME}
            </Typography>
          </Grid>
          <Grid item xs={5}>
            <Button onClick={() => handleOnClick('/home')} color="inherit" variant="text">
              HOME
            </Button>
            <Button onClick={() => handleOnClick('/about-us')} color="inherit" variant="text">
              ABOUT US
            </Button>
            <Button onClick={() => handleOnClick('/enquiry')} color="inherit" variant="text">
              ENQUIRY
            </Button>
            <Button onClick={() => handleOnClick('/description')} color="inherit" variant="text">
              DESCRIPTION
            </Button>
            <Button onClick={() => handleOnClick('/login')} color="inherit" variant="text">
              LOGIN
            </Button>
            <Button onClick={() => handleLogout('/login')} color="inherit" variant="text">
              LOGOUT
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default ButtonAppBar;
