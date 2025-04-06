import { CgMenuRightAlt } from "react-icons/cg";
import { CgMenuLeftAlt } from "react-icons/cg";

export default RefSheet = () => {
    return (
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
    );
};