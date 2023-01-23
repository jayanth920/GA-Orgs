![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

## Objectives
- Use the command line to execute basic filesystem operations, including:
  - Navigating the filesystem with `cd`, `pwd`, and `ls`.
  - Creating new files and folders/directories with `touch` and `mkdir`.
  - Move files and folders/directories using `mv` and `cp`.
  - Deleting files and folders using `rm`.
- Explain the difference between Absolute and Relative paths, and give the context in which each is typically used.

## Prerequisites
- Complete Chapter 1 of Fundamentals.

# Overview :: Why Use the Command Line?

The command line is another way of communicating with our computer and giving it commands. Anything your Graphical User Interface (GUI) can do, your Command Line Interface (CLI) can do as well. But there are also many things that only the command line can do, which is one of the reasons that it's often the primary way that professional programmers interact with their computers.

> If you're on a Mac, your default command line program is called Terminal, though there are others that can work just as well (e.g. iTerm).

## CLI Filesystem Operations

A **filesystem** is the entire structure of files and folders/directories that make up your computer. At the lowest level in this structure is a single directory called the _root_ (shortcut: `/`); this _root_ directory contains every other file and folder on your computer.

Depending on your operating system, the precise structure of your filesystem may be different. But if you're on Linux or BSD/OS X, you should also have a special directory set aside for your particular user account; this directory is referred to as your _home_ directory (shortcut: `~`).

Of course, the point of having a filesystem is to organize and manipulate the various files and directories that are found there. At a high level, some of the basic things we ought to be able to do are:
1. Navigate around the filesystem and look inside different folders/directories.
2. Create new files and directories at locations of our choosing.
3. Move things from one 'location' in the filesystem to another.
4. Destroy files and directories that have been created.

Let's take a look at how we can do each of them.

#### Navigating

Before we can move from one location to another, we ought to first find out where we are. To see our current location in the filesystem, we can type the command `pwd` (for 'present working directory'); this will cause the terminal to print out a string of text indicating where we sit in the filesystem. For instance, if our PWD is

 `/Users/blahblah/Desktop/some_directory`

that means that our location in the filesystem is

```bash

/           # the system's root directory
 |  ...
 |  Users
 |   |  ...
 |   |  blahblah    # someone's home directory, potentially
 |   |   |  ...
 |   |   |  Desktop
 |   |   |   |  ...
 |   |   |   |  some_directory
 |   |   |   |   | ...           # we are here!
```

Like _home_ and _root_, our present working directory also has a shortcut (`.`). In fact, there's also a shortcut for the _parent_ of our present working directory (`..`).
No matter where we are in the filesystem (excluding the root), `..` will refer to the directory that contains our present working directory.

To move to a different place in our filesystem, we can write `cd` (for 'change directory'), followed by the location of the directory that we want to move to (also called a _path_).

```bash
  cd /Users/blahblah  # Takes us to the directory indicated by the path.
```

> As the name implies, a path tells you how to get to a particular location. There are two different kinds of paths, representing different ways of describing a location: _absolute_ paths (location with respect to the filesystem) and _relative_ paths (location with respect to you / a particular file or folder). More on this in the next section.

To look at the contents of a particular directory, we can write `ls` (for 'list') followed by a path.

```bash
  ls /Users/blahblah/Desktop # Lists the contents of 'Desktop' - both files and directories.
```

If we don't specify a path, `ls` will show the contents of our current directory.

#### Creating New Files and directories

To create a new file, use the `touch` command, followed by the name of the file; this will create a new file inside your current directory.

```bash
  touch some_file.txt
```

If you write the name of your new file as part of a path (e.g. `touch ~/Desktop/some_file.txt`), the OS will attempt to create your new file at that location. However, if the location you specify does not exist, the console will give you an error.

Creating a new directory works almost the same way - the only difference is the command, `mkdir` (for 'make directory').

```bash
  mkdir new_directory
```

#### Moving Files and Directories

The command to move a file from one place to another in the file system is `mv` (for 'move'). The syntax for `mv` is

```bash
  mv source_path destination_path
```

where `source_path` is the path to the file/directory you want to move, and `destination_path` is the path to the directory where you want your file/directory to go.

> `mv` can also be used to rename, or rename AND move, files - simply make your `destination_path` end in a new filename rather than a directory.
>
> e.g. `mv ~/some_file.txt ~/same_file_new_name.txt`

#### Deleting Files and Directories

The command to delete a file is `rm` (for 'remove'), followed by a path to the file.

```bash
  rm /Users/blahblah/Desktop/temp/file_to_delete.txt
```

You can also use `rm` to delete directories by using the `r` option (also called a _flag_).

```bash
  rm -r /Users/blahblah/Desktop/temp
```

> `r` stands for 'recursive', which means that the same operation is being repeated at smaller and smaller sections of the same thing. Essentially, in order to delete a directory, the console needs to delete any directories that the target directory contains; however, in order to do _that_, it must first delete any directories that _those_ directories contain... etc.

### Lab :: CLI Filesystem Operations

Now that you've seen some of the basic command line operations, let's practice them by doing some pair programming! In pair programming, there are two 'roles': Driver and Navigator. The Driver is the one with their hands physically on the keyboard - they're the one typing. The Navigator is responsible for reviewing each line of code as it's being typed and providing the Driver with higher-level direction about what to do.

Pick your roles and tackle the first exercise; then, switch roles and tackle the second.

#### Exercise 1

* Create a new directory called `front_end_project`.
* Inside it, create two directories, `lib` and `style`.
* In the `lib` directory, create two files called `main.js` and `module-one.js`.
* In the `style` directory, create two other files : `main.css` and `normalize.css`.
* Finally, go back up to `front_end_project` and create two more files inside of it : `index.html` and `README.md`

#### Exercise 2

* Create a new directory called `node_project`, and create a `README.md` file to go into it.
* Inside `node_project`, create (a) a new directory called `node_modules` and (b) a new file called `package.json`.
* Inside `node_modules`, create a new directory called `express`.
* Inside `express`, again create a new directory called `node_modules` and a new file called `package.json`
* Go back up to `node_project` and create a new file called `index.js`

## Absolute and Relative Paths

As mentioned earlier, there are two types of paths that you can specify : _absolute_ paths and _relative_ paths.

An absolute path looks something like this:

```bash
  /Users/blahblah/Desktop/front_end_app
```
It gives a precise, unambigious description of exactly where the file lives. Most importantly, this description is also totally independent of where _we_ might be. Whether we're in `/Users`, `/Users/blahblah`, or someplace else entirely, that path will **always** lead us to the file.

A relative path usually looks something like this:

```bash
  css/main.css
```

This path refers to file called `main.css`, which lives in a directory called `css` that's inside our _present_working_directory_. What's significant about this kind of path is that it specifies **nothing** about where that file lives within the filesystem, only where it can be found with respect to us.

One useful analogy for this is navigation. If you want to tell someone how to find something, there are two main ways to do it. One way is giving someone a latitude and longitude - those directions will be accurate irrespective of where a person might currently be. The other way is giving them directions from where they are to where they're going - e.g. "go North one block, take a right turn, then walk down street X for another three blocks". These directions are based on _where the listener is_, and therefore aren't universally true.

If relative paths aren't universally true, why use them? One big reason is that files move around, and when those files move, their absolute paths change. If you compress your project in a ZIP file and send it to me, when I download the project onto my computer, any absolute references to files within the project will break! This is where relative paths come in handy: specifying the relative positions of files **within a project** - files that will almost certainly be moved, and will move as a group.

The rule of thumb here is:
 - If something lives _inside_ your project, use a _relative_ path.
 - If something lives _outside_ your project, use an _absolute_ path.

> Incidentally, a web address (like 'https://necolas.github.io/normalize.css/3.0.2/normalize.css') is an absolute path to a resource, since it allows us to find that resource irrespective of where _we_ might be.

## Recommended Reading
- Section two ("BIT-FLINGER") of "In the Beginning... Was The Command Line" (download the ZIP  [here](http://www.cryptonomicon.com/beginning.html)), an essay written in 1999 by sci-fi author Neal Stephenson.
