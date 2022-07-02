class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Menu {
  constructor() {
    this.animals = [];
    this.selectedanimal = null;
  }

  start() {
    let selection = this.showMainMenuOptions();
    while (selection != 0) {
      switch (selection) {
        case "1":
          this.createAnimal();
          break;
        case "2":
          this.deleteAnimal();
          break;
        case "3":
          this.displayAnimal();
          break;

        default:
          selection = 0;
      }
      selection = this.showMainMenuOptions();
    }
    alert("Goodbye!");
  }

  showMainMenuOptions() {
    return prompt(`
        0) exit
        1) create new animal
        2) delete animals
        3) display all animals
   
        
        `);
  }

  displayAnimal() {
    let animalString = "";
    for (let i = 0; i < this.animals.length; i++) {
      animalString += i + ") " + this.animals[i].name + "\n";
    }

    alert(animalString);
  }

  createAnimal() {
    let name = prompt("Enter Name of new animal");
    this.animals.push(new Animal(name));
  }

  deleteAnimal() {
    let index = prompt("Enter the index of the team you wish to delete");
    if (index > -1 && index < this.animals.length) {
      this.animals.splice(index, 1);
    }
  }
}

let menu = new Menu();
menu.start();
