import { Player } from "./playerClass.js";
import { Armor } from "./armorClass.js";
import { Weapon } from "./weaponClass.js";
import { Enemy } from "./EnemyClass.js"

export class GameManager {
    constructor(){
            this.players = [];
            this.enemies = [];
    }

    newPlayer(name, id){
        let player = new Player(name, id);
        let armor = new Armor;
        let weapon = new Weapon;
    
        player.setWeapon(weapon);
        player.setArmor(armor);

        this.players.push(player)
        
        //nulling the vars to clear memory
        player = null;
        armor = null;
        weapon = null;
    }

    playerFight(attacker, defender){
         for(let i = 0; i < this.players.length; i++){
            if(this.players[i].name == attacker){
                attacker = this.players[i];
            }
            if(this.players[i].name == defender){
                defender = this.players[i];
            }
         }

         if((attacker.str + attacker.weapon.attack) > (defender.Const + defender.armorBonus.defense)){
            let healthLoss = (attacker.str + attacker.weapon.attack) - (defender.Const + defender.armorBonus.defense);
            console.log(`attacker wins, defender loses ${healthLoss} health`)
            defender.money = defender.health - healthLoss;
            defender.loseFight();
            attacker.winFight();
         } else {
            console.log("defender wins, Attacker loses $10")
            attacker.money = attacker.money - 10;
            defender.winFight();
            attacker.loseFight();
         }
          return;
    }

    newEnemy(){
        let max = this.players.length - 1;
        let targetSelector = Math.floor(Math.random() * (max - 0 + 1));
        let target = this.players[targetSelector]

        let level = this.players[targetSelector].level + 1;


        let enemy = new Enemy(level, target);
        let armor = new Armor;
        let weapon = new Weapon;

        enemy.setWeapon(weapon);
        enemy.setArmor(armor);

        this.enemies.push(enemy);
    }

    printAllEnemies(){
        console.log("Printing All Enemies")
        for(let i = 0; i < this.enemies.length ; i++){
            console.log(this.enemies[i])
        }
        return;
    }

    printAllPlayers(){
        console.log("Printing All")
        for(let i = 0; i < this.players.length ; i++){
            console.log(this.players[i])
        }
        return;
    }
}