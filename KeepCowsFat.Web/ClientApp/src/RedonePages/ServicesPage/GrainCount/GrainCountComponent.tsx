import { FunctionComponent } from "react";
import { useSacks } from "../../../TotalContext";
import { formatNumber } from "../utils";

export const GrainCountComponent: FunctionComponent = () => {

    const { totalSacks } = useSacks();

    return (
        <>
            <div className='centerPadding'>
                <h1>{totalSacks} sacks</h1>
                <h4>Collected in the Central Grain Storehouses (live feed)</h4>
                <h6>And if every sack has an estimate of 5,000 kernals, that comes out to around {formatNumber(totalSacks * 5000)} little bits of continuity!</h6>
            </div>
        </>
    );
}