import { FunctionComponent } from "react";

export const CalendarCountdownComponent: FunctionComponent = () => {
    return (
        <div name='timeline' style={{ margin: 50 }}>
            <h6>Dunno how to do it yet but i wanna have a timeline</h6>
            <button onClick={_ => window.scrollTo({ top: 0, behavior: 'smooth' })} className='btn btn-primary'>scroll to top</button>
        </div>
    )
}

//note, see the dealzone timerProgressBar