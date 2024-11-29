import React, { useState } from 'react';
import './Contact.css';
import Alert from 'react-bootstrap/Alert';

const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [showGoodAlert, setShowGoodAlert] = useState(false);
    const [processing, setProcessing] = useState(false);
    const [showError, setShowError] = useState(false);

    const onSubmitClick = () => {
        setProcessing(true);

        //emailjs.init({
        //    publicKey: '-seASllH841UNLIgu'
        //});

        //const message = `Item: Plaque\nName: ${name}\nEmail: ${email}\nAmount: ${amount}\nSize: ${size}\nText to convert: ${text}`;


        //var templateParams = {
        //    message
        //};

        //emailjs.send('service_kpz9sn9', 'products_template', templateParams).then(
        //    (response) => {
        //        console.log('SUCCESS!');
        //        setShowModal(false);
        //        setShowGoodAlert(true);
        //        setProcessing(false);
        //        window.scrollTo(0, 0);
        //        resetState();
        //    },
        //    (error) => {
        //        console.log('FAILED...', error);
        //        setShowError(true);
        //    },
        //);
    };

    return (
        <div>
            <Alert variant="success" show={showGoodAlert} position='top-end' onClose={() => setShowGoodAlert(false)} dismissible>
                <Alert.Heading>Submission successful</Alert.Heading>
                <p>
                    Thank you for reaching out to us. A member of our team will reply to you shortly. If you have not received a
                    reply within 6-8 business days, contact us directly <a href='mailto:esther386386@gmail.com'>here</a>.
                </p>
            </Alert>
            <Alert variant="danger" show={showError} onClose={() => setShowError(false)} dismissible style={{ position: '' }}>
                <Alert.Heading>Oops! You got an error</Alert.Heading>
                <p>
                    Try reloading the page and resubmitting the form, or contact us directly <a href='mailto:esther386386@gmail.com'>here</a>.
                </p>
            </Alert>

            <div style={{ marginTop: 100, marginLeft: 300, marginRight: 300, marginBottom: 80 }}>
                <div className='col-md-3' style={{ alignContent: 'center', justifyContent: 'center', alignItems: 'center' }}>
                    <h2>Quick Contact</h2>
                    <hr className='style-seven' />
                </div>
                <h6 className='mt-2'>Name</h6>
                <input type='text' className='form-control mt-2' name='name' value={name} onChange={e => setName(e.target.value)} />
                <h6 className='mt-2'>Email</h6>
                <input type='text' className='form-control mt-2' name='email' value={email} onChange={e => setEmail(e.target.value)} />
                <h6 className='mt-2'>Subject</h6>
                <input type='text' className='form-control mt-2' name='subject' value={subject} onChange={e => setSubject(e.target.value)} />
                <h6 className='mt-2'>Message</h6>
                <textarea className='form-control mt-2' name='message' value={message} onChange={e => setMessage(e.target.value)} rows='8'></textarea>

                <button className='mt-2 btn btn-info w-100' onClick={onSubmitClick}>{!processing ? 'Submit' : <div className="lds-ring"><div></div><div></div><div></div><div></div></div>}</button>
            </div>
        </div>
    )
};

export default Contact;