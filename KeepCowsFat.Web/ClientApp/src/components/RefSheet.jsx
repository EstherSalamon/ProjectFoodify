import { useContext } from 'react';
import { Offcanvas } from 'react-bootstrap';
import { refSheetItems } from '../Product Classes/DataValues';
import { RefSheetContext } from './RefSheetWrapper';

import './RefSheet.css';

export const RefSheet = ({ open, handleClose }) => {

    return (
        <Offcanvas show={open} onHide={handleClose} placement='end'>
            <Offcanvas.Header closeButton className='closeBtn' />
            <div className='header'>
                <h1 className='headerText'>Reference Sheet</h1>
            </div>
            <Offcanvas.Body>
                <div className='body'>
                    {refSheetItems.map((item, index) =>
                        <div key={index}>
                            <div className='item'>{item.item}</div>
                            <div className='includeFlex'>
                                <span className='price'>{item.price}</span>
                                <span> Deben</span>
                            </div>
                        </div>)}
                </div>
            </Offcanvas.Body>

        </Offcanvas>
    );
};

export const RefSheetBtn = () => {

    const { setShowRefSheet } = useContext(RefSheetContext);

    return (
        <button
            className='refSheetBtn'
            onClick={() => setShowRefSheet(true)}
        >
            Reference Sheet
        </button>
    )
};