import * as yup from "yup";

export const studentSchema = yup.object({
    name:yup.string().required("Please fill the name"),
    batch:yup.string().required("Please fill the batch").min(5, "Invalid batch details"),
    email:yup.string().email().required("Please fill valid mail"),
    phone:yup.string(),
    education:yup.string().required("Please specify your qualification")
    .min(2, "Please enter valid qualification")
    .max(10, "Don't playaround right valid details")
})

export const teacherSchema = yup.object({
    name:yup.string().required("Please fill the name"),
    batch:yup.string().required("Please fill the batch").min(5, "Invalid batch details"),
    email:yup.string().email().required("Please fill valid mail"),
    phone:yup.string(),
    education:yup.string().required("Please specify your qualification")
    .min(2, "Please enter valid qualification")
    .max(10, "Don't playaround right valid details")
})

export const editStudentSchema = yup.object({
    name:yup.string().required("Please change the name"),
    batch:yup.string().required("Please change the batch").min(5, "Invalid batch details"),
    email:yup.string().email().required("Please change valid mail"),
    phone:yup.string(),
    education:yup.string().required("Please change your qualification")
    .min(2, "Please enter valid qualification")
    .max(10, "Don't playaround right valid details")
})

export const editedTeacherSchema = yup.object({
    name:yup.string().required("Please change the name"),
    batch:yup.string().required("Please change the batch").min(5, "Invalid batch details"),
    email:yup.string().email().required("Please change valid mail"),
    phone:yup.string(),
    education:yup.string().required("Please change your qualification")
    .min(2, "Please enter valid qualification")
    .max(10, "Don't playaround right valid details")
})