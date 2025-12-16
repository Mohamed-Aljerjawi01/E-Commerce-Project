// رابط ال API المستخدم
// https://knowledgeshop.runasp.net/api/Auth/Account/Register

import React, { useState } from 'react'
import  Box  from '@mui/material/Box';
import bgColor  from '../../../assets/media/imges/bgColor.png';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import  { useForm }  from 'react-hook-form';
import axios from 'Axios';
import { Slide, toast } from 'react-toastify';
import { yupResolver } from "@hookform/resolvers/yup";
import CircularProgress from '@mui/material/CircularProgress';
import schema from './../../Validations/SignupValidations';

function Signup() {
  const [serverErrors , setServerErrors] = useState([]);
  
  const {register,handleSubmit,formState:{errors,isSubmitting}} = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur"
  });

  async function submit(data){
    // console.log(data);
    try{
      const response = await axios.post(`https://knowledgeshop.runasp.net/api/Auth/Account/Register`,data);
      console.log(response);

      // بعد أن يتم الطلب بنجاح سيتم إرسال رسالة للإيميل الذي تم إدخاله في الفورم
      // تفيد بعمل comfirme للإيميل
      // وبعد الضغط على الرابط confirme 
      // سيتم اعتماد بياناتك في قاعدة البيانات ومن ثم يمكنك عمل تسجيل دخول للموقع بحسب 
      // البيانات المطلوبة وهي الإيميل وكلمة المرور المسجلين

      if(response.status == 201){
        toast.success(response.data.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Slide,
        });

        setServerErrors("")
      }
    }catch(err){
        // console.log(err);
        setServerErrors(err.response.data.errors);
  }
}

  return <>
    {
      serverErrors.length>0 ? serverErrors.map(function(serverError){
        toast.error(serverError, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Slide,
        })
        setServerErrors("");
      })
      : null
    }
    <Box sx={{width:"70%", height:"90vh",position:"absolute",top:"50%", left:"50%", translate:"-50% -50%", display:"flex", justifyContent:"center", alignItems:"center",border:"2px solid green",borderRight:"0", borderRadius:"20px", overflow:"hidden"}}>
      <Box sx={{width:"50%",height:"100%", backgroundColor:"#fff", textAlign:"center", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:"20px"}}>
        <Typography component={"h3"} variant='h3' color='green'>Sign Up</Typography>
        <Box component={"form"} onSubmit={handleSubmit(submit)} sx={{display:"flex", flexDirection:"column", gap:"10px", width:"80%"}}>
          <TextField label="User-Name" type='text' placeholder='Enter User-Name Please!' color='success' variant="outlined" {...register("userName")} error={errors.userName} helperText={errors.userName?.message}/>
          <TextField label="Full-Name" type='text' placeholder='Enter Full-Name Please!' color='success' variant="outlined" {...register("fullName")} error={errors.fullName} helperText={errors.fullName?.message}/>
          <TextField label="Email" type='email' placeholder='Enter Email Please!' color='success' variant="outlined" {...register("email")} error={errors.email} helperText={errors.email?.message}/>
          <TextField label="Password" type='password' placeholder='Enter Password Please!' color='success'variant="outlined" {...register("password")} error={errors.password} helperText={errors.password?.message}/>
          <TextField label="Phone Number" type='tel' placeholder='Enter Phone-Number  Please!' color='success' variant="outlined" {...register("phoneNumber")} error={errors.phoneNumber} helperText={errors.phoneNumber?.message}/>
          <Button type='submit' color="success" variant="contained" sx={{fontSize:'16px'}} disabled={isSubmitting}>{isSubmitting ? <CircularProgress /> : "Sign up"}</Button>
        </Box>
      </Box>
      <Box sx={{width:"50%", height:"100%", backgroundImage:`url(${bgColor}),linear-gradient(to left , green ,White)`, backgroundRepeat:"no-repeat", backgroundSize:"contain", backgroundPosition:"center"}}></Box>
    </Box>
  </>
}

export default Signup