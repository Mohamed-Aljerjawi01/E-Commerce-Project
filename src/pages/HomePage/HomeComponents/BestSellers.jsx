import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import { useMediaQuery, useTheme } from '@mui/material';
import { useState } from 'react';
import product1 from "./../../../assets/media/ProductsImges/product1.png";
import product2 from "./../../../assets/media/ProductsImges/product2.png";
import product3 from "./../../../assets/media/ProductsImges/product3.png";
import product4 from "./../../../assets/media/ProductsImges/product4.png";
import product5 from "./../../../assets/media/ProductsImges/product5.png";
import product6 from "./../../../assets/media/ProductsImges/product6.png";
import product7 from "./../../../assets/media/ProductsImges/product7.png";
import product8 from "./../../../assets/media/ProductsImges/product8.png";
import product9 from "./../../../assets/media/ProductsImges/product9.png";
import { useTranslation } from 'react-i18next';

function BestSellers() {
    const [products, setProducts] = useState([
        { productId: 1, name: "Organic Avocado", preview: 5, price: 150.00, image: product1 },
        { productId: 2, name: "Cheddar Fries", preview: 5, price: 190.00, image: product2 },
        { productId: 3, name: "Broccoli Organic", preview: 5, price: 300.00, image: product3 },
        { productId: 4, name: "Broccoli Farms", preview: 5, price: 220.00, image: product4 },
        { productId: 5, name: "Fresh Orange", preview: 5, price: 170.00, image: product5 },
        { productId: 6, name: "Organic Avocado", preview: 5, price: 180.00, image: product6 },
        { productId: 7, name: "Fresh Orange", preview: 5, price: 350.00, image: product7 },
        { productId: 8, name: "Read apple", preview: 5, price: 160.00, image: product8 },
        { productId: 9, name: "Broccoli Farms", preview: 5, price: 180.00, image: product9 },
    ]);

    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.only('xs'));

    const { t } = useTranslation();

    return <>
        <Container maxWidth={isXs ? 'xs' : 'lg'} sx={{ marginTop: "100px", marginBottom: "100px" }}>
            <Typography sx={{ color: "#80b501", padding: "2px 15px", backgroundColor: "rgba(129, 184, 0, 0.15)", width: "fit-content", marginBottom: "15px", fontWeight: "500" }}>{t('THIS WEEK')}</Typography>
            <Box sx={{ display: "flex", alignItems: 'center', justifyContent: "space-between", marginBottom: "30px" }}>
                <Typography component={"h3"} variant='h3'>{t('Best Sellers')}</Typography>
            </Box>
            <Grid container spacing={3} >
                {products.map(function (product) {
                    return <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <Box sx={{ display: "flex", gap: "10px" }}>
                            <Box sx={{ backgroundColor: "rgba(129, 184, 0, 0.15)", height: "120px", padding: "0 15px" }}>
                                <img src={product.image} alt={t(`${product.name}`)} title={t(`${product.name}`)} style={{ height: "100%" }} />
                            </Box>
                            <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: "5px" }}>
                                <Typography component={"h6"} variant='h6' sx={{ width: "fit-content", cursor: "pointer", fontWeight: "bold", '&:hover': { color: "#80b501", transition: "all linear 0.3s" } }}>{t(`${product.name}`)}</Typography>
                                <Typography sx={{ color: "#80b501", fontWeight: "500" }}>USD {product.price}</Typography>
                                <Rating
                                    name="custom-colored-rating"
                                    value={5} // The filled value
                                    max={5} // Total stars
                                    precision={1} // To ensure whole stars
                                    icon={<StarIcon fontSize="inherit" sx={{ color: '#80b501', width: "20px" }} />} // Filled icon
                                    emptyIcon={<StarIcon fontSize="inherit" />} // Empty icon with border
                                />
                            </Box>
                        </Box>
                    </Grid>
                })}
            </Grid>
        </Container>
    </>
}

export default BestSellers
