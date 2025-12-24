import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import logo from "../assets/media/imges/logo.svg"
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RedeemIcon from '@mui/icons-material/Redeem';
import SearchIcon from '@mui/icons-material/Search';
import style from "./Navbar.module.css"

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: "space-between" , backgroundColor: "#fff" }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "80px" }} >
            <Box>
              <Link component={RouterLink} to={"/home"}><img src={logo} alt="logo" /></Link>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }} gap={4}>
              <Link component={RouterLink} to={"/home"} underline='none' color='#000'>Home</Link>
              <Link component={RouterLink} to={"/products"} underline='none' color='#000'>Products</Link>
              <Link component={RouterLink} to={"/about"} underline='none' color='#000'>About</Link>
              <Link component={RouterLink} to={"/contact"} underline='none' color='#000'>Contact</Link>
            </Box>
          </Box>
          <Box sx={{display:"flex", alignItems:"center" , gap:"20px"}}>
            <Box sx={{overflow:"hidden" , border:"1px solid rgba(128, 128, 128,0.3)" , borderRight:"none" , borderRadius:"50px"}}>
              <form action="#" className={style.dFlex}>
                <input type="text" name='search' placeholder='Search...' className={`${style.outlineNone} ${style.borderNone} ${style.padding} ${style.marginLeft} ${style.bgColor}`}/>
                <button className={`${style.outlineNone} ${style.borderNone} ${style.borderRadius} ${style.backgroundColor} ${style.cursor}`}><SearchIcon sx={{color:"#fff"}}/></button>
              </form>
            </Box>
            <Link component={RouterLink} to={"/wishlist"} className={`${style.FavoriteBorderIcon} ${style.FavoriteBorderIconAfter}`}>
              <FavoriteBorderIcon sx={{color:"#000"}}/>
            </Link>
            <Link component={RouterLink}  to={"/cart"} className={`${style.RedeemIcon} ${style.RedeemIconAfter}`}>
              <RedeemIcon sx={{color:"#000"}}/>
            </Link>
            <Box>
              <MenuIcon sx={{color:"#000"}}/>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}