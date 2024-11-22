export default class Weapon {
  private readonly name: string = "";
  private damage: number = 0;
  private readonly description: string = "";

  getName() {
    return this.name;
  }
  getDamage() {
    return this.name;
  }
  getDescription() {
    return this.description;
  }

  constructor(name: string, description: string, damage: number = 0) {
    this.name = name;
    this.description = description;
    this.damage = damage;
  }

  setDamage(damage: number) {
    if (damage < 0) {
      console.log("Esse valor não é valído");
    } else {
      this.damage = damage;
    }
  }
}
