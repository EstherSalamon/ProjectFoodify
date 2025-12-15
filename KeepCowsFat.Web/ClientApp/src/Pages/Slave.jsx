import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import './Products.css';
import { convertDecimalToWords } from 'decimal-to-words-by-shubham-setia';
import emailjs from '@emailjs/browser';
import Alert from 'react-bootstrap/Alert';
import { CgMenuRightAlt } from "react-icons/cg";
import { CgMenuLeftAlt } from "react-icons/cg";
import { PiTrademarkLight } from "react-icons/pi";

const Slave = () => {

    const [image, setImage] = useState('slave.png');
    const [size, setSize] = useState('m');
    const [amount, setAmount] = useState(1);
    const [material, setMaterial] = useState('Papyrus');
    const [text, setText] = useState('The grain within is consecrated for the purpose of saving the New Egyptian Kingdom');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [payment, setPayment] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [showGoodAlert, setShowGoodAlert] = useState(false);
    const [processing, setProcessing] = useState(false);
    const [showError, setShowError] = useState(false);
    const [validForm, setValidForm] = useState(true);
    const [showText, setShowText] = useState(false);
    const [showRef, setShowRef] = useState(false);
    const [includeRosetta, setIncludeRosetta] = useState(false);

    useEffect(() => {

        const isValid = text && name && email;
        setValidForm(isValid);

    }, [text, name, email, payment]);

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
        let total;
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

    const onBuyClick = async () => {

        if (!validForm) {

            setShowText(true);

        } else {
            setShowText(false);
            setProcessing(true);

            emailjs.init({
                publicKey: '-seASllH841UNLIgu'
            });

            const message = `Item ${material} Plaque\nPrice: ${cheshbonTotal() * amount}\nName: ${name}\nEmail: ${email}\nAmount: ${amount}\nSize: ${size}\nText to convert: ${text}\nRosetta: ${includeRosetta}\nPayment: ${payment}`;

            var templateParams = {
                message
            };

            emailjs.send('service_kpz9sn9', 'products_template', templateParams).then(
                (response) => {
                    console.log('SUCCESS!');
                    setShowModal(false);
                    setShowGoodAlert(true);
                    setProcessing(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    resetState();
                },
                (error) => {
                    console.log('FAILED...', error);
                    setShowModal(false);
                    setShowError(true);
                    setProcessing(false);
                    window.scrollTo({ top: 0, behavior: 'auto' });
                    resetState();
                },
            );
        }
    }

    return (
        <div>
            <div className='row'>
                <div className={`col-11 ${showRef ? 'ref-w' : 'full-w'}`}>
                    <div style={{ margin: 25 }}>
                        <Alert variant="success" show={showGoodAlert} style={{ marginLeft: 80, marginTop: -40 }} position='top-end' onClose={() => setShowGoodAlert(false)} dismissible>
                            <Alert.Heading>Submission successful</Alert.Heading>
                            <p>
                                Thank you for your interest in our products. A member of our team will reach out to you shortly. If you have not received a
                                reply within 6-8 business days, contact us directly at <a href='mailto:esther386386@gmail.com' target='_blank'>esther386386@gmail.com</a>.
                            </p>
                        </Alert>
                        <Alert variant="danger" show={showError} style={{ margin: 25, position: '' }} onClose={() => setShowError(false)} dismissible>
                            <Alert.Heading>Oops! You got an error</Alert.Heading>
                            <p>
                                Try reloading the page and resubmitting the form, or contact us directly at <a href='mailto:esther386386@gmail.com' target='_blank'>esther386386@gmail.com</a>.
                            </p>
                        </Alert>
                    </div>
                    <div name='the product' style={{ marginTop: 30, marginLeft: 0, marginRight: 50 }}>
                        <div className='leftColumn' style={{ marginTop: 20 }}>
                            <div className='leftColumn' style={{ width: 50, marginLeft: 70 }}>
                                <div>
                                    <img src='/Images/Products/slave.png' className={`select-img ${image === 'slave.png' ? 'active-thumb' : ''}`} width='50' onClick={_ => setImage('slave.png')} />
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
                            <h1>Rent A Slave</h1>
                            <h4>Government Trained UEDSM Certified Pre-screened Powerful Slave for Rent for Harvest Season</h4>
                            <ul>
                                <li>Slaves are all pedegreed, with degrees, fully trained and functional.</li>
                                <li>As part of the Project Foodify program, the UEDSM has acquired slaves for the national government. After completing submission service, the slaves are fully
                                    knowledgable and equipped to help out with the surplus harvest. The UEDSM trained in a surplus of slaves to spill the bounty over to the entire Egyptian population
                                    in need of extra help on the fields.</li>
                                <li>Every slave comes with a certificate, certifying him as a fully functional slave owned by the government.</li>
                                <li>Free temporary branding included.</li>
                                <li>Slaves can be rented for as short as a day, to as long as the entire harvest season.</li>
                            </ul>
                            <h4>Price: {cheshbonTotal()} Deben</h4>
                            <div style={{ display: 'flex' }}>
                                <label htmlFor='amount' style={{ marginRight: 10, alignContent: 'center' }}>Quantity:</label>
                                <input type='number' name='amount' id='amount' value={amount} max='25' min='1' onChange={e => setAmount(e.target.value)} className='form-control' style={{ width: 75 }} />
                            </div>
                            <div className="radio-inputs" style={{ marginTop: 10 }} onChange={e => setSize(e.target.value)}>
                                <label style={{ marginLeft: 0 }} className={`${size === 's' ? 'active-radio' : ''}` }>
                                    <input className="radio-input" value='s' type="radio" name="size" />
                                    <span className="radio-tile">
                                        <span className="radio-label">1 Day</span>
                                    </span>
                                </label>
                                <label className={`${size === 'm' ? 'active-radio' : ''}`}>
                                    <input className="radio-input" value='m' type="radio" name="size" />
                                    <span className="radio-tile">
                                        <span className="radio-label">1 Week</span>
                                    </span>
                                </label>
                                <label className={`${size === 'l' ? 'active-radio' : ''}`}>
                                    <input className="radio-input" value='l' type="radio" name="size" />
                                    <span className="radio-tile">
                                        <span className="radio-label">1 Harvest</span>
                                    </span>
                                </label>
                            </div>
                            <div className="radio-inputs" style={{ marginTop: 10 }} onChange={e => setMaterial(e.target.value)}>
                                <label style={{ marginLeft: 0 }} className={`${material === 'Papyrus' ? 'active-radio' : ''}`}>
                                    <input className="radio-input" value='Papyrus' type="radio" name="material" />
                                    <span className="radio-tile">
                                        <span className="radio-label">Papyrus</span>
                                    </span>
                                </label>
                                <label className={`${material === 'Stone' ? 'active-radio' : ''}`}>
                                    <input className="radio-input" value='Stone' type="radio" name="material" />
                                    <span className="radio-tile">
                                        <span className="radio-label">Stone</span>
                                    </span>
                                </label>
                            </div>
                            <button className='btn btn-success' style={{ marginTop: 10, width: 270 }} onClick={onShowClick}>Buy Now</button>
                        </div>
                    </div>

                    <Modal id='pay' show={showModal} scrollable={true} onHide={onHideClick}>
                        <Modal.Header closeButton>
                            <Modal.Title>Checkout</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className='mm'>
                            <div>
                                <br />
                                <div className='leftColumn'>
                                    <img src='/Images/Products/P1.png' width='100' style={{ alignItems: 'center' }} />
                                </div>
                                <div className='rightColumn' style={{ textAlign: 'left' }}>
                                    <b>Custom Plaque</b>
                                    <p>Size: {getSize()}</p>
                                    <p style={{ marginTop: -15 }}>Material: {material}</p>
                                    <p style={{ marginTop: -15 }}>Amount: {capitalize(convertDecimalToWords(amount))} ({amount})</p>
                                </div>
                                <br />
                            </div>
                            <br />
                            <h3 className='mt-2'>Customization</h3>
                            <hr style={{ marginTop: -10, height: 3, background: 'black' }} />
                            <h6>Text: (100 characters limit)</h6>
                            {(showText && !text) && <p className='text-danger' style={{ marginBottom: 0 }}>*Please fill out all required fields.</p>}
                            <textarea value={text} onChange={e => setText(e.target.value)} maxLength='100' className='form-control' rows='3'></textarea>
                            <div className="form-check" style={{marginTop: 5} }>
                                <input className="form-check-input" type="checkbox" checked={includeRosetta} onChange={e => setIncludeRosetta(e.target.checked)} id="flexCheckDefault" />
                                <label className="form-check-label" htmlFor="flexCheckDefault">Include a Rosetta Stone<PiTrademarkLight style={{marginBottom: 10, fontSize: 10} }></PiTrademarkLight></label>
                            </div>
                            <div className='terms'>
                            <i>Rosetta Stone<PiTrademarkLight style={{ marginBottom: 6, fontSize: 6 }}></PiTrademarkLight> is a United Kingdom of Egypt Department of Education attempt
                                at increasing literacy. The feature includes a clear list of the Heiroglyphic alphabet, as translated phonetically into the language the user is most familiar with.
                                    The Rosetta Stone<PiTrademarkLight style={{ marginBottom: 6, fontSize: 6 }}></PiTrademarkLight> is a universal feature, and can be used for any piece of literature.</i>
                            </div>
                            <h3 className='mt-2'>Payment</h3>
                            <hr style={{ marginTop: -10, height: 3, background: 'black' }} />
                            <h6>Price: {cheshbonTotal() * amount} Deben</h6>
                            {(showText && !payment) && <p className='text-danger' style={{ marginBottom: 0 }}>*Please fill out all required fields.</p>}
                            <textarea className='form-control' rows='7' value={payment} onChange={e => setPayment(e.target.value)} placeholder='Write a short paragraph (3-4 sentences) containing a combination of items from the reference sheet totaling the price of the purchase'></textarea>
                            <h3 className='mt-2'>Shipping Information</h3>
                            <hr style={{ marginTop: -10, height: 3, background: 'black' }} />
                            {(showText && !name) && <p className='text-danger' style={{ marginBottom: 0 }}>*Please fill out all required fields.</p>}
                            <input type='text' name='name' className='form-control' placeholder='Name' value={name} onChange={e => setName(e.target.value)} />
                            {(showText && !email) ? <p className='text-danger' style={{ marginBottom: 0 }}>*Please fill out all required fields.</p> : <div style={{ height: 10 }}></div>}
                            <input type='email' name='email' className='form-control' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} />
                            <div className='terms'>
                                <i>Disclaimer: If you would like to receive requested goods, please fill the form out correctly. The incorrect submission of the form will cause great disruption to our mailing system.</i>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <button className='btn btn-secondary' onClick={onHideClick}>
                                Cancel
                            </button>
                            <button className='btn btn-primary' onClick={onBuyClick}>
                                {!processing ? 'Complete transaction' : <div className="lds-ring"><div></div><div></div><div></div><div></div></div>}
                            </button>
                        </Modal.Footer>
                    </Modal>
                </div>

                <div className={`col-1 ${showRef ? 'ref-show-w fade-in' : 'ref-full'}`}>
                    <div style={{ marginTop: 250 }}>
                        <div style={{ marginBottom: 5, marginLeft: -5 }}>
                            <button className='btn btn-lg btn-light' style={{ padding: 2, paddingTop: -20, marginRight: 0, alignContent: 'center', justifyContent: 'center' }} title={`${!showRef ? 'Show Reference Sheet' : 'Hide Reference Sheet'}`} onClick={_ => setShowRef(!showRef)}>{!showRef ? <CgMenuRightAlt></CgMenuRightAlt> : <CgMenuLeftAlt></CgMenuLeftAlt>}</button>
                        </div>
                        <div hidden={!showRef}>
                            <h5 style={{ paddingBottom: 10 }}><b>Reference Sheet</b></h5>
                            <p>2 Small fish</p>
                            <p style={{ textAlign: 'right', marginTop: -20 }}>⅕ Deben</p>
                            <p style={{ marginTop: -10 }}>Loaf of bread</p>
                            <p style={{ textAlign: 'right', marginTop: -20 }}>¼ Deben</p>
                            <p style={{ marginTop: -10 }}>Pot of honey</p>
                            <p style={{ textAlign: 'right', marginTop: -20 }}>½ Deben</p>
                            <p style={{ marginTop: -10 }}>3 jugs of beer</p>
                            <p style={{ textAlign: 'right', marginTop: -20 }}>1 Deben</p>
                            <p style={{ marginTop: -10 }}>Pair of sandals</p>
                            <p style={{ textAlign: 'right', marginTop: -20 }}>1 Deben</p>
                            <p style={{ marginTop: -10 }}>Log of sycamore wood</p>
                            <p style={{ textAlign: 'right', marginTop: -20 }}>1 Deben</p>
                            <p style={{ marginTop: -10 }}>17 ft. roll of papyrus</p>
                            <p style={{ textAlign: 'right', marginTop: -20 }}>2 Deben</p>
                            <p style={{ marginTop: -10 }}>Small goat</p>
                            <p style={{ textAlign: 'right', marginTop: -20 }}>2 Deben</p>
                            <p style={{ marginTop: -10 }}>Linen shirt</p>
                            <p style={{ textAlign: 'right', marginTop: -20 }}>2 Deben</p>
                            <p style={{ marginTop: -10 }}>Large goat</p>
                            <p style={{ textAlign: 'right', marginTop: -20 }}>3 Deben</p>
                            <p style={{ marginTop: -10 }}>Linen garment </p>
                            <p style={{ textAlign: 'right', marginTop: -20 }}>5 Deben</p>
                            <p style={{ marginTop: -10 }}>Pig</p>
                            <p style={{ textAlign: 'right', marginTop: -20 }}>5 Deben</p>
                            <p style={{ marginTop: -10 }}>Coffin</p>
                            <p style={{ textAlign: 'right', marginTop: -20 }}>25.5 Deben</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Slave;