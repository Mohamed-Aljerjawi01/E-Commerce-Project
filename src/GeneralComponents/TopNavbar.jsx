import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import style from "./TopNavbar.module.css"
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link as RouterLink, useNavigate} from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './../Context/MyContext';

export default function TopNavbar() {
  const navigate = useNavigate("");

{/* ********** Start Lecture Sixteen ********** */}
  const {accessToken,logout} = useContext(AuthContext);
  const logoutAndNavigate = function(){
    logout();
    navigate("/auth/login");
  }
{/* ********** End Lecture Sixteen ********** */}

  return <>
     <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:"#191919", boxShadow:"none"}}>
        <Toolbar sx={{justifyContent:"space-between"}}>
            <Box display={"flex"} gap={1}>
              <PhoneInTalkIcon />
              <Link href="tel:+380961381876" underline='none' color='#fff'>+970567446601</Link>
            </Box>
            <Box>
              <Typography>TAKE CARE OF YOUR Health <Typography component={"span"} color='#80b504'>25% OFF</Typography> USE CODE “ DOFIX03 ”</Typography>
            </Box>
            <Box display={"flex"} gap={4}>
              <Box sx={{display:"flex", alignItems:"center", gap:"5px"}} className={`${style.transition} ${style.hover} ${style.cursor}`}>
                <Typography component={"span"}>English</Typography>
                <KeyboardArrowDownIcon />
              </Box>

            {/* ********** Start Lecture Sixteen ********** */}
              {accessToken != null ? 
              <Box sx={{display:"flex", alignItems:"center", gap:"20px"}}>
                <Button onClick={logoutAndNavigate} color='#Fff' className={`${style.transition} ${style.hover} ${style.cursor}`}>Logout</Button>
              </Box>
              :       
              <Box sx={{display:"flex", alignItems:"center", gap:"20px"}}>
                <Link component={RouterLink} to={"/auth/signup"} underline='none' color='#Fff' className={`${style.transition} ${style.hover} ${style.cursor}`}>Sign Up</Link>
                <Typography component={"span"} variant='body2'>|</Typography>
                <Link component={RouterLink} to={"/auth/login"} underline='none' color='#Fff' className={`${style.transition} ${style.hover} ${style.cursor}`}>Login</Link>
              </Box>
              }
            {/* ********** End Lecture Sixteen ********** */}

            </Box>
        </Toolbar>
      </AppBar>
    </Box>
  </>
}