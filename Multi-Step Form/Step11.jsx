import React, { useContext } from 'react'
import Button1 from '../Like_&_Bookmark/Button1';
import { Accordion } from '@material-tailwind/react';
import { FormContext } from './Multi_Step_Context';

const Step11 = ({ HandleSteps1, Name, setName, Email, setEmail, progress }) => {

    const { Active, Togglebutton, ToggleIconTrue, ToggleIconFalse } = useContext(FormContext)
    console.log(Active);

    const validate = Name.trim() !== '' && Email.trim() !== '' // if the Name and Email is not filled then it's true or false 
    return (
        <div className={`${Active ? "" : "bg-gray-700"} flex flex-col gap-3 items-center m-4 p-2 shadow-md shadow-gray-500 rounded-xl`}>

            <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden mb-4">
                <div
                    className="h-full bg-blue-600 transition-all duration-300"
                    style={{ width: `${progress}%` }}
                ></div>
            </div>

            <h1 className={`${Active ? "" : "text-white"} text-center font-serif`}>Step 1</h1>

            {/* Button Component */}
            <Button1 Active={Active} ToggleIconFalse={ToggleIconFalse} ToggleIconTrue={ToggleIconTrue} Togglebutton={Togglebutton}  />

            <form onSubmit={HandleSteps1} className='flex flex-col gap-3 text-center  p-1 '>
                <label htmlFor="">
                    <input
                        value={Name}
                        required
                        type="text"
                        placeholder='Enter your name'
                        onChange={(event) => setName(event.target.value)}
                        className={`${Active ? "" : "bg-white text-black"} shadow-md shadow-white rounded-md p-1 outline-none`} />
                </label>

                <label htmlFor="">
                    <input
                        required type="email"
                        placeholder='Enter your email'
                        value={Email}
                        onChange={(event) => setEmail(event.target.value)}
                        className={`${Active ? "" : "bg-white text-black"} shadow-md shadow-white rounded-md p-1 outline-none`} />
                </label>

                <div className='flex justify-evenly w-full'>
                    <button
                        className={`shadow-md shadow-gray-500 rounded p-1 outline-none  font-semibold ${validate ? "bg-green-400" : "bg-green-200 cursor-not-allowed"}`} type='submit'
                        disabled={!validate} // it enable when it false
                    >Next</button>
                </div>
            </form>
        </div>
    )
}
export default Step11;  