import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import style from "./TopNavbar.module.css"
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../Store/MyStore';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
// import { useContext } from 'react';
// import { AuthContext } from './../Context/MyContext';

export default function TopNavbar() {
  const navigate = useNavigate("");

  // const {accessToken,logout} = useContext(AuthContext);
  const { accessToken, logout, user, mode, toggleMode } = useAuthStore();

  const logoutAndNavigate = function () {
    logout();
    setShowAccountList(false)
    navigate("/auth/login");
  }

  const [showLanguagesList, setShowLanguagesList] = useState(false);
  // console.log(useTranslation());

  const [showAccountList, setShowAccountList] = useState(false);

  const [showpointList, setShowpointList] = useState(false);

  const { t, i18n } = useTranslation();
  // console.log(i18n);
  // console.log(i18n.language);

  const theme = useTheme();
  const downSm = useMediaQuery(theme.breakpoints.down('sm'));
  const downMd = useMediaQuery(theme.breakpoints.down('md'));
  const downLg = useMediaQuery(theme.breakpoints.down('lg'));

  function toggelLang() {
    if (i18n.language==="en") {
      i18n.changeLanguage('ar');
      localStorage.setItem("language", 'ar');
    }
    else if (i18n.language==="ar") {
      i18n.changeLanguage('en');
      localStorage.setItem("language", 'en');
    }
  }

  return <>
    <AppBar position="static" sx={{ boxShadow: "none", height: "50px", justifyContent: "center" }}>
      <Toolbar sx={{ height:"100%", justifyContent: "space-between", backgroundColor: "#191919", alignItems: "center" }}>
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 1 }}>

          <Typography component={"a"} href="tel:+970567446601" sx={{ display: "flex", color: "#fff", transform: `rotatey(${i18n.language == "en" ? '0deg' : '180deg'})` }} className={`${style.transition} ${style.hover} ${style.cursor}`}><PhoneInTalkIcon sx={{ fontSize: "28px" }} /></Typography>
          {accessToken != null ?
            <>
              <Typography component={"span"} sx={{ fontSize: "15px" }}>|</Typography>
              <Typography sx={{ fontSize: "15px" }}>{t('Welcome')}, {user.name}</Typography>
            </>
            :
            <Typography component={"a"} href="tel:+970567446601" sx={{ color: "#fff", textDecoration: "none", fontSize: "15px" }} className={`${style.transition} ${style.hover} ${style.cursor}`}>+970567446601</Typography>
          }

        </Box>
        <Box sx={{ display: downMd ? 'none' : 'block' }}>
          <Typography component={"bdi"} sx={{ fontSize: "15px" }}>{t('TAKE CARE OF YOUR Health')} <Typography component={"span"} color='#80b504'>{t('25% OFF')}</Typography> {t('USE CODE “ DOFIX03 ”')}</Typography>
        </Box>
        <Box sx={{ display: "flex", gap: 2, alignItems: "center", justifyContent: "space-between" }}>
          <Typography onClick={toggleMode} sx={{ display:"flex", color: "#fff", fontSize:"20px", fontWeight: "bold", cursor: "pointer", '&:hover': { color: "#80b504" }, transition: "all linear 0.3s"}}>{mode==="dark"?<LightModeIcon />:<DarkModeIcon />}</Typography>
          <Box sx={{ position: "relative", display: downSm ? 'none' : 'block' }}>
            <Typography component={"bdi"} className={`${style.transition} ${style.hover} ${style.cursor}`} sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "5px", fontSize: "15px" }} onClick={function () { setShowLanguagesList(function (prev) { return !prev }) }}>{i18n.language == 'en' ? t('English') : 'العربية'}<KeyboardArrowDownIcon /></Typography>
            <Box sx={{ position: "absolute", right: '0', top: "120%", width: "120%", backgroundColor: "#fff", zIndex: "13", padding: "10px", color: "black", boxShadow: "0px 0px 2px gray", display: showLanguagesList ? 'flex' : 'none', flexDirection: "column", gap: 1 }} >
              <Typography className={`${style.transition} ${style.hover} ${style.cursor}`} sx={{ fontSize: "15px", color: i18n.language == 'en' ? "gray" : "black", pointerEvents: i18n.language == 'en' ? "none" : "auto" }} onClick={function () { setShowLanguagesList(false); i18n.changeLanguage('en'); localStorage.setItem('language', 'en') }}>{t('English')}</Typography>
              <Typography sx={{ fontSize: "15px", direction: "rtl" }} className={`${style.transition} ${style.hover} ${style.cursor} ${i18n.language == 'ar' ? style.arProperties : style.arDefaultProperties}`} onClick={function () { setShowLanguagesList(false); i18n.changeLanguage('ar'); localStorage.setItem('language', 'ar') }}>العربية</Typography>
            </Box>
          </Box>
          <Typography sx={{ display: downSm ? 'block' : 'none', color: "#fff", fontSize:"20px", fontWeight: "bold", cursor: "pointer", '&:hover': { color: "#80b504" }, transition: "all linear 0.3s" }} onClick={toggelLang}>{i18n.language == 'en' ? 'ع' : 'En'}</Typography>
          {accessToken != null ?
            <Box sx={{ position: "relative", display: "flex" }}>
              <AccountCircleIcon sx={{ fontSize:"28px", cursor: "pointer", '&:hover': { color: "#80b504" }, transition: "all linear 0.3s" }} onClick={function () { setShowAccountList(function (prev) { return !prev }) }} />
              <Box sx={{ position: "absolute", right: i18n.language==='en'?'0':'-230%', top: "120%", backgroundColor: "#fff", zIndex: "13", padding: "10px", color: "black", boxShadow: "0px 0px 2px gray", width: "fit-content", whiteSpace: "nowrap", height: "fit-content", display: showAccountList ? 'flex' : 'none', flexDirection: "column", gap: 1, }}>
                <Link component={RouterLink} to={'/profile'} sx={{ fontSize: "15px", color: "#000", textDecorationLine: "none" }} className={`${style.transition} ${style.hover} ${style.cursor}`} onClick={function () { setShowAccountList(false) }}>{t('Profile')}</Link>
                <Typography sx={{ fontSize: "15px" }} className={`${style.transition} ${style.hover} ${style.cursor}`} onClick={logoutAndNavigate}>{t('Logout')}</Typography>
              </Box>
            </Box>
            :
            <>
              <Box sx={{ display: downSm ? 'none' : 'flex', alignItems: "center", gap: downLg ? 1 : 2 }}>
                <Link sx={{ fontSize: "15px" }} component={RouterLink} to={"/auth/signup"} underline='none' color='#Fff' className={`${style.transition} ${style.hover} ${style.cursor}`}>{t('Sign Up')}</Link>
                <Typography component={"span"} variant='body2'>|</Typography>
                <Link sx={{ fontSize: "15px" }} component={RouterLink} to={"/auth/login"} underline='none' color='#Fff' className={`${style.transition} ${style.hover} ${style.cursor}`}>{t('Login')}</Link>
              </Box>
              <Box sx={{ position: "relative", display: downSm ? 'flex' : 'none' }}>
                <MoreVertIcon sx={{ cursor: "pointer", '&:hover': { color: "#80b504" }, transition: "all linear 0.3s" }} onClick={function () { setShowpointList(function (prev) { return !prev }) }} />
                <Box sx={{ position: "absolute", top: "120%", right: i18n.language==='en'?'0':'-280%', zIndex: 13, width: "fit-content", whiteSpace: "nowrap", height: "fit-content", display: showpointList ? 'flex' : 'none', flexDirection: "column", gap: 1, backgroundColor: "#fff", padding: "10px", color: "black", boxShadow: "0px 0px 2px gray", }}>
                  <Link sx={{ fontSize: "15px", color: "#000" }} component={RouterLink} to={"/auth/signup"} underline='none' className={`${style.transition} ${style.hover} ${style.cursor}`} onClick={function () { setShowpointList(false); }}>{t('Sign Up')}</Link>
                  <Link sx={{ fontSize: "15px", color: "#000" }} component={RouterLink} to={"/auth/login"} underline='none' className={`${style.transition} ${style.hover} ${style.cursor}`} onClick={function () { setShowpointList(false); }}>{t('Login')}</Link>
                </Box>
              </Box>
            </>
          }
        </Box>
      </Toolbar>
    </AppBar>
  </>
}