/**
 * Created by drewmahrt on 4/27/16.
 */

//TODO: Make Dragon a subclass of monster, and give it something unique to say.
public class Zombie extends Monster {

    public Zombie(int health, int damage){
        super(health,damage);
    }

    @Override
    public String saySomething() {
        return "I am a Zombie with "+ getHealth() +" health and do "+getDamage()+" damage!";
    }
}
