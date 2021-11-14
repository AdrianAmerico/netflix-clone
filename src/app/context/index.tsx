import React, { createContext } from "react";

interface IGlobalProps {
    message: string
    type: "success" | "fail"
    setMessage: React.Dispatch<React.SetStateAction<string>>
    setType: React.Dispatch<React.SetStateAction<"success" | "fail">>
}

const GlobalContext = createContext({} as IGlobalProps);

const GlobalContextProvider: React.FC = ({ children }) => {
    const [message, setMessage] = React.useState<string>("");
    const [type, setType] = React.useState<"success" | "fail">("success")

    return (
        <GlobalContext.Provider value={{ message, setMessage, type, setType }}>
            {children}
        </GlobalContext.Provider>
    );
};

export { GlobalContext, GlobalContextProvider };
