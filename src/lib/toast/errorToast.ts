import toast from "react-hot-toast";

export const errorToast = (message: string) => {
    toast.error(message, {
        style: {
          border: '1px solid #ef4444',
          padding: '16px',
          color: '#ef4444',
        },
        iconTheme: {
          primary: '#ef4444',
          secondary: '#FFFAEE',
        },
      });
}