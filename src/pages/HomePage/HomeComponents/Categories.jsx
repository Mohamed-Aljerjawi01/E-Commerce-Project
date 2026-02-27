import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useCategoriesQuery } from '../../../Hooks/useQuery';
import { useTranslation } from 'react-i18next';
import { Card, CardMedia, CircularProgress, Container, useMediaQuery, useTheme, Link } from '@mui/material';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import style from "./Categories.module.css"
import category1 from "./../../../assets/media/CategoriesImges/category-01.png";
import { Link as RouterLink} from 'react-router-dom';
import { useAuthStore } from '../../../Store/MyStore';

function Catagories() {
  const { data, isLoading, isError } = useCategoriesQuery();
  console.log(data);

  // لتحديد عدد السلايدز التي سيتم عرضها في ال swiper
  // بناءا على حجم الشاشة المتوفرة نقوم بالتالي
  const theme = useTheme();
  // console.log(theme);
  const isXs = useMediaQuery(theme.breakpoints.only('xs'));
  // console.log(isXs);
  const isLg = useMediaQuery(theme.breakpoints.up('lg'));
  const isMd = useMediaQuery(theme.breakpoints.only('md'));
  const isSm = useMediaQuery(theme.breakpoints.only('sm'));
  let slidesPerView = 1;
  if (isLg) {
    slidesPerView = 4
  }
  else if (isMd) {
    slidesPerView = 3
  }
  else if (isSm) {
    slidesPerView = 2
  }

  const mode = useAuthStore(state=> state.mode);

  const { t, i18n } = useTranslation();

  const isRTL = i18n.language === "ar";
  
  return <>
    <Container maxWidth={isXs ? 'xs' : isSm ? 'sm' : isMd ? 'md' : 'lg'} sx={{ marginTop: "100px", marginBottom: "100px" }} >
      {isLoading ? <Box sx={{textAlign:"center"}}>
          <CircularProgress sx={{ color:"#80b501"}}/>
        </Box> :
        isError ? <Typography sx={{ color: "red", fontWeight: "bold", textAlign: "center" }}>Error</Typography> :
          <Grid container spacing={3} position={"relative"}>
            <Box className={style.prev} sx={{ '&:hover': { backgroundColor: "#80b501", color: "#fff" } }}><KeyboardDoubleArrowLeftIcon /></Box>
            <Box className={style.next} sx={{ '&:hover': { backgroundColor: "#80b501", color: "#fff" } }}><KeyboardDoubleArrowRightIcon /></Box>
            <Swiper
              // install Swiper modules
              modules={[Autoplay, Navigation]}
              autoplay={{
                delay: 1000,
              }}
              speed={500}
              loop={true}
              spaceBetween={10}
              slidesPerView={slidesPerView}
              navigation={{
                nextEl: `.${style.next}`,
                prevEl: `.${style.prev}`,
              }}

              key={isRTL ? "rtl" : "ltr"}   // ⭐ مهم جدًا
              dir={isRTL ? "rtl" : "ltr"}
            >
              {data.response.data.map((category) => {
                return <Grid size={{ xs: 12, sx: 6, md: 4, lg: 3 }} key={category.id}>
                  <SwiperSlide>
                    <Box sx={{ display: "flex", margin: isXs ? "0 5%" : "0", flexDirection: "column", textAlign: "center", alignItems: "center", justifyContent: "center", border: "1px solid  rgba(128, 128, 128, 0.2)", padding: "30px", '&:hover': { border: "1px solid #80b501" }, transition: "all linear 0.2s" }}>
                      <Card sx={{ border: "1px dashed green", padding: "13px", borderRadius: "50%", marginBottom: "10px", backgroundColor: " rgba(128, 128, 128,0.1)", width: "50px", height: "50px" }}>
                        <CardMedia
                          component="img"
                          image={category1}
                        />
                      </Card>
                      <Link component={RouterLink} to={`/productsOfCategory/${category.id}/${category.name}`} sx={{ textDecorationLine: "none", color: mode==="dark"?"#fff":"#000", marginBottom: "5px", fontWeight: "bold", '&:hover':{color:"#80b501"}, transition: "all linear 0.2s" }}>{category.name}</Link>
                      <Typography component={"span"} sx={{ color: "gray" }}>10 {t('items')}</Typography>
                    </Box>
                  </SwiperSlide>
                </Grid>
              }
              )}
            </Swiper>
          </Grid>
      }
    </Container>
  </>
}

export default Catagories
