import ComponentOne from '../../SameComponents/ComponentOne'
import { Box, Link, Typography, useMediaQuery, useTheme } from '@mui/material'
import { Link as RouterLink, useParams } from 'react-router-dom'
import ComponentTwo from './ComponentTwo'
import { useTranslation } from 'react-i18next';

function ProductsOfCategory() {
  const {id, name} = useParams();

  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.only('xs'));
  const isSm = useMediaQuery(theme.breakpoints.only('sm'));

  const { t } = useTranslation();

  return <>
    <ComponentOne>
      <Box sx={{position:"absolute", top:"50%", left:"50%", transform:'translate(-50%,-50%)', display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", width:"100%", height:"100%"}}>
        <Typography component={isSm?"h3":isXs?"h4":"h2"} variant={isSm?"h3":isXs?"h4":"h2"} fontWeight={"bold"} color='#fff' mb={3} sx={{ textAlign:"center" }}>{t('Products Of')} {name}</Typography>
        <Box sx={{display:'flex', justifyContent:"center", alignItems:"center", gap:2}}>
            <Link component={RouterLink} to={"/home"} color='#fff' underline='none'>{t('Home')}</Link>
            <Typography component={"span"} color='#fff' sx={{width:'5px', height:"5px", backgroundColor:"#fff", borderRadius:"50%"}}></Typography>
            <Typography color='#fff'>{t('Products')}</Typography>
        </Box>
      </Box>
    </ComponentOne>
    <ComponentTwo id={id} />
  </>
}

export default ProductsOfCategory
