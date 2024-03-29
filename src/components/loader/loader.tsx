import { cn } from '@/lib/utils';
import './loader-style.css'
import { useTranslation } from 'react-i18next';

interface Props {
    classname?: string;
    size?: string;
}

function Loader(props: Props) {
    const { classname, size } = props
    const { t } = useTranslation();
    return (
        <>
        { classname ?
            <div className={cn('pb-12 md:pb-20 pt-8 md:pt-12 px-24 rounded-xl relative',classname)}>
                <div className="loader"></div> 
                <p className='absolute bottom-[10px] left-[50%] translate-x-[-50%] text-sm text-primary'>{t("common:loading")} ...</p>
            </div>
        :
            <div className="loader"></div> 
        }
        </>

        
    )
}

export default Loader
