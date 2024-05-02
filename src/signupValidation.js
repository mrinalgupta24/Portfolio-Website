import * as Yup from "yup";

export const signupValidation = Yup.object({
    from_name: Yup.string().min(3).required("Please Enter Your Name*"),
    from_email: Yup.string().email("Enter Valid Email").required("Please Enter Your Email*")
})

