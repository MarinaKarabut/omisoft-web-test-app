import * as Yup from 'yup'
import { useEffect} from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { Link } from "react-router-dom"


import { useFormik } from "formik"
import { Button, Typography, InputAdornment, Grid , createTheme} from '@material-ui/core'
import Textfield from '@material-ui/core/Textfield'
import EmailRoundedIcon from '@material-ui/icons/EmailRounded'
import LockIcon from '@material-ui/icons/Lock'
import { makeStyles } from '@material-ui/core/styles'
// import { createTheme } from "@material-ui/core"

import { logIn } from '../../redux/auth/auth-operations'


import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const theme = createTheme({
  breakpoints: {
    values: {
      mobileMin: 320,
      tabletMin: 768,
      desktopMin: 1280,
    }
  }
})



const useStyles = makeStyles({
    form: {
      maxWidth: 320,
    [theme.breakpoints.up('tabletMin')]: {
      maxWidth: 700,
    },
    [theme.breakpoints.up('desktopMin')]: {
      paddingLeft: 65,
      paddingRight: 65,
      }
    },
    button: {
      background: '#4caf50',
      borderRadius: 20,
      color: 'white',
      width:260,
      height: 50,
      padding: '0 30px',
      marginTop: 40,
      "&:hover": {
        background: " #388e3c",
      },
      [theme.breakpoints.up('tabletMin')]: {
      width: 300,
      },
      [theme.breakpoints.up('desktopMin')]: {
        width: 380,
      }
    },
    wrapper: {
      background: '#C0C0C0',
    },
    input: {
      marginTop: 20,
      width: 260,
      [theme.breakpoints.up('tabletMin')]: {
        width: 300,
      },
      [theme.breakpoints.up('desktopMin')]: {
        width: 380,
      }

    },
    link: {
      color: '#808080',
      textDecoration: 'none',
      '& span': {
        color: '#C0C0C0',
      }
    },
    text: {
      textAlign: 'center',
    },
    linkWrapper: {
      marginTop: 20,
      textAlign: 'center',
    },
    linkWrapper2: {
      marginTop: 80,
      textAlign: 'center',
    },
    icon: {
      fill:  '#808080',  
    }
  }
);



const validate = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(5, "Must be longer than 5 characters")
    .required("Password is required")
});



const AuthForm = () => {
  const classes = useStyles();
  
  const errorCode = useSelector(state => state.auth.error, shallowEqual);
    
  const dispatch = useDispatch()
  
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validate,
    onSubmit: (values) => {
      dispatch(logIn(values))
    },
  });


    useEffect(() => {
        if (errorCode) {
            const errorMessage = (errorCode.response.status === 400) ? 'Incorrect email or password' : ''
            toast.error(
            errorMessage,
            { position: toast.POSITION.TOP_RIGHT },
          );
        } 
    }, [errorCode])

  return (
    <>
      <div>
        <form className={classes.form} onSubmit={formik.handleSubmit}>
          <Grid item xs={12}><Typography className={classes.text} component="h1" variant="h5" >Member Login</Typography></Grid>
          <Grid item xs={12}>
            <Textfield
              className={classes.input}
              variant="outlined"
              id="email"
              name="email"
              placeholder="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailRoundedIcon
                      className={classes.icon}
                    />
                  </InputAdornment>
                ),
              }}
          />
          </Grid>
          <Grid item xs={12}>
            <Textfield
              className={classes.input}
              variant="outlined"
              id="password"
              name="password"
              placeholder="Password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                  <LockIcon
                      className={classes.icon}
                    />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          
          <Button  type="submit" className={ classes.button}>Login</Button>

          <Grid item xs={12} className={classes.linkWrapper}>
            <Link to="#" variant="body2" className={classes.link}><span className={classes.linkSpan}>Forgot</span> Username/Password?</Link>
          </Grid>
          <Grid item xs={12} className={classes.linkWrapper2}>
            <Link to="#" variant="body2" className={classes.link}>
              Create your Account <span> &rarr;</span>
            </Link>
          </Grid>
          
        </form>
      </div>
      <ToastContainer theme="dark" />
    </>
    )
}

export default AuthForm

