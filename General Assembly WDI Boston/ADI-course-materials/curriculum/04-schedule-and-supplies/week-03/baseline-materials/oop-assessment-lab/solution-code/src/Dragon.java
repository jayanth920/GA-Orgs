/**
 * Created by drewmahrt on 4/27/16.
 */

//TODO: Make Dragon a subclass of monster, and give it something unique to say.
public class Dragon extends Monster{

    public Dragon(int health, int damage){
        super(health,damage);
    }

    @Override
    public String saySomething() {
        return "I am a Dragon with "+ getHealth() +" health and do "+getDamage()+" damage!";
    }
}
