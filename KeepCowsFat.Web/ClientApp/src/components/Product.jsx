import { useState } from 'react';
import { CheckoutModal } from './CheckoutModal';
import { finishedPlaque } from '../Product Classes/PlaqueClass';
import { RefSheetBtn } from './RefSheet';

import './productPage.css';


const ProductPage = (product) => {

    const [showCheckoutModal, setShowCheckoutModal] = useState(false);
    const [largeImg, setLargeImg] = useState('');
    const [amt, setAmt] = useState(1);

    if (product.images) {
        setLargeImg(product.images.find(img => img.sqn === 1));
    }

    return (
        <>
            <h1>{finishedPlaque.title}</h1>
            <h1>{finishedPlaque.description}</h1>

            <RefSheetBtn/>
          
            <CheckoutModal cartItem={product} open={showCheckoutModal} handleClose={() => setShowCheckoutModal(false)} />
        </>
    )
};

export default ProductPage;