class Animal {
    constructor(public eats: string) {}

    eat() {
        console.log('Eating ' + this.eats);
    }

    speak() {
        console.log('Animal speaking');
    }
}