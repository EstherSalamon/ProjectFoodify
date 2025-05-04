

export class plaque { //no static here? is typescript? cool. is fine without?

    //no useState here? //i guess not, its .js not .jsx
    //shld it then be a class component? i want state to moniter my selectedOptions


    //something's wrong with my class, i dont know how it shld be working, but its not

    constructor() {
        this.defaults = defaults;
        this.title = getName();
        this.description = description;
        this.details = details;
        this.maxAmt = maxAmt;
        this.images = images;
    }

    //const defaults = {};


    //chosenOptions = {
    //    size: '12x12',
    //    material: 'stone',
    //    text: 'The grain within is consecrated for the purpose of saving the New Egyptian Kingdom',
    //    includesRosetta: false
    //}


    //name = 'Customizable Storehouse Plaque';
    //description = 'Painted plaque to place on your tax and surplus storehouse, to ensure proper consencration and distribution.';
    //details = [
    //    'The stone plaque is made of durable limestone, carved from the rocks by expert carvers. The rock is strong enough to be banged against without breaking.',
    //    'The papyrus is made from suf reeds, dried and pressed by the whatever firm.All papyrus products are in compliance with the Save The Reeds Enviroment Organization Guidelines.',
    //    'Hand dyed with bright colors. All dyes are vegan.',
    //    'Standard text: ‘The grain within is consecrated for the purpose of saving the New Egyptian Kingdom’',
    //    'Optional: Includes Rosetta Stone, for simultaneous translation'
    //];
    //maxAmt = 8;
    //images = [
    //    { src: '/wait', name: 'Plaque1', sequence: 1 },
    //    { src: '/wait', name: 'Plaque2', sequence: 2 },
    //    { src: '/wait', name: 'Plaque3', sequence: 3 },
    //];
    ////options = [
    ////    {
    ////        name: 'material',            type='options', options=['stone', 'papyrus']
    ////    },
    ////    { name:'size', type='options', options=['12x12', '24x24', '36x36'] },
    ////];
    ////customizations = [
    ////    { name='text', type='default', text='The grain within is consecrated for the purpose of saving the New Egyptian Kingdom' },
    ////    { name='rosetta', type='boolean', default: false }
    ////]

    //price = () => {
    //    let total;
    //    if (this.chosenOptions.material === 'Papyrus') { //hey, you suppose i cld keep my state here?
    //        total = 9;
    //    } else {
    //        total = 11;
    //    }

    //    if (this.chosenOptions.size === '24x24') {
    //        total += 2;
    //    } else if (size === '36x36') {
    //        total += 4;
    //    }

    //    return total;
    //};
};

const getName = () => {
    return 'Name';
}

export class slave {
    name = 'slave';
    description = 'slave';
}