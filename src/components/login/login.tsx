import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Button, ThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';
import './login.scss';
import Footer from './footer'

const useStyles = makeStyles((theme) => ({
  form: {
    '& .MuiTextField-root': {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
      width: '100%'
    }
  },

  button: {
    width: '100%'
  },
  buttonCreate: {
    width: 400
  },

  outerBox: {
    margin: theme.spacing(1),
    width: 400
  },

  innerBox: {
    margin: theme.spacing(1),
  },
  divider: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    width: 400
  }
}));

function Login() {
  const classes = useStyles();
  const preventDefault = (event: any) => event.preventDefault();
  const [greeting, setGreeting] = useState(
    'Hello Function Component!'
  );
  const theme = createMuiTheme();


  return (
    <ThemeProvider theme={theme}>
      <Grid container className="login-root">
        <Grid item xs={12}>
          <Grid container justify="center">
            <img src="Amazon_logo.png" className="logo" />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container justify="center">
            <Paper className={classes.outerBox} elevation={3}>
              <div className={classes.innerBox}>
                <Typography variant="h4" align="left">
                  Sign-In
                </Typography>

                <form className={classes.form} noValidate autoComplete="off">
                  <div>
                    <TextField
                      label="Phone Number or email"
                      id="outlined-size-small"
                      defaultValue=""
                      variant="outlined"
                      size="small"
                    />
                  </div>
                </form>



                <Button className={classes.button} variant="contained" color="primary">
                  Continue
                </Button>
                <div>
                  By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
                </div>

                <div>
                  <Link href="www.google.com" onClick={preventDefault}>
                    Need help?
                  </Link>
                </div>
              </div>
            </Paper>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container justify="center">
            <Divider className={classes.divider} />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container justify="center">
            <Button className={classes.buttonCreate} color="primary" variant="contained">Create your Amazon account</Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid container>
        <Grid container justify="center">
          <Footer />
        </Grid>

      </Grid>
    </ThemeProvider>
  );
}

export default Login;