# Programless Programming
## Thinking like a programmer

Write out the steps to making a peanut butter and jelly sandwich, such as you would describe the process to a robot.

The robot understands the definitions of all English words, and understands English grammar. However, it can't "read between the lines." You must be as granular and specific as possible.

In other words, imagine you were writing this for a lawyer.

### You should...

...write this as a **public** Gist, at gist.github.com.

### In a little while...

...you'll trade your directions with another group. They'll go through your directions, and point out any inconsistencies that would prevent the robot from being able to complete the task.

### Then...

...you'll revise your directions, and if time permits, trade again!

### And then...

...read [this article](https://help.github.com/articles/generating-ssh-keys/) about generating SSH Keys, and try setting up
public key authentication with your github account.

### And finally...

...try it out! 

```
$ ssh -T git@github.com
```

### Ok one last thing...

...update the remote url for the pbj repository you cloned yesterday.

    $ cd ~/wdi/pbj
    $ git remote -v
    $ git remote set-url upstream git@github.com:ga-dc/pbj.git


