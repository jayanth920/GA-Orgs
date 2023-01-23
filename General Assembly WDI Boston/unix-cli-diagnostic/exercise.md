[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Unix/CLI Diagnostic

Carry out all of the following tasks using **_only the command line_**! As is
usually the case, you're welcome to use any resource you can find (except
another developer, of course) to reach your answer.

## Navigating the Filesystem

Complete each of following steps, **in order** :

1. Create a new directory _inside_ your current directory called `cli-diagnostic`.

1. Change into the newly created `cli-diagnostic` directory.
  - Your entire `pwd` output should now be something like `/Users/<your_username>/sei/diagnostics/unix-cli-diagnostic/cli-diagnostic`.

1. Create a new file inside `cli-diagnostic/` called `rhyme.txt`.

1. Open `rhyme.txt` using Atom (via the terminal) and add the following text:

     "The rain in Spain falls mainly in the plain."

    - Once you've done this, save the file and quit Atom.

1. Make a directory inside `cli-diagnostic/` called `temp/`. Inside it, create a
   new blank file called `temp.md`.

    - Navigate back up to `unix-cli-diagnostic/` directory.
    - Using Atom, open up `exercise.md` and write your answers below, where indicated. Erase `<!-- your answer here -->` and put your answer inside the code format box.

1. Great Work! Back in the terminal, do `git status` to view your changes. What
   color is the directory name?

    ```md
    <!-- your answer here -->
    ```

1. Do `git add <file_name>` to stage your changes to all the files and folders we are working with. Do `git status` again to see the newly staged file. What color is the file name now?

    ```md
    <!-- your answer here -->
    ```

1. Let's commit these changes with `git commit`. The commit can consist of
   both a header, `Add files and directories`, and a body,
   `Add rhyme.txt, temp.md, and associated directories`.

1. Navigate back down to `cli-diagnostic/` and delete the `temp/` directory
   (with `temp.md` inside of it) with the `rm` command. Use `ls` to show the
   contents of `cli-diagnostic/` - was `temp/` deleted? Explain your answer.

    ```md
    <!-- your answer here -->
    ```

1. Let's commit our changes. Do `git status` to view your changes. Do
   `git add <file_name>` to stage your changes. Commit these changes with
   `git commit`. This commit can consist of both a header,
   `Remove temp directory`, and a body,
   `Remove directory and all files located within`.

## Absolute and Relative Paths

1. Is `/Users/blah_blah/Desktop` a relative path or an absolute path? How do you
   know?

    ```md
    <!-- your answer here -->
    ```

1. Given:

    ```sh
    ~/project
    ├── css
    ├── data
    ├── img
    ├── js
    └── planning
    ```

    If we are in the `project` directory and use `cd planning`, is a relative or
    absolute path being referenced? How do you know?

    ```md
    <!-- your answer here -->
    ```

1. Assuming that your current working directory is now the `project` directory,
    would it be better to use a relative or absolute path to refer to a file
    that you wanted to delete from the `img` folder? Explain which you would use
    and why.

    ```md
    <!-- your answer here -->
    ```

You're done! Refer back to README.md.
