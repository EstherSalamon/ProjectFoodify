
export class PlaqueClass {

    //constructor() {
    //    this.title = this.getTitle();
    //    this.description = getDescription();
    //}

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
    title: 'in all honestly',
    description: 'really? you cant get thsi?'
}
//ok, why i want a class is cuz i want to have functions in there, like getsize or whatever. so i guess i shld have a class and the object shld call the methods?
