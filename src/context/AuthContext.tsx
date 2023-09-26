import { createContext, useContext, useState } from "react";
import axios from '@/api/axios'
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({});



export const AuthProvider = ({children}: any) => {
    const [user, setUser] = useState(null);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [formLoading, setFormLoading] = useState(false);
    const navigate = useNavigate();

    const csrf = () => axios.get('/sanctum/csrf-cookie');

    const getUser = async () => {
        const { data } = await axios.get('/api/user');
        setUser(data);
    }
    
    const login = async ({ values }: any) => {
        await csrf();
        try {
            setFormLoading(true);
            await axios.post('/login', values);
            getUser();
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
        await csrf();
        try {
            setFormLoading(true);
            await axios.post('/register', data);
            getUser();
            navigate("/");
        } catch (e: any) {
            console.log(e);
            if(e.response.status === 422) {
              setErrors(e.response.data.errors);
            }    
        }
    }

    return <AuthContext.Provider value={{ user, errors, getUser, login, register, formLoading}}>
        {children}
    </AuthContext.Provider>
}

export default function useAuthContext() {
   return useContext(AuthContext);     
}