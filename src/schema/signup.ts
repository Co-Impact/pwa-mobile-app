import * as yup from "yup";

export const signupSchema = yup.object().shape({
    firstName: yup.string().required("Name is required")
        .min(2, "First Name must be at least 2 characters")
        .max(10, "First Name must be at most 10 characters"),
    lastName: yup.string().required("Last Name is required")
        .min(2, "Last Name must be at least 2 characters")
        .max(10, "Last Name must be at most 10 characters"),
    email: yup
        .string()
        .email("Invalid email address")
        .required("Email is required"),
    password: yup
        .string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    university: yup.string().required("university is required"),
    studyField: yup.string().required("studyField is required"),
    phoneNumber: yup.string().required("Phone number is required"),
    company: yup.string().required("Company is required"),
    position: yup.string().required("Position is required"),
});

export const stepSchemas = [
    yup.object().shape({
        email: yup.string().email("Invalid email").required("Email is required"),
        username: yup.string().required("Username is required"),
        password: yup
            .string()
            .min(6, "Password must be at least 6 characters")
            .required("Password is required"),
    }),
    yup.object().shape({
        firstName: yup.string().required("First name is required"),
        lastName: yup.string().required("Last name is required"),
        age: yup
            .number()
            .typeError("Age must be a number")
            .positive()
            .integer()
            .required("Age is required"),
        country: yup.string().required("Country is required"),
    }),
    yup.object().shape({
        package: yup.string().required("Package is required"),
        termsAccepted: yup.boolean().oneOf([true], "You must accept the terms"),
    }),
];
