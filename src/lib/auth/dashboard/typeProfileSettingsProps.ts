export interface ProfileSettingsProps {
    user: any;
    csrf: () => Promise<string>;
    setFormLoading: (value: boolean) => void;
    formLoading: boolean,
}
