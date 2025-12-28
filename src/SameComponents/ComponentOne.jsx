import bgImg from "./../assets/media/imges/bg-img-productDetails.jpg"
import Box from '@mui/material/Box';

function ComponentOne({children}) {
  return <>
    <Box sx={{width:"100%", minHeight:"300px", position:"relative"}}>
        <Box sx={{width:"100%", height:"300px", backgroundImage:`url(${bgImg})`, filter:'brightness(0.5)'}}></Box>
        {children}
    </Box>
  </>
}

export default ComponentOne
