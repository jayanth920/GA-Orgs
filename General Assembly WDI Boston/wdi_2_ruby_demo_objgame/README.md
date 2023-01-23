## Medieval Objects
We are going to model a game that is set in Medieval Times. Along the way we are going to create:

* A Person class that is the "root" of the class hierarchy. The person will have a first, last and full name. 
* A Player class that is a subclass of the Person class. It will have health, defaults to 20, strength, defaults to 5, and alive, default is true, attributes. It will have two methods. The take_damage(attack_strength) method will subtract the attack_strength from the recievers health. The attack(player) method will call the player's take_damage method passing the attackers strength as an argument. A player will be dead if there health reaches zero.
* A Knight will be a subclass of the Player class. It's default health will be 50 and it's default strength will be 7. 
* A Wizard will be a subclass of the Player class. It's default health will be 20 and it's default strength will be 75. 

Create a game program that will model a battle/fight between players, knights and wizards. Don't need user input, unless you feel you want to.

## Ruby Modules

We are going to learn about how Ruby modules can be used as _Mixins_ and to _Namespace_ our classes.

* Create a Ruby module that will be used as a mixin. It will have a message method that will _say_ what the player is doing.
* Create a Ruby module that will acts a a namespace around all of our classes.



