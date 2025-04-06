

import { PiTrademarkLight } from "react-icons/pi";
import { convertDecimalToWords } from 'decimal-to-words-by-shubham-setia';
import Modal from 'react-bootstrap/Modal';
import emailjs from '@emailjs/browser';


export default CheckoutModal = (cartItem) => {

    const [text, setText] = useState('The grain within is consecrated for the purpose of saving the New Egyptian Kingdom'); //happens to be, this shld be sent in, not state here
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [payment, setPayment] = useState('');

    useEffect(() => {

        const isValid = text && name && email;
        setValidForm(isValid);

    }, [text, name, email, payment]);

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
                <div className="form-check" style={{ marginTop: 5 }}>
                    <input className="form-check-input" type="checkbox" checked={includeRosetta} onChange={e => setIncludeRosetta(e.target.checked)} id="flexCheckDefault" />
                    <label className="form-check-label" htmlFor="flexCheckDefault">Include a Rosetta Stone<PiTrademarkLight style={{ marginBottom: 10, fontSize: 10 }}></PiTrademarkLight></label>
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
    )
};

                //let this return a status success || error as children, and that shld determine what product page shows