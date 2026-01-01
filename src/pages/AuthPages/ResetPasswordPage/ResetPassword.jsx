import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import bgColor  from '../../../assets/media/imges/bgColor.png';
import { ResetPasswordValidationSchema } from '../../Validations/Schems'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import CircularProgress from '@mui/material/CircularProgress'
import { useResetPasswordMutation } from '../../../Hooks/useMutation';

function ResetPassword() {
  const {register,handleSubmit, formState:{errors,isSubmitting}} = useForm({
    resolver: yupResolver(ResetPasswordValidationSchema),
    mode:"onBlur"
  });

  const { mutateAsync, isPending } = useResetPasswordMutation();

  async function submit(data){
    // console.log(data);
    await mutateAsync(data);
  }

  return <>
    <Box sx={{width:"70%", height:"90vh",position:"absolute",top:"50%", left:"50%", translate:"-50% -50%", display:"flex", justifyContent:"center", alignItems:"center",border:"2px solid green",borderRight:"0", borderRadius:"20px", overflow:"hidden"}}>
      <Box sx={{width:"50%",height:"100%", backgroundColor:"#fff", textAlign:"center", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:"20px"}}>
        <Typography component={"h3"} variant='h3' color='green'>Reset Password</Typography>
        <Box component={"form"} onSubmit={handleSubmit(submit)} sx={{display:"flex", flexDirection:"column", gap:"10px", width:"80%"}}>
          <TextField label="Email" type='email' color='success' variant="outlined" disabled value={localStorage.getItem("email")} {...register("email")}/>
          <TextField label="Code" type='text' placeholder='Enter a Code Please!' color='success' variant="outlined" {...register("code")} error={errors.code} helperText={errors.code?.message} />
          <TextField label="New Password" type='password' placeholder='Enter New Password Please!' color='success'variant="outlined" {...register("newPassword")} error={errors.newPassword} helperText={errors.newPassword?.message} />
          <Button type='submit' variant="contained" color="success" sx={{fontSize:'16px'}} disabled={isPending}>{isPending ? <CircularProgress /> : "Reset"}</Button>
        </Box>
      </Box>
      <Box sx={{width:"50%", height:"100%", backgroundImage:`url(${bgColor}),linear-gradient(to left , green ,White)`, backgroundRepeat:"no-repeat", backgroundSize:"contain", backgroundPosition:"center"}}></Box>
    </Box>
  </>
}

export default ResetPassword
