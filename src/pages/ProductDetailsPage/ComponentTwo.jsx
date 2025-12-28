import Box from '@mui/material/Box';
import Img1 from "./../../assets/media/imges/details-01.png"
import Img2 from "./../../assets/media/imges/details-02.png"
import Img3 from "./../../assets/media/imges/details-03.png"
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';
import Button from '@mui/material/Button';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import FavoriteIcon from '@mui/icons-material/Favorite';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function ComponentTwo() {
  return <>
    <Container>
      <Box sx={{ display: "flex", alignItems:"center", gap: 10, margin:"100px 0"}}>
        <Box sx={{ width: "50%", display: "flex", gap: 3, alignItems: "flex-start" }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3, width: "15%" }}>
            <Box sx={{ border: "1px solid #80b501", borderRadius: "5px", width: "100%", height: "85px" }}><img src={Img1} alt="" width={'100%'} height={'100%'} /></Box>
            <Box sx={{ border: "1px solid rgba(128, 128, 128,0.5)", borderRadius: "5px", width: "100%", height: "85px" }}><img src={Img2} alt="" width={'100%'} height={'100%'} /></Box>
            <Box sx={{ border: "1px solid rgba(128, 128, 128,0.5)", borderRadius: "5px", width: "100%", height: "85px" }}><img src={Img3} alt="" width={'100%'} height={'100%'} /></Box>
          </Box>
          <Box sx={{ backgroundColor: "rgba(128, 128, 128,0.08)", width: "85%" }}>
            <img src={Img1} alt="" width={"100%"} height={"400px"} />
          </Box>
        </Box>
        <Box sx={{ width: "50%", display:"flex", flexDirection:"column", gap:3}}>
          <Box sx={{display:"flex", flexDirection:"column", gap:2}}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Link sx={{ color: "#fff", backgroundColor: "#80b501", padding: "5px 10px", borderRadius: "5px", textDecoration: "none", textTransform: "uppercase" }}>Construction</Link>
              <Rating
                name="custom-colored-rating"
                value={2} // The filled value
                max={3} // Total stars
                precision={1} // To ensure whole stars
                icon={<StarIcon fontSize="inherit" sx={{ color: '#80b501' }} />} // Filled icon
                emptyIcon={<StarIcon fontSize="inherit" />} // Empty icon with border
              />
              <Typography>10 Reviews</Typography>
            </Box>
            <Box>
              <Typography component={"h4"} variant='h4'>Broccoli Organic</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1,}}>
              <Typography component={"span"} sx={{ textDecoration: "line-through", color: "rgba(128, 128, 128,0.5);", fontWeight:"bold"}}>$30.35</Typography>
              <Typography component={"span"} sx={{fontSize:"26px", color:"#80b501", fontWeight:"bold"}}>$19.25</Typography>
            </Box>
            <Box>
              <Typography>
                Priyoshop has brought to you the Hijab 3 Pieces Combo Pack PS23.
                It is a completely modern design and you feel comfortable to put on this hijab.
                Buy it at the best price.
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
            <Box sx={{display:"flex", alignItems:"center", padding: "15px 20px", border: "1px solid rgba(128, 128, 128,0.5);", borderRadius: "40px", color: "gray" }}>
              <RemoveIcon sx={{color:"rgba(128, 128, 128,0.5)"}} /><Typography component={"span"} sx={{ padding: "0 20px", color: "#80b501" }}>1</Typography><AddIcon sx={{color:"rgba(128, 128, 128,0.5)"}}/>
            </Box>
            <Box>
              <Button sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 1, backgroundColor: "#80b501", color: "#fff", padding: "15px 30px", borderRadius: "40px" }}>
                <Typography sx={{ textTransform: "line-through" }}>Add To Cart</Typography>
                <ShoppingBasketIcon />
              </Button>
            </Box>
            <Box sx={{ display: "flex", border: "1px solid rgba(128, 128, 128,0.5)", borderRadius: "50%", padding: "15px" }}>
              <FavoriteIcon sx={{ color: "rgba(128, 128, 128,0.7)" }} />
            </Box>
          </Box>
          <Box sx={{display:"flex", flexDirection:"column", gap:1}}>
            <Box sx={{color:"#555555"}}>
              <Typography component={"span"} sx={{textTransform:"uppercase", fontWeight:"bold"}}>sku: </Typography>
              <Link sx={{color:"black", textDecoration:"none"}}>BO1D0MX8SJ</Link>
            </Box>
            <Box sx={{color:"#555555"}}>
              <Typography component={"span"} sx={{fontWeight:"bold"}}>Categories: </Typography> 
              <Link sx={{color:"black", textDecoration:"none"}}>Milk, </Link>
              <Link sx={{color:"black", textDecoration:"none"}}>Cream, </Link>
              <Link sx={{color:"black", textDecoration:"none"}}>Fermented</Link>
            </Box>
            <Box sx={{color:"#555555"}}>
              <Typography component={"span"} sx={{fontWeight:"bold"}}>Tags: </Typography>
              <Link sx={{color:"black", textDecoration:"none"}}>Cheese, </Link>
              <Link sx={{color:"black", textDecoration:"none"}}>Custard, </Link>
              <Link sx={{color:"black", textDecoration:"none"}}>Frozen</Link>
            </Box>
          </Box>
          <Box sx={{display:"flex"}}>
            <Typography sx={{color:"#555555", fontWeight:"bold"}}>Share: </Typography>
            <Box sx={{display:"flex", color:"rgba(128, 128, 128,0.7)", gap:1}}>
              <FacebookIcon />
              <TwitterIcon />
              <YouTubeIcon />
              <LinkedInIcon />
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  </>
}

export default ComponentTwo
