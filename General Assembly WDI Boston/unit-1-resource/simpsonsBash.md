# The Simpsons Bash

![Simpsons Intro](https://media.giphy.com/media/xT5LMSX0VGG2yHh8ek/giphy.gif)

## Learning Objectives

- Become comfortable navigating the CLI.
- Create our file structure for this class.


## Background - Watch the Intro!
[Simpsons Intro](https://www.youtube.com/watch?v=XNzoJqzA6zM).

## Setup - Create Directory for Lab:
Inside this repository create a new directory called `simpsons` where we will do all of the following work:

## Simpsons Activity
The more practice you have working in the terminal manipulating files and directories the better!

#### Creating the scene
The Simpsons are your average American family living in Springfield. Let's create the family's hometown, create a directory called `springfield` and `cd` into it. Once you've navigated into the directory let's create the family members, create the following files in your `springfield` folder:
<br>
-`Homer.txt`<br>
-`Marge.txt`<br>
-`Bart.txt`<br>
-`Lisa.txt`<br>
-`Maggie.txt`<br>

#### Remaking the Intro
1. When the show's intro starts the camera pans through the clouds and over the entire town. The view then focuses through the window of the elementary school where we find Bart in detention writing out whatever horrible deed he accomplished that day. Create a directory called `school` and move `Bart.txt` inside of it.<br><br>
2. Next the camera pans to the nuclear power plant where we find Homer mishandling what appears to be a radioactive core sample. Create a directory `power-plant` and move `Homer.txt` into it.<br><br>
3. Homer forgot his employee ID, so he needs to get a temporary pass. Let's use the ECHO command to initialize some text in `Homer.txt` like such - ` echo 'Work Pass: Homer J. Simpson' >> Homer.txt `<br><br>
4. Then we find Marge and Maggie together in the super market. Create a `market` directory and move Marge and Maggie inside it.<br><br>
5. The camera then pans to the band room in the school where we find Lisa crushing a sax solo. Traverse to the `school` directory, create a `band-room` directory, and move `Lisa.txt` into the `band-room` directory.<br><br>
6. We then find the family making their way home through the streets of springfield; Homer in his pink car, Marge and Maggie in the red car, and Bart on his skateboard. Traverse back to the `springfield` directory and create the directories for the each mode of transportation, and then place each respective party in that directory.<br><br>
7. The family finally makes their way back home and the hilarious couch gag ensues. Create a `home` directory inside of `springfield` and then create a `couch` directory within `home`. Then Move ALL of the family members to `couch`. BONUS - can you move the family members without going into any of the springfield sub-directories? (HINT - use relative paths! If in `springfield` directory, what does ` ls ` return? How about `ls power-plant `?)
