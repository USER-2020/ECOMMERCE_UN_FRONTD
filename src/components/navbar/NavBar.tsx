import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
//import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
//import MenuIcon from '@mui/icons-material/Menu';
import Login from '../auth/Login';
import ucomLogo from '../../assets/logo/ucom-parafondoazul-ft.png';


export default function NavBar() {
  return (
    <AppBar position="static">
        <Toolbar variant="dense" style={{justifyContent: 'space-between'}}>
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            {/* <MenuIcon /> */}
            <img src={ucomLogo} style={{height:"50px"}} alt="logo" />
          </IconButton>
        <Login />
        </Toolbar>
      </AppBar>
  );
}
