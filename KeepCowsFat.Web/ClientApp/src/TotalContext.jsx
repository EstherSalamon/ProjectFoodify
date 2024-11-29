import React, { useState, useContext, createContext } from 'react';

const SackContext = createContext();

const ContextComponent = (props) => {

    const [totalSacks, setTotalSacks] = useState(1017);

    const updateNumber = () => {
        const amount = Math.trunc(Math.random() * 10);
        if (amount !== 0) {
            setTotalSacks(totalSacks + amount);
        }
    };

    setInterval(updateNumber, 7000);

    return (
        <SackContext.Provider value={{ totalSacks }}>
            {props.children}
        </SackContext.Provider>
    )
};

const useSacks = () => {
    return useContext(SackContext);
}

export default ContextComponent;
export { useSacks };

//////////DOESN'T WORK WHY NOT ANNOYING MEs