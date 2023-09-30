interface ForgotPasswordFormValues {
    email: string;
}

interface ResetPasswordFormValues {
    password: string;
    password_confirmation: string;
    token: string,
    email?: string | undefined,
}