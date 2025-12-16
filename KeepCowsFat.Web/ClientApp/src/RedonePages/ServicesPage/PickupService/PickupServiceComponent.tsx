import { FunctionComponent } from "react";

export const PickupServiceComponent: FunctionComponent = () => {
    return (
        <div>
            <div className='leftColumn'>
                <>
                    <h2>Ask about our pickup service!</h2>
                    <p>For those of you who have more than 2 wagonloads of grain per month, we offer{" "}
                        door-to-door pickup services! Fill out this form to sign up.</p>
                </>
            </div>
            <div className='rightColumn'>
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
        </div>
    )
}

//the alerts, how to trigger? stores?