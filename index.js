import { Player } from "./Classes/playerClass.js";
import { Armor } from "./Classes/armorClass.js";
import { Weapon } from "./Classes/weaponClass.js"
import { GameManager } from "./Classes/gameManger.js"
 
const gameManager = new GameManager;

gameManager.newPlayer("Player1", "Player1ID");
gameManager.newPlayer("Player2", "Player2ID");

gameManager.fight("Player1", "Player2")

gameManager.printAllPlayers();