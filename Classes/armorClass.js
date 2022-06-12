export class Armor {
    constructor(){
        this.mobility = this.setStat();
        this.defence = this.setStat();
    }
    
    setStat(){
        return Math.floor(Math.random() * (6 - 2 + 1) + 2);
    }

    getStats(){
        var stats = {
            mobility: this.mobility,
            defence: this.defence
        }
        return stats;
    }
}