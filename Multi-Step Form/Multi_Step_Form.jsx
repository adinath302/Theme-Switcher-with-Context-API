import React, { useEffect, useState } from 'react'
import Step11 from './Step11';
import Step22 from './Step22';
import Step33 from './Step33';
import { AnimatePresence, motion } from 'framer-motion';
import theme from '@material-tailwind/react/theme';

const Multi_Step_Form = () => {
    const [Step, setStep] = useState(1)
    console.log(Step);

    const [Name, setName] = useState('')
    const [Email, setEmail] = useState('')
    const [City, setCity] = useState('')
    const [ZipCode, setZipCode] = useState('')

    const HandleSteps1 = (event) => {
        event.preventDefault()
        console.log("Name :", Name, "Email :", Email);
        setStep(2)
    }

    const HandleSteps2 = (event) => {
        event.preventDefault()
        console.log("City", City, "ZipCode", ZipCode);
        setStep(3)
    }

    const progress = Step * 33

    return (
        <AnimatePresence mode='wait'>
            <motion.div className='min-w-[550px] max-w-full flex justify-center items-center'
                key={Step}
                initial={{ opacity: 0, x: -400, rotate: 18 }}
                animate={{ opacity: 1, x: 0, rotate: 0 }}
                exit={{ opacity: 0, x: 400, rotate: -18 }}
                transition={{ duration: 0.2 }}
            >
                {Step === 1 && <Step11 customStyle={{}} progress={progress} HandleSteps1={HandleSteps1} Name={Name} setName={setName} Email={Email} setEmail={setEmail} setStep={setStep} />}
                {Step === 2 && <Step22 progress={progress} HandleSteps2={HandleSteps2} City={City} setCity={setCity} ZipCode={ZipCode} setZipCode={setZipCode} setStep={setStep} />}
                {Step === 3 && <Step33 progress={progress} setStep={setStep} Name={Name} City={City} Email={Email} ZipCode={ZipCode} />}

            </motion.div>
        </AnimatePresence>
    )
}
export default Multi_Step_Form;