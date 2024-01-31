import { createContext, useState } from "react";

export const OcrContext = createContext<any>('null');

export const OcrContextProvider = ({children }) => {
    const [userType, setUserType] = useState<string>('user')

    return (
        <OcrContext.Provider value={{ userType, setUserType }}>
            {children}
        </OcrContext.Provider>
    );
}