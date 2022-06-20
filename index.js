import { GameManager } from "./Classes/gameManger.js"
 
const gameManager = new GameManager;

gameManager.newPlayer("Player1", "Player1ID");
gameManager.newPlayer("Player2", "Player2ID");

gameManager.printAllPlayers();

gameManager.fight("Player1", "Player2")

gameManager.printAllPlayers();