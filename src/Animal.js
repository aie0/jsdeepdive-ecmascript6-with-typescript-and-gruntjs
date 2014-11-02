var Animal = (function () {
    function Animal(eats) {
        this.eats = eats;
    }
    Animal.prototype.eat = function () {
        console.log('Eating ' + this.eats);
    };

    Animal.prototype.speak = function () {
        console.log('Animal speaking');
    };
    return Animal;
})();
//# sourceMappingURL=Animal.js.map
