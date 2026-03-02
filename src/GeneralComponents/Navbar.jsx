import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import logo1 from "../assets/media/imges/logo.svg"
import logo2 from "../assets/media/imges/logo-light.svg"
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import ClearIcon from '@mui/icons-material/Clear';
import style from "./Navbar.module.css"
import { useAuthStore } from '../Store/MyStore';
import { useTranslation } from 'react-i18next';
import { Typography, useMediaQuery, useTheme } from '@mui/material';
// import { useContext } from 'react';
// import { AuthContext } from './../Context/MyContext';
import { useState } from 'react';

export default function Navbar() {

  // const {accessToken} = useContext(AuthContext);
  const accessToken = useAuthStore(state => state.accessToken);

  const countCart = useAuthStore(state => state.countCart);

  const mode = useAuthStore(state=> state.mode);

  const { t } = useTranslation();

  const theme = useTheme();
  const downMd = useMediaQuery(theme.breakpoints.down('md'));
  const downSm = useMediaQuery(theme.breakpoints.down('sm'));

  const [clickMenu, setClickMenu] = useState(false);
  function toggleClickMeu() {
    setClickMenu(function (prev) { return !prev; })
  }

  const [hoverMenu, setHoverMenu] = useState(false);
  const [nameIcon, setNameIcon] = useState('');

  return <>
    <AppBar position='sticky' sx={{ zIndex:12, boxShadow: "0px 0px 5px gray", height: "80px", justifyContent: "center" }}>
      <Toolbar sx={{ height: "100%", justifyContent: "space-between", backgroundColor: "#fff", position: "relative" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8 }} >
          <Box>
            <Link component={RouterLink} to={"/home"}><img src={logo1} alt="logo" /></Link>
          </Box>
          <Box sx={{ display: downMd ? 'none' : 'flex', justifyContent: "space-between", fontWeight: "500", fontSize: "17px" }} gap={4}>
            <Link component={RouterLink} to={"/home"} underline='none' color='#000' sx={{ '&:hover': { color: "#80b504" }, transition: "all linear 0.3s" }}>{t('Home')}</Link>
            <Link component={RouterLink} to={"/products"} underline='none' color='#000' sx={{ '&:hover': { color: "#80b504" }, transition: "all linear 0.3s" }}>{t('Products')}</Link>
            <Link component={RouterLink} to={"/about"} underline='none' color='#000' sx={{ '&:hover': { color: "#80b504" }, transition: "all linear 0.3s" }}>{t('About')}</Link>
            <Link component={RouterLink} to={"/contact"} underline='none' color='#000' sx={{ '&:hover': { color: "#80b504" }, transition: "all linear 0.3s" }}>{t('Contact')}</Link>
          </Box>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>

          {accessToken != null ?
            <>
              <Link component={RouterLink} to={"/wishlist"} className={`${style.FavoriteBorderIcon} ${style.FavoriteBorderIconAfter}`} sx={{ display: "flex" }}>
                <FavoriteBorderIcon sx={{ color: "#000", fontSize: "28px" }} />
              </Link>
              <Link component={RouterLink} to={"/cart"}
                sx={{
                  display: "flex",
                  '&::after': {
                    content: `"${countCart}"`
                  }
                }}
                className={`${style.RedeemIcon} ${style.RedeemIconAfter}`}>
                <LocalMallOutlinedIcon sx={{ color: "#000", fontSize: "28px" }} />
              </Link>
            </>
            :
            null
          }

          <MenuIcon sx={{ color: "#000", fontSize: "35px", cursor: "pointer", '&:hover': { color: "#80b504" }, transition: "all linear 0.2s" }} onClick={function () { setClickMenu(function (prev) { return !prev }) }} />
          <Box sx={{ position: "fixed", top: "0", right: clickMenu ? '0' : '100%', left: '0', zIndex: 11, height: '100vh', backgroundColor: "black", opacity: clickMenu ? '0.8' : '0', transition: 'opacity linear 0.2s' }}></Box>
          <Box sx={{ position: "fixed", top: "0", right: clickMenu ? downSm ? '0' : '0' : '-100%', zIndex: 12, transition: 'all linear 0.2s', overflow: "auto", height: "100vh", width: downSm ? '100%' : '400px', backgroundColor: "#191919", borderLeft: "3px solid #80b504", padding: "30px 30px" }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(128, 128, 128, 0.2)", paddingBottom: "15px", marginBottom: "50px" }}>
              <Link component={RouterLink} to={"/home"}><img src={logo2} alt="logo" /></Link>
              <ClearIcon sx={{ color: "#fff", fontSize: "38px", padding: "8px", backgroundColor: "#80b504", borderRadius: "50%", cursor: "pointer" }} onClick={function () { setClickMenu(function (prev) { return !prev }) }} />
            </Box>
            <Box sx={{ display: downMd ? "flex" : 'none', flexDirection: "column", gap: 3, marginBottom: "50px" }}>
              <Link onClick={toggleClickMeu} component={RouterLink} to={"/home"} underline='none' color='#fff' sx={{ textAlign: "center", paddingBottom: '5px', borderBottom: '1px solid rgba(128, 128, 128, 0.2)', fontWeight: "500", fontSize: "17px", '&:hover': { color: "#80b504" }, transition: "all linear 0.3s" }} >{t('Home')}</Link>
              <Link onClick={toggleClickMeu} component={RouterLink} to={"/products"} underline='none' color='#fff' sx={{ textAlign: "center", paddingBottom: '5px', borderBottom: '1px solid rgba(128, 128, 128, 0.2)', fontWeight: "500", fontSize: "17px", '&:hover': { color: "#80b504" }, transition: "all linear 0.3s" }}>{t('Products')}</Link>
              <Link onClick={toggleClickMeu} component={RouterLink} to={"/about"} underline='none' color='#fff' sx={{ textAlign: "center", paddingBottom: '5px', borderBottom: '1px solid rgba(128, 128, 128, 0.2)', fontWeight: "500", fontSize: "17px", '&:hover': { color: "#80b504" }, transition: "all linear 0.3s" }}>{t('About')}</Link>
              <Link onClick={toggleClickMeu} component={RouterLink} to={"/contact"} underline='none' color='#fff' sx={{ textAlign: "center", paddingBottom: '5px', borderBottom: '1px solid rgba(128, 128, 128, 0.2)', fontWeight: "500", fontSize: "17px", '&:hover': { color: "#80b504" }, transition: "all linear 0.3s" }}>{t('Contact')}</Link>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <Typography component={"h5"} variant='h5' sx={{ fontWeight: "bold" }}>{t('Contact Info')}</Typography>
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-start", gap: 2, }}>
                <LocationOnIcon sx={{ color: "#fff", border: "1px solid rgba(128, 128, 128, 0.2)", fontSize: "38px", padding: "8px", borderRadius: "50%", backgroundColor: hoverMenu && nameIcon == 'location' ? "#80b504" : "transparent", transition: "all linear 0.2s" }} />
                <Link href='https://maps.app.goo.gl/nnG8u3LiyAXfuDACA' target='_blank' sx={{ textDecoration: "none", color: "#fff", fontWeight: "500", '&:hover': { color: "#80b504" }, transition: "all linear 0.2s" }} onMouseOver={function () { setHoverMenu(true); setNameIcon('location') }} onMouseLeave={function () { setHoverMenu(false) }}>{t('Palestine')}, {t('Gaza')}</Link>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-start", gap: 2 }}>
                <PhoneInTalkIcon sx={{ color: "#fff", border: "1px solid rgba(128, 128, 128, 0.2)", fontSize: "38px", padding: "8px", borderRadius: "50%", backgroundColor: hoverMenu && nameIcon == 'phone' ? "#80b504" : "transparent", transition: "all linear 0.2s" }} />
                <Link href='tel:970567446601' sx={{ textDecoration: "none", color: "#fff", fontWeight: "500", '&:hover': { color: "#80b504" }, transition: "all linear 0.2s" }} onMouseOver={function () { setHoverMenu(true); setNameIcon('phone') }} onMouseLeave={function () { setHoverMenu(false) }}>+970567446601</Link>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-start", gap: 2 }}>
                <MailOutlineIcon sx={{ color: "#fff", border: "1px solid rgba(128, 128, 128, 0.2)", fontSize: "38px", padding: "8px", borderRadius: "50%", backgroundColor: hoverMenu && nameIcon == 'email' ? "#80b504" : "transparent", transition: "all linear 0.2s" }} />
                <Link href='mailto:mohamedahmedjerjawi@gmail.com' sx={{ wordBreak: "break-all", textDecoration: "none", color: "#fff", fontWeight: "500", '&:hover': { color: "#80b504" }, transition: "all linear 0.2s" }} onMouseOver={function () { setHoverMenu(true); setNameIcon('email') }} onMouseLeave={function () { setHoverMenu(false) }}>mohamedahmedjerjawi@gmail.com</Link>
              </Box>
              <Box sx={{ display: "flex", gap: 2 }}>
                <Link href={''} sx={{ color: "#80b504" }}><FacebookIcon sx={{ fontSize: "38px", border: "1px solid rgba(128, 128, 128, 0.2)", borderRadius: "50%", padding: "8px", '&:hover': { color: "#fff", backgroundColor: "#80b504" }, transition: "all linear 0.2s" }} /></Link>
                <Link href={''} sx={{ color: "#80b504" }}><TwitterIcon sx={{ fontSize: "38px", border: "1px solid rgba(128, 128, 128, 0.2)", borderRadius: "50%", padding: "8px", '&:hover': { color: "#fff", backgroundColor: "#80b504" }, transition: "all linear 0.2s" }} /></Link>
                <Link href={''} sx={{ color: "#80b504" }}><LinkedInIcon sx={{ fontSize: "38px", border: "1px solid rgba(128, 128, 128, 0.2)", borderRadius: "50%", padding: "8px", padding: "5px", '&:hover': { color: "#fff", backgroundColor: "#80b504" }, transition: "all linear 0.2s" }} /></Link>
                <Link href={''} sx={{ color: "#80b504" }}><InstagramIcon sx={{ fontSize: "38px", border: "1px solid rgba(128, 128, 128, 0.2)", borderRadius: "50%", padding: "8px", padding: "5px", '&:hover': { color: "#fff", backgroundColor: "#80b504" }, transition: "all linear 0.2s" }} /></Link>
              </Box>
            </Box>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  </>
}