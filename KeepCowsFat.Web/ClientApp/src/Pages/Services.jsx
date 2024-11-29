import React, { useState } from 'react';
import './Services.css';
import emailjs from '@emailjs/browser';
import Alert from 'react-bootstrap/Alert';
import { useSacks } from '../TotalContext';

const Services = () => {

    const cities = [
        {
            name: 'Abedju [Abydos]',
            region: 'Abedju'
        },
        {
            name: 'Abu Simpel',
            region: 'Yebu'
        },
        {
            name: 'Afyeh',
            region: 'Yebu'
        },
        {
            name: 'Amarna',
            region: 'Abedju'
        },
        {
            name: 'Assuit',
            region: 'Abedju'
        },
        {
            name: 'Aswan',
            region: 'Yebu'
        },
        {
            name: 'Badari',
            region: 'Abedju'
        },
        {
            name: 'Beni Hassan',
            region: 'Abedju'
        },
        {
            name: 'Buhen',
            region: 'Yebu'
        },
        {
            name: 'Chenmet-min',
            region: 'Abedju'
        },
        {
            name: 'Deir al-Bahari',
            region: 'Waset'
        },
        {
            name: 'Edfu',
            region: 'Yebu'
        },
        {
            name: 'El-Minya',
            region: 'Abedju'
        },
        {
            name: 'Giza',
            region: 'Memphis'
        },
        {
            name: 'Iuni [Heliopolis]',
            region: 'Pi Ramesse'
        },
        {
            name: 'Lahum',
            region: 'Memphis'
        },
        {
            name: 'Luxor',
            region: 'Waset'
        },
        {
            name: 'Men-nepher [Memphis]',
            region: 'Memphis'
        },
        {
            name: 'Naqada',
            region: 'Waset'
        },
        {
            name: 'Nekhen [Hieraconpolis]',
            region: 'Waset'
        },
        {
            name: 'Neni-nesu [Heracleopolis]',
            region: 'Abedju'
        },
        {
            name: 'Per Atum',
            region: 'Pi Ramesse'
        },
        {
            name: 'Per Bastet [Bubastis]',
            region: 'Pi Ramesse'
        },
        {
            name: 'Per Wadjet [Buto]',
            region: 'Pi Ramesse'
        },
        {
            name: 'Philae',
            region: 'Yebu'
        },
        {
            name: 'Pi Ramesse',
            region: 'Pi Ramesse'
        },
        {
            name: 'Saqqara',
            region: 'Memphis'
        },
        {
            name: 'Satju [Lycopolis]',
            region: 'Abedju'
        },
        {
            name: 'Sau [Sais]',
            region: 'Memphis'
        },
        {
            name: 'Thinis',
            region: 'Abedju'
        },
        {
            name: 'Tjaru',
            region: 'Pi Ramesse'
        },
        {
            name: 'Tjau',
            region: 'Waset'
        },
        {
            name: 'Waset [Thebes]',
            region: 'Waset'
        },
        {
            name: 'Yebu [Elephantine]',
            region: 'Yebu'
        }
    ];
    const regions = ['Pi Ramesse', 'Memphis', 'Abedju', 'Waset', 'Yebu'];
    const standard = {
        location: 'https://www.google.com/maps/dir//egypt',
        image: 'Map.png'
    };
    const { totalSacks } = useSacks();
    const [location, setLocation] = useState(standard.location);
    const [image, setImage] = useState(standard.image);
    const [region, setRegion] = useState({
        number: '',
        name: ''
    });
    const [showGoodAlert, setShowGoodAlert] = useState(false);
    const [processing, setProcessing] = useState(false);
    const [showError, setShowError] = useState(false);
    const [show, setShow] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        city: '',
        address: '',
        comments: ''
    });

    const formatNumber = (num) => {
        const formatter = Intl.NumberFormat('en-US');
        return formatter.format(num);
    }

    const onSelectChange = e => {
        if (e.target.value === -1) {
            setImage(standard.image);
            setLocation(standard.location);
            setRegion({
                number: '',
                name: ''
            });
        } else {
            const value = e.target.value;
            setImage(`${value}Region.png`);
            const url = `${value},+Egypt`;
            setLocation(`https://www.google.com/maps/dir//${url}`);
            const theRegion = {
                number: regions.indexOf(value) + 1,
                name: value === 'Memphis' ? 'Men-nepher' : value
            };
            setRegion(theRegion);
        }
    };

    const onTextChange = e => {
        const copy = { ...formData };
        copy[e.target.name] = e.target.value;
        setFormData(copy);
    }

    const onSendClick = (e) => {
        e.preventDefault();
        setProcessing(true);

        emailjs.init({
            publicKey: '-seASllH841UNLIgu'
        });

        const message = `Pickup\n_____________\nName: ${formData.name}\nEmail: ${formData.email}\nCity: ${formData.city}\nAddress:${formData.address}\nComments: ${formData.comments}`;

        var templateParams = {
            message
        };

        emailjs.send('service_kpz9sn9', 'products_template', templateParams).then(
            (response) => {
                console.log('SUCCESS!');
                setShowGoodAlert(true);
                setProcessing(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setFormData({
                    name: '',
                    email: '',
                    city: '',
                    address: '',
                    comments: ''
                });
            },
            (error) => {
                console.log('FAILED...', error);
                setShowError(true);
            },
        );

    };

    return (
        <div style={{ marginBottom: 80 }}>
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
            <div name='grain-count'>
                <div className='centerPadding'>
                    <h1>{totalSacks} sacks</h1>
                    <h4>Collected in the Central Grain Storehouses (live feed)</h4>
                    <h6>And if every sack has an estimate of 5,000 kernals, that comes out to around {formatNumber(totalSacks * 5000)} little bits of continuity!</h6>
                </div>
            </div>
            <div className='break'></div>
            <div name='search-regions' className='image'>
                <div className='doubleBreak'></div>
                <div style={{ backgroundColor: 'white' }} className='centerPadding'>
                    <div className='leftColumn' style={{ paddingTop: 100 }}>
                        <div style={{ paddingLeft: 200 }}>
                            <h3>Unsure where the closest collection center is?</h3>
                            <p>The country is divided into five regions. But which region is yours? Select the city closest to your place of residence and we will tell you what region you are in.</p>
                        </div>
                        <br />
                        <div style={{ paddingLeft: 300 }}>
                            <select className='form-control cspt' style={{ maxWidth: 300, textAlign: 'center' }} onChange={e => onSelectChange(e)}>
                                <option value='-1' key='-1'>--Choose--</option>
                                {cities.map(c => <option className='cspt' value={c.region} key={c.name}>{c.name}</option>)}
                            </select>
                        </div>
                    </div>
                    <div className='rightColumn'>
                        <img
                            className='this isnt working, i wanna have the pic as an href to blank like by plaque'
                            src={`/Images/${image}`}
                            alt={'/Images/Map.jpg'}
                            onError={event => {
                                event.target.src = "/Images/Map.png"
                                event.onerror = null
                            }}
                            width='400' />
                        <div className='brTag'></div>
                        {(regions.includes(region.name) || region.name === 'Men-nepher') ? <h6>You are in Region {region.number}, and your collection center city is <a target='blank' href={`${location}`}>{region.name}</a></h6> : <div className='brTag'></div>}
                    </div>
                </div>
                <div className='doubleBreak'></div>
            </div>
            <div className='break'></div>
            <div name='pickup-service' style={{ backgroundColor: 'lightgrey' }}>
                <div className='centerPadding'>
                    <div className='leftColumn'>
                        <div className='centerPadding'>
                            <h2>Ask about our pickup service!</h2>
                            <p>For those of you who have more than 2 wagonloads of grain per month, we offer door-to-door pickup services! Fill out this form to sign up.</p>
                        </div>
                    </div>
                    <div name='form' className='rightColumn'>
                        <form onSubmit={onSendClick}>
                            <input type='text' name='name' value={formData.name} onChange={e => onTextChange(e)} placeholder='Name' className='form-control' />
                            <input type='email' name='email' value={formData.email} onChange={e => onTextChange(e)} placeholder='Email' className='form-control mt-2' />
                            <select className='form-control mt-2' name='city' value={formData.city} onChange={e => onTextChange(e)}>
                                <option>--Select your nearest city--</option>
                                {cities.map(c => <option value={c.name} key={c.name}>{c.name}</option>)}
                            </select>
                            <textarea name='address' className='form-control mt-2' rows='6' value={formData.address} onChange={e => onTextChange(e)} placeholder='Address / How to reach you from your nearest city. (E.G. Go 3 miles out to the north, turn right after the cactus with the hat, my farm is the one with 6 red scarecrows eating figs)'></textarea>
                            <textarea name='comments' className='form-control mt-2' rows='3' value={formData.comments} onChange={e => onTextChange(e)} placeholder='Any additional comments'></textarea>
                            <button className='btn btn-info w-100 mt-2' style={{ backgroundColor: '#015500', color: 'lightgrey', borderColor: '#015500' }} value='send'>{!processing ? 'Submit' : <div className="lds-ring"><div></div><div></div><div></div><div></div></div>}</button>
                        </form>
                    </div>
                    <br />
                </div>
            </div>
            <br />
            <div name='products' style={{ margin: 125 }}>
                <h4>Some products you may be interested in:</h4>
                <p>Brought to you by The Product Team @ Project Foodify.gov</p>
                <br />
                <div className='row row-cols-3 g-4'>
                    <div className='col'>
                        <a href='/plq-530918' className='m-li'>
                            <div className='card h-100'>
                                <div className='card-body' style={{ justifyItems: 'center' }}>
                                    <img src='/Images/Products/P1.png' style={{ height: 250 }} />
                                    <hr />
                                    <p>Customizable Brightly Painted Colored Dyes Plaque Large Heiroglyphic Letters Custom Text Grain Storehouse Surplus col-3' style is margin 15 and width 400</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <a className='m-li' href='/sk-923847'>
                        <div className='col'>
                            <div className='card h-100'>
                                <div className='card-body' style={{ justifyItems: 'center' }}>
                                    <img src='/Images/Products/sack.png' style={{ height: 250 }} />
                                    <hr />
                                    <p>Strong Durable Sacks made of Fiber of Whatever By This and THat place THats the Best for COllecting and Storing Grain for Long PEriods of Time Reusable Woven</p>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a className='m-li' href='/PTPF/NMTDPL/952377'>
                        <div className='col'>
                            <div className='card h-100'>
                                <div className='card-body' style={{ justifyItems: 'center' }}>
                                    <img src='/Images/Products/P1.png' style={{ height: 250 }} />
                                    <hr />
                                    <p>Customizable Brightly Painted Colored Dyes Plaque Large Heiroglyphic Letters Custom Text Grain Storehouse Surplus</p>
                                </div>
                            </div>
                        </div >
                    </a>
                    <a className='m-li' href='/PTPF/NMTDSL/952724'>
                        <div className='col'>
                            <div className='card h-100'>
                                <div className='card-body' style={{ justifyItems: 'center' }}>
                                    <img src='/Images/Products/slave.png' style={{ height: 250 }} />
                                    <hr />
                                    <p>Government Trained UEDSM Certified Strong Muscular Bony Slave Tall Powerful Worker</p>
                                </div>
                            </div>
                        </div >
                    </a>
                </div >
            </div >

            <div name='timeline' style={{ margin: 50 }}>
                <h6>Dunno how to do it yet but i wanna have a timeline</h6>
                <button onClick={_ => window.scrollTo({ top: 0, behavior: 'smooth' })} className='btn btn-primary'>scroll to top</button>
            </div>
        </div >

    )
};

export default Services;