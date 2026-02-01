import { Box, Container, Grid, Rating, Typography, useMediaQuery, useTheme } from "@mui/material"
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import StarIcon from '@mui/icons-material/Star';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import style from "./Feedback.module.css";
import { useState } from "react";
import { useAuthStore } from "../../../Store/MyStore";
import { useTranslation } from 'react-i18next';

function Feedback() {
    const [feedback, setFeedback] = useState([
        { id: 1, name: "Tariq Shreem", major: "Full Stack Trainer", rate: 5, comment: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio eligendi et eveniet pariatur est ut omnis quidem labore iste.' },
        { id: 2, name: "Mohamed Aljerjawi", major: "Web Designer", rate: 4, comment: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio eligendi et eveniet pariatur est ut omnis quidem labore iste.' },
        { id: 3, name: "Ibraheem Khader", major: "UX/UI Designer", rate: 4, comment: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio eligendi et eveniet pariatur est ut omnis quidem labore iste.' },
        { id: 4, name: "Khaled Adawi", major: "Web Designer", rate: 4, comment: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio eligendi et eveniet pariatur est ut omnis quidem labore iste.' },
        { id: 5, name: "Eid Jbehe", major: "Web Designer", rate: 4, comment: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio eligendi et eveniet pariatur est ut omnis quidem labore iste.' },
    ]);

    // لتحديد عدد السلايدز التي سيتم عرضها في ال swiper
    // بناءا على حجم الشاشة المتوفرة
    const theme = useTheme();
    // console.log(theme);
    const isXs = useMediaQuery(theme.breakpoints.only('xs'));
    // console.log(isXs);
    const isMd = useMediaQuery(theme.breakpoints.only('md'));
    const upMd = useMediaQuery(theme.breakpoints.up('md'));
    const isSm = useMediaQuery(theme.breakpoints.only('sm'));

    let slidesPerView = 1;
    if (upMd) {
        slidesPerView = 3
    }
    else if (isSm) {
        slidesPerView = 2
    }

    const mode = useAuthStore(state=> state.mode);

    const { t, i18n} = useTranslation();

    const isRTL = i18n.language === "ar";

    return <>
        <Box sx={{ backgroundColor: mode==="dark"?"#191919":"#f0f0f0", padding: "100px 0" }}>
            <Container maxWidth={isXs ? 'xs' : isSm ? 'sm' : isMd ? 'md' : 'lg'}>
                <Typography sx={{ color: "#80b501", padding: "2px 15px", backgroundColor: "rgba(129, 184, 0, 0.15)", width: "fit-content", marginBottom: "15px", fontWeight: "500" }}>{t('Testimonials')}</Typography>
                <Box sx={{ display: "flex", alignItems: 'center', justifyContent: "space-between", marginBottom: "30px" }}>
                    <Typography component={"h3"} variant='h3'>{t('Client Feedback')}</Typography>
                    <Box sx={{ display: "flex", alignItems: "center", gap: "20px", direction:'ltr'}}>
                        <Box className={style.prev} sx={{ "&:hover": { backgroundColor: "#80b501", color: "#fff", transition: "all linear 0.3s" } }}><KeyboardDoubleArrowLeftIcon /></Box>
                        <Box className={style.next} sx={{ "&:hover": { backgroundColor: "#80b501", color: "#fff", transition: "all linear 0.3s" } }}><KeyboardDoubleArrowRightIcon /></Box>
                    </Box>
                </Box>
                <Grid container spacing={3}>
                    <Swiper
                        // install Swiper modules
                        modules={[Autoplay, Navigation]}
                        autoplay={{
                            delay: 1000,
                        }}
                        speed={500}
                        loop={true}
                        spaceBetween={20}
                        slidesPerView={slidesPerView}
                        navigation={{
                            nextEl: `.${style.next}`,
                            prevEl: `.${style.prev}`,
                        }}
                        
                        key={isRTL ? "rtl" : "ltr"}   // ⭐ مهم جدًا
                        dir={isRTL ? "rtl" : "ltr"}
                    >
                        {feedback.map(function (item) {
                            return <Grid size={{ xs: 12, sm: 6, md: 4 }} key={item.id} >
                                <SwiperSlide onMouseOver={function () { setIsHover(true); setProductId(product.productId) }} onMouseOut={function () { setIsHover(false) }}>
                                    <Box sx={{ padding: "30px", backgroundColor: mode==='dark'?'#121212':"#fff", display: "flex", flexDirection: "column", gap: 3 }}>
                                        <Box sx={{ display: "flex", flexDirection: "column" }}>
                                            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                                                <Rating
                                                    name="custom-colored-rating"
                                                    value={item.rate} // The filled value
                                                    max={5} // dataTotal stars
                                                    precision={1} // To ensure whole stars
                                                    icon={<StarIcon fontSize="inherit" sx={{ color: 'gold' }} />} // Filled icon
                                                    emptyIcon={<StarIcon fontSize="inherit" />} // Empty icon with border
                                                />
                                                <QuestionAnswerOutlinedIcon sx={{ fontSize: "50px", color: "#80b501" }} />
                                            </Box>
                                            <Box sx={{ marginTop: "-15px", width: "70%" }}>
                                                <Typography component={"h6"} variant="h6">{t(`${item.name}`)}</Typography>
                                                <Typography>{t(`${item.major}`)}</Typography>
                                            </Box>
                                        </Box>
                                        <Box>
                                            <Typography>{t(`${item.comment}`)}</Typography>
                                        </Box>
                                    </Box>
                                </SwiperSlide>
                            </Grid>
                        })}
                    </Swiper>
                </Grid>
            </Container>
        </Box>
    </>
}

export default Feedback
