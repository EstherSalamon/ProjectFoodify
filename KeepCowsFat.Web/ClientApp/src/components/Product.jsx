import React, { useState, useContext } from 'react';
import { CheckoutModal } from './CheckoutModal';
import { finishedPlaque } from '../Product Classes/PlaqueClass';
import { RefSheetContext } from './RefSheetWrapper';

import './productPage.css';


const ProductPage = (product) => {

    const { setShowRefSheet } = useContext(RefSheetContext);

    const [showCheckoutModal, setShowCheckoutModal] = useState(false);
    const [largeImg, setLargeImg] = useState('');
    const [amt, setAmt] = useState(1);

    if (product.images) {
        setLargeImg(product.images.find(img => img.sqn === 1));
    }

    return (
        <div>
            <h1>{finishedPlaque.title}</h1>
            <h1>{finishedPlaque.description}</h1>
            <button className='refSheetBtn' onClick={() => setShowRefSheet(true)}>Reference Sheet</button>
          
            <CheckoutModal cartItem={product} open={showCheckoutModal} handleClose={() => setShowCheckoutModal(false)} />
        </div>
    )
};

export default ProductPage;