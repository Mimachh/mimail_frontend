export interface ProfileSettingsProps {
    user: any;
    csrf: () => Promise<string>;
    setFormLoading: (value: boolean) => void;
    formLoading: boolean,
}

export interface SendEmailSettingsProps {
    user: any;
}
