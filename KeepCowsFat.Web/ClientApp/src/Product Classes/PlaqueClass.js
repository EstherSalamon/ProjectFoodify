
export class PlaqueClass {

  //  this.material = 'stone';

    //constructor() {
    //    this.title = this.getTitle();
    //    this.description = getDescription();
    //}

    static setMaterial(material) {
        material = material;
    }

    static getTitle() {
        return 'will you get tilte now?'
    } //so this works, but i don't wanna have to call function to get values, i wanna have it right away
    //but also, why do i have to dot in so deeply to get it?
    //wait, why need static?


    static getSize() { //to use this, think you shld use this key word for size value?
        if (size === 's') {
            return '9 x 11';
        } else if (size === 'm') {
            return '18 x 22';
        } else if (size === 'l') {
            return '27 x 33';
        } else {
            console.log("Seriously? For people like you is why I had to work around it like this! Come on! Yes, I am expecting that if you played around with my source code you'll be seeing this logging of mine, so I get to yell at you in peace. How awesome!");
            return 'Invalid Entry';
        }
    };

};

export const finishedPlaque = {
    title: 'Customizable Storehouse Plaque',
    description: 'Painted plaque to place on your tax and surplus storehouse, to ensure proper consencration and distribution.',
    details: [
        'The stone plaque is made of durable limestone, carved from the rocks by expert carvers. The rock is strong enough to be banged against without breaking.',
        'The papyrus is made from suf reeds, dried and pressed by the whatever firm.All papyrus products are in compliance with the Save The Reeds Enviroment Organization Guidelines.',
        'Hand dyed with bright colors. All dyes are vegan.',
        'Standard text: ‘The grain within is consecrated for the purpose of saving the New Egyptian Kingdom’',
        'Optional: Includes Rosetta Stone, for simultaneous translation'
    ],
    getPrice: (material, size) => {
        let total;
        if (material === 'Papyrus') {
            total = 9;
        } else {
            total = 11;
        }
        if (size === 'm') {
            total += 2;
        } else if (size === 'l') {
            total += 4;
        }
        return total;
    },
    setMaterial: (material) => {

    }
};
//ok, why i want a class is cuz i want to have functions in there, like getsize or whatever. so i guess i shld have a class and the object shld call the methods?

//ok, so i'm dividing the values in 3:
/*
    1. static values, such as title, description, details
    2. changing values, both the options (size / material) and the customizations (text / rosetta)
    3. calculated values, as in the price



    the first ones i cld do easily, like i jsut did, no issue
    the otehr two need some version of state or waht, which i dont know how to do if it aint in a component
    so either i cld make epes a version of component, or i cld make a hook or waht, and assign that hook in here,
    and call that when i need it. that wld be cool, like the modalcomps i just did, and in the hook i wld pass in
    product. do i need sep hook for each? i think so, no? except if i cld store a function in this class and call
    it when i want, let's try that
    ok, so yes, price can work, i cld just function it in there. what shld i do about the changing values? like how can
    i store the chosen values?
    and also the price function needs the current values, so i need to pass them in somehow. so where do they live
    and how can i play with them?

 */


export class plaqueStuff {
    constructor() {
        this.material = "stone";
        this.price = 13;
        this.title = "stuffs";
    }

    setMaterial(material) {
        this.material = material;
    }
}