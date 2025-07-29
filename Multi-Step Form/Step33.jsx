import { setStyle } from 'framer-motion';
import React, { useContext } from 'react'
import Button1 from '../Like_&_Bookmark/Button1';
import { FormContext } from './Multi_Step_Context';

const Step33 = ({ setStep, Name, Email, City, ZipCode, progress }) => {

    //getting data/value through context api 
    const { Togglebutton, ToggleIconTrue, ToggleIconFalse, Active } = useContext(FormContext);

    return (
        <div className={` ${Active ? "" : "bg-gray-700 text-white"} flex flex-col gap-3 items-center m-4 p-2 shadow-md shadow-gray-500 rounded-xl`}>

            <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden mb-4">
                <div
                    className="h-full bg-blue-600 transition-all duration-300"
                    style={{ width: `${progress}%` }}
                ></div>
            </div>

            <h1 className={` ${Active ? "" : "text-white"} text-center font-serif `}>Step 3</h1>

            <Button1 Togglebutton={Togglebutton} ToggleIconTrue={ToggleIconTrue} ToggleIconFalse={ToggleIconFalse} Active={Active} />

            <div className='flex flex-col gap-3 text-center  p-1 '>
                <h4 className=''>Final Review</h4>
                <div className='border rounded-xl p-2 font-normal flex flex-col items-start'>
                    <div>Name - <span className='font-semibold'>{Name}</span></div>
                    <div>Email -<span className='font-semibold'> {Email}</span></div>
                    <div>City - <span className='font-semibold'>{City}</span></div>
                    <div>ZipCode - <span className='font-semibold'>{ZipCode}</span></div>
                </div>
            </div>

            <div className='flex justify-evenly w-full'>
                <button
                    className='shadow-md shadow-gray-500 rounded p-1 outline-none bg-amber-500 font-semibold'
                    onClick={() => setStep(2)}>Previous</button>
                <button
                    className='shadow-md shadow-gray-500 rounded p-1 outline-none bg-green-800 font-semibold text-white'>Submit</button>
            </div>

        </div>
    )
}
export default Step33;  