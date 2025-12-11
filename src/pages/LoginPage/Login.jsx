import React from 'react'
import  Box  from '@mui/material/Box';
import bgColor  from '../../assets/media/imges/bgColor.png';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import  { useForm }  from 'react-hook-form';
import axios from 'Axios';


function Login() {
  const {register,handleSubmit} = useForm();

  async function submit(data){
    // console.log(data);
    try{
      const response = await axios.post(`https://knowledgeshop.runasp.net/api/Auth/Account/Login`,data);
      console.log(response);
      if(response.status == 200){
        localStorage.setItem('token',response.data.accessToken);
      }
    }catch(err){

    }
  }

  return <>
    <Box sx={{width:"70%", height:"90vh",position:"absolute",top:"50%", left:"50%", translate:"-50% -50%", display:"flex", justifyContent:"center", alignItems:"center",border:"2px solid green",borderRight:"0", borderRadius:"20px", overflow:"hidden"}}>
      <Box sx={{width:"50%",height:"100%", backgroundColor:"#fff", textAlign:"center", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:"20px"}}>
        <Typography component={"h3"} variant='h3' color='green'>Login</Typography>
        <Box component={"form"} onSubmit={handleSubmit(submit)} sx={{display:"flex", flexDirection:"column", gap:"10px", width:"80%"}}>
          <TextField label="Email" color='success' variant="outlined" {...register("email")}/>
          <TextField label="Password" color='success'variant="outlined" {...register("password")}/>
          <Button variant="contained" color="success" type='submit' sx={{fontSize:'16px'}}>Login</Button>
        </Box>
      </Box>
      <Box sx={{width:"50%", height:"100%", backgroundImage:`url(${bgColor}),linear-gradient(to left , green ,White)`, backgroundRepeat:"no-repeat", backgroundSize:"contain", backgroundPosition:"center"}}></Box>
    </Box>
  </>
}

export default Login
