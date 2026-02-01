import { Box, Card, CardContent, CardMedia, CircularProgress, Typography } from '@mui/material'
import profile1Img from './../../assets/media/imges/profile1.jpg'
import profile2Img from './../../assets/media/imges/profile2.png'
import { useProfileQuery } from './../../Hooks/useQuery';
import { useTranslation } from 'react-i18next';

function ProfileInfo() {
  const { data, isLoading, isError } = useProfileQuery();
  console.log(data);

  const { t } = useTranslation();

  return <>
    {isLoading ? <Box sx={{textAlign:"center"}}>
        <CircularProgress sx={{ color:"#80b501"}}/>
      </Box> :
      isError ? <Typography sx={{ color: "red", fontWeight: "bold", textAlign: "center" }}>Error</Typography> :
        <Box sx={{ width: "100%", height: "500px", boxShadow: "0px 0px 10px rgba(128, 128, 128,0.5)", position: "relative" }}>
          <Box sx={{ width: "100%", height: "80%" }}>
            <Box sx={{ width: "100%", height: "45%", backgroundImage: `url(${profile1Img})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
            </Box>
            <Box sx={{ width: "100%", height: "55%", position: "absolute", top: "20%", textAlign: "center", }}>
              <Card sx={{ width: "100%", height: "100%", boxShadow: 0, border: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }}>
                <CardMedia
                  component={"img"}
                  image={profile2Img}
                  alt={profile2Img}
                  title={profile2Img}
                  sx={{ width: "120px", height: '120px', borderRadius: "100%", boxShadow: "0px 0px 20px gray", borderBottom: "3px solid rgb(0 173 238)" }}
                />
                <CardContent sx={{ borderBottom: "2px solid gray", borderRadius: "20px", width: "80%" }}>
                  <Typography component={"h6"} variant='h6' sx={{ fontSize: "22px", fontWeight: "bold", marginBottom: "10px" }}>{data.fullName}</Typography>
                  <Typography>{data.email}</Typography>
                </CardContent>
              </Card>
            </Box>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-around", textAlign: "center" }}>
            <Box>
              <Typography sx={{ fontWeight: "bold", marginBottom: 1 }}>{t('Phone Number')}</Typography>
              <Typography>{data.phoneNumber}</Typography>
            </Box>
            <Box>
              <Typography sx={{ fontWeight: "bold", marginBottom: 1 }}>{t('Number of Orders')}</Typography>
              <Typography>{data.orders.length} {t('Orders')}</Typography>
            </Box>
            <Box >
              <Typography sx={{ fontWeight: "bold", marginBottom: 1 }}>{t('Status')}</Typography>
              <Typography sx={{ textShadow: "0px 0px 10px #000", color: "green" }}>{t('Active')}</Typography>
            </Box>
          </Box>
        </Box>
    }
  </>
}

export default ProfileInfo
