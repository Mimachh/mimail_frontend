
import * as z from "zod";


// Login
export const loginFormSchema = z.object({
    email: z.string().email({
        message: "Invalid email address"
    }).min(4, {
        message: "Email address too short"
    }),
    password: z.string().min(8, {
        message: "Password too short"
    }),
})



// Register
export const registerFormSchema = z.object({
    name: z.string().min(6, {
        message: "Name must be at least 6 characters"
    }),
    last_name: z.string().min(2, {
        message: "Last name must be at least 2 characters"
    }),
    email: z.string().email({
        message: "Invalid email address"
    }).min(4, {
        message: "Email address too short"
    }),
    password: z.string().min(8, {
        message: "Password too short"
    }),
    password_confirmation: z.string().min(8, {
        message: "Password too short"
    }),
    terms: z.boolean().refine(value => value === true, {
        message: "You must agree to the terms and conditions"
    }),
})