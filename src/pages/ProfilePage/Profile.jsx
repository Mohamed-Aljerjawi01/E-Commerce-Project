import Box from "@mui/material/Box";
import ComponentOne from "../../SameComponents/ComponentOne";
import Typography from "@mui/material/Typography";
import { Outlet, Link as RouterLink } from "react-router-dom";
import { Button, CircularProgress, Container, Grid, Link, useMediaQuery, useTheme } from '@mui/material';
import { useTranslation } from "react-i18next";
import { useProfileQuery } from "../../Hooks/useQuery";
import { useState } from "react";

function Profile() {
    const { data, isLoading, isError } = useProfileQuery();
    console.log(data);

    const [btnClick, setBtnClick] = useState('profile-info');

    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.only('xs'));
    const isSm = useMediaQuery(theme.breakpoints.only('sm'));

    const { t } = useTranslation();

    return <>
        <ComponentOne>
            <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: 'translate(-50%,-50%)', display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <Typography component={isSm?"h3":isXs?"h3":"h2"} variant={isSm?"h3":isXs?"h3":"h2"} fontWeight={"bold"} color='#fff' mb={3} sx={{textAlign:"center"}}>{t('Profile')}</Typography>
                <Box sx={{ display: 'flex', justifyContent: "center", alignItems: "center", gap: 2 }}>
                    <Link component={RouterLink} to={"/home"} color='#fff' underline='none'>{t('Home')}</Link>
                    <Typography component={"span"} color='#fff' sx={{ width: '5px', height: "5px", backgroundColor: "#fff", borderRadius: "50%" }}></Typography>
                    <Typography color='#fff'>{t('Profile')}</Typography>
                </Box>
            </Box>
        </ComponentOne>
        <Container maxWidth={isXs ? 'xs' : isSm ? 'sm' : 'lg'} sx={{ marginTop: "100px", marginBottom: "100px" }}>
            {isLoading ? <Box sx={{textAlign:"center"}}>
                    <CircularProgress sx={{ color:"#80b501"}}/>
                </Box> :
                isError ? <Typography sx={{ color: "red", fontWeight: "bold", textAlign: "center" }}>Error</Typography> :
                    <Grid container spacing={10}>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <Box sx={{ width: "100%", display: "flex", flexDirection: "column", gap: 3 }}>
                                <Button component={RouterLink} to={'/profile'} sx={{ color: btnClick == 'profile-info' ? '#fff' : '#555555', border: "1px solid rgba(128,128,128,0.2)", borderRadius: "0", fontSize: "18px", width: "100%", justifyContent: "center", padding: "15px 0px", backgroundColor: btnClick == 'profile-info' ? '#80b501' : 'transparnt', '&:hover': { backgroundColor: "#80b501", color: "#fff" }, transition: "all linear 0.2s" }} onClick={function () { setBtnClick('profile-info') }}>{t('profile information')}</Button>
                                <Button component={RouterLink} to={'/profile/profileOrders'} sx={{ color: btnClick == 'profile-orders' ? '#fff' : '#555555', border: "1px solid rgba(128,128,128,0.2)", borderRadius: "0", fontSize: "18px", width: "100%", justifyContent: "center", padding: "15px 0px", backgroundColor: btnClick == 'profile-orders' ? '#80b501' : 'transparnt', '&:hover': { backgroundColor: "#80b501", color: "#fff" }, transition: "all linear 0.2s" }} onClick={function () { setBtnClick('profile-orders') }}>{t('profile orders')}</Button>
                                <Button component={RouterLink} to={'/profile/profileSettings'} sx={{ color: btnClick == 'profile-settings' ? '#fff' : '#555555', border: "1px solid rgba(128,128,128,0.2)", borderRadius: "0", fontSize: "18px", width: "100%", justifyContent: "center", padding: "15px 0px", backgroundColor: btnClick == 'profile-settings' ? '#80b501' : 'transparnt', '&:hover': { backgroundColor: "#80b501", color: "#fff" }, transition: "all linear 0.2s" }} onClick={function () { setBtnClick('profile-settings') }}>{t('profile settings')}</Button>
                            </Box>
                        </Grid>
                        <Grid size={{ xs: 12, md: 8 }}>
                            <Outlet />
                        </Grid>
                    </Grid>
            }
        </Container>
    </>
}

export default Profile
