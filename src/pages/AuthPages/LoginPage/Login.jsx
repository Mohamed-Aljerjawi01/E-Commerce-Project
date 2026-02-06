// وهذا رابط لل API المستخدم
// https://knowledgeshop.runasp.net/api/Auth/Account/Login

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginValidationSchema } from './../../Validations/Schems';
import CircularProgress from '@mui/material/CircularProgress';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';
import { useLoginMutation } from './../../../Hooks/useMutation';
import { useTranslation } from 'react-i18next';
import { Grid, useMediaQuery, useTheme } from '@mui/material';
import { useAuthStore } from '../../../Store/MyStore';

function Login() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: yupResolver(LoginValidationSchema),
    mode: "onBlur"
  });

  const { mutateAsync } = useLoginMutation();

  async function submit(data) {
    // console.log(data);
    await mutateAsync(data);

    // هنا مكان الشرح الذي بالأسفل , قمنا بوضغه بالأسفل لأنه كبير ولا يتسع لوضعه هنا
  }

  const theme = useTheme();
  const downSm = useMediaQuery(theme.breakpoints.down('sm'));
  const downMd = useMediaQuery(theme.breakpoints.down('md'));
  const upSm = useMediaQuery(theme.breakpoints.up('sm'));
  const isSm = useMediaQuery(theme.breakpoints.only('sm'));
  const isMd = useMediaQuery(theme.breakpoints.only('md'));
  const isXs = useMediaQuery(theme.breakpoints.only('xs'));

  const mode = useAuthStore(state=> state.mode);

  const { t, i18n } = useTranslation();

  return <>
    <Box sx={{ width: "100%", height: "100vh", backgroundColor: "rgba(128,128,128,0.2)", display:"flex", justifyContent:"center", alignItems:"Center" }}>
      <Grid container sx={{ border: "3px solid #66bb6a", backgroundColor: mode==='dark'?'dark':'#fff', width: downSm ? "100%" : isSm ? "90%" : isMd ? "80%" : "70%", height: downSm ? "100vh" : "80vh", boxShadow: "0px 0px 30px gray", borderRadius: downSm ? "0" : "20px", overflow: "auto" }}>
        <Box sx={{ display: "flex", flexDirection: downSm ? "column" : "row", gap: isXs ? 5 : 1, minHeight: "100%", width: "100%" }}>
          <Grid size={{ xs: 12, sm: 5 }}>
            <Box sx={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: downSm ? "5px" : "13px", padding: "15px 0", backgroundColor: "#66bb6a", borderTopRightRadius: downSm ? "0" : i18n.language==='en'?"30%":"0", borderTopLeftRadius: downSm?'0':i18n.language==='en'?'0':'30%', borderBottomRightRadius: i18n.language==='en'?"30%":upSm?'0':'30%', borderBottomLeftRadius: downSm ? "30%" : i18n.language==='en'?"0":"30%" }}>
              <Typography sx={{ color: "#fff", fontWeight: "bold", fontSize: downMd ? '28px' : '33px' }}>{t('Hello, Welcome!')}</Typography>
              <Typography sx={{ color: "#fff" }}>{t("Don't have an account?")}</Typography>
              <Button component={RouterLink} to={'/auth/signup'} sx={{ color: "#fff", border: "1px solid #fff", fontSize: "15px", '&:hover': { backgroundColor: "#fff", color: "#66bb6a" }, transition: "all linear 0.2s" }}>{t('Sign Up Now!')}</Button>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, sm: 7 }} sx={{ marginBottom: isXs ? "50px" : "30px", marginTop:upSm?"30px":"0", display:"flex", justifyContent:"center" }}>
            <Box sx={{ width: "80%", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 5 }}>
              <Typography component={"h3"} variant='h3' color='#66bb6a' sx={{ position: "relative", '&::after': { content: `""`, position: "absolute", bottom: "-10px",  left: i18n.language==='en'?0:'30%', backgroundColor: "#66bb6a", width: "70%", height: "3px", borderRadius: "5px" } }}>{t('Login')}</Typography>
              <Box component={"form"} onSubmit={handleSubmit(submit)} sx={{ display: "flex", flexDirection: "column", gap: 2, width: "100%" }}>
                  <TextField label={t('Email')} type='email' placeholder={`${t('Enter')}${' '}${t('Email')}${' '}${t('Please')}${' !'}`} color='success' variant="outlined" {...register("email")} error={errors.email} helperText={t(errors.email?.message)} />
                  <TextField label={t('Password')} type='password' placeholder={`${t('Enter')}${' '}${t('Password')}${' '}${t('Please')}${' !'}`} color='success' variant="outlined" {...register("password")} error={errors.password} helperText={t(errors.password?.message)} />
                  <Link component={RouterLink} to="/auth/sendcode" underline='none' color='success'>{t('Forget')}{(' ')}{t('Password')}{t('?')}</Link>
                  <Button type='submit' variant="contained" sx={{ fontSize: '16px', color:"#fff", backgroundColor:"#66bb6a" }} disabled={isSubmitting}>{isSubmitting ? <CircularProgress color='#80b501'/> : t('Login')}</Button>
              </Box>
            </Box>
          </Grid>
        </Box>
      </Grid>
    </Box>
  </>
}

