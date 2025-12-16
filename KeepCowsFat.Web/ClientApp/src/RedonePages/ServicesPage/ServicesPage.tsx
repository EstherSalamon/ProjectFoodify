import { FunctionComponent } from "react";
import { GrainCountComponent } from "./GrainCount/GrainCountComponent";
import { RegionSearchComponent } from "./RegionSearch/RegionSearchComponent";
import { PickupServiceComponent } from "./PickupService/PickupServiceComponent";

export const ServicesPage: FunctionComponent = () => {
    return (
        <>
            <GrainCountComponent />
            <RegionSearchComponent />
            <PickupServiceComponent />
        </>
    )
}