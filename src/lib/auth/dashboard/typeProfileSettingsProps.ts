export interface ProfileSettingsProps {
    user: any;
    csrf: () => Promise<string>;
    setFormLoading: (value: boolean) => void;
    formLoading: boolean,

    email: string;
    setEmail: (value: string) => void;
}
