import { createContext, useContext, useEffect, useState } from "react";
import axios from '@/api/axios'
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({});



export const AuthProvider = ({children}: any) => {
    const [user, setUser] = useState(null);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [userLoading, setUserLoading] = useState(false);
    const [formLoading, setFormLoading] = useState(false);
    const navigate = useNavigate();

    const csrf = () => axios.get('/sanctum/csrf-cookie');

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
        } catch (e: any) {
            console.log(e);
            if(e.response.status === 422) {
              setErrors(e.response.data.errors);
            }    
        } finally {
            setFormLoading(false); // Quelle que soit l'issue de la requête, assurez-vous de définir loading sur false à la fin
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
    }

    const logout = () => {
        setUserLoading(true);
        axios.post('/logout').then(() => {
            setUser(null);
        });

        setUserLoading(false);
    };
    useEffect(() => {
        if(!user) {
            getUser();
        }
    }, [])

    return <AuthContext.Provider value={{ user, errors, getUser, login, register, userLoading, formLoading, logout }}>
        {children}
    </AuthContext.Provider>
}

export default function useAuthContext() {
   return useContext(AuthContext);     
}