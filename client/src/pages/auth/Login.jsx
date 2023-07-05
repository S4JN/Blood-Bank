import React, { useState, useEffect } from 'react';
import { Avatar, Button, CssBaseline, RadioGroup, Radio, TextField, FormControlLabel, Checkbox, Link, Paper, Box, Grid, Typography } from '@mui/material';
import { LockOutlined } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
// import mainImage from '../../assets/mainimage.jpg';
import store from "../../redux/store"
import { userLogin } from '../../redux/features/auth/authActions';
import { toast } from "react-toastify";

const Login = () => {

  useEffect(() => {

    console.log(import.meta.env.VITE_API_BASE_URL);

  }, [])




  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email');
    const password = data.get('password');
    const role = data.get('role');

    if (!role || !email || !password) {
      console.log("enter all fields");
      console.log(role, email, password);
      toast.error("Enter All Fields");

    } else {

      console.log({
        email: data.get('email'),
        password: data.get('password'),
        role: data.get("role"),
        // selectedRole
      });
      store.dispatch(userLogin({ email, password, role }))
      console.log(store.dispatch(userLogin({ email, password, role })));
    }
  };

  const [selectedRole, setSelectedRole] = useState('donar');
  const navigate = useNavigate();


  const handleRoleChange = (event) => {
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
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }} >
              <Dabba>

                <RadioGroup aria-label="role" name="role" value={selectedRole} onChange={handleRoleChange}>
                  <FormControlLabel value="donar" control={<Radio />} label="Donar" />
                  <FormControlLabel value="admin" control={<Radio />} label="Admin" />
                  <FormControlLabel value="organisation" control={<Radio />} label="Organisation" />
                  <FormControlLabel value="hospital" control={<Radio />} label="Hospital" />
                </RadioGroup>
              </Dabba>
              <TextField
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
                  <RegisterTo variant="body2" onClick={() => { navigate("/register") }}>
                    "Don't have an account? Sign Up"
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

export default Login;


const RegisterTo = styled(Typography)`
  color: blue;
  cursor: pointer;
`
const Dabba = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 5%;

  & .MuiFormControlLabel-root {
    margin-right: 10px; /* Adjust the spacing between radio buttons */
  }

  & .MuiSvgIcon-root {
    font-size: 16px; /* Decrease the size of radio buttons */
  }
  
  & .MuiFormGroup-root {
    flex-direction: row;
  }
`;

