
export enum Region {
    ABEDJU = 1,
    YEBU = 2,
    WASET = 3,
    MEMPHIS = 4,
    PI_RAMESSE = 5,
}

type city = {
    name: string;
    region: Region;
}

export const cities: city[] = [
    {
        name: 'Abedju [Abydos]',
        region: Region.ABEDJU
    },
    {
        name: 'Abu Simpel',
        region: Region.YEBU
    },
    {
        name: 'Afyeh',
        region: Region.YEBU
    },
    {
        name: 'Amarna',
        region: Region.ABEDJU
    },
    {
        name: 'Assuit',
        region: Region.ABEDJU
    },
    {
        name: 'Aswan',
        region: Region.YEBU
    },
    {
        name: 'Badari',
        region: Region.ABEDJU
    },
    {
        name: 'Beni Hassan',
        region: Region.ABEDJU
    },
    {
        name: 'Buhen',
        region: Region.YEBU
    },
    {
        name: 'Chenmet-min',
        region: Region.ABEDJU
    },
    {
        name: 'Deir al-Bahari',
        region: Region.WASET
    },
    {
        name: 'Edfu',
        region: Region.YEBU
    },
    {
        name: 'El-Minya',
        region: Region.ABEDJU
    },
    {
        name: 'Giza',
        region: Region.MEMPHIS
    },
    {
        name: 'Iuni [Heliopolis]',
        region: Region.PI_RAMESSE
    },
    {
        name: 'Lahum',
        region: Region.MEMPHIS
    },
    {
        name: 'Luxor',
        region: Region.WASET
    },
    {
        name: 'Men-nepher [Memphis]',
        region: Region.MEMPHIS
    },
    {
        name: 'Naqada',
        region: Region.WASET
    },
    {
        name: 'Nekhen [Hieraconpolis]',
        region: Region.WASET
    },
    {
        name: 'Neni-nesu [Heracleopolis]',
        region: Region.ABEDJU
    },
    {
        name: 'Per Atum',
        region: Region.PI_RAMESSE
    },
    {
        name: 'Per Bastet [Bubastis]',
        region: Region.PI_RAMESSE
    },
    {
        name: 'Per Wadjet [Buto]',
        region: Region.PI_RAMESSE
    },
    {
        name: 'Philae',
        region: Region.YEBU
    },
    {
        name: 'Pi Ramesse',
        region: Region.PI_RAMESSE
    },
    {
        name: 'Saqqara',
        region: Region.MEMPHIS
    },
    {
        name: 'Satju [Lycopolis]',
        region: Region.ABEDJU
    },
    {
        name: 'Sau [Sais]',
        region: Region.MEMPHIS
    },
    {
        name: 'Thinis',
        region: Region.ABEDJU
    },
    {
        name: 'Tjaru',
        region: Region.PI_RAMESSE
    },
    {
        name: 'Tjau',
        region: Region.WASET
    },
    {
        name: 'Waset [Thebes]',
        region: Region.WASET
    },
    {
        name: 'Yebu [Elephantine]',
        region: Region.YEBU
    }
];