export default Login

// بعد قيامي بعملية signup
// والضغط على الرابط الذي تم إرساله للايميل المسجل والذي يتمثل بعمل confirme للإيميل
// يمكنني القيام بعملية تسجيل الدخول بناءا على الإيميل المسجل وكلمة المرور المسجلة
// وبعد أن يتم تنفيذ هذا الطلب بنجاح
// سيتم تنفيذ جملة ال try هذه
// وما بداخلها والتي من ضمنها طباعة الناتج عن تنفيذ الطلب وهو المتغير response
// سنلاحظ أن الناتج عن تنفيذ هذا الطلب هو معلومات كثيرة ومن ضمنها
// معلومتين مهمتين وهما accessToken , refreshToken
// ولطباعتها كالتالي
// console.log(response.data.accessToken);
// console.log(response.data.refreshToken);
// ولشرح ما هو accessToken , refreshToken
// سأضرب مثالا كالتالي
// في تطبيقات الدردشة أو في مواقع التسويق الالكتروني
// بعد أن يقوم المستخدم أو العميل بتسجيل دخوله للموقع
// وأراد تنفيذ طلب معين يختص بشراء منتج معين فإنه سيتم إرسال ذلك الطلب
// من المتصفح للسيرفر عبر بروتوكول اسمه HTTP
// ولكن دون تحديد هوية صاحب الطلب أي عندما يقوم السيرفر بالرد على ذلك الطلب
// لن يعرف صاحب ذلك الطلب وبالتالي لن يصل الرد لصاحب الطلب
// إلا في حالة تم إرفاق هوية صاحب الطلب مع الطلب نفسه وإرسالهم للسيرفر عندها سيتم فتح اتصال لحظي
// بين متصفح صاحب الطلب والسيرفر ليقوم البروتوكول HTTP
// بتوصيل ذلك الطلب مع هوية صاحبه للسيرفر وتوصيل
// الرد على ذلك الطلب من السيرفر لمتصفح صاحب الطلب مباشرة و بعد ذلك سيتم انهاء واغلاق الاتصال
// و بالتالي في حالة لم تكن هوية ذلك العميل مخزنة على متصفحه فلن يستطيع السيرفر مجددا
// تحديد هويته عند قيامه بطلب اخر
// ولذلك يجب تخزين والاحتفاظ بهوية العميل في متصفحه
// ليتسنى للبروتوكول HTTP
// إرفاق هويته مع الطلب الذي قام به في كل مرة يقوم بها ذلك العميل بتنفيذ أي طلب
// ليتسنى للسيرفر تحديد هويته وإرسال الرد على ذلك الطلب إليه مباشرة
// وهنا يأتي دور accessToken
// والذي يمثل هوية لصاحب الطلب حيث يقوم البروتوكول HTTP
// بإرفاق هذا accessToken
// مع الطلب الذي قام العميل به
// في كل مرة يقوم بها ذلك العميل بتنفيذ أي طلب
// وذلك ليتسنى للسيرفر تحديد هوية صاحب ذلك الطلب وإرسال الرد على ذلك الطلب إليه مباشرة
// ومعلومات أخرى على حول accessToken
// 1- يقوم الباك اند بإنشائه وإعطائه للعميل بعد أن يقوم بعملية تسجيل الدخول للموقع
//    وذلك ليتسنى للفرونت اند تخزينه في متصفح العميل وذلك لكي يتسنى للبروتوكول HTTP
//    إرفاقه مع الطلب الذي قام به ذلك العميل وإرسالهم للسيرفر
//    وذلك لكي يتسنى للسيرفر تحديد هويته وإرسال الرد على ذلك الطلب إليه مباشرة
// 2- يكون مشفر ولكنه يمكن فك تشفيره بسهولة فلا ينصح بوضع معلومات حساسة بداخله
//    كمعلومات خاصة بالحسابات البنكية أو ما شابه ذلك
//    ومن أحد المواقع التي تقوم بفك تشفير هذا accessToken
//    هو موقع https://www.jwt.io/
//    وذلك من خلال نسخ قيمة ذلك accessToken
//    ولصقها في هذا الموقع فستظهر لنا المعلومات التي يحتويها هذا accessToken
// ولكي نقوم بتخزين هوية العميل أي accessToken
// الخاصة بالعميل في المتصفح الخاص به يتم ذلك عن طريق
// تخزينها في localStorage
// كما في الكود التالي
// localStorage.setItem('accessToken',response.data.accessToken);
// طبعا وجود ال accessToken
// في متصفح المستخدم أو العميل يعني أنه مسجل الدخول على ذلك الموقع حاليا

