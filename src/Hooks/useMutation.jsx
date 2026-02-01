import { useMutation, useQueryClient } from '@tanstack/react-query';
import axiosInstance from '../API/axiosInstance';
import { useContext, useState } from 'react';
import { Slide, toast } from 'react-toastify';
// import { AuthContext } from '../Context/MyContext';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../Store/MyStore';
import { jwtDecode } from "jwt-decode"
import axiosAuthInstance from './../API/axiosAuthInstance';
import i18n from '../LanguageSettings/i18n';

// Mutation 1 : useLoginMutation
export function useLoginMutation(){
    const navigate = useNavigate();

    // const {setAccessToken, saveAccessTokenInLocalStorage} = useContext(AuthContext);
    const {updateAccessToken, updateUser, user} = useAuthStore();

    async function loginPost (data){
        const response = await axiosInstance.post(`/Auth/Account/Login`,data);
        // console.log(response);
        return response;
    }

    const mutation = useMutation({
        mutationFn: loginPost,
        onSuccess: (response)=>{
            // console.log(response);
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
 
            updateAccessToken(response.data.accessToken);

            const decoded = jwtDecode(response.data.accessToken);
            // console.log(decoded);
            // console.log(`UserName is: ${decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"]}`);
            // console.log(`Role is: ${decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]}`);
            const userData = {
                name: decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"],
                role: decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]
            }
            updateUser(userData);

            navigate('/home');
        },
        onError: (err)=>{
            // console.log(err);
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
    })

    return mutation;
}


// Mutation 2 : useSignupMutation
export function useSignupMutation(){
    const navigate = useNavigate();
    const [serverErrors , setServerErrors] = useState([]);

    async function signup(data){
        const response = await axiosInstance.post(`/Auth/Account/Register`,data);
        return response;
    }

    const { mutateAsync, isPending } = useMutation({
        mutationFn: signup,
        onSuccess: (response)=>{
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
            setServerErrors([])

            navigate('/auth/login');
        },
        onError: (err)=>{
            console.log(err);
            setServerErrors(err.response.data.errors);
        }
    })

    return {mutateAsync, isPending, serverErrors, setServerErrors};
}


// Mutation 3 : useResetPasswordMutation
export function useResetPasswordMutation(){
    const navigate = useNavigate();

    async function resetPassword(data){
        const response = await axiosInstance.patch("/Auth/Account/ResetPassword", data);
        return response;
    }
    const mutation = useMutation({
        mutationFn: resetPassword,
        onSuccess: (response)=>{
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

            navigate("/auth/login");
        },
        onError: (err)=>{
            // console.log(err);
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
    });

    return mutation;
}


// Mutation 4 : useSendCodeMutation
export function useSendCodeMutation(){
    const navigate = useNavigate();

    async function sendCode(data){
        const response = await axiosInstance.post("/Auth/Account/SendCode", data)
        return response;
    }
    const mutation = useMutation({
        mutationFn: sendCode,
        onSuccess: (response,data)=>{
            console.log(response);
            
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
            localStorage.setItem("email",data.email);
            navigate("/auth/resetpassword");
        },
        onError: (err)=>{
            // console.log(err);
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
    });

    return mutation;
}


// Mutation 5 : useAddToCartMutation
export function useAddToCartMutation(){
const queryClient = useQueryClient();
// console.log(queryClient);

const {countCart, increaseCountCart} = useAuthStore();

    async function addToCart({ProductId, Count}){
        // console.log(Count);
        const response = await axiosAuthInstance.post('/Carts', {
            ProductId, // ProductId: ProductId
            Count // Count: Count
        });
        // console.log(response);
        return response;
    }

    const mutation = useMutation({
        mutationFn: addToCart,
        onSuccess: (response)=>{
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

            increaseCountCart();
            localStorage.setItem("countCart", countCart + 1);
            
            queryClient.invalidateQueries({queryKey:['carts',i18n.language]});
        },
        onError: (err)=>{
            toast.error(err.message, {
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
    });

    return mutation;
}


// Mutation 6 : useRemoveFromCartMutation
export function useRemoveFromCartMutation(){
const queryClient = useQueryClient();

const {countCart, decreaseCountCart} = useAuthStore();

    async function deleteFromCart({ProductId}){
        const response = await axiosAuthInstance.delete(`/Carts/${ProductId}`);
        // console.log(response);
        return response;
    }

    const mutation = useMutation({
        mutationFn: deleteFromCart,
        onSuccess: (response)=>{
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

            decreaseCountCart();
            localStorage.setItem("countCart", countCart - 1);

            queryClient.invalidateQueries({queryKey:['carts',i18n.language]});
        },
        onError: (err)=>{
            // console.log(err);
            toast.error(err.message, {
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
    })

    return mutation;
}


// Mutation 7 : useRemoveAllCartMutation
export function useRemoveAllCartMutation(){
const queryClient = useQueryClient();

const {countCart, decreaseCountCart} = useAuthStore();

    async function deletAllCart(){
        const response = await axiosAuthInstance.delete('/Carts/clear');
        // console.log(response);
        return response;
    }

    const mutation = useMutation({
        mutationFn: deletAllCart,
        onSuccess: (response)=>{
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

            decreaseCountCart(countCart);
            localStorage.setItem("countCart", countCart - countCart);

            queryClient.invalidateQueries({queryKey:['carts',i18n.language]});
        },
        onError: (err)=>{
            // console.log(err);
            toast.error(err.message, {
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
    })

    return mutation;
}


// Mutation 8 : useUpdateQuantityMutation
export function useUpdateQuantityMutation(){
const queryClient = useQueryClient();

    async function updateQuantity ({ProductId,count}){
        const response = await axiosAuthInstance.patch(`/Carts/${ProductId}`,{
            count // count:count
        });
        // console.log(response);
        return response
    }
    const mutation = useMutation({
        mutationFn: updateQuantity,
            onSuccess: (response)=>{
            // toast.success(response.data.message, {
            // position: "top-center",
            // autoClose: 5000,
            // hideProgressBar: false,
            // closeOnClick: true,
            // pauseOnHover: false,
            // draggable: true,
            // progress: undefined,
            // theme: "colored",
            // transition: Slide,
            // });

            queryClient.invalidateQueries({queryKey:['carts',i18n.language]});
        },
        onError: (err)=>{
            // console.log(err);
            toast.error(err.message, {
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
    })

    return mutation;
}


// Mutation 9 : useCheckoutwMutation
export function useCheckoutwMutation(){
const {countCart, decreaseCountCart} = useAuthStore();

const queryClient = useQueryClient();

    async function checkout ({PaymentMethod}){
        // console.log(data);
        const response = await axiosAuthInstance.post('/Checkouts', {
            PaymentMethod
        });
        console.log(response);
        return response
    }
    
    const mutation = useMutation({
        mutationFn: checkout,
            onSuccess: (response)=>{
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

            decreaseCountCart(countCart);
            localStorage.setItem("countCart", countCart - countCart);

            queryClient.invalidateQueries({queryKey:['carts', i18n.language]});

            if(response.data.url){
                window.location.href = 'https://checkout.stripe.com/c/pay/cs_test_a1jT4bZhocKdpYVvlv0OBecWjM2g4lPUzwG2dMlTXuX3NejkabHu5tgGKg#fidnandhYHdWcXxpYCc%2FJ2FgY2RwaXEnKSdkdWxOYHwnPyd1blpxYHZxWjA0VmxSMWdGYXw2cWlCX1MxbU1zZ0JLbnRIZk5UdTF2ZjNzalVjU0BsM2phMUxOQl9NN3RGfH9vbFdGSzJ%2FdERkXzR%2FSW1xNmJhaHdTMWhKSnJQd2ZndUZINTVIPGZGSlZBUScpJ2N3amhWYHdzYHcnP3F3cGApJ2dkZm5id2pwa2FGamlqdyc%2FJyZjY2NjY2MnKSdpZHxqcHFRfHVgJz8ndmxrYmlgWmxxYGgnKSdga2RnaWBVaWRmYG1qaWFgd3YnP3F3cGB4JSUl'
            }
        },
        onError: (err)=>{
            console.log(err);
            toast.error(err.message, {
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
    })

    return mutation;
}


// Mutation 10 : useAddReviewMutation
export function useAddReviewMutation(){
const queryClient = useQueryClient();

    async function addReview (data){
        console.log(data);
        const response = await axiosAuthInstance.post(`/Products/${data.productId}/reviews`, {
            Rating: data.Rating,
            Comment: data.Comment
        });
        console.log(response);
        return response;
    }

    const mutation = useMutation({
        mutationFn: addReview,
            onSuccess: (response)=>{
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

            queryClient.invalidateQueries({queryKey:['productDetails',response.data.id, i18n.language]});
        },
        onError: (err)=>{
            console.log(err);
            toast.error(err.message, {
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
    })

    return mutation;
}