//Part 1

// const adventurer = {
//   name: "Robin",
//   health: 10,
//   inventory: ["sword", "potion", "artifact"],
//   companion: {
//     name: "Leo",
//     type: "Cat",
//     subCompanion:{
//         name: "Frank",
//         type: "Flea",
//         inventory: ["small hat", "sunglasses"]
//     }
//   },
//   roll (mod = 0) {
//     const result = Math.floor(Math.random() * 20) + 1 + mod;
//     console.log(`${this.name} rolled a ${result}.`)
//     }
// };

// adventurer.roll()

//Part 2

// class Character {
//     constructor (name) {
//       this.name = name;
//       this.health = 100;
//       this.inventory = [];
   
//     }

//        roll(mod = 0){
//         const result = Math.floor(Math.random() * 20) + 1 + mod;
//         console.log(`${this.name} rolled a ${result}.`)
//         }
//   }

// const robin = new Character("Robin");
// robin.inventory = ["sword", "potion", "artifact"];
// robin.companion = new Character("Leo");
// robin.companion.type = "Cat";
// robin.companion.companion = new Character("Frank");
// robin.companion.companion.type = "Flea";
// robin.companion.companion.inventory = ["small hat", "sunglasses"];

// robin.roll()
// robin.companion.roll()
// robin.companion.companion.roll()

//part 3

// class Character {
//     constructor (name) {
//       this.name = name;
//       this.health = 100;
//       this.inventory = [];
//     }
//     roll (mod = 0) {
//         const result = Math.floor(Math.random() * 20) + 1 + mod;
//         console.log(`${this.name} rolled a ${result}.`)
//         }
//   }

//   class Adventurer extends Character {
//     constructor (name, role) {
//       super(name);
//       // Adventurers have specialized roles.
//       this.role = role;
//       // Every adventurer starts with a bed and 50 gold coins.
//       this.inventory.push("bedroll", "50 gold coins");
//     }
//     // Adventurers have the ability to scout ahead of them.
//     scout () {
//       console.log(`${this.name} is scouting ahead...`);
//       super.roll();
//     }
//   }

//   class Companion extends Character {
//     constructor(name, type){
//         super(name);
//         this.type = type; 
//     }
//     run(){
//         console.log(`${this.name} is running away!`)
//         super.roll()
//     }
//   }

//   const robin = new Adventurer("Robin", "Adventurer");
//   const frank = new Companion("Frank", "Companion");
//   const leo = new Companion("Leo", "Companion"); 

//   robin.scout()
//   frank.run()
//   leo.run()

  //part4

  class Character {
    static Max_Health = 100; 
    
    constructor (name) {
      this.name = name;
      this.health = 100;
      this.inventory = [];
    }
    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
        }
    
  }

  class Adventurer extends Character {
    static roles = ["Fighter", "Healer", "Mage"]
    constructor (name, role) {
      super(name);
      this.role = role;
      this.inventory.push("bedroll", "50 gold coins");
    }
   
    scout () {
      console.log(`${this.name} is scouting ahead...`);
      super.roll();
    }
  }

  class Companion extends Character {
    constructor(name, type){
        super(name);
        this.type = type; 
    }
    run(){
        console.log(`${this.name} is running away!`)
        super.roll()
    }
  }

  const robin = new Adventurer("Robin", "Adventurer");
  const frank = new Companion("Frank", "Companion");
  const leo = new Companion("Leo", "Companion"); 

  robin.scout()
  frank.run()
  leo.run()

  console.log(Adventurer.Max_Health)
  console.log(Adventurer.roles[0])