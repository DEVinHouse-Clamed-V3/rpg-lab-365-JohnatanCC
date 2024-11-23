import Weapon from "./Weapon";

export default class Character {
  private name: string = "";
  private strength: number = 10;
  private health: number = 100;
  private weapon: Weapon | null = null;

  constructor(name: string) {
    this.name = name;
  }

  //Metodos get
  getName() {
    return this.name;
  }
  getStrength() {
    return this.strength;
  }
  getHealth() {
    return this.health;
  }
  getWeapon() {
    return this.weapon;
  }

  //Metodos set
  setName(name: string) {
    this.name = name;
  }
  setStrength(strength: number) {
    this.strength = strength;
  }
  setHealth(health: number) {
    this.health = health;
  }
  setWeapon(name: string) {
    this.name = name;
  }

  receiveDamage(damage: number) {
    this.health = this.health - damage
    if(this.health < 0) {
        console.log("Character is dead")
    }
  }

  equippedWeapon() {
      console.log(this.weapon?.getName() + 'Equipped')
  }

private inflictDamage() {
    if( this.weapon == null) {
        return this.strength
    } else {
        return this.strength + this.weapon.getDamage();
    }
  }
}

