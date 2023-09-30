import toast from "react-hot-toast";

export const notifyWelcome = (message: string) => {
    toast(message, {
        style: {
          border: '1px solid #713200',
          padding: '16px',
          color: '#713200',
        },
        icon: '👋',
        iconTheme: {
          primary: '#713200',
          secondary: '#FFFAEE',
        },
      });
}

