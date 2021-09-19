import '../css/Login.css'

import React from 'react';
import { useForm } from 'react-hook-form';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LockIcon from '@material-ui/icons/Lock';
import CardMedia from '@material-ui/core/CardMedia';
import Image from "material-ui-image";

import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import admin from '../assets/adminis.png';
import logo from '../assets/logo.png'

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://www.yowyob.com/">
          Yowyob 
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  

const useStyles = makeStyles((theme) => ({
    root: {
      height: '90vh',
    },

    image: {
      backgroundImage: `url(${admin})`,
      backgroundSize: 'cover',
      backgroundColor: theme.palette.primary.main,
      backgroundPosition: 'center center',
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.primary.main,
    },
    form: {
      width: '82%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
      backgroundColor: theme.palette.primary.main,
     
    },
    media: {
      alignItems: 'center',
    },
    margin: {
      margin: theme.spacing(2),
    },
  
  }));


function Signup() {
const { register, handleSubmit, formState: { errors } } = useForm();
const onSubmit = data => console.log(data);
console.log(errors);


const classes = useStyles();

const [values, setValues] = React.useState({showPassword: false,});

const handleChange = (prop) => (event) => {
  setValues({ ...values, [prop]: event.target.value });
};

const handleClickShowPassword = () => {
  setValues({ ...values, showPassword: !values.showPassword });
};

const handleMouseDownPassword = (event) => {
  event.preventDefault();
};



    return(

        <div className= "container">
            <div className="row">
                
                <div className="col">

                    
    <Grid container component="main" className={classes.root}>
    
      <CssBaseline />
      
      <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
        <div className={classes.paper}>
        <Grid align='left'>
        <img src={logo} alt='Yowyob Product Management' className='lmj-logo' />
        </Grid>
        <Grid align='center'>
          <Avatar className={classes.avatar}>
          
            <LockOutlinedIcon />
          </Avatar>
          <CardMedia
          className={classes.media}
            image= "../assets/logo.png"
            title="Logo Yowyob" />
          
          
          <Typography style={{ fontWeight:600 }} component="h2" variant="h5">
            SIGN UP
          </Typography>
          <Typography variant='caption' gutterBottom>Sign up for administration</Typography>
        </Grid>
          <form className={classes.form} noValidate>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                required
                fullWidth
                id="firstName"
                placeholder="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                placeholder="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                placeholder="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="phone"
                placeholder="Phone number"
                id="phone"
                autoComplete="phone"
              />
            </Grid>
           
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="password"
              placeholder="Password"
              name="password"
              autoComplete="current-password"
              
               type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange('password')}
              InputProps={{
                endAdornment:(
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      className={clsx(classes.margin)}
                    >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}

            /> 
          </Grid>

          <Grid item xs={12}>
            <TextField
              
              margin="normal"
              required
              fullWidth
              name="confirm-password"
              placeholder="Confirm Password"
              type="password"
              id="confirm-password"
              autoComplete="current-password"
   
            />
            </Grid>
            
            <Button 
              type="submit"
              fullWidth
              variant="contained"
              className={classes.submit}
              
            >
              Sign Up
            </Button>
            <Grid container>
              <Grid item>
                <Link href="https://yowyobconnexion.herokuapp.com/Login" variant="body2" >
                  {"Already have an account? Sign In"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
            <Copyright />
            </Box>
          </form>
        </div>
      </Grid>

      <Grid item xs={false} sm={4} md={6} className={classes.image}/>
      
    </Grid>
    
                </div>
            </div>
        </div>

    );
}

export default Signup