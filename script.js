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