import { Player } from "./Classes/playerClass.js";
import { Armor } from "./Classes/armorClass.js";
import { Weapon } from "./Classes/weaponClass.js"

const newPlayer = (name, id) => {
    var player = new Player(name, id);
    var armor = new Armor;
    var weapon = new Weapon;

    player.setWeapon(weapon);
    player.setArmor(armor);

    player.printCharacter();

    //nulling the vars to clear memory
    player = null;
    armor = null;
    weapon = null;
}