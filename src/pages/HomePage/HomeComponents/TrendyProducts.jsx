import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import Link from '@mui/material/Link';
import style from './TrendyProducts.module.css';
import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import { useMediaQuery, useTheme } from '@mui/material';
import product1 from "./../../../assets/media/ProductsImges/product1.png";
import product2 from "./../../../assets/media/ProductsImges/product2.png";
import product3 from "./../../../assets/media/ProductsImges/product3.png";
import product4 from "./../../../assets/media/ProductsImges/product4.png";
import product5 from "./../../../assets/media/ProductsImges/product5.png";
import product6 from "./../../../assets/media/ProductsImges/product6.png";
import product7 from "./../../../assets/media/ProductsImges/product7.png";
import product8 from "./../../../assets/media/ProductsImges/product8.png";
import { useAuthStore } from '../../../Store/MyStore';
import { useTranslation } from 'react-i18next';

function TrendyProducts() {
    const [activeId, setActiveId] = useState(1);

    const [isHover, setIsHover] = useState(false);
    const [productId, setProductId] = useState(0);

    const [products, setProducts] = useState([
        { productId: 1, name: "Organic Avocado", preview: 3, price: 150.00, offer: 10, image: product1 },
        { productId: 2, name: "Cheddar Fries", preview: 5, price: 190.00, image: product2 },
        { productId: 3, name: "Broccoli Organic", preview: 4, price: 300.00, offer: 15, image: product3 },
        { productId: 4, name: "Broccoli Farms", preview: 2, price: 220.00, offer: 10, image: product4 },
        { productId: 5, name: "Fresh Orange", preview: 1, price: 170.00, offer: 10, image: product5 },
        { productId: 6, name: "Organic Avocado", preview: 3, price: 180.00, image: product6 },
        { productId: 7, name: "Fresh Orange", preview: 5, price: 350.00, offer: "New", image: product7 },
        { productId: 8, name: "Read apple", preview: 4, price: 160.00, image: product8 },
    ]);

    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.only('xs'));
    const downMd = useMediaQuery(theme.breakpoints.down('md'));

    const mode = useAuthStore(state=> state.mode);

    const { t } = useTranslation();
    
    return <>
        <Container maxWidth={isXs ? 'xs' : 'lg'} sx={{ marginTop: "100px", marginBottom: "100px" }}>
            <Typography sx={{ color: "#80b501", padding: "2px 15px", backgroundColor: "rgba(129, 184, 0, 0.15)", width: "fit-content", marginBottom: "15px", fontWeight: "500" }}>{t('THIS MONTH')}</Typography>
            <Box sx={{ display: "flex", flexDirection: downMd ? "column" : "row", alignItems: downMd ? "flext-start" : "center", justifyContent: "space-between", marginBottom: "30px", gap: downMd ? "20px" : "0" }}>
                <Typography component={"h3"} variant='h3'>{t('Trendy Products')}</Typography>
                <Box sx={{ display: "flex", alignItems: "center", gap: "15px" }}>
                    <Typography sx={{cursor:"pointer"}} className={activeId === 1 ? style.isActive : style.isNotActive} onClick={function () { setActiveId(1) }}>{t('All Products')}</Typography>
                    <Typography sx={{cursor:"pointer"}} className={activeId === 2 ? style.isActive : style.isNotActive} onClick={function () { setActiveId(2) }}>{t('New In')}</Typography>
                    <Typography sx={{cursor:"pointer"}} className={activeId === 3 ? style.isActive : style.isNotActive} onClick={function () { setActiveId(3) }}>{t('Top Rated')}</Typography>
                    <Typography sx={{cursor:"pointer"}} className={activeId === 4 ? style.isActive : style.isNotActive} onClick={function () { setActiveId(4) }}>{t('Tensing Products')}</Typography>
                </Box>
            </Box>
            <Box>
                <Grid container spacing={3}>
                    {
                        products.map(function (product) {
                            return <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={product.productId} onMouseOver={function () { setIsHover(true); setProductId(product.productId) }} onMouseOut={function () { setIsHover(false) }}>
                                <Box sx={{
                                    backgroundColor: mode==='dark'?'#191919':"#f0f0f0", textAlign: "center", padding: "60px 0", position: "relative",
                                    '&::after': {
                                        content: typeof product.offer == 'number' ? `"${product.offer}%${t('Off')}"` : `"${product.offer}"`,
                                        display: product.offer ? "block" : "none",
                                        position: "absolute",
                                        top: 20,
                                        left: 20,
                                        padding: "3px 15px",
                                        color: "#fff",
                                        backgroundColor: "#80b501",
                                        borderRadius: "20px"
                                    }
                                }}>
                                    <img src={product.image} alt={t(`${product.name}`)} title={t(`${product.name}`)} style={{ transform: `scale(${isHover && productId === product.productId ? "1.1" : "1"})`, transition: "all 0.3s 0s linear", cursor: "pointer" }} />
                                    <Box sx={{ position: "absolute", bottom: "20px", left: "50%", transform: 'translatex(-50%)', display: "flex", gap: 2 }}>
                                        <Link className={style.IconAfter} sx={{ backgroundColor: "#80b501", padding: "7px", width: "40px", height: "40px", borderRadius: "50%", transform: `rotatex(${(isHover && (productId === product.productId)) ? "0deg" : "90deg"})`, opacity: isHover && (productId === product.productId) ? 1 : 0, transition: "all 0.3s 0s linear", cursor: "pointer", position: "relative", '&::after': { content: `"${t('Add To Cart')}"` }, '&:hover::after': { visibility: "visible" } }} >
                                            <LocalMallOutlinedIcon sx={{ color: "#fff" }} />
                                        </Link>
                                        <Link className={style.IconAfter} sx={{ backgroundColor: "#80b501", padding: "7px", width: "40px", height: "40px", borderRadius: "50%", transform: `rotatex(${(isHover && (productId === product.productId)) ? "0deg" : "90deg"})`, opacity: isHover && (productId === product.productId) ? 1 : 0, transition: "all 0.3s 0s linear", cursor: "pointer", position: "relative", '&::after': { content: `"${t('Quick View')}"` }, '&:hover::after': { visibility: "visible" } }} >
                                            <RemoveRedEyeOutlinedIcon sx={{ color: "#fff" }} />
                                        </Link>
                                        <Link className={style.IconAfter} sx={{ backgroundColor: "#80b501", padding: "7px", width: "40px", height: "40px", borderRadius: "50%", transform: `rotatex(${(isHover && (productId === product.productId)) ? "0deg" : "90deg"})`, opacity: isHover && (productId === product.productId) ? 1 : 0, transition: "all 0.3s 0s linear", cursor: "pointer", position: "relative", '&::after': { content: `"${t('Add To Wishlist')}"` }, '&:hover::after': { visibility: "visible" } }} >
                                            <FavoriteBorderIcon sx={{ color: "#fff" }} />
                                        </Link>
                                    </Box>
                                </Box>
                                <Box sx={{ marginTop: 2, display: "flex", flexDirection: "column", gap: 1 }}>
                                    <Typography component={"h6"} variant='h6' sx={{ width: "fit-content", cursor: "pointer", fontWeight: "bold", '&:hover': { color: "#80b501", transition: "all linear 0.3s" } }}>{t(`${product.name}`)}</Typography>
                                    <Rating
                                        name="custom-colored-rating"
                                        value={product.preview} // The filled value
                                        max={5} // Total stars
                                        precision={1} // To ensure whole stars
                                        icon={<StarIcon fontSize="inherit" sx={{ color: '#80b501' }} />} // Filled icon
                                        emptyIcon={<StarIcon fontSize="inherit" />} // Empty icon with border
                                    />
                                    <Typography component={"span"} sx={{ color: "#80b501", fontWeight: "500" }}>USD {product.price}</Typography>
                                </Box>
                            </Grid>
                        })
                    }
                </Grid>
            </Box>
        </Container>
    </>
}

export default TrendyProducts
