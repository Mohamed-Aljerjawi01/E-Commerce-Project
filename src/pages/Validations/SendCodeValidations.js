import * as yup from "yup"

const schema = yup.object({
    email: yup.string().email("Invalid Email").required("Email Is Required"),
});

export default schema;
