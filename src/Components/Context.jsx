import { createContext, useState } from 'react';

export const TheContext = createContext();

 const TheProvider = ({ children }) => {
    const [Contexts, setContexts] = useState([]);

    const addContext = (id) => {
        setContexts([...Contexts, id]);
    };

    const removeContext = (id) => {
        setContexts(Contexts.filter((Context) => Context !== id));
    };

    return (
        <TheContext.Provider value={{ Contexts, addContext, removeContext }}>
            {children}
        </TheContext.Provider>
    );
};
 export default TheProvider;