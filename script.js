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