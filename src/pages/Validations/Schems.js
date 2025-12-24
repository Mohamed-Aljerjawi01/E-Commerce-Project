import * as yup from "yup";

export const LoginValidationSchema = yup.object({
    email: yup.string().email("Invalid Email").required("Email Is Required"),
    password: yup.string().required("Password Is Required").min(8,"Password must be at least 8 characters")
                .matches(/[A-Z]/,"must contain at least one uppercase letter")
                .matches(/[a-z]/,"must contain at least one lowercase letter")
                .matches(/[0-9]/,"must contain at least one number")
                .matches(/[@#$?&!]/,"must contain at least one special character")
})

export const ResetPasswordValidationSchema = yup.object({
    code: yup.string().required("Email Is Required"),
    newPassword: yup.string().required("Password Is Required").min(8,"Password must be at least 8 characters")
                .matches(/[A-Z]/,"must contain at least one uppercase letter")
                .matches(/[a-z]/,"must contain at least one lowercase letter")
                .matches(/[0-9]/,"must contain at least one number")
                .matches(/[@#$?&!]/,"must contain at least one special character")
})

export const SendCodeValidationSchema = yup.object({
    email: yup.string().email("Invalid Email").required("Email Is Required"),
});

export const SignupValidationSchema = yup.object({
  fullName: yup.string().required("Full-Name Is Required"),
  email: yup.string().email("Invalid Email").required("Email Is Required"),
  userName: yup.string().required().min(4).matches(/^[a-zA-Z0-9._-]+$/,"Invalied UserName"),
  phoneNumber: yup.string().required("Phone Is Required").matches(/^[0-9]{3}-[0-9]{1}-[0-9]{3}-[0-9]{3}$/,"Invalid Phone")
                .min(10,"Phone must be at least 10 characters").max(13,"Phone must be at most 13 characters"),
  password: yup.string().required("Password Is Required").min(8,"Password must be at least 8 characters")
            .matches(/[A-Z]/,"must contain at least one uppercase letter")
            .matches(/[a-z]/,"must contain at least one lowercase letter")
            .matches(/[0-9]/,"must contain at least one number")
            .matches(/[@#$?&!]/,"must contain at least one special character")
})
