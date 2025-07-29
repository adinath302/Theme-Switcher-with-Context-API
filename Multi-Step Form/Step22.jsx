import React from 'react'
import Button1 from '../Like_&_Bookmark/Button1';
import { useContext } from 'react';
import { FormContext } from './Multi_Step_Context';

const Step22 = ({ HandleSteps2, City, setCity, ZipCode, setZipCode, setStep, progress }) => {
    //getting data/values through context api 
    const { Togglebutton, ToggleIconTrue, ToggleIconFalse, Active } = useContext(FormContext);

    const validate = City.trim() !== "" && ZipCode.trim() !== ''
    return (
        <div className={`${Active ? "" : "bg-gray-700"} flex flex-col gap-3 items-center m-4 p-2 shadow-md shadow-gray-500 rounded-xl`}>

            <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden mb-4">
                <div
                    className="h-full bg-blue-600 transition-all duration-300"
                    style={{ width: `${progress}%` }}
                ></div>
            </div>

            <h1 className={`${Active ? "" : "text-white"} text-center font-serif `}>Step 2</h1>

            <Button1 Togglebutton={Togglebutton} ToggleIconTrue={ToggleIconTrue} ToggleIconFalse={ToggleIconFalse} Active={Active} />

            <form onSubmit={HandleSteps2} className='flex flex-col gap-3 text-center p-1 '>

                <input
                    value={City}
                    onChange={(event) => setCity(event.target.value)}
                    required
                    type="text"
                    placeholder='Enter your city'
                    className={`${Active ? "" : "bg-white text-black"} shadow-md shadow-white rounded-md p-1 outline-none`} />

                <input
                    value={ZipCode}
                    onChange={(event) => setZipCode(event.target.value)}
                    required
                    type="text"
                    placeholder='Enter your zip code'
                    className={`${Active ? "" : "bg-white text-black"} shadow-md shadow-white rounded-md p-1 outline-none`} />

                <div className='flex justify-evenly w-full'>
                    <button
                        className='shadow-md shadow-gray-500 rounded p-1 outline-none bg-amber-500 font-semibold'
                        onClick={() => setStep(1)}>Previous</button>

                    <button
                        type='submit'
                        disabled={!validate}
                        className={`shadow-md shadow-gray-500 rounded p-1 outline-none  font-semibold ${validate ? "bg-green-500" : "bg-green-200 cursor-not-allowed"}`}>Next</button>
                </div>
            </form>

        </div>
    )
}
export default Step22;  