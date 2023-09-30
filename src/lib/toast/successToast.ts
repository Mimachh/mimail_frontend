import toast from "react-hot-toast";

export const successToast = (message: string) => {
    toast.success(message, {
        style: {
          border: '1px solid #713200',
          padding: '16px',
          color: '#713200',
        },
        iconTheme: {
          primary: '#713200',
          secondary: '#FFFAEE',
        },
      });
}