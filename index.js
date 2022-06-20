import { GameManager } from "./Classes/gameManger.js"
 
const gameManager = new GameManager;

gameManager.newPlayer("Player1", "Player1ID");
gameManager.newPlayer("Player2", "Player2ID");
gameManager.newPlayer("Player3", "Player3ID");
gameManager.newPlayer("Player4", "Player4ID");
gameManager.newEnemy();
gameManager.printAllPlayers();
gameManager.printAllEnemies();