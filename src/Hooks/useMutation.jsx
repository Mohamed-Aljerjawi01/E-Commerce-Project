import { useMutation } from '@tanstack/react-query';
import axiosInstance from '../API/axiosInstance';
import { useContext, useState } from 'react';
import { Slide, toast } from 'react-toastify';
import { AuthContext } from '../Context/MyContext';
import { useNavigate } from 'react-router-dom';

// Mutation 1 : LoginMutation
export function useLoginMutation(){
    const navigate = useNavigate();

    {/* ********** Start Lecture Sixteen ********** */}
    const {setAccessToken, saveAccessTokenInLocalStorage} = useContext(AuthContext);
    {/* ********** End Lecture Sixteen ********** */}

    async function loginPost (data){
        const response = await axiosInstance.post(`/Auth/Account/Login`,data);
        return response;
    }

    const mutation = useMutation({
        mutationFn: loginPost,
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

            {/* ********** Start Lecture Sixteen ********** */}
            saveAccessTokenInLocalStorage(response.data.accessToken);
            setAccessToken(response.data.accessToken);
            navigate('/home');
            {/* ********** End Lecture Sixteen ********** */}
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


// Mutation 2 : SignupMutation
export function useSignupMutation(){
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
        },
        onError: (err)=>{
            console.log(err);
            setServerErrors(err.response.data.errors);
        }
    })

    return {mutateAsync, isPending, serverErrors, setServerErrors};
}


// Mutation 3 : ResetPasswordMutation
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


// Mutation 4 : SendCodeMutation
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
