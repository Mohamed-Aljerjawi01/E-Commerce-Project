import { create } from 'zustand';

// Store Hook 
export const useAuthStore = create((set) => ({
    // accessToken: localStorage.getItem("accessToken") || null,
    // ويمكن اختصار الكود السابق وذلك لأنه في حالة لم يجد قيمة لل
    // key => accessToken
    // في داخل ال localStorage
    // سيرجع القيمة null
    // فلا داعي من كتابة || null
    // فيمكن اختصاره كالتالي
    accessToken: localStorage.getItem("accessToken"),
    // updateAccessToken: newValue=>
    //     set(({accessToken: newValue})),

    // saveAccessTokenInLocalStorage: value=>
    //     localStorage.setItem("accessToken",value),

    // يكننا دمج الفنكشن updateAccessToken , saveAccessTokenInLocalStorage
    // في فنكشن واحدة كون أن تنفيذهما سيكونان مع بعضهما البعض
    // فعندما سأقوم بتحديث قيمة ال accessToken
    // سأقوم بحفضها مباشرة في ال localStorage
    // والفنشكن ستكون كالتالي
    updateAccessToken: value => {
        set(({ accessToken: value }))
        localStorage.setItem("accessToken", value)
    },
    logout: () => {
        localStorage.removeItem("accessToken")
        set(({ accessToken: null }))
    },

    user: JSON.parse(localStorage.getItem("user")) || {},
    updateUser: (newValue) => {
        set(({ user: newValue }))
        localStorage.setItem("user", JSON.stringify(newValue))
    },

    countCart: parseInt(localStorage.getItem("countCart")) || 0,
    increaseCountCart: () => {
        set((state) => ({ countCart: state.countCart + 1 }))
    },
    decreaseCountCart: (newValue = 1) => {
        set((state) => ({ countCart: state.countCart - newValue }))
    },

    page: 1,
    limit: 1,
    increasePage: ()=>{
        set((state) => ({ page: state.page + 1 }));
    },
    changePage: (newValue)=>{
        set(({page: newValue}));
    },
    decreasePage: ()=>{
        set((state) => ({ page: state.page - 1 }));
    },

    mode: localStorage.getItem("themeMode") || "light",
    toggleMode: () =>
        set((state) => {
            const newMode = state.mode === "light" ? "dark" : "light";
            localStorage.setItem("themeMode", newMode);
            return { mode: newMode };
        }),
    changeMode: newValue => {
        set(({mode: newValue}))
        localStorage.setItem("themeMode", newValue)
    }
}));