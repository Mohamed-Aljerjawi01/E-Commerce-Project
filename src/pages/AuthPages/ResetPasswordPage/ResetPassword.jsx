import { ResetPasswordValidationSchema } from '../../Validations/Schems'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useResetPasswordMutation } from '../../../Hooks/useMutation';
import { useTranslation } from 'react-i18next';
import { Box, Button, Grid, TextField, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useAuthStore } from '../../../Store/MyStore';

function ResetPassword() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: yupResolver(ResetPasswordValidationSchema),
    mode: "onBlur"
  });

  const { mutateAsync, isPending } = useResetPasswordMutation();

  async function submit(data) {
    // console.log(data);
    await mutateAsync(data);
  }

  const theme = useTheme();
  const downSm = useMediaQuery(theme.breakpoints.down('sm'));
  const downMd = useMediaQuery(theme.breakpoints.down('md'));
  const isSm = useMediaQuery(theme.breakpoints.only('sm'));
  const isMd = useMediaQuery(theme.breakpoints.only('md'));
  const isXs = useMediaQuery(theme.breakpoints.only('xs'));
  const upSm = useMediaQuery(theme.breakpoints.up('sm'));

  const mode = useAuthStore(state=> state.mode);

  const { t, i18n } = useTranslation();

  return <>
    <Box sx={{ width: "100%", height: "100vh", backgroundColor: "rgba(128,128,128,0.2)", display:"flex", justifyContent:"center", alignItems:"Center" }}>
      <Grid container sx={{ border: "3px solid #66bb6a", backgroundColor: mode==='dark'?'dark':'#fff', width: downSm ? "100%" : isSm ? "90%" : isMd ? "80%" : "70%", height: downSm ? "100vh" : "80vh", boxShadow: "0px 0px 30px gray", borderRadius: downSm ? "0" : "20px", overflow: "auto" }}>
        <Box sx={{ display: "flex", flexDirection: downSm ? "column" : "row", gap: isXs ? 5 : 1, minHeight: "100%", width: "100%" }}>
          <Grid size={{ xs: 12, sm: 5 }}>
            <Box sx={{ height: "100%",  display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: downSm ? "5px" : "13px", padding: "15px 0", backgroundColor: "#66bb6a", borderTopRightRadius: downSm ? "0" : i18n.language==='en'?"30%":"0", borderTopLeftRadius: downSm?'0':i18n.language==='en'?'0':'30%', borderBottomRightRadius: i18n.language==='en'?"30%":upSm?'0':'30%', borderBottomLeftRadius: downSm ? "30%" : i18n.language==='en'?"0":"30%" }}>
              <Typography sx={{ color: "#fff", fontWeight: "bold", fontSize: downMd ? '28px' : '33px' }}>{t('Hello, Welcome!')}</Typography>
              <Typography sx={{ color: "#fff" }}>{t("Don't have an account?")}</Typography>
              <Button component={RouterLink} to={'/auth/signup'} sx={{ color: "#fff", border: "1px solid #fff", fontSize: "15px", '&:hover': { backgroundColor: "#fff", color: "#66bb6a" }, transition: "all linear 0.2s" }}>{t('Sign Up Now!')}</Button>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, sm: 7 }} sx={{ marginBottom: isXs ? "50px" : "30px", marginTop:upSm?"30px":"0", display:"flex", justifyContent:"center" }}>
            <Box sx={{ width: "80%", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 5 }}>
              <Typography component={"h3"} variant='h3' color='#66bb6a' sx={{ fontSize: isMd || isXs ? "33px" : isSm ? "28px" : "40px", position: "relative", '&::after': { content: `""`, position: "absolute", bottom: "-10px", left: i18n.language==='en'?0:'30%', backgroundColor: "#66bb6a", width: "70%", height: "3px", borderRadius: "5px" } }}>{t('Reset Password')}</Typography>
              <Box component={"form"} onSubmit={handleSubmit(submit)} sx={{ display: "flex", flexDirection: "column", gap: 2, width: "100%" }}>
                  <TextField label={t('Email')} type='email' sx={{color:"red"}} variant="outlined" disabled value={localStorage.getItem("email")} {...register("email")} />
                  <TextField label={t('Code')} type='text' placeholder={t('Enter a Code Please!')} color='success' variant="outlined" {...register("code")} error={errors.code} helperText={t(errors.code?.message)} />
                  <TextField label={t('New Password')} type='password' placeholder={t('Enter New Password Please!')} color='success' variant="outlined" {...register("newPassword")} error={errors.newPassword} helperText={t(errors.newPassword?.message)} />
                  <Button type='submit' variant="contained" sx={{ fontSize: '16px', backgroundColor:"#66bb6a", color:"#fff" }} disabled={isPending}>{isPending ? <CircularProgress sx={{color:"#80b501"}}/> : t('Reset')}</Button>
              </Box>
            </Box>
          </Grid>
        </Box>
      </Grid>
    </Box>
  </>
}

export default ResetPassword
