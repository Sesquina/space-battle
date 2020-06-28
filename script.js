// SPACE BATTLE CONSOLE GAME

//GAME OBJECT
let game = {
    round: 0,
    targetShip: 0,
    userResponse: ""
}


//MY SHIP OBJECT
let ussSchwartz = {
    name: "USS Schwartz",
    hull: 20,
    firePower: 5,
    accuracy: 0.7,
    attack: function() {                  //This is my attack function
        let attackChance = Math.random();
        if(attackChance <= this.accuracy) {
            return true;
        }
        else {
            return false;
        }
    }
};

// create a class for the alien ships
class AlienShip {
    constructor(name,hull,firePower,accuracy) {
        this.name = name;
        this.hull = hull;
        this.firePower = firePower;
        this.accuracy = accuracy;
    };
    attack() {
        let attackChance = Math.random();
        if(attackChance <= this.accuracy) {
            return true;
        }
        else {
            return false;
        }
    };
};

// Alien Arrays
let alienShips = [];                    // alien ships
let alienHullValues = [3,4,5,6];        // alien hull values
let alienFirePowerValues = [2,3,4];     // alien fire power values
let alienAccValues = [.6,.7,.8];        // alien accuracy values

// function ~ build alien ships
let buildAlienShips = () => {
    for(let i=0;i<6;i++) {  //Iterate 6 values
        let name = "Alien Ship "+(i+1);
        let hull = alienHullValues[Math.floor(Math.random() * 4)];
        let firePower = alienFirePowerValues[Math.floor(Math.random() * 3)];
        let accuracy = alienAccValues[Math.floor(Math.random() * 3)];
        alienShips[i] = new AlienShip(name,hull,firePower,accuracy);
    };
};

// funcion ~ battle
let battleWithShip = (ship1,ship2) => {
    // put the ships into an array
    let ships = [ship1,ship2];
    let attack = false;
    let attacking = 0;
    let beingAttacked = 1;
    let temp;
    console.log('%c Attack Begins =================','font-size: 30px' );
    while(ships[beingAttacked].hull > 0)
    {
        // attacking sequence
        if(ships[beingAttacked].hull > 0)
        {
            // log the attack information
            console.log("\n");
            console.log(`%c ${ships[attacking].name} attacked ${ships[beingAttacked].name}`, "color: purple; border: 1px solid grey; font-size: 18px;");
            // generate an attack on the enemy ship
            attack = ships[attacking].attack();
            if(attack === true) {
                ships[beingAttacked].hull -= ships[attacking].firePower;
                console.log(`%c Attack Successful! ${ships[beingAttacked].name} Hull: ${ships[beingAttacked].hull}`, "color: green; font-weight: bold; font-size: 16px;");
            }
            else {
                console.log(`%c Attack Unsuccessful! ${ships[beingAttacked].name} Hull: ${ships[beingAttacked].hull}`, "color: red; font-size: 16px;");
            }
            // check if the ship being attack is still alive
            if(ships[beingAttacked].hull <= 0) {
                console.log(`%c ${ships[beingAttacked].name} has been destroyed`, "color: red; border: 1px solid grey; font-size: 16px;");
                if(ships[beingAttacked] === ussSchwartz) {
                    alert("Game Over!!!");
                }
                else if(ships[beingAttacked].name === alienShips[alienShips.length-1].name) {
                    alert(`%c ${ships[beingAttacked].name} destroyed!\nAlien fleet has been destroyed!\nyou have been victorious`, "color: green;");
                }
                else {
                    game.userResponse = prompt(`${alienShips[game.targetShip].name} destroyed!!\n${ussSchwartz.name} Hull: ${ussSchwartz.hull}\nWould you like to attack the next ship or RETREAT from battle?`,"");
                    game.targetShip += 1;
                    checkUserPrompt();
                    return ;
                }
            }
            else {
                // swap the attacking and being attacked ships
                temp = attacking;
                attacking = beingAttacked;
                beingAttacked = temp;
            }
        }
    }
}