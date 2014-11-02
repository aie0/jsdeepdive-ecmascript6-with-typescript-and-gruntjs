///<reference path="./Animal.ts"/>
class Lion extends Animal {
    constructor() {
        super('meat');
    }

    speak() {
        console.log('Lion roars');
        super.speak();
    }
}