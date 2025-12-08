import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Link from '@mui/material/Link';
import style from "./TopNavbar.module.css"
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function TopNavbar() {
  return (
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
              <Box sx={{display:"flex", alignItems:"center", gap:"5px"}} className={`${style.transition} ${style.hover} ${style.cursor}`}>
                <Typography component={"span"}>USD</Typography>
                <KeyboardArrowDownIcon />
              </Box>
              <Box sx={{display:"flex", alignItems:"center", gap:"5px"}} className={`${style.transition} ${style.hover} ${style.cursor}`}>
                <Typography component={"span"}>Setting</Typography>
                <KeyboardArrowDownIcon />
              </Box>
            </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}