import { useEffect } from 'react'
import { useTranslation } from 'react-i18next';

function DirectionManage() {
    const { i18n } = useTranslation();

    useEffect(function(){
        document.documentElement.dir = i18n.language==='ar'?'rtl':'ltr';
    },[i18n.language]);
}

export default DirectionManage
