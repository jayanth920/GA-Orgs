/**
 * Created by drewmahrt on 4/27/16.
 */
public class Main {

    public static void main(String[] args) {
        //TODO: Create an array of Monsters, containing at least 2 different types (ie skeleton and zombie)
        Monster[] monsters = new Monster[2];
        Dragon skeleton = new Dragon(3,8);
        Zombie zombie = new Zombie(4,10);
        monsters[0] = skeleton;
        monsters[1] = zombie;

        //TODO: Loop through the array of Monsters, printing out something for each Monster
        for(Monster monster: monsters){
            System.out.println(monster.saySomething());
        }
    }
}