// الفرق بين accessToken , refreshToken
// هو أن accessToken
// تخزن في متصفح العميل
// و تكون مدته الزمنية قصيرة بحسب طبيعة الموقع وذلك لكي لا يتسبب في مشاكل أمنية
// فمثلا لو كانت المدة الزمنية لل accessToken
// كبيرة بالنسبة لطبيعة المشروع وتم اختراق هذا accessToken
// الخاص بعميل معين فإن هذا المخترق سيستطيع القيام بأي طلب يريده على ذلك الموقع وي كأنه
// العميل الأصلي صاحب هذا accessToken
// فلذلك يجب أن تكون المدة الزمنية لل accessToken قصيرة
// ولكن هناك مشكلة ستحدث في هذه الحالة وهو أنه عندما تنتهي المدة الزمنية لذلك ال accessToken
// سيتم إضاعة هوية ذلك العميل مرة أخرى وأيضا سيتم عمل تسجيل خروج لذلك العميل من الموقع
// وبالتالي لكي يتمكن من تنفيذ أي طلبات على الموقع فإنه سيحتاج لتسجيل الدخول مرة اخرى
// وهكذا في كل مرة تنتهي المدة الزمنية لل accessToken الخاصة بذلك العميل
// وهذا أمر متعب وغير منطقي فهنا يأتي دور refreshToken
// حيث يخزن ال refreshToken
// في الداتا بيز وليس في متصفح العميل
// و تكون مدته الزمنية أطول بكثير من مدة accessToken
// والهدف الأساسي منه هو أن يقوم بإنشاء accessToken
// جديد للعميل عندما تنتهي فترة صلاحية او المدة الزمنية الخاصة بذلك accessToken الخاص بذلك العميل
// أي تجديد ال accessToken الخاص بذلك العميل
// قبل أن يتم تسجيل خروجه من الموقع
// مما يتيح للعميل إكمال طلباته على الموقع دون أن يقوم بإعادة تسجيل دخوله إليه ودون أن يفقد هويته
// طبعا كلا accessToken , refreshToken
// يقوم الباك اند بإنشائهم

// وهل يوجد بروتوكول أفضل من بروتوكول HTTP
// لإرسال الطلبات ؟
// نعم يوجد بروتوكول اخر باسم WebSocket
// هو بروتوكول اتصال يُستخدم لإنشاء اتصال دائم و مفتوح
// بين المتصفح والسيرفر
// بحيث يسمح بتبادل البيانات بشكل فوري و دائم (Real-Time)
// في الاتجاهين دون الحاجة لإعادة إرسال طلب في كل مرة
// أي في حالة قام العميل بتنفيذ طلب ما على الموقع فسيتم إرسال ذلك الطلب مع هوية صاحبه أي مع accessToken
// الخاص بذلك العميل للسيرفر
// لمرة واحدة فقط و لن يحتاج لإعادة إرسالهم مرة أخرى عند قيامه بتنفيذ طلب اخر جديد
// وذلك لأن البروتوكول WebSocket
// لا يقوم بانهاء واغلاق ذاك الاتصال الذي أنشؤه ما بين المتصفح والسيرفر بعد تنفيذ ذلك الطلب بل
// يقوم بإنشاء اتصال دائم و مفتوح
// بين المتصفح والسيرفر
// بحيث يسمح بتبادل البيانات بشكل فوري و دائم (Real-Time)
// في الاتجاهين دون الحاجة لإعادة إرسال الطلب وهوية صاحبه في كل مرة
// وهذا هو الفرق الجوهري بين البروتوكول HTTP , WebSocket
// فآلية عمل البروتوكول WebSocket
// هي في انه يسلك سلوك البروتوكول HTTP
// في البداية أي في أول طلب يقوم بتنفيذه العميل ومن ثم سيتم ترقية
// الاتصال من HTTP
// ل WebSocket
// فيصبح الاتصال دائم ومفتوح وفوري وثنائي الاتجاهات وسريع جدا
// وبعد ذلك يستطيع السيرفر إرسال بيانات للعميل بدون أن يقوم العميل بإعادة إرسال الطلب والعميل يستطيع الإرسال في أي وقت
// أي أن البروتوكول WebSocket
// يعتمد على البروتوكول HTTP
// وهما مكملان لبعضهما البعض
// فاستخدامات البروتوكول HTTP
// مثل جلب بيانات عادية  أو تطبيق CRUD (Create, Read, Update, Delete) عادي
// اما استخدامات البروتوكول WebSocket
// مثل تطبيقات الدرشة و المواقع التي بها إشعارات فورية و لوحات التحكم و مواقع التسوق الإلكتروني
