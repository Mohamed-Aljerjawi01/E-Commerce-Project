import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import bgColor  from '../../../assets/media/imges/bgColor.png';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { SendCodeValidationSchema } from '../../Validations/Schems'
import CircularProgress from '@mui/material/CircularProgress'
import { useSendCodeMutation } from '../../../Hooks/useMutation';

function SendCode() {
  const {register,handleSubmit, formState:{errors,isSubmitting}} = useForm({
    resolver: yupResolver(SendCodeValidationSchema),
    mode:"onBlur"
  });

  const {mutateAsync } = useSendCodeMutation();

  async function submit(data){
    // console.log(data);
    await mutateAsync(data);
  }

  return <>
    <Box sx={{width:"70%", height:"90vh",position:"absolute",top:"50%", left:"50%", translate:"-50% -50%", display:"flex", justifyContent:"center", alignItems:"center",border:"2px solid green",borderRight:"0", borderRadius:"20px", overflow:"hidden"}}>
      <Box sx={{width:"50%",height:"100%", backgroundColor:"#fff", textAlign:"center", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:"20px"}}>
        <Typography component={"h3"} variant='h3' color='green'>Send Code</Typography>
        <Box component={"form"} onSubmit={handleSubmit(submit)} sx={{display:"flex", flexDirection:"column", gap:"10px", width:"80%"}}>
          <TextField label="Email" type='email' placeholder='Enter Email Please!' color='success' variant="outlined" {...register("email")} error={errors.email} helperText={errors.email?.message}/>
          <Button type='submit' variant="contained" color="success" sx={{fontSize:'16px'}} disabled={isSubmitting}>{isSubmitting ? <CircularProgress /> : "Send"}</Button>
        </Box>
      </Box>
      <Box sx={{width:"50%", height:"100%", backgroundImage:`url(${bgColor}),linear-gradient(to left , green ,White)`, backgroundRepeat:"no-repeat", backgroundSize:"contain", backgroundPosition:"center"}}></Box>
    </Box>
  </>
}

export default SendCode
