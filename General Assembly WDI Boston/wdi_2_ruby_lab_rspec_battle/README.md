# Ultimate RSpec Wizard Battle Time!

Using outside-in test-driven development, we'll create a battle engine that will allow two wizards to duke it out using a variety of spells. We'll assume for the sake of the exercise that the actual battle decisions will be sent into our engine from elsewhere &ndash; perhaps a player input script or an AI module.

Both wizards in a battle start with 50 health. Battles are turn-based: each turn, both wizards select a spell to cast from the following list. Spellcasting is simultaneous, i.e. neither wizard "goes first" (so it's possible that both wizards could die!). Some spells "cancel" others, meaning if your opponent happens to cast that spell, it is nullified and does not happen, while yours still goes through.

* **Blizzard:** Deals 10 damage and freezes the target until the end of the next turn. Cancels Waterfall.
* **Rockslide:** Deals 10 damage, or 20 damage if the target is frozen. Cancels Lightning.
* **Waterfall:** Deals 10 damage and soaks the target until the end of the next turn. Cancels Fireball.
* **Lightning:** Deals 10 damage, or 20 damage if the target is soaked. Cancels Darkness.
* **Fireball:** If target is on fire, deals 20 damage, otherwise deals 10 damage and sets target on fire until the end of the next turn. Cancels Blizzard.
* **Healing:** Heals the caster for 20 health. Cancels any status effects (frozen, soaked, on fire).
* **Darkness:** Deals 10 damage. Cancels Healing.
* **Barrier:** Reflects any damage-dealing spell back to the opponent. Can only be used once per battle.
