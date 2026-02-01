import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { SendCodeValidationSchema } from '../../Validations/Schems'
import { useSendCodeMutation } from '../../../Hooks/useMutation';
import { useTranslation } from 'react-i18next';
import { Box, Button, CircularProgress, TextField, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useAuthStore } from '../../../Store/MyStore';

function SendCode() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: yupResolver(SendCodeValidationSchema),
    mode: "onBlur"
  });

  const { mutateAsync } = useSendCodeMutation();

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

  const mode = useAuthStore(state=> state.mode);

  const { t, i18n } = useTranslation();

  return <>
    <Box sx={{ width: "100%", minHeight: "100vh", backgroundColor: "rgba(128,128,128,0.2)", }}>
      <Box sx={{ overflowY: "auto", display: "flex", flexDirection: "column", gap: 5, width: isXs ? "100%" : isSm ? "80%" : isMd ? "60%" : "40%", border: "3px solid #66bb6a", backgroundColor: mode==='dark'?'dark':'#fff', boxShadow: "0px 0px 30px gray", height: downSm ? "100vh" : "80vh", position: "absolute", top: "50%", left: "50%", translate: "-50% -50%", justifyContent: "space-between" }}>
        <Box sx={{ height: "50%", padding: "10px 0", backgroundColor: "#66bb6a", borderBottomRightRadius: "30%", borderBottomLeftRadius: "30%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "10px" }}>
          <Typography sx={{ color: "#fff", fontWeight: "bold", fontSize: downMd ? '28px' : '33px' }}>{t('Hello, Welcome!')}</Typography>
          <Typography sx={{ color: "#fff" }}>{t("Don't have an account?")}</Typography>
          <Button component={RouterLink} to={'/auth/signup'} sx={{ color: "#fff", border: "1px solid #fff", fontSize: "15px", '&:hover': { backgroundColor: "#fff", color: "#66bb6a" }, transition: "all linear 0.2s" }}>{t('Sign Up Now!')}</Button>
        </Box>
        <Box sx={{ paddingBottom: "50px", height: "100%", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 5 }}>
          <Typography component={"h3"} variant='h3' color='#66bb6a' sx={{ position: "relative", '&::after': { content: `""`, position: "absolute", bottom: "-10px",  left: i18n.language==='en'?0:'30%', backgroundColor: "#66bb6a", width: "70%", height: "3px", borderRadius: "5px" } }}>{t('Send Code')}</Typography>
          <Box component={"form"} onSubmit={handleSubmit(submit)} sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2, width: "80%" }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2, width: "100%" }}>
              <TextField label={t('Email')} type='email' placeholder={`${t('Enter')}${' '}${t('Email')}${' '}${t('Please')}${' !'}`} color='success' variant="outlined" {...register("email")} error={errors.email} helperText={t(errors.email?.message)} />
              <Button type='submit' variant="contained" sx={{ fontSize: '16px', backgroundColor:"#66bb6a", color:"#fff" }} disabled={isSubmitting}>{isSubmitting ? <CircularProgress sx={{color:"#80b501"}} /> : t('Send Code')}</Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  </>
}

export default SendCode
