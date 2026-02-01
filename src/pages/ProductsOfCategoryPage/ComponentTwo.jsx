import { useProductsOfCategoryQuery } from '../../Hooks/useQuery';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { Link as RouterLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { Box, Container, Link, Grid, useTheme, useMediaQuery } from '@mui/material';
import style from "./ComponentTwo.module.css"
import ReorderOutlinedIcon from '@mui/icons-material/ReorderOutlined';
import ViewListRoundedIcon from '@mui/icons-material/ViewListRounded';
import product1 from "./../../assets/media/ProductsImges/product1.png";
import product2 from "./../../assets/media/ProductsImges/product2.png";
import product3 from "./../../assets/media/ProductsImges/product3.png";
import product4 from "./../../assets/media/ProductsImges/product4.png";
import product5 from "./../../assets/media/ProductsImges/product5.png";
import product6 from "./../../assets/media/ProductsImges/product6.png";
import product7 from "./../../assets/media/ProductsImges/product7.png";
import product8 from "./../../assets/media/ProductsImges/product8.png";

function ComponentTwo({ id }) {
    const { data, isLoading, isError } = useProductsOfCategoryQuery(id);
    console.log(data);

    const [products, setProducts] = useState([
        { id: 1, name: "Organic Avocado", price: 150.00, image: product1 },
        { id: 2, name: "Cheddar Fries", price: 190.00, image: product2 },
        { id: 3, name: "Broccoli Organic", price: 300.00, image: product3 },
        { id: 4, name: "Broccoli Farms", price: 220.00, image: product4 },
        { id: 7, name: "Fresh Orange", price: 170.00, image: product5 },
        { id: 8, name: "Organic Avocado", price: 180.00, image: product6 },
        { id: 9, name: "Fresh Orange", price: 350.00, image: product7 },
        { id: 10, name: "Read apple", price: 160.00, image: product8 },
    ]);

    const [isHover, setIsHover] = useState(false);
    const [productId, setProductId] = useState(0);
    const [list, setList] = useState(3);

    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.only('xs'));
    const isLg = useMediaQuery(theme.breakpoints.only('lg'));

    const { t } = useTranslation();

    return <>
        <Container sx={{ marginTop: "100px", marginBottom: "100px" }} maxWidth={isXs ? 'xs' : 'lg'}>
            <Box sx={{ display: "flex", justifyContent: "space-between", marginBottom: "30px" }}>
                <Typography component={"h6"} variant='h6' sx={{ fontSize: "20px", display:"flex", alignItems:"center", gap:1 }}>{isLoading ? <CircularProgress sx={{color:"#80b501"}}/> : data.response.length + products.length} {t('Item On List')}</Typography>
                <Box sx={{ display: isLg ? 'flex' : 'none', alignItems: "center", gap: 1 }}>
                    <ViewListRoundedIcon onClick={function () { list != 3 ? setList(3) : null }} sx={{ color: list == 3 ? '#80b501' : "inherit", cursor: "pointer", fontSize: "30px" }} />
                    <ReorderOutlinedIcon onClick={function () { list != 4 ? setList(4) : null }} sx={{ color: list == 4 ? '#80b501' : "inherit", cursor: "pointer", fontWeight: "bold", fontSize: "30px" }} />
                </Box>
            </Box>
            {isLoading ? <Box sx={{textAlign:"center"}}>
                    <CircularProgress sx={{ color:"#80b501"}}/>
                </Box> :
                isError ? <Typography sx={{ color: "red", fontWeight: "bold", textAlign: "center" }}>Error</Typography> :
                    <Grid container spacing={3}>
                        {data.response.map((product) => {
                            return <Grid size={{ xs: 12, sm: 6, md: 4, lg: list }} key={product.id} sx={{ position: "relative" }} onMouseOver={function () { setIsHover(true); setProductId(product.id) }} onMouseOut={function () { setIsHover(false) }}>
                                <Link component={RouterLink} to={`/productDetails/${product.id}`} sx={{ textDecorationLine: "none" }}>
                                    <Card sx={{ borderRadius: 0, boxShadow: 0, border: "1px solid rgba(128, 128, 128, 0.5)" }}>
                                        <CardMedia
                                            component={"img"}
                                            image={product.image}
                                            alt={product.name}
                                            title={product.name}
                                            sx={{ height: 150, objectFit: "contain", padding: "60px", height: "300px", transform: `scale(${isHover && productId === product.id ? "1.1" : "1"})`, transition: "all 0.3s 0s linear", cursor: "pointer" }}
                                        />
                                        <CardContent sx={{ borderTop: "1px solid rgba(128, 128, 128, 0.5)" }}>
                                            <Typography component={"h6"} variant='h6' sx={{ width: "fit-content", fontWeight: "bold", '&:hover': { color: "#80b501", transition: "all linear 0.2s" } }}>{product.name}</Typography>
                                            <Typography component={"span"} sx={{ textDecorationLine: "line-through", color: "rgba(128, 128, 128, 0.5)", marginRight: "5px" }}>$500</Typography>
                                            <Typography component={"span"} sx={{ color: "#80b501", fontSize: "20px" }}>${product.price}</Typography>
                                        </CardContent>
                                    </Card>
                                </Link>
                                <Box sx={{ position: "absolute", top: "62%", left: "50%", transform: 'translate(-50%)', display: "flex", gap: 2, zIndex: 10 }}>
                                    <Link className={style.IconAfter} sx={{ backgroundColor: "#80b501", padding: "7px", width: "40px", height: "40px", borderRadius: "50%", transform: `rotatex(${(isHover && (productId === product.id)) ? "0deg" : "90deg"})`, opacity: isHover && (productId === product.id) ? 1 : 0, transition: "all 0.3s 0s linear", cursor: "pointer", position: "relative", '&::after': { content: `"${t('Add To Cart')}"` }, '&:hover::after': { visibility: "visible" } }} >
                                        <LocalMallOutlinedIcon sx={{ color: "#fff" }} />
                                    </Link>
                                    <Link className={style.IconAfter} sx={{ backgroundColor: "#80b501", padding: "7px", width: "40px", height: "40px", borderRadius: "50%", transform: `rotatex(${(isHover && (productId === product.id)) ? "0deg" : "90deg"})`, opacity: isHover && (productId === product.id) ? 1 : 0, transition: "all 0.3s 0s linear", cursor: "pointer", position: "relative", '&::after': { content: `"${t('Quick View')}"` }, '&:hover::after': { visibility: "visible" } }} >
                                        <RemoveRedEyeOutlinedIcon sx={{ color: "#fff" }} />
                                    </Link>
                                    <Link className={style.IconAfter} sx={{ backgroundColor: "#80b501", padding: "7px", width: "40px", height: "40px", borderRadius: "50%", transform: `rotatex(${(isHover && (productId === product.id)) ? "0deg" : "90deg"})`, opacity: isHover && (productId === product.id) ? 1 : 0, transition: "all 0.3s 0s linear", cursor: "pointer", position: "relative", '&::after': { content: `"${t('Add To Wishlist')}"` }, '&:hover::after': { visibility: "visible" } }} >
                                        <FavoriteBorderIcon sx={{ color: "#fff" }} />
                                    </Link>
                                </Box>
                            </Grid>
                        })}
                        {products.map((product) => {
                            return <Grid size={{ xs: 12, sm: 6, md: 4, lg: list }} key={product.id} sx={{ position: "relative" }} onMouseOver={function () { setIsHover(true); setProductId(product.id) }} onMouseOut={function () { setIsHover(false) }}>
                                <Link component={RouterLink} to={`/productDetails/${product.id}`} sx={{ textDecorationLine: "none" }}>
                                    <Card sx={{ borderRadius: 0, boxShadow: 0, border: "1px solid rgba(128, 128, 128, 0.5)" }}>
                                        <CardMedia
                                            component={"img"}
                                            image={product.image}
                                            alt={t(product.name)}
                                            title={t(product.name)}
                                            sx={{ height: 150, objectFit: "contain", padding: "60px", height: "300px", transform: `scale(${isHover && productId === product.id ? "1.1" : "1"})`, transition: "all 0.3s 0s linear", cursor: "pointer" }}
                                        />
                                        <CardContent sx={{ borderTop: "1px solid rgba(128, 128, 128, 0.5)" }}>
                                            <Typography component={"h6"} variant='h6' sx={{ width: "fit-content", fontWeight: "bold", '&:hover': { color: "#80b501", transition: "all linear 0.2s" } }}>{t(product.name)}</Typography>
                                            <Typography component={"span"} sx={{ textDecorationLine: "line-through", color: "rgba(128, 128, 128, 0.5)", marginRight: "5px" }}>$500</Typography>
                                            <Typography component={"span"} sx={{ color: "#80b501", fontSize: "20px" }}>${product.price}</Typography>
                                        </CardContent>
                                    </Card>
                                </Link>
                                <Box sx={{ position: "absolute", top: "62%", left: "50%", transform: 'translate(-50%)', display: "flex", gap: 2, zIndex: 10 }}>
                                    <Link className={style.IconAfter} sx={{ backgroundColor: "#80b501", padding: "7px", width: "40px", height: "40px", borderRadius: "50%", transform: `rotatex(${(isHover && (productId === product.id)) ? "0deg" : "90deg"})`, opacity: isHover && (productId === product.id) ? 1 : 0, transition: "all 0.3s 0s linear", cursor: "pointer", position: "relative", '&::after': { content: `"${t('Add To Cart')}"` }, '&:hover::after': { visibility: "visible" } }} >
                                        <LocalMallOutlinedIcon sx={{ color: "#fff" }} />
                                    </Link>
                                    <Link className={style.IconAfter} sx={{ backgroundColor: "#80b501", padding: "7px", width: "40px", height: "40px", borderRadius: "50%", transform: `rotatex(${(isHover && (productId === product.id)) ? "0deg" : "90deg"})`, opacity: isHover && (productId === product.id) ? 1 : 0, transition: "all 0.3s 0s linear", cursor: "pointer", position: "relative", '&::after': { content: `"${t('Quick View')}"` }, '&:hover::after': { visibility: "visible" } }} >
                                        <RemoveRedEyeOutlinedIcon sx={{ color: "#fff" }} />
                                    </Link>
                                    <Link className={style.IconAfter} sx={{ backgroundColor: "#80b501", padding: "7px", width: "40px", height: "40px", borderRadius: "50%", transform: `rotatex(${(isHover && (productId === product.id)) ? "0deg" : "90deg"})`, opacity: isHover && (productId === product.id) ? 1 : 0, transition: "all 0.3s 0s linear", cursor: "pointer", position: "relative", '&::after': { content: `"${t('Add To Wishlist')}"` }, '&:hover::after': { visibility: "visible" } }} >
                                        <FavoriteBorderIcon sx={{ color: "#fff" }} />
                                    </Link>
                                </Box>
                            </Grid>
                        })}
                    </Grid>
            }
        </Container>
    </>
}

export default ComponentTwo
