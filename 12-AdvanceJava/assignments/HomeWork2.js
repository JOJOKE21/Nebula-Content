
class Hero{
    constructor(name,health){
        this.name = name;
        this.health = health
    }
wonder(){
    return `im a hero`
}
attack(enemy,weapon){
  enemy.gethit(weapon)
}
}


class Weapon extends Hero{
    constructor(name,health,attack){
        super(name,health)
        this.attack = attack
    }
    stats(){
        return `${this.name}, Durability:${this.health}: attack damage ${this.attack}`
    }
    attackenemy(hero,enemy){
        hero.enemyattacked(enemy, this.health)
    }
    }




class Enemy{
    constructor(name,health){
    this.name = name
    this.health = health

}
wonder(){
    return `Im a slime`
}
gethit(weapon){
    this.health = this.health - weapon.attack
}
}









const slime = new Enemy("slime",100)
console.log(slime.wonder())
const hero = new Hero("JOJO",150)
console.log(hero.wonder())
const weapon = new Weapon("Sword",1000,10)
console.log(weapon.Stats())

hero.attack(slime,weapon)
hero.attack(slime,weapon)
console.log(slime)

