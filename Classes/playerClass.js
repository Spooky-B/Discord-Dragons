import { Weapon } from "./weaponClass.js";
import { Armor } from "./armorClass.js";

export class Player {
    constructor (name, id){
        this.name = name;
        this.id = id;
        this.money = 50;
        this.level = 1;
        this.upPoints = 0;
        this.exp = 0;
        this.weapon = {}
        this.armorBonus = {};
        this.str = this.setStat();
        this.dex = this.setStat();
        this.Const = this.setStat();
        this.intel = this.setStat();
        this.charisma = this.setStat();
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

    battlePlayer(oppPlayer){
        oppPlayer.str;
    }

    printCharacter() {
        console.log(this);
    }
}