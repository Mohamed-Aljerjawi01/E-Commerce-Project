import ComponentOne from '../../SameComponents/ComponentOne';
import ComponentTwo from './ComponentTwo';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import {Link as RouterLink} from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useMediaQuery, useTheme } from '@mui/material';

function ProductDetails() {
  const {id} = useParams();

  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.only('xs'));
  const isSm = useMediaQuery(theme.breakpoints.only('sm'));

  const { t } = useTranslation();
  
  return <>
    <ComponentOne>
      <Box sx={{position:"absolute", top:"50%", left:"50%", transform:'translate(-50%,-50%)', display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center" }}>
        <Typography component={isSm?"h3":isXs?"h4":"h2"} variant={isSm?"h3":isXs?"h4":"h2"} fontWeight={"bold"} color='#fff' mb={3} sx={{textAlign:"center"}}>{t('Product Details')}</Typography>
        <Box sx={{display:'flex', justifyContent:"center", alignItems:"center", gap:2}}>
            <Link component={RouterLink} to={"/home"} color='#fff' underline='none'>{t('Home')}</Link>
            <Typography component={"span"} color='#fff' sx={{width:'5px', height:"5px", backgroundColor:"#fff", borderRadius:"50%"}}></Typography>
            <Typography color='#fff'>{t('Product Details')}</Typography>
        </Box>
      </Box>
    </ComponentOne>
    <ComponentTwo id={id}/>
  </>
}

export default ProductDetails
