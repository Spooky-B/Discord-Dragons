class Armor {
    constructor(){
        this.dexterity = this.setStat();
        this.defence = this.setStat();
    }
    
    setStat(){
        return Math.floor(Math.random() * (6 - 2 + 1) + 2);
    }

    getStats(){
        var stats = {
            dexterity: this.mobility,
            defence: this.defence
        }
        return stats;
    }
}

module.exports = Armor;