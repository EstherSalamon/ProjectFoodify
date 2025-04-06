import React, { useState, useEffect } from 'react';
import './Products.css';

import Alert from 'react-bootstrap/Alert';


const ProductPage = (product) => {

    const [showCheckoutModal, setShowCheckoutModal] = useState(false);
    const [largeImg, setLargeImg] = useState('');
    const [amt, setAmt] = useState(1);

    if (product.images) {
        setLargeImg(product.images.find(img => img.sqn === 1));
    }

    const getSize = () => {
        if (size === 's') {
            return '9 x 11';
        } else if (size === 'm') {
            return '18 x 22';
        } else if (size === 'l') {
            return '27 x 33';
        } else {
            console.log("Seriously? For people like you is why I had to work around it like this! Come on! Yes, I am expecting that if you played around with my source code you'll be seeing this logging of mine, so I get to yell at you in peace. How awesome!");
            return 'Invalid Entry';
        }
    };



    return (
        <div>
            <div name='the product' style={{ marginTop: 30, marginLeft: 0, marginRight: 50 }}>
                <div className='leftColumn' style={{ marginTop: 20 }}>
                    <div className='leftColumn' style={{ width: 50, marginLeft: 70 }}>
                        <div>
                            {product.images.map(img => {
                                <img src={`/Images/${img.src}`} className={`select-img ${image === img.name ? 'active-thumb' : ''}`} width='50' onClick={_ => setImage(img.name)} />
                            })}
                        </div>
                    </div>
                    <div className='rightColumn' style={{ marginLeft: 170 }}>
                        <a href={`/Images/Products/${largeImg}`} target='_blank'>
                            <img src={`/Images/Products/${largeImg}`} height='350' className='big-img' />
                        </a>
                    </div>
                </div>
                <div className='rightColumn' style={{ textAlign: 'justify' }}>
                    <h1>{product.title}</h1>
                    <h4>{product.description}</h4>
                    <ul>
                        {product?.details.map(d =>
                            <li>{d}</li>
                        )}
                    </ul>
                    <h4>Price: {product.price()} Deben</h4>
                    <div style={{ display: 'flex' }}>
                        <label htmlFor='amount' style={{ marginRight: 10, alignContent: 'center' }}>Quantity:</label>
                        <input type='number' name='amount' id='amount' value={amt} max={product.maxAmt ?? 10} min='1' onChange={e => setAmt(e.target.value)} className='form-control' style={{ width: 75 }} />
                    </div>

                    {product.specifications.forEach(spec => {
                        <div className="radio-inputs" style={{ marginTop: 10 }} onChange={e => setSize(e.target.value)}>
                            <label style={{ marginLeft: 0 }} className={`${size === 's' ? 'active-radio' : ''}`}>
                                <input className="radio-input" value='s' type="radio" name="size" />
                                <span className="radio-tile">
                                    <span className="radio-label">9 x 11</span>
                                </span>
                            </label>
                            <label className={`${size === 'm' ? 'active-radio' : ''}`}>
                                <input className="radio-input" value='m' type="radio" name="size" />
                                <span className="radio-tile">
                                    <span className="radio-label">18 x 22</span>
                                </span>
                            </label>
                            <label className={`${size === 'l' ? 'active-radio' : ''}`}>
                                <input className="radio-input" value='l' type="radio" name="size" />
                                <span className="radio-tile">
                                    <span className="radio-label">27 x 33</span>
                                </span>
                            </label>
                        </div>
                    })}

                    <button className='btn btn-success' style={{ marginTop: 10, width: 270 }} onClick={() => setShowCheckoutModal(true)}>Buy Now</button>
                </div>
            </div>
            <CheckoutModal cartItem={product} open={showCheckoutModal} handleClose={() => setShowCheckoutModal(false)} />
        </div>
    )
};

export default ProductPage;