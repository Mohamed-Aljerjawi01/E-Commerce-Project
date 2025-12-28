import ComponentOne from '../../SameComponents/ComponentOne';
import ComponentTwo from './ComponentTwo';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import {Link as RouterLink} from 'react-router-dom';

function ProductDetails() {
  return <>
    <ComponentOne>
      <Box sx={{position:"absolute", top:"50%", left:"50%", transform:'translate(-50%,-50%)', display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
        <Typography component={"h2"} variant='h2' fontWeight={"bold"} color='#fff' mb={3}>Product Details</Typography>
        <Box sx={{display:'flex', justifyContent:"center", alignItems:"center", gap:2}}>
            <Link component={RouterLink} to={"/home"} color='#fff' underline='none'>Home</Link>
            <Typography component={"span"} color='#fff' sx={{width:'5px', height:"5px", backgroundColor:"#fff", borderRadius:"50%"}}></Typography>
            <Typography color='#fff'>Product Details</Typography>
        </Box>
      </Box>
    </ComponentOne>
    <ComponentTwo />
  </>
}

export default ProductDetails
