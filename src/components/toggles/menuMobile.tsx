import { opacityWhenToggle, toggleMobileAppears, toggleMobileNavButton } from "@/utils/framer";
import { motion } from "framer-motion";

interface Props {
    areWeLarge: boolean;
    mobileNav: boolean;
    toggleMobileButton: () => void;
}

function ToggleMenuMobile({areWeLarge, mobileNav, toggleMobileButton}: Props) {
   

    return (
        <motion.div
        className={areWeLarge ? 'hidden' : "block"}
        animate={areWeLarge ? 'openDesktopLink' : "closeDesktopLink"}
        initial={areWeLarge ? 'closeDesktopLink' : "openDesktopLink"}
        variants={toggleMobileAppears(1)}
        >
            <motion.button 
            animate={ mobileNav ? 'open' : 'closed' }
            onClick={() => toggleMobileButton()}
            className='lg:hidden flex flex-col space-y-1'>
                <motion.span 
                className='w-5 h-px bg-customYellow block'
                variants={toggleMobileNavButton(-45, 5)}
                ></motion.span>
                <motion.span 
                className='w-5 h-px bg-customYellow block'
                variants={opacityWhenToggle('closed', 'open')}
                ></motion.span>
                <motion.span 
                className='w-5 h-px bg-customYellow block'
                variants={toggleMobileNavButton(45, -5)}
                ></motion.span>
            </motion.button>
        </motion.div>
    )
}

export default ToggleMenuMobile
