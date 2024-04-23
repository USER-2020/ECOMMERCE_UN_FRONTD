import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
//import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
//import MenuIcon from '@mui/icons-material/Menu';
import Login from '../auth/Login';


export default function NavBar() {
  return (
    <AppBar position="absolute">
        <Toolbar variant="dense" style={{justifyContent: 'space-between'}}>
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            {/* <MenuIcon /> */}
            <img src="ucom-parafondoazul-ft.png" style={{height:"50px"}} alt="logo" />
          </IconButton>
          {/*<Typography variant="h6" color="inherit" component="div">
            UNECOMMERCE
          </Typography> */}
        <Login />
        </Toolbar>
      </AppBar>
  );
}
