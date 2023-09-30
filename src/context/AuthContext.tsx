import { createContext, useContext, useEffect, useState } from "react";
import axios from '@/api/axios'
import { useNavigate } from "react-router-dom";

import { useTranslation } from "react-i18next";
import { successToast } from "@/lib/toast/successToast";
import { errorToast } from "@/lib/toast/errorToast";
import { notifyWelcome } from "@/lib/toast/welcomeToast";

const AuthContext = createContext({});


export const AuthProvider = ({children}: any) => {
    const [user, setUser] = useState<{ last_name: string | null } | null>(null);
    const [errors, setErrors] = useState<string[]>([]);
    const [userLoading, setUserLoading] = useState(false);
    const [formLoading, setFormLoading] = useState(false);
    const navigate = useNavigate();
    const { t } = useTranslation();
    // const csrf = () => axios.get('/sanctum/csrf-cookie');
    const csrf = async (): Promise<any> => {
        const response = await axios.get('/sanctum/csrf-cookie');
        return response; // Assurez-vous que la propriété csrf_token est correcte dans votre API
    }



    const getUser = async () => {
        setUserLoading(true);
        const { data } = await axios.get('/api/user');
        setUser(data);
        setUserLoading(false);
    }
    
    const login = async ({ values }: any) => {
        setFormLoading(true);
        await csrf();
        try {
            await axios.post('/login', values);
            await getUser();
            navigate("/");
            notifyWelcome(t('common:welcome_back'));   
        } catch (e: any) {
            console.log(e);
            errorToast(t('common:something_went_wrong'));
            if(e.response.status === 422) {
              setErrors(e.response.data.errors);
            }    
        } finally {
            setFormLoading(false);
        }
    }

    const register = async ({ ...data }) => {
        setFormLoading(true);
        await csrf();
        try {
            await axios.post('/register', data);
            await getUser();
            navigate("/");
        } catch (e: any) {
            console.log(e);
            if(e.response.status === 422) {
              setErrors(e.response.data.errors);
            }    
        }
        setFormLoading(false);
    }

    const logout = () => {
        setUserLoading(true);
        axios.post('/logout').then(() => {
            setUser(null);
        });
        successToast(t('login:logout_success'))
        setUserLoading(false);
    };
    
    useEffect(() => {
        if(!user) {
            getUser();
        }
    }, [])

    return <AuthContext.Provider 
    value={{ user, errors, setErrors, getUser, login, register, userLoading, formLoading, logout, csrf }}>
        {children}
    </AuthContext.Provider>
}

export default function useAuthContext() {
   return useContext(AuthContext);     
}