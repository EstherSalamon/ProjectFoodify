import { Region } from "./consts";

export const formatNumber = (num: number) => {
    const formatter = Intl.NumberFormat('en-US');
    return formatter.format(num);
}

export const getNameByRegion = (region: Region): string => {
    const map: Record<Region, string> = {
        [Region.ABEDJU]: "Abedju",
        [Region.YEBU]: "Yebu",
        [Region.WASET]: "Waset",
        [Region.MEMPHIS]: "Memphis",
        [Region.PI_RAMESSE]: "Pi Ramesse"
    }
    return map[region];
}