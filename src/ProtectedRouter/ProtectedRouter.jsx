import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../Store/MyStore'
import Typography from '@mui/material/Typography';

function ProtectedRouter({children}) {
    const accessToken = useAuthStore((state)=>state.accessToken);

    if(accessToken){
        return <>
            {children}
        </>
    }

    return <Navigate to="/auth/login" />

    //   return <>
    //     <Typography component={"h2"} variant='h2' className='text-center mt-5'>You are not authorized to view this page</Typography>
    //   </>
}

export default ProtectedRouter

// نقوم بإستقبال ال accessToken
// من ملف ال MyStore.jsx 
// الذي قمنا بإنشائه سابقا وليس من ال localStorage مباشرةً
// وذلك لأنه قد أحتاج في المستقبل لتخزين ال accessToken
// في مكان اخر غير ال localStorage
// فعندها سأضطر في كل مرة قمت باستخدام ال localStorage
// فيها لتخزين ال accessToken
// لتغيير كل تلك الأماكن التي قمت فيها باستخدام ال localStorage
// إلى المكان الجديد الذي قمت بتخزين ال accessToken فيه
// فلذلك نقوم بإستقباله من ملف ال store مباشرةً
// ومن ثم نقوم بفحص accessToken
// ففي حالة وجوده فيعني أن المستخدم مسجل دخوله
// وبهذا يمكنني عرض المكونات أو الصفحات التي أريد حمايتها
// أما في حالة عدم وجوده فيعني أن المستخدم غير مسجل دخوله
// وبهذا لا يمكنني عرض تلك المكونات أو الصفحات 
// لذلك أقوم بإعادة توجيهه إلى صفحة تسجيل الدخول
// من خلال المكون <Navigate />
// الذي قمنا باستيراده من مكتبة ال react-router-dom
// والذي يقوم بإعادة توجيه المستخدم إلى المسار الذي أقوم بتحديده له
// أو يمكنني عرض رسالة تفيد بعدم وجود صلاحية للمستخدم
// لمشاهدة هذه الصفحة المحمية
// أو عرض محتوى أخر حسب ما أريد

// ومن ثم نقوم بالذهاب لملف ال Route.jsx
// ونقوم باستيراد هذا المكون
// ومن ثم نقوم بتغليف الصفحات أو المكونات التي نريد حمايتها
// بداخل هذا المكون
// وذلك لكي نقوم بحمايتها من المستخدمين غير المسجلين الدخول
// فتم تغليف مكوني ال WishList و ال Cart
// بداخل هذا المكون
// لكي لا يتمكن المستخدمين غير المسجلين الدخول من الوصول إليهم