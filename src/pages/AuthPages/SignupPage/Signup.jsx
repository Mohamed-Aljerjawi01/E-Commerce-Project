// رابط ال API المستخدم
// https://knowledgeshop.runasp.net/api/Auth/Account/Register

import { useForm } from 'react-hook-form';
import { Slide, toast } from 'react-toastify';
import { yupResolver } from "@hookform/resolvers/yup";
import { SignupValidationSchema } from '../../Validations/Schems';
import { useSignupMutation } from '../../../Hooks/useMutation';
import { useTranslation } from 'react-i18next';
import { Grid, Box, useMediaQuery, useTheme, Typography, Button, TextField, CircularProgress } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useAuthStore } from '../../../Store/MyStore';

function Signup() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: yupResolver(SignupValidationSchema),
    mode: "onBlur"
  });

  const { mutateAsync, isPending, serverErrors, setServerErrors } = useSignupMutation();

  async function submit(data) {
    // console.log(data);
    await mutateAsync(data);

    // بعد أن يتم الطلب بنجاح سيتم إرسال رسالة للإيميل الذي تم إدخاله في الفورم
    // تفيد بعمل comfirme للإيميل
    // وبعد الضغط على الرابط confirme 
    // سيتم اعتماد بياناتك في قاعدة البيانات ومن ثم يمكنك عمل تسجيل دخول للموقع بحسب 
    // البيانات المطلوبة وهي الإيميل وكلمة المرور المسجلين
  }

  const theme = useTheme();
  const downLg = useMediaQuery(theme.breakpoints.down('lg'));
  const downSm = useMediaQuery(theme.breakpoints.down('sm'));
  const downMd = useMediaQuery(theme.breakpoints.down('md'));
  const isSm = useMediaQuery(theme.breakpoints.only('sm'));
  const upSm = useMediaQuery(theme.breakpoints.up('sm'));
  const isMd = useMediaQuery(theme.breakpoints.only('md'));
  const isXs = useMediaQuery(theme.breakpoints.only('xs'));

  const mode = useAuthStore(state=> state.mode);

  const { t, i18n } = useTranslation();

  return <>
    {
      serverErrors.length > 0 ? serverErrors.map(function (serverError) {
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
        setServerErrors([]);
      })
        : null
    }

    <Box sx={{ width: "100%", minHeight: "100vh", backgroundColor: "rgba(128,128,128,0.2)", }}>
      <Grid container sx={{ border: "3px solid #66bb6a", backgroundColor: mode==='dark'?'dark':'#fff', width: downSm ? "100%" : isSm ? "90%" : isMd ? "90%" : "80%", height: downSm ? "100vh" : downLg ? "90vh" : "80vh", boxShadow: "0px 0px 30px gray", position: "absolute", top: "50%", left: "50%", translate: "-50% -50%", justifyContent: "space-between", alignItems: "center", borderRadius: downSm ? "0" : "20px", overflow: "hidden" }}>
        <Box sx={{ overflowY:"auto", display: "flex", flexDirection: downSm ? "column" : "row", gap: isXs ? 7 : 1, height: "100%" }}>
          <Grid size={{ xs: 12, sm: 5}} >
            <Box sx={{ height: "100%", padding: "10px 0", backgroundColor: "#66bb6a", borderTopRightRadius: downSm ? "0" : i18n.language==='en'?"30%":"0", borderTopLeftRadius: downSm?'0':i18n.language==='en'?'0':'30%', borderBottomRightRadius: i18n.language==='en'?"30%":upSm?'0':'30%', borderBottomLeftRadius: downSm ? "30%" : i18n.language==='en'?"0":"30%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: downSm ? "5px" : "13px" }}>
              <Typography sx={{ color: "#fff", fontWeight: "bold", fontSize: downMd ? '28px' : '33px' }}>{t('Hello, Welcome!')}</Typography>
              <Typography sx={{ color: "#fff" }}>{t('Do you have an account?')}</Typography>
              <Button component={RouterLink} to={'/auth/login'} sx={{ color: "#fff", border: "1px solid #fff", fontSize: "15px", '&:hover': { backgroundColor: "#fff", color: "#66bb6a" }, transition: "all linear 0.2s" }}>{t('Login Now!')}</Button>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, sm: 7}} sx={{ marginBottom: isXs?"50px":"0" }}>
            <Box sx={{ height: "100%", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 5 }}>
              <Typography component={"h3"} variant='h3' color='success' sx={{ position: "relative", '&::after': { content: `""`, position: "absolute", bottom: "-10px", left: i18n.language==='en'?0:'30%', backgroundColor: "#66bb6a", width: "70%", height: "3px", borderRadius: "5px" } }}>{t('Sign Up')}</Typography>
              <Box component={"form"} onSubmit={handleSubmit(submit)} sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2, width: "80%" }}>
                <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: 2, width: "100%" }}>
                  <TextField label={t('User Name')} type='text' sx={{ width: downLg ? "100%" : "48%" }} placeholder={`${t('Enter')}${' '}${t('User Name')}${' '}${t('Please')}${' !'}`} color='success' variant="outlined" {...register("userName")} error={errors.userName} helperText={t(errors.userName?.message)} />
                  <TextField label={t('Full Name')} type='text' sx={{ width: downLg ? "100%" : "48%" }} placeholder={`${t('Enter')}${' '}${t('Full Name')}${' '}${t('Please')}${' !'}`} color='success' variant="outlined" {...register("fullName")} error={errors.fullName} helperText={t(errors.fullName?.message)} />
                  <TextField label={t('Email')} type='email' sx={{ width: downLg ? "100%" : "48%" }} placeholder={`${t('Enter')}${' '}${t('Email')}${' '}${t('Please')}${' !'}`} color='success' variant="outlined" {...register("email")} error={errors.email} helperText={t(errors.email?.message)} />
                  <TextField label={t('Password')} type='password' sx={{ width: downLg ? "100%" : "48%" }} placeholder={`${t('Enter')}${' '}${t('Password')}${' '}${t('Please')}${' !'}`} color='success' variant="outlined" {...register("password")} error={errors.password} helperText={t(errors.password?.message)} />
                  <TextField label={t('Phone Number')} type='text' fullWidth placeholder={`${t('Enter')}${' '}${t('Phone Number')}${' '}${t('Please')}${' !'}`} color='success' variant="outlined" {...register("phoneNumber")} error={errors.phoneNumber} helperText={t(errors.phoneNumber?.message)} />
                </Box>
                <Button type='submit' variant="contained" sx={{ fontSize: '16px', backgroundColor:"#66bb6a", color:"#fff" }} disabled={isSubmitting}>{isSubmitting ? <CircularProgress sx={{color:"#80b501"}} /> : t('Sign Up')}</Button>
              </Box>
            </Box>
          </Grid>
        </Box>
      </Grid>
    </Box>
  </>
}

export default Signup