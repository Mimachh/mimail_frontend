import { cn } from '@/lib/utils';
import './loader-style.css'
import { useTranslation } from 'react-i18next';

interface Props {
    classname?: string;
}

function Loader(props: Props) {
    const { classname } = props
    const { t } = useTranslation();
    return (
        <>
        { classname ?
            <div className={cn('pb-12 md:pb-20 pt-8 md:pt-12 md:px-24 px-12 rounded-xl relative',classname)}>
                <div className="loader z-50"></div> 
                <p className='absolute bottom-[10px] left-[50%] translate-x-[-50%] text-sm text-primary'>{t("common:loading")} ...</p>
            </div>
        :
            <div className="loader z-50"></div> 
        }
        </>

        
    )
}

export default Loader
