import React, { useState } from 'react';
import { Avatar, Button, CssBaseline, RadioGroup, Radio, TextField, FormControlLabel, Checkbox, Link, Paper, Box, Grid, Typography } from '@mui/material';
import { LockOutlined } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
// import mainImage from '../../assets/mainimage.jpg';
import axios from "axios";
import { userRegister } from '../../redux/features/auth/authActions';
import store from "../../redux/store"


const Register = () => {

  const [nam, setNam] = useState("");
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const name = data.get("name")
    const email = data.get("email")
    const password = data.get("password")
    const phoneNumber = data.get("phoneNumber")
    const address = data.get("address")
    const role = data.get("role")
    console.log(password);
    if (!email || !password || !name || !phoneNumber || !address) {
      console.log("enter all fields");
      toast.error("Enter All Fields");
    } else {
      try {
        store.dispatch(userRegister({ name, password, email, phoneNumber, address, role }))

      } catch (error) {
        console.log(error);
      }
    }

  };


  // const [email, setEmail]= useState("");

  // const handleSubmit=(event)=>{
  //   event.preventDefault();
  //   console.log(email);
  //   // window.location.reload(false);
  // }

  const [selectedRole, setSelectedRole] = useState('donar');
  // const navigate = useNavigate();


  const handleRoleChange = (event) => {
    setNam(event.target.value);
    setSelectedRole(event.target.value);
  };
  const defaultTheme = createTheme();

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(imagee.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlined />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }} >
              <Typography>Select The Role for Registration</Typography>
              <Dabba>
                <RadioGroup aria-label="role" name="role" value={selectedRole} onChange={handleRoleChange}>
                  <FormControlLabel value="donar" control={<Radio />} label="Donar" />
                  {/* <FormControlLabel value="admin" control={<Radio />} label="Admin" /> */}
                  <FormControlLabel value="organisation" control={<Radio />} label="Organisation" />
                  <FormControlLabel value="hospital" control={<Radio />} label="Hospital" />
                </RadioGroup>
              </Dabba>
              <Field
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                autoFocus
              />
              <SmallTextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus

              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="phoneNumber"
                label="Phone Number"
                name="phoneNumber"
                autoComplete="phoneNumber"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="address"
                label="Address"
                name="address"
                autoComplete="address"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              {/* <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              /> */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  {/* <Link href="#" variant="body2">
                    Forgot password?
                  </Link> */}
                </Grid>
                <Grid item>
                  <RegisterTo variant="body2" onClick={() => { navigate("/login") }}>
                    "Already have a account, Log in"
                  </RegisterTo>
                </Grid>
              </Grid>
              <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 5 }}>
                {'Copyright © '}
                <Link color="inherit" href="">
                  AidRentals
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Register;


const RegisterTo = styled(Typography)`
  color: blue;
  cursor: pointer;
`
const Dabba = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  

  & .MuiFormControlLabel-root {
    margin-right: 50px; /* Adjust the spacing between radio buttons */
  }

  & .MuiSvgIcon-root {
    font-size: 16px; /* Decrease the size of radio buttons */
  }
  
  & .MuiFormGroup-root {
    flex-direction: row;
  }
`;

const Field = styled(TextField)`
  font-size: 10px;
`
const SmallTextField = styled(TextField)`
  
`;