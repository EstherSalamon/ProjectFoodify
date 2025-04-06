import React, { useState, useEffect } from 'react';
import './Products.css';

import Alert from 'react-bootstrap/Alert';


const ProductPage = (product) => {

    /*product: {
        name: ''
        description: ''
        details: ['']
        images: [{src; sqn}]
        amt: ''
        price: number
        specifications: [] //here: material, size, text, includes rosetta
    }*/

    const [image, setImage] = useState('P1.png');
    const [amount, setAmount] = useState(1);

    //how to have state that's not hardcoded? is this where useStateStore or whatev comes in? sounds like it. or useFormfields




    const [showModal, setShowModal] = useState(false);
    const [showGoodAlert, setShowGoodAlert] = useState(false);
    const [processing, setProcessing] = useState(false);
    const [showError, setShowError] = useState(false);
    const [validForm, setValidForm] = useState(true);
    const [showText, setShowText] = useState(false);
    const [showRef, setShowRef] = useState(false);


    const [includeRosetta, setIncludeRosetta] = useState(false);



    function capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const onShowClick = () => setShowModal(true);
    const onHideClick = () => {
        resetState();
        setShowModal(false);
    };

    const resetState = () => {
        setSize('m');
        setAmount(1);
        setText('The grain within is consecrated for the purpose of saving the New Egyptian Kingdom');
        setName('');
        setEmail('');
        setPayment('');
        setMaterial('Papyrus');
        setShowText(false);
        setValidForm(true);
        setIncludeRosetta(false);
    }

    const cheshbonTotal = () => {
        let total = product.price;
        if (material === 'Papyrus') {
            total = 9;
        } else {
            total = 11;
        }

        if (size === 'm') {
            total += 2;
        } else if (size === 'l') {
            total += 4;
        }

        return total;
    };

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
            <div className='row'>
                <div className={`col-11 ${showRef ? 'ref-w' : 'full-w'}`}>
                    <div style={{ margin: 25 }}>
                        <Alert variant="success" show={showGoodAlert} style={{ marginLeft: 80, marginTop: -40 }} position='top-end' onClose={() => setShowGoodAlert(false)} dismissible>
                            <Alert.Heading>Submission successful</Alert.Heading>
                            <p>
                                Thank you for your interest in our products. A member of our team will reach out to you shortly. If you have not received a
                                reply within 6-8 business days, contact us directly at <a href='mailto:projectfoodify@gmail.com' target='_blank'>projectfoodify@gmail.com</a>.
                            </p>
                        </Alert>
                        <Alert variant="danger" show={showError} style={{ margin: 25 }} onClose={() => setShowError(false)} dismissible style={{ position: '' }}>
                            <Alert.Heading>Oops! You got an error</Alert.Heading>
                            <p>
                                Try reloading the page and resubmitting the form, or contact us directly at <a href='mailto:projectfoodify@gmail.com' target='_blank'>projectfoodify@gmail.com</a>.
                            </p>
                        </Alert>
                    </div>
                    <div name='the product' style={{ marginTop: 30, marginLeft: 0, marginRight: 50 }}>
                        <div className='leftColumn' style={{ marginTop: 20 }}>
                            <div className='leftColumn' style={{ width: 50, marginLeft: 70 }}>
                                <div>
                                    <img src='/Images/Products/P1.png' className={`select-img ${image === 'P1.png' ? 'active-thumb' : ''}`} width='50' onClick={_ => setImage('P1.png')} />
                                    <img src='/Images/Products/P2.png' className={`select-img ${image === 'P2.png' ? 'active-thumb' : ''}`} width='50' onClick={_ => setImage('P2.png')} />

                                </div>
                            </div>
                            <div className='rightColumn' style={{ marginLeft: 170 }}>
                                <a href={`/Images/Products/${image}`} target='_blank'>
                                    <img src={`/Images/Products/${image}`} height='350' className='big-img' />
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
                            <h4>Price: {cheshbonTotal()} Deben</h4>
                            <div style={{ display: 'flex' }}>
                                <label htmlFor='amount' style={{ marginRight: 10, alignContent: 'center' }}>Quantity:</label>
                                <input type='number' name='amount' id='amount' value={amount} max='8' min='1' onChange={e => setAmount(e.target.value)} className='form-control' style={{ width: 75 }} />
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

                            <button className='btn btn-success cng-color' style={{ marginTop: 10, width: 270 }} onClick={onShowClick}>Buy Now</button>
                        </div>
                    </div>

                   <CheckoutModal />
                </div>

               <RefSheet />
            </div>
        </div>
    )
};

export default ProductPage;