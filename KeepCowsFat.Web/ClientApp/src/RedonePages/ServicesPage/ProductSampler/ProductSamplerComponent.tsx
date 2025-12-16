import { FunctionComponent } from "react";

export const ProductSamplerComponent: FunctionComponent = () => {
    return (
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
    )
}