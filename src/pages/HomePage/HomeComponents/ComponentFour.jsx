import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import img1 from "./../../../assets/media/imges/off-01.png"
import img2 from "./../../../assets/media/imges/off-02.png"
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import { useMediaQuery, useTheme } from '@mui/material'
import { useTranslation } from 'react-i18next';

function ComponentFour() {
    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.only('xs'));

    const { t, i18n } = useTranslation();
    
    const isRTL = i18n.language === 'ar';

    return <>
        {/* <Container maxWidth={isXs?'xs':'lg'} sx={{marginTop:"100px", marginBottom:"100px", direction:"ltr"}}> */}
        <Container maxWidth={isXs?'xs':'lg'} sx={{marginTop:"100px", marginBottom:"100px"}}>
            <Grid container spacing={3} >
                <Grid size={{ xs: 12, md: 5 }} sx={{minHeight: "350px", position:"relative"}}>
                    <Box sx={{ backgroundImage: `url(${img1})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", transform:`scaleX(${isRTL?'-1':'1'})`, height:"100%" }}>
                    </Box>
                    <Box sx={{position:"absolute", top:"50%", transform:"translateY(-50%)", padding:"40px", display:"flex", flexDirection:"column", alignItems:"flex-start", justifyContent:"center", gap:"20px"}}>
                        <Typography sx={{ color: "#80b501", fontSize:"18px", fontWeight:"700", pointerEvents:"none", userSelect:"none"}}>{t('GET 30% OFF')}</Typography>
                        <Typography component={"h4"} variant='h4' sx={{fontWeight:"bold", color:"#000", pointerEvents:"none", userSelect:"none"}} >{t('Fresh Vegetables')}</Typography>
                        <Button sx={{backgroundColor:"#80b501", color:"#fff", padding:"15px 40px", borderRadius:"0", fontSize:"18px"}}>{t('BUY NOW')}</Button>
                    </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 7 }} sx={{minHeight: "350px", position:"relative"}}>
                    <Box sx={{ backgroundImage: `url(${img2})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", transform:`scaleX(${isRTL?'-1':'1'})`, height:"100%" }}></Box>
                    <Box sx={{position:"absolute", top:"50%", transform:"translateY(-50%)", padding:"40px", display:"flex", flexDirection:"column", alignItems:"flex-start", justifyContent:"center", gap:"20px"}}>
                        <Typography sx={{ color: "#80b501", fontSize:"18px", fontWeight:"700", pointerEvents:"none", userSelect:"none"}}>{t('Limited Offer')}</Typography>
                        <Typography component={"h4"} variant='h4' sx={{fontWeight:"bold", color:"#fff", pointerEvents:"none", userSelect:"none"}} >{t("Don't Miss 25% Off")}<br/>  {t('On All Fruits')}</Typography>
                        <Button sx={{backgroundColor:"#80b501", color:"#fff", padding:"15px 40px", borderRadius:"0", fontSize:"18px"}}>{t('BUY NOW')}</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    </>
}

export default ComponentFour
