
import React, { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button';
import axios from '@/api/axios';
import { successToast } from '@/lib/toast/successToast';
import { useTranslation } from 'react-i18next';
import useAuthContext from '@/context/AuthContext';
import { errorToast } from '@/lib/toast/errorToast';
import { CloudinaryScriptLoader } from '@/utils/cloudinary';


  interface Props {
    buttonText: string;
    classNameButton?: string;
    setAvatar: (value: string) => void;
    csrfData: () => Promise<string>;
    setFormLoading: (value: boolean) => void;
    formLoading: boolean,
    user: any
  }
  type FormErrors = {
    avatar?: string[];
  };

  declare global {
      interface Window {
        cloudinary: any; // Vous pouvez définir le type correct ici si vous avez des informations sur le type.
      }
    }

  CloudinaryScriptLoader()


  
  function UploadWidgetCloudinary(props: Props) {
    const { 
      buttonText, 
      classNameButton, 
      setAvatar, 
      csrfData,
      formLoading,
      setFormLoading,
      user
    } = props;
    const widgetRef = useRef();
    const { t } = useTranslation()
    const { getUser } = useAuthContext() as AuthContextType;
    const [errors, setErrors] = useState<FormErrors>({});
    const [processing, setProcessing] = useState(false);
    useEffect(() => {
      CloudinaryScriptLoader().then(() => {
        const cloudinary = window.cloudinary;
        const widget = cloudinary.createUploadWidget({
          cloudName: "drypiaqaw",
          uploadPreset: "nc955ilb"
        }, (error: any, result: any) => {
          if (!error && result && result.event === "success") {
            const avatarUrl = result.info.url;
            console.log(result.info.url);
            setAvatar(avatarUrl);
            storeAvatarUrl(avatarUrl);
          }
        });
    
        const openWidget = () => {
          widget.open();
        };
    
        const buttonCloudinaryUpload = document.getElementById('uploadButtonCloudinary');
        buttonCloudinaryUpload?.addEventListener('click', openWidget);
    
        return () => {
          buttonCloudinaryUpload?.removeEventListener('click', openWidget);
        };
      });

    }, []);
  
    const storeAvatarUrl = async (avatarUrl: string) => {

      if (processing) {
        return;
      }
      setProcessing(true);
      await csrfData();
      setErrors({});
      try {
        const response = await axios.put(`/api/user/${user.id}/avatar`, {
          avatar: avatarUrl
        });
        if(response.data.message === 'Avatar enregistré') {
          successToast(t('profile:avatar_uploaded'))
        }
      } catch (error: any) {
        errorToast(t('common:something_went_wrong'))
        console.log(error);
        // if(error.response.status === 422) {
        //   setErrors(error.response.data.errors);
        // }  
      } finally {
        setFormLoading(false);
        setProcessing(false);
      }
    }
    return (
      <>
        <Button
          className={classNameButton}
          id='uploadButtonCloudinary'
          type='button'
          variant="yellow"
          disabled={formLoading}
        >
          {buttonText}
        </Button>
      </>
    );
  }
  
  export default UploadWidgetCloudinary;
  
