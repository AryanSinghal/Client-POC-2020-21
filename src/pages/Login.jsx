import React, { Component } from 'react';
import { Grid, InputAdornment, Typography, TextField, Card, CardContent, CardActions, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import EmailIcon from '@material-ui/icons/Email';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import LockIcon from '@material-ui/icons/Lock';
import { callAPI } from '../libs/utils/api';

const style = {
  grid: { height: '90vh', paddingTop: "100px" },
  card: { width: '400px' },
  avatar: { backgroundColor: 'red' },
  textField: { width: "300px" },
  button: { width: "300px", align: "center" }
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      passwordError: '',
      emailError: ''
    };
  }

  handleSubmit = () => {
    const { email, password } = this.state;
    console.log(email, password);
    const url = 'user';
    callAPI({ method: 'post', url, body: { email, password } })
      .then(({ data }) => {
        if (data) {
          console.log(data)
          localStorage.setItem('token', data);
          // this.props.history.push('');
        }
      })
      .catch((err) => {
        console.log(err.message);
      })
  }

  handlePasswordChange = (event) => {
    const { value } = event.target;
    (value.length >= 4)
      ? this.setState({ password: value, passwordError: '' })
      : this.setState({ password: value, passwordError: 'Password is required' })
  }

  handleEmailChange = (event) => {
    const { value } = event.target;
    const regex = /[a-z]([[-]*\w+[.]*){1,63}@[a-z]{2,63}[.][a-z]{2,63}$/gmi;
    if (value.length === 0) return this.setState({ email: value, emailError: 'Email is required' });
    (value.match(regex))
      ? this.setState({ email: value, emailError: '' })
      : this.setState({ email: value, emailError: 'Incorrect EmailId' });
  }

  render() {
    const { classes } = this.props;
    const { emailError, passwordError } = this.state;
    return (
      <div align="center" style={{ paddingTop: "100px" }}>
        <Card className={classes.card}>
          <Grid container direction="column" justify="center" alignItems="center" spacing={1}>
            <Grid item>
              <CardContent>
                <Grid container direction="column" justify="center" alignItems="center" spacing={3}>
                  <Grid item>
                    <Typography className='login' variant="h3">
                      Login
                    </Typography>
                  </Grid>
                  <Grid item>
                    <LockIcon />
                  </Grid>
                  <Grid item>
                    <TextField
                      className={classes.textField}
                      required
                      id="email"
                      label="Email"
                      variant="outlined"
                      fullWidth
                      helperText={emailError}
                      error={!!(emailError)}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <EmailIcon />
                          </InputAdornment>
                        ),
                      }}
                      onChange={this.handleEmailChange}
                      onBlur={this.handleEmailChange}
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      className={classes.textField}
                      required
                      fullWidth
                      helperText={passwordError}
                      error={!!(passwordError)}
                      id="password"
                      label="Password"
                      type="password"
                      autoComplete="current-password"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <VisibilityOffIcon />
                          </InputAdornment>
                        ),
                      }}
                      variant="outlined"
                      onChange={this.handlePasswordChange}
                      onBlur={this.handlePasswordChange}
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Grid>
            <Grid item>
              <CardActions>
                <Typography gutterBottom>
                  <Button
                    fullWidth
                    className={classes.button}
                    variant="contained"
                    color="primary"
                    size="medium"
                    align="center"
                    onClick={this.handleSubmit}
                  >
                    Sign In
                </Button>
                </Typography>
              </CardActions>
            </Grid>
          </Grid>
        </Card>
      </div>
    );
  }
}

export default withStyles(style)(Login);
export { Login };

