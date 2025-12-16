import { ChangeEvent, FunctionComponent, useState } from "react";
import { cities, Region } from "../consts";
import { getNameByRegion } from "../utils";

export const RegionSearchComponent: FunctionComponent = () => {

    const imagePath = "/Images/Regions/";
    const mapsLink = "'https://www.google.com/maps/dir//";
    const defaultImage = `${imagePath}Map.png`;
    const defaultLocation = `${mapsLink}egypt`;

    const [directionsLink, setDirectionsLink] = useState<string>(defaultLocation);
    const [imageSrc, setImageSrc] = useState<string>(defaultImage);
    const [currentRegion, setCurrentRegion] = useState<Region | null>(null);

    const onSelectCity = (e: ChangeEvent<HTMLSelectElement>) => {
        if (e.target.value === '-1') {
            setImageSrc(defaultImage);
            setDirectionsLink(defaultLocation);
            setCurrentRegion(null);
        } else {
            const value = e.target.value; //need to see how this goes, maybe rename pics by ids
            setImageSrc(`${imagePath}${value}Region.png`);
            setDirectionsLink(`${mapsLink}${value},+Egypt`);
            setCurrentRegion(Region[value as keyof typeof Region]); //this works but i dont know why
        }
    };

    return (
        <div className='image'>
            <div className='leftColumn'>
                <>
                    <h3>Unsure where the closest collection center is?</h3>
                    <p>The country is divided into five regions. But which region is yours?
                        Select the city closest to your place of residence and we will tell you what region you are in.</p>
                </>
                <br />
                <>
                    <select onChange={e => onSelectCity(e)}>
                        <option value='-1' key='-1'>--Choose--</option>
                        {cities.map(c =>
                            <option value={c.region} key={c.name}>{c.name}</option>
                        )}
                    </select>
                </>
            </div>
            <div className='rightColumn'>
                <a href={imageSrc} target="_blank">
                    <img src={imageSrc} alt={defaultImage} width='400' />
                </a>
                {currentRegion &&
                    <h6>You are in Region {Region[currentRegion]}, and your collection center city is{" "}
                        <a target='blank' href={directionsLink}>{getNameByRegion(currentRegion)}</a></h6>
                }
            </div>
        </div>
    )
}

//select key or value? have custom component?