import { useState } from 'react';
import { CheckoutModal } from './CheckoutModal';
import { finishedPlaque } from '../Product Classes/PlaqueClass';
import { RefSheetBtn } from './RefSheet';
import { plaqueStuff } from '../Product Classes/PlaqueClass';

import './productPage.css';


const ProductPage = (product) => {

    const [showCheckoutModal, setShowCheckoutModal] = useState(false);
    const [largeImg, setLargeImg] = useState('');
    const [amt, setAmt] = useState(1);

    if (product.images) {
        setLargeImg(product.images.find(img => img.sqn === 1));
    }

    const plaque = new plaqueStuff();

    return (
        <>
            <h1>{plaque.material}</h1>
            <h1>{finishedPlaque.title}</h1>
            <h1>{finishedPlaque.description}</h1>
            <ul>
                {finishedPlaque.details.map((detail, idx) => <li key={idx }>{detail}</li>) }
            </ul>
            <span>{finishedPlaque.getPrice('sdfs', 23)} Deben</span>

            <RefSheetBtn/>
          
            <CheckoutModal cartItem={product} open={showCheckoutModal} handleClose={() => setShowCheckoutModal(false)} />
        </>
    )
};

export default ProductPage;