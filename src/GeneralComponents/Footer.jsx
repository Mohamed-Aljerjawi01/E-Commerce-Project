import { Box, Card, CardMedia, Container, Grid, Link, Typography, useMediaQuery, useTheme } from '@mui/material';
import logo from "../assets/media/imges/logo-light.svg"
import { Link as RouterLink } from 'react-router-dom';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import payoneer from "./../assets/media/imges/payoneer.png"
import maser from "./../assets/media/imges/maser.png"
import paypal from "./../assets/media/imges/paypal.png"
import style from "./Footer.module.css"
import { useTranslation } from 'react-i18next';

function Footer() {
    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.only('xs'));

    const { t } = useTranslation();

    return <>
        <Box sx={{ backgroundColor: "#191919", padding: "100px 0 50px 0" }}>
            <Container maxWidth={isXs?'xs':'lg'}>
                <Grid container spacing={5} sx={{ paddingBottom: "100px" }}>
                    <Grid size={{ xs: 12, sm: 5, md: 5, lg: 3 }}>
                        <Box sx={{ maxWidth: "100%", display: "flex", flexDirection: "column", gap: 4 }}>
                            <Link component={RouterLink} to={"/home"}><img src={logo} alt="logo" /></Link>
                            <Typography sx={{ color: "gray", fontSize: "17px" }}>{t('It helps designers plan out where the content will sit, the content to be written and approved.')}</Typography>
                            <Box sx={{ display: "flex", gap: 2 }}>
                                <Link href={''} sx={{ color: "#fff"}}><FacebookOutlinedIcon sx={{ fontSize: "32px", '&:hover': { color: "#80b501" }, transition: "all linear 0.2s" }} /></Link>
                                <Link href={''} sx={{ color: "#fff" }}><TwitterIcon sx={{ fontSize: "32px", '&:hover': { color: "#80b501" }, transition: "all linear 0.2s" }} /></Link>
                                <Link href={''} sx={{ color: "#fff" }}><LinkedInIcon sx={{ fontSize: "32px", '&:hover': { color: "#80b501" }, transition: "all linear 0.2s" }} /></Link>
                                <Link href={''} sx={{ color: "#fff" }}><InstagramIcon sx={{ fontSize: "32px", '&:hover': { color: "#80b501" }, transition: "all linear 0.2s" }} /></Link>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 7, md: 7, lg: 6 }} >
                        <Box sx={{ maxWidth: "100%", display: "flex", }}>
                            <Box sx={{ width: "50%", display: "flex", flexDirection: "column", gap: 4 }}>
                                <Typography component={'h6'} variant='h6' sx={{ color: "#fff", fontSize:"21px", fontWeight: "500" }}>{t('Services')}</Typography>
                                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 2 }}>
                                    <Link component={RouterLink} to={'/auth/login'} className={`${style.linkProparites}`}>{t('Log in')}</Link>
                                    <Link href={"www.google.com"} className={`${style.linkProparites}`}>{t('WishList')}</Link>
                                    <Link href={"www.google.com"} className={`${style.linkProparites}`}>{t('Returen Policy')}</Link>
                                    <Link href={"www.google.com"} className={`${style.linkProparites}`}>{t('Testimonial')}</Link>
                                    <Link href={"www.google.com"} className={`${style.linkProparites}`}>{t('Shopping FAQs')}</Link>
                                    <Link href={"www.google.com"} className={`${style.linkProparites}`}>{t('Privacy Policy')}</Link>
                                </Box>
                            </Box>
                            <Box sx={{ width: "50%", display: "flex", flexDirection: "column", gap: 4 }}>
                                <Typography component={'h6'} variant='h6' sx={{ color: "#fff", fontSize:"21px", fontWeight: "500" }}>{t('Company')}</Typography>
                                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 2 }}>
                                    <Link  component={RouterLink} to={'/home'} className={`${style.linkProparites}`}>{t('Home')}</Link>
                                    <Link href={"www.google.com"} className={`${style.linkProparites}`}>{t('About us')}</Link>
                                    <Link href={"www.google.com"} className={`${style.linkProparites}`}>{t('How its work')}</Link>
                                    <Link href={"www.google.com"} className={`${style.linkProparites}`}>{t('Pages')}</Link>
                                    <Link href={"www.google.com"} className={`${style.linkProparites}`}>{t('Blog')}</Link>
                                    <Link href={"www.google.com"} className={`${style.linkProparites}`}>{t('Contact us')}</Link>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
                        <Box sx={{ maxWidth: "100%", display: "flex", flexDirection: "column", gap: 4 }}>
                            <Typography component={'h6'} variant='h6' sx={{ color: "#fff", fontSize:"21px", fontWeight: "500" }}>{t('Contact')}</Typography>
                            <Typography sx={{ color: "gray", fontSize: "17px" }}>{t('Central Governorate. Al-Maghazi Camp.')}</Typography>
                            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-start", gap: 2 }}>
                                <LocationOnIcon sx={{ color: "#fff", backgroundColor: '#80b501', fontSize: "40px", padding: "8px", borderRadius: "50%" }} />
                                <Link href='https://maps.app.goo.gl/nnG8u3LiyAXfuDACA' target='_blank' sx={{ fontSize: "15px", textDecoration: "none", color: "rgba(255, 255, 255, 0.7)", '&:hover': { color: "#80b501" }, transition: "all linear 0.2s" }}>{t('Palestine')}, {t('Gaza')}</Link>
                            </Box>
                            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-start", gap: 2 }}>
                                <PhoneInTalkIcon sx={{ color: "#fff", backgroundColor: '#80b501',fontSize: "40px", padding: "8px", borderRadius: "50%" }} />
                                <Link href='tel:970567446601' sx={{ fontSize: "15px", textDecoration: "none", color: "rgba(255, 255, 255, 0.7)", '&:hover': { color: "#80b501" }, transition: "all linear 0.2s" }}>+970567446601</Link>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container spacing={4} sx={{ alignItems: 'center', textAlign: "center", paddingTop: "50px", borderTop: "1px solid rgba(128, 128, 128, 0.5)" }}>
                    <Grid size={{ xs: 12, sm: 6, md: 6, lg: 4 }}>
                        <Typography sx={{ color: "#fff", fontWeight: "500", '&:hover': { color: '#80b501' }, transition: "all linear 0.2s" }}>&copy; {t('All Copyright 2026 by Mohammed Aljerjawi')}</Typography>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 6, lg: 4 }}>
                        <Typography sx={{ fontSize: "17px", fontWeight: "400", color: "#fff" }}><Link href='' sx={{ color: "#fff", textDecoration: "none", paddingRight: "5px", '&:hover': { color: "#80b501" }, transition: "all linear 0.2s" }}>{t('Terms & Condition')}</Link> | <Link href='' sx={{ color: "#fff", textDecoration: "none", paddingLeft: "5px", '&:hover': { color: "#80b501" }, transition: "all linear 0.2s" }}>{t('Privacy Policy')}</Link></Typography>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 12, md: 12, lg: 4 }}>
                        <Box sx={{ display: "flex", gap: 1, justifyContent:'center' }}>
                            <Card sx={{ boxShadow: "0", borderRadius: "0" }}>
                                <CardMedia
                                    component="img"
                                    image={payoneer}
                                />
                            </Card >
                            <Card sx={{ boxShadow: "0", borderRadius: "0" }}>
                                <CardMedia
                                    component="img"
                                    image={maser}
                                />
                            </Card>
                            <Card sx={{ boxShadow: "0", borderRadius: "0" }} >
                                <CardMedia
                                    component="img"
                                    image={paypal}
                                />
                            </Card>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    </>
}

export default Footer
