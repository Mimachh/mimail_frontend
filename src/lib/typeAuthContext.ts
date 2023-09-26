interface AuthContextType {
    user: any; // Remplacez `any` par le type approprié pour l'utilisateur
    errors: { [key: string]: string };
    formLoading: false,
    getUser: () => void;
    login: (data: any) => void; // Remplacez `any` par le type approprié pour les données de connexion
    register: (data: any) => void; // Remplacez `any` par le type approprié pour les données d'inscription
}