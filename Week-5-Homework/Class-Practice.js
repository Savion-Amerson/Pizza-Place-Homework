class Item {
    constructor(id, name, price){
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

class GameConsole extends Item {
    constructor(id, name, price, console) {
        super(id, name, price);
        this.console = console;
    }
}

class VideoGames extends Item {
    constructor(id, name, price, game) {
        super(id, name, price);
        this.game = game;
    }
}