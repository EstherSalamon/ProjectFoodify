import { useState } from 'react';
import ProductPage from "./Product";
import {RefSheet} from "./RefSheet";

export const ProductWrapper = (product) => {

    const [showRefSheet, setShowRefSheet] = useState(true);

    return ( //need here css to deal with page width or waht, last time you prob did it wrong
        <div>  
            <ProductPage product={product} />
            <RefSheet open={showRefSheet} handleClose={() => setShowRefSheet(false) } />
        </div>
    )
};