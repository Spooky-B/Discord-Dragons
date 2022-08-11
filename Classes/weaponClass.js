class Weapon {
    constructor(){
        this.attack = this.setStat();
        this.defense = this.setStat();
        this.WeaponType = this.setType();
    } 
    
    setStat(){
        return Math.floor(Math.random() * (3 - 1 + 1) + 1);
    }

    setType(){
        const weaponTypes = [
            {type: "Sword", attack: 2, defense: 2}, 
            {type: "Axe", attack: 3, defense: 1}, 
            {type: "Dual Swords", attack: 3, defense: 1}, 
            {type: "Bow", attack: 4, defense: -1}
        ];

        var RandomType = Math.floor(Math.random() * (3 - 0 + 1) + 0);
        var selectedWeapon = weaponTypes[RandomType];

        this.attack = this.attack + selectedWeapon.attack;
        this.defence = this.defence + selectedWeapon.defense;
        return selectedWeapon.type;
    }

    getStats(){
        var stats = {
            mobility: this.attack,
            defence: this.defense
        }
        return stats;
    }
}

module.exports = Weapon;