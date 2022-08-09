export class Enemy {
    constructor(level, target)
    {
        this.money = 50;
        this.level = level;
        this.weapon = {}
        this.armorBonus = {};
        this.str = this.setStat();
        this.dex = this.setStat();
        this.Const = this.setStat();
        this.intel = this.setStat();
        this.charisma = this.setStat();
        this.target = target;
    }

    setStat(){
        return Math.floor(Math.random() * (18 - 8 + 1) + 8);
    }

    setArmor(armortype){
        this.armorBonus = {defence: armortype.defence, dexterity: armortype.dexterity};
    }

    setWeapon(weapon){
        this.weapon = {Type: weapon.WeaponType, attack: weapon.attack, defense: weapon.defense};
    }

    attackTarget(){
        
    }


    getStats(){
        let enemyOb = {
            level: this.level,
            weapon: this.weapon,
            target: this.target
        }

        return enemyOb;
    }

}