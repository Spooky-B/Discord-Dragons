import { Player } from "./Classes/playerClass.js";
import { Armor } from "./Classes/armorClass.js";
import { Weapon } from "./Classes/weaponClass.js"

const player1 = new Player("player_1", "Player_1_ID");
const player2 = new Player("Player_2", "Player_2_ID");

player1.printCharacter();
player2.printCharacter();

var armor1 = new Armor;
var armor2 = new Armor;
var weapon1 = new Weapon;
var weapon2 = new Weapon;

console.log("----------------------------------------------")

player1.setArmor(armor1);
player2.setArmor(armor2);
player1.setWeapon(weapon1);
player2.setWeapon(weapon2);

player1.printCharacter();
player2.printCharacter();