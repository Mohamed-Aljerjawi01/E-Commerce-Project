import { Box, Button, Card, CardMedia, Container, Grid, Typography, useMediaQuery, useTheme } from '@mui/material'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { useState } from 'react';
import img1 from "./../../../assets/media/imges/details-07.png"
import img2 from "./../../../assets/media/imges/details-08.png"
import img3 from "./../../../assets/media/imges/details-09.png"
import img4 from "./../../../assets/media/imges/discount-tag.png"
import { SwiperSlide, Swiper } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { useAuthStore } from '../../../Store/MyStore';
import { useTranslation } from 'react-i18next';

function HeroComponent() {
  const [imges, setImges] = useState([
    { id: 1, img: img1 },
    { id: 2, img: img2 },
    { id: 3, img: img3 },
  ]);

  const theme = useTheme();
  const isLg = useMediaQuery(theme.breakpoints.only('lg'));
  const isMd = useMediaQuery(theme.breakpoints.only('md'));
  const isSm = useMediaQuery(theme.breakpoints.only('sm'));
  const isXs = useMediaQuery(theme.breakpoints.only('xs'));

  const mode = useAuthStore(state=> state.mode);

  const { t, i18n} = useTranslation();
  
  const isRTL = i18n.language === "ar";

  return <>
    <Box sx={{ backgroundColor: mode==='dark'?'#191919':"#f0f0f0", padding: isXs?"80px 0 0 0":isSm?"80px 0 0 0":"100px 0" }}>
      <Container maxWidth={isXs?'xs':'lg'}>
        <Swiper
          // install Swiper modules
          modules={[Autoplay]}
          autoplay={{
            delay: 1000,
          }}
          speed={500}
          loop={true}
          spaceBetween={10}
          slidesPerView={1}
          
          key={isRTL ? "rtl" : "ltr"}   // ⭐ مهم جدًا
          dir={isRTL ? "rtl" : "ltr"}
        >
          {imges.map(function (img) {
            return <SwiperSlide key={img.id}>
              <Grid container spacing={3} sx={{ justifyContent: "center" }}>
                <Grid size={{ xs: 12, sm: 12, md: 5, lg: 6 }} sx={{ height: "100%" }}>
                  <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: isSm ? 2 : 3, }}>
                    <Typography component={"span"} sx={{ backgroundColor: "rgba(128, 181, 1, 0.1019607843)", padding: "10px", fontWeight: "500" }}>{t('100% ORGANIC PRODUCT')}</Typography>
                    <Typography component={"h3"} variant='h3' sx={{ fontWeight: "500", fontSize: isLg ? "90px" : isMd ? "70px" : isSm? "50px":"30px" }}>{t('Buy Delicious Produce Enjoy Free Shopping')}</Typography>
                    <Button sx={{ backgroundColor: "#80b501", padding: "15px 30px", color: '#fff', fontSize: "18px", marginTop: '15px', direction:'ltr' }}>{t('BUY NOW')} <KeyboardDoubleArrowRightIcon /></Button>
                  </Box>
                </Grid>
                <Grid size={{ xs: 8, sm: 8, md: 7, lg: 6 }} sx={{ position: "relative", height: "100%" }} >
                  <Card sx={{ boxShadow: '0', borderRadius: "0", background: mode==="dark"?"transparent":"inherit", width: "100%"}}>
                    <CardMedia
                      component="img"
                      image={img.img}
                      // height={"50%"}
                      sx={{ objectFit: "contain" }}
                    />
                  </Card>
                  <Card sx={{ boxShadow: '0', borderRadius: "0", background: "inherit", width: isXs?"100px":"150px", position: "absolute", top: "0px", right: "70px" }}>
                    <CardMedia
                      component="img"
                      image={img4}
                    />
                  </Card>
                </Grid>
              </Grid>
            </SwiperSlide>
          })}
        </Swiper>
      </Container>
    </Box>
  </>
}

export default HeroComponent
