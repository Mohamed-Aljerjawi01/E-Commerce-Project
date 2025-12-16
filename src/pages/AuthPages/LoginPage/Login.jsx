// وهذا رابط لل API المستخدم
// https://knowledgeshop.runasp.net/api/Auth/Account/Login

import React from 'react'
import  Box  from '@mui/material/Box';
import bgColor  from '../../../assets/media/imges/bgColor.png';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import  { useForm }  from 'react-hook-form';
import axios from 'Axios';
import { Slide, toast } from 'react-toastify';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from '../../Validations/LoginValidations';
import CircularProgress from '@mui/material/CircularProgress';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';

function Login() {
  const {register,handleSubmit,formState:{errors,isSubmitting}} = useForm({
    resolver: yupResolver(schema),
    mode:"onBlur"
  });

  async function submit(data){
    // console.log(data);
    try{
      const response = await axios.post(`https://knowledgeshop.runasp.net/api/Auth/Account/Login`,data);
      console.log(response);

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
      // localStorage.setItem('token',response.data.accessToken);
      
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

      if(response.status == 200){
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
        localStorage.setItem('token',response.data.accessToken);
      }
    }catch(err){
        console.log(err);
        toast.error(err.response.data.message, {
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
    }
  }

  return <>
    <Box sx={{width:"70%", height:"90vh",position:"absolute",top:"50%", left:"50%", translate:"-50% -50%", display:"flex", justifyContent:"center", alignItems:"center",border:"2px solid green",borderRight:"0", borderRadius:"20px", overflow:"hidden"}}>
      <Box sx={{width:"50%",height:"100%", backgroundColor:"#fff", textAlign:"center", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:"20px"}}>
        <Typography component={"h3"} variant='h3' color='green'>Login</Typography>
        <Box component={"form"} onSubmit={handleSubmit(submit)} sx={{display:"flex", flexDirection:"column", gap:"10px", width:"80%"}}>
          <TextField label="Email" type='email' placeholder='Enter Email Please!' color='success' variant="outlined" {...register("email")} error={errors.email} helperText={errors.email?.message}/>
          <TextField label="Password" type='password' placeholder='Enter Password Please!' color='success'variant="outlined" {...register("password")} error={errors.password} helperText={errors.password?.message}/>
          <Link component={RouterLink} to="/auth/sendcode" underline='none' color='green'>Forget Password?</Link>
          <Button type='submit' variant="contained" color="success" sx={{fontSize:'16px'}} disabled={isSubmitting}>{isSubmitting ? <CircularProgress /> : "Login"}</Button>
        </Box>
      </Box>
      <Box sx={{width:"50%", height:"100%", backgroundImage:`url(${bgColor}),linear-gradient(to left , green ,White)`, backgroundRepeat:"no-repeat", backgroundSize:"contain", backgroundPosition:"center"}}></Box>
    </Box>
  </>
}

export default Login


