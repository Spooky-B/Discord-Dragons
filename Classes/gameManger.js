import { Player } from "./playerClass.js";
import { Armor } from "./armorClass.js";
import { Weapon } from "./weaponClass.js"

export class GameManager {
    constructor(){
            this.players = [];
    }

    newPlayer(name, id){
        var player = new Player(name, id);
        var armor = new Armor;
        var weapon = new Weapon;
    
        player.setWeapon(weapon);
        player.setArmor(armor);

        this.players.push(player)
        
        //nulling the vars to clear memory
        player = null;
        armor = null;
        weapon = null;
    }

    fight(attacker, defender){
         let player1;
         let player2;

         for(let i = 0; i < this.players.length; i++){
            if(this.players[i].name == attacker){
                player1 = this.players[i];
            }
            if(this.players[i].name == defender){
                player2 = this.players[i];
            }
         }

         if(player1.str > player2.str){
            console.log("player1 wins")
         } else {
            console.log("player2 wins")
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