import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useProductDetailsQuery } from '../../Hooks/useQuery';
import CircularProgress from '@mui/material/CircularProgress';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { useAddReviewMutation, useAddToCartMutation } from './../../Hooks/useMutation';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Grid, useMediaQuery, useTheme, Button, TextField, TableRow, Table, TableBody, TableCell } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { useAuthStore } from '../../Store/MyStore';

function ComponentTwo({ id }) {
  const { data, isLoading, isError } = useProductDetailsQuery(id);
  // console.log(data);
  // console.log(data.response.reviews);

  const [quantityProduct, setQuantityProduct] = useState(1);
  function increaseQuantityProduct() {
    setQuantityProduct(function (prev) { return prev + 1 });
  }
  function decreaseQuantityProduct() {
    setQuantityProduct(function (prev) { return prev - 1 < 1 ? 1 : prev - 1 });
  }

  const { mutate: addToCart, isPending } = useAddToCartMutation();

  const theme = useTheme();
  const isLg = useMediaQuery(theme.breakpoints.only('lg'));
  const isMd = useMediaQuery(theme.breakpoints.only('md'));
  const isSm = useMediaQuery(theme.breakpoints.only('sm'));
  const isXs = useMediaQuery(theme.breakpoints.only('xs'));

  const [btnClick, setBtnClick] = useState('description');

  const { register, handleSubmit, control } = useForm();

  const { mutate: addReview, isPending: pendingReview } = useAddReviewMutation();

  const mode = useAuthStore(state=> state.mode);

  function submit(data) {
    // console.log(data);
    addReview(data);
  }

  const { t, i18n } = useTranslation();

  return <>
    <Container maxWidth={isLg ? 'lg' : isMd ? 'lg' : isSm ? 'sm' : 'xs'} sx={{ marginTop: "100px", marginBottom: "100px" }}>
      {
        isLoading ? <Box sx={{textAlign:"center"}}>
            <CircularProgress sx={{ color:"#80b501"}}/>
          </Box> :
          isError ? <Typography sx={{ color: "red", fontWeight: "bold", textAlign: "center" }}>{t('Error')}</Typography> :
            <Box>
              <Grid container spacing={isLg ? 10 : 5} alignItems={"center"}>
                <Grid size={{ xs: 12, md: 6 }}>
                  <Box sx={{ display: "flex", gap: 3, alignItems: "flex-start" }}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                      <Card sx={{ border: "1px solid #80b501", borderRadius: "5px", height: "85px", width: "75px", padding: "5px", boxShadow: 0 }}>
                        <CardMedia
                          component="img"
                          image={data.response.image}
                          alt={data.response.name}
                          width={'100%'}
                          height={'100%'}
                          sx={{ objectFit: "contain" }}
                        />
                      </Card>
                      {data.response.subsubImages?.map(function (img) {
                        return <Card sx={{ border: "1px solid rgba(128, 128, 128,0.5)", borderRadius: "5px", height: "85px", width: "75px", padding: "5px", boxShadow: 0 }}>
                          <CardMedia
                            component="img"
                            image={img.img}
                            width={'100%'}
                            height={'100%'}
                            sx={{ objectFit: "contain" }}
                          />
                        </Card>
                      })}
                    </Box>
                    <Card sx={{ border: "1px solid #80b501", boxShadow: 0, width: "100%", height: "350px", padding: "10px" }}>
                      <CardMedia
                        component="img"
                        image={data.response.image}
                        alt={data.response.name}
                        width={'100%'}
                        height={"100%"}
                        sx={{
                          objectFit: "contain",
                          transition: '0.3s',
                          '&:hover': {
                            transform: 'scale(1.03)',
                            overflow: 'hidden',
                          }
                        }}
                      />
                    </Card>
                  </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    <Box sx={{ display: "flex", flexDirection: isXs?'column':'row', alignItems: isXs?"flex-start":"center", justifyContent:"space-between", gap: 2 }}>
                      <Typography sx={{
                        color: "#fff", backgroundColor: "#80b501", padding: "5px 10px", borderRadius: "5px",
                        textDecoration: "none", textTransform: "uppercase"
                      }}>{t('Construction')}</Typography>
                      <Box sx={{display: "flex", alignItems: "center", gap: 1}}>
                        <Rating name="custom-colored-rating" value={data.response.rate} // The filled value max={3} // Total stars precision={1} // To
                          ensure whole stars icon={<StarIcon fontSize="inherit" sx={{ color: '#80b501' }} />} // Filled icon
                          emptyIcon={
                            <StarIcon fontSize="inherit" />} // Empty icon with border
                        />
                        <Typography sx={{fontWeight:"bold"}}>{data.response.reviews.length} {t('Reviews')}</Typography>
                      </Box>
                    </Box>
                    <Box>
                      <Typography component={"h4"} variant='h4'>{data.response.name}</Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1, }}>
                      <Typography component={"span"} sx={{
                        textDecoration: "line-through", color: "rgba(128, 128, 128,0.5);",
                        fontWeight: "bold"
                      }}>$500</Typography>
                      <Typography component={"span"} sx={{ fontSize: "26px", color: "#80b501", fontWeight: "bold" }}>
                        {`$${data.response.price}`}</Typography>
                    </Box>
                    <Box>
                      <Typography sx={{
                        textAlign: "justify", fontSize: "18px", pr: i18n.language == "en" ? "10px" : '0px', pl: i18n.language == "ar" ? "10px" : '0px'
                      }}>
                        {t('A versatile kitchen appliance designed for speed, convenience, and safety. Features powerful heating, smart auto shut-off, and durable materials for everyday use. Ideal for preparing hot drinks or healthy meals efficiently with minimal effort.')}
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      <Box sx={{
                        display: "flex", alignItems: "center", padding: "15px", border: "1px solid rgba(128, 128, 128,0.5);"
                        , borderRadius: "40px", color: "gray"
                      }}>
                        <RemoveIcon sx={{ color: "rgba(128, 128, 128,0.5)", cursor: "pointer" }} onClick={decreaseQuantityProduct} />
                        <Typography component={"span"} sx={{ padding: "0 20px", color: "#80b501" }}>{quantityProduct}</Typography>
                        <AddIcon sx={{ color: "rgba(128, 128, 128,0.5)", cursor: "pointer" }} onClick={increaseQuantityProduct} />
                      </Box>
                      <Button onClick={function () { addToCart({ ProductId: data.response.id, Count: quantityProduct }) }}
                        disabled={isPending} sx={{
                          display: "flex", justifyContent: "center", alignItems: "center", gap: isXs?0:2,
                          backgroundColor: isPending ? "rgba(128, 128, 128,0.5)" : "#80b501", color: "#fff", padding: "15px 20px",
                          borderRadius: "40px"
                        }}>
                        <Typography sx={{ textTransform: "line-through" }}>{isXs?'':t('Add To Cart')}</Typography>
                        <LocalMallOutlinedIcon />
                      </Button>
                      <Box sx={{
                        display: "flex", border: "1px solid rgba(128, 128, 128,0.5)", borderRadius: "50%", padding: "15px"
                      }}>
                        <FavoriteIcon sx={{ color: "rgba(128, 128, 128,0.7)" }} />
                      </Box>
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                      <Box sx={{ color: "#555555" }}>
                        <Typography component={"span"} sx={{ textTransform: "uppercase", fontWeight: "bold" }}>{t('sku')}: </Typography>
                        <Link sx={{ color: mode==='dark'?'inherit':'black', textDecoration: "none" }}>BO1D0MX8SJ</Link>
                      </Box>
                      <Box sx={{ color: "#555555" }}>
                        <Typography component={"span"} sx={{ fontWeight: "bold" }}>{t('Categories')}: </Typography>
                        <Link sx={{ color: mode==='dark'?'inherit':'black', textDecoration: "none" }}>{t('Milk')}, </Link>
                        <Link sx={{ color: mode==='dark'?'inherit':'black', textDecoration: "none" }}>{t('Cream')}, </Link>
                        <Link sx={{ color: mode==='dark'?'inherit':'black', textDecoration: "none" }}>{t('Fermented')}</Link>
                      </Box>
                      <Box sx={{ color: "#555555" }}>
                        <Typography component={"span"} sx={{ fontWeight: "bold" }}>{t('Tags')}: </Typography>
                        <Link sx={{ color: mode==='dark'?'inherit':'black', textDecoration: "none" }}>{t('Cheese')}, </Link>
                        <Link sx={{ color: mode==='dark'?'inherit':'black', textDecoration: "none" }}>{t('Custard')}, </Link>
                        <Link sx={{ color: mode==='dark'?'inherit':'black', textDecoration: "none" }}>{t('Frozen')}</Link>
                      </Box>
                    </Box>
                    <Box sx={{ display: "flex" }}>
                      <Typography sx={{ color: "#555555", fontWeight: "bold" }}>{t('Share')}: </Typography>
                      <Box sx={{ display: "flex", color: "rgba(128, 128, 128,0.7)", gap: 1 }}>
                        <FacebookIcon />
                        <TwitterIcon />
                        <YouTubeIcon />
                        <LinkedInIcon />
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
              <Grid container spacing={isLg ? 10 : 5} sx={{ marginTop: "50px" }}>
                <Grid size={{ xs: 12, md: 4 }}>
                  <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    <Button sx={{ color: btnClick == 'description' ? '#fff' : '#555555', border: "1px solid rgba(128, 128, 128,0.2)", fontSize: "18px", width: "100%", justifyContent: "center", padding: "15px 0px", backgroundColor: btnClick == 'description' ? '#80b501' : 'transparnt', '&:hover': { backgroundColor: "#80b501", color: "#fff" }, transition: "all linear 0.2s" }} onClick={function () { setBtnClick('description') }}>{t('description')}</Button>
                    <Button sx={{ color: btnClick == 'additional-information' ? '#fff' : '#555555', border: "1px solid rgba(128, 128, 128,0.2)", fontSize: "18px", width: "100%", justifyContent: "center", padding: "15px 0px", backgroundColor: btnClick == 'additional-information' ? '#80b501' : 'transparnt', '&:hover': { backgroundColor: "#80b501", color: "#fff" }, transition: "all linear 0.2s" }} onClick={function () { setBtnClick('additional-information') }}>{t('additional information')}</Button>
                    <Button sx={{ color: btnClick == 'reviews' ? '#fff' : '#555555', border: "1px solid rgba(128, 128, 128,0.2)", fontSize: "18px", width: "100%", justifyContent: "center", padding: "15px 0px", backgroundColor: btnClick == 'reviews' ? '#80b501' : 'transparnt', '&:hover': { backgroundColor: "#80b501", color: "#fff" }, transition: "all linear 0.2s" }} onClick={function () { setBtnClick('reviews') }}>{t('Reviews')} ({data.response.reviews.length})</Button>
                  </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 8 }}>
                  <Box sx={{ display: btnClick == 'description' ? 'block' : 'none' }}>
                    <Typography sx={{ fontSize: "18px", fontWeight: "400", lineHeight: "1.7", textAlign: "justify" }}>{data.response.description}</Typography>
                  </Box>
                  <Box sx={{ display: btnClick == 'additional-information' ? 'block' : 'none' }}>
                    <Table sx={{ width: '100%' }}>
                      <TableBody>
                        <TableRow>
                          <TableCell sx={{ fontWeight: "bold", fontSize: "16px", border: "1px solid rgba(128, 128, 128, 0.5)" }}>{t('Weight')}</TableCell>
                          <TableCell sx={{ fontSize: "16px", border: "1px solid rgba(128, 128, 128, 0.5)" }}>2 lbs</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell sx={{ fontWeight: "bold", fontSize: "16px", border: "1px solid rgba(128, 128, 128, 0.5)" }}>{t('Dimensions')}</TableCell>
                          <TableCell sx={{ fontSize: "16px", border: "1px solid rgba(128, 128, 128, 0.5)" }}>12 × 16 × 19 in</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell sx={{ fontWeight: "bold", fontSize: "16px", border: "1px solid rgba(128, 128, 128, 0.5)" }}>{t('Product')}</TableCell>
                          <TableCell sx={{ fontSize: "16px", border: "1px solid rgba(128, 128, 128, 0.5)" }}>Purchase this product on rag-bone.com</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell sx={{ fontWeight: "bold", fontSize: "16px", border: "1px solid rgba(128, 128, 128, 0.5)" }}>{t('Color')}</TableCell>
                          <TableCell sx={{ fontSize: "16px", border: "1px solid rgba(128, 128, 128, 0.5)" }}>S, M, L, XL</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell sx={{ fontWeight: "bold", fontSize: "16px", border: "1px solid rgba(128, 128, 128, 0.5)" }}>{t('Model')}</TableCell>
                          <TableCell sx={{ fontSize: "16px", border: "1px solid rgba(128, 128, 128, 0.5)" }}>Model</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell sx={{ fontWeight: "bold", fontSize: "16px", border: "1px solid rgba(128, 128, 128, 0.5)" }}>{t('Shipping')}</TableCell>
                          <TableCell sx={{ fontSize: "16px", border: "1px solid rgba(128, 128, 128, 0.5)" }}>Standard shipping: $5,95</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell sx={{ fontWeight: "bold", fontSize: "16px", border: "1px solid rgba(128, 128, 128, 0.5)" }}>{t('Care Info')}</TableCell>
                          <TableCell sx={{ fontSize: "16px", border: "1px solid rgba(128, 128, 128, 0.5)" }}>Machine Wash up to 40ºC/86ºF Gentle Cycle</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell sx={{ fontWeight: "bold", fontSize: "16px", border: "1px solid rgba(128, 128, 128, 0.5)" }}>{t('Brand')}</TableCell>
                          <TableCell sx={{ fontSize: "16px", border: "1px solid rgba(128, 128, 128, 0.5)" }}>Kazen</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </Box>
                  <Box sx={{ display: btnClick == 'reviews' ? 'block' : 'none' }}>
                    <Box sx={{ marginBottom: "50px" }}>
                      <Typography component={"h5"} variant='h5' sx={{ fontWeight: "bold", fontSize: "26px", marginBottom: "20px" }}>0{data.response.reviews.length} {t('reviews for “Wide Cotton Tunic extreme hammer”')}</Typography>
                      {data.response.reviews.map(function (review) {
                        return <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5, padding: '15px', border: "1px solid rgba(128, 128, 128,0.2)", borderLeft: "5px solid #80b501", borderRadius: "10px", marginBottom: "20px", direction:"ltr" }}>
                          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <Box>
                              <Typography component={"h6"} variant='h6' sx={{ textTransform: "UpperCase" }}>{review.userName}</Typography>
                              <Typography component={'span'} sx={{ color: "#555555" }}>{review.createdAt}</Typography>
                            </Box>
                            <Rating
                              name="custom-colored-rating"
                              value={review.rating} // The filled value
                              max={5} // Total stars
                              precision={1} // To ensure whole stars
                              icon={<StarIcon fontSize="inherit" sx={{ color: '#80b501' }} />} // Filled icon
                              emptyIcon={<StarIcon fontSize="inherit" />} // Empty icon with border
                              sx={{ fontSize: "20px" }}
                            />
                          </Box>
                          <Box>
                            <Typography sx={{ color: "#555555" }}>{review.comment}</Typography>
                          </Box>
                        </Box>
                      })}
                    </Box>
                    <Box>
                      <Typography component={"h5"} variant='h5' sx={{ fontWeight: "bold", fontSize: "26px", marginBottom: "20px", textTransform: "uppercase" }}>{t('Add a review')}</Typography>
                      <Box component={"form"} onSubmit={handleSubmit(submit)} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                          <Typography sx={{ fontSize: "18px" }}>{t('Overall ratings')}</Typography>
                          <Controller
                            // name="Rating"
                            {...register('Rating')}
                            control={control}
                            defaultValue={0}
                            render={({ field }) => (
                              <Rating
                                {...field}
                                value={field.value}
                                onChange={(e, newValue) => field.onChange(newValue)}
                                icon={<StarIcon fontSize="inherit" sx={{ color: '#80b501' }} />}
                                emptyIcon={<StarIcon fontSize="inherit" />}
                                sx={{ fontSize: "20px" }}
                              />
                            )}
                          />
                        </Box>
                        <TextField type='hidden' sx={{ visibility: "hidden" }} value={id} {...register('productId')} />
                        <TextField label={t('Your Review')} fullWidth multiline rows={7} type='text' placeholder={t('Content')} {...register("Comment")} sx={{
                          '& textarea::placeholder': { color: "rgb(128, 128, 128)" }, '& .MuiOutlinedInput-root': {
                            color: '#555555',
                            '& fieldset': {
                              borderColor: 'rgba(128, 128, 128,0.2)', // اللون الافتراضي
                            },
                            '&:hover fieldset': {
                              borderColor: '#80b501', // عند hover
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: '#80b501', // عند التركيز
                            }
                          },
                          '& .MuiInputLabel-root': {
                            color: 'rgb(128, 128, 128)',
                          },
                          '& .MuiInputLabel-root.Mui-focused': {
                            color: '#80b501',
                          },
                        }} />
                        <Button type='submit' disabled={pendingReview} sx={{ color: '#555555', border: "1px solid rgba(128, 128, 128,0.2)", width: "fit-content", justifyContent: "flex-start", padding: "10px", fontSize: "16px", '&:hover': { backgroundColor: "#80b501", color: "#fff", border: '1px solid #80b501' }, transition: "all linear 0.2s", backgroundColor:pendingReview?"rgba(128, 128, 128,0.5)":"transparent"}}>{t('Add a review')}</Button>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
      }
    </Container>
  </>
}

export default ComponentTwo


