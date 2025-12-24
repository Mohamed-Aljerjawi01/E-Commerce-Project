import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box';
import category1 from "./../../../assets/media/imges/category-01.png";
import style from "./Categories.module.css"
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import { useCategoriesQuery } from '../../../Hooks/useQuery';

function Catagories() {
  const {data, isLoading, isError}= useCategoriesQuery();

  return <>
    <Typography component={"h2"} variant='h4' sx={{textAlign:"center"}}>Categories</Typography>
    {isLoading ? <CircularProgress></CircularProgress> : 
    isError ? <Typography sx={{color:"red", fontWeight:"bold", textAlign:"center"}}>Error</Typography> :
      <Grid container spacing={3}>
        {data.map((category)=>{
          return <Grid size={{ xs: 12, sx: 6, md:4, lg:2}} key={category.id}>
            <Box sx={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center",border:"1px solid  rgba(128, 128, 128, 0.2)", padding:"30px 0", width:"220px"}}>
              <img src={category1} alt="" className={`${style.img}`}/>
              <Typography component={"a"} sx={{marginBottom:"5px", fontWeight:"bold"}}>{category.name}</Typography>
              <Typography component={"span"} sx={{color:"gray"}}>? items</Typography>
            </Box>
          </Grid>
        }
        )}
      </Grid>
    }
  </>
}

export default Catagories
