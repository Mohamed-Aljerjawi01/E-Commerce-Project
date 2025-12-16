import * as yup from "yup";

const schema = yup.object({
    email: yup.string().email("Invalid Email").required("Email Is Required"),
    password: yup.string().required("Password Is Required").min(8,"Password must be at least 8 characters")
                .matches(/[A-Z]/,"must contain at least one uppercase letter")
                .matches(/[a-z]/,"must contain at least one lowercase letter")
                .matches(/[0-9]/,"must contain at least one number")
                .matches(/[@#$?&!]/,"must contain at least one special character")
})

export default schema;