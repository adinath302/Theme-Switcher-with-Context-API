import { createContext, useEffect, useState } from "react";

export const FormContext = createContext();

export const FormContextProvider = ({ children }) => {

    // Theme 
    const [Active, setTheme] = useState(() => {
        const ActiveTheme = localStorage.getItem("darkMode")
        return ActiveTheme ? JSON.parse(ActiveTheme) : true;
    })

    useEffect(() => {
        localStorage.setItem("darkMode", JSON.stringify(Active))
    }, [Active])

    const Togglebutton = () => {
        setTheme(!Active)
        console.log("Clicked");
    }

    const ToggleIconTrue = "🌞";
    const ToggleIconFalse = "🌚";

    // form logic

    const [Step, setStep] = useState(1)

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
        <FormContext.Provider value={{ Active, Togglebutton, ToggleIconTrue, ToggleIconFalse, progress, HandleSteps1, HandleSteps2, Name, setName, Email, setEmail, City, setCity, ZipCode, setZipCode, setStep }}>
            {children}
        </FormContext.Provider>
    )
}