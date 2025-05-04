import { useState, createContext } from 'react';
import { RefSheet } from './RefSheet';

export const RefSheetContext = createContext();

export const RefSheetProvider = ({ children }) => {

    const [showRefSheet, setShowRefSheet] = useState(false);

    return (
        <RefSheetContext.Provider value={{ setShowRefSheet }}>
            {showRefSheet && <RefSheet open={showRefSheet} handleClose={() => setShowRefSheet(false)} />}
            {children}
        </RefSheetContext.Provider>
    )
};