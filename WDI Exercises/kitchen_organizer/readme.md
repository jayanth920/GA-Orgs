## Setup

Clone down this repository and switch into the working directory...

```bash
$ git clone git@github.com:ga-wdi-exercises/kitchen_organizer.git
$ cd kitchen_organizer
```

## Goal

Using `mv`, `cp`, `rm`, `touch` and `mkdir`, reorganize the kitchen in as few steps as possible!

Copy the text in your terminal prompt, and save it to a text file.


## Start Here

Your working directory will look like this in the beginning...

    kitchen/
    ├── cans.txt
    ├── fridge
    │   ├── diapers.txt
    │   ├── freezer
    │   │   ├── couch.txt
    │   │   ├── frozenpeas.txt
    │   │   └── icecream.txt
    │   ├── milk.txt
    │   └── trashcan
    │       ├── banana-peels.txt
    │       ├── chicken-bones.txt
    │       ├── egg-shells.txt
    │       └── sink
    │           ├── clean-dishes.txt
    │           ├── delete-me.txt
    │           └── dirty-dishes.txt
    └── pantry
        ├── cans.txt
        ├── cereal.txt
        └── crisper-drawer
            └── lettuce.txt

## End Here

When you're done running your terminal commands, it should look like this...

    kitchen/
    ├── fridge/
    │   ├── crisper-drawer/
    │   │   ├── apples.txt
    │   │   └── lettuce.txt
    │   ├── freezer/
    │   │   ├── frozenpeas.txt
    │   │   └── icecream.txt
    │   └── milk.txt
    ├── pantry/
    │   ├── cans.txt
    │   └── cereal.txt
    ├── sink/
    │   ├── dirty-dishes.txt
    │   └── drying-rack/
    │       └── clean-dishes.txt
    └── trashcan/
        ├── banana-peels.txt
	    ├── chicken-bones.txt
	    └── egg-shells.txt

## `brew install tree`

Use tree to check what your current folder structure looks like. You can install it from the command line by running...

```bash
$ brew install tree
```

You can then run it be entering `tree` from the command line.
