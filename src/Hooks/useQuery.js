import { useAxiosQuery } from "./useAxiosQuery";
import axiosAuthInstance from "../API/axiosAuthInstance";
import i18n from "../LanguageSettings/i18n";
import { useAuthStore } from "../Store/MyStore";

// query 1 : useCategoriesQuery
export function useCategoriesQuery() {
    return useAxiosQuery(['categories',i18n.language], '/Categories');
}

// query 2 : useProductsQuery
export function useProductsQuery(filters={}) {
const {page, limit} = useAuthStore();
    return useAxiosQuery(['products', i18n.language, filters, page], `/Products?limit=${limit}&page=${(page)}`, filters);
    // قمنا بوضع ['products',i18n.language]
    // وذلك لعمل cashing
    // لبيانات المنتجات لكل لغة على حدة 
    // بناء على اللغة المختارة
}

// query 3 : useProductDetailsQuery
export function useProductDetailsQuery(productId) {
    return useAxiosQuery(['productDetails', productId, i18n.language], `/Products/${productId}`);
    // قمنا بوضع هذا ['productDetails',productId]
    // وذلك لعمل cashing
    // لبيانات كل منتج على حدة 
    // بناء على productId
}

// query 4 : useProductsOfCategoryQuery
export function useProductsOfCategoryQuery(categoryId) {
    return useAxiosQuery(['productsOfCategory', categoryId, i18n.language], `/Products/category/${categoryId}`);
}

// query 5 :useCartQuery
export function useCartQuery() {
    return useAxiosQuery(['carts', i18n.language], '/Carts', {}, axiosAuthInstance)
}

// query 6 :useProfileQuery
export function useProfileQuery() {
    return useAxiosQuery(['profile', i18n.language], '/Profile', {}, axiosAuthInstance)
}