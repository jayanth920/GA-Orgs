---
title: Using Developer Documentation
type: lesson
duration: "1:15"
creator:
    name: James Traver
    city: CHI
---

# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Using Developer Documentation

### LEARNING OBJECTIVES
*After this lesson, you will be able to:*
- Identify an error in an application
- Research the causes of those errors using developer documentation
- Rely on developer documentation to learn something new
- Find reputable sources of information online other than official documentation

### STUDENT PRE-WORK
*Before this lesson, you should already be able to:*
- Compile a basic Java application
- Execute a Java application
- Attempt to write code and run into problems!

### INSTRUCTOR PREP
*Before this lesson, instructors will need to:*
- Read through the lesson
- Add additional instructor notes as needed
- Edit language or examples to fit your ideas and teaching style
- Open, read, run, and edit (optional) the starter and solution code to ensure it's working and that you agree with how the code was written

### LESSON GUIDE

| TIMING  | TYPE  | TOPIC  |
|:-:|---|---|
| 5 min  | [Opening](#opening-5-mins)  | Discuss lesson objectives |
| 10 min  | [Introduction](#introduction-what-errors-have-you-hit-10-mins)  | What Errors Have You Hit? |
| 15 min  | [Demo](#demo-lets-look-at-a-broken-app-15-mins)  | Let's look at a broken app |
| 20 min  | [Guided Practice](#guided-practice-lets-learn-something-new-20-mins)  | Let's learn something new |
| 20 min  | [Independent Practice](#independent-practice-read-files-20-minutes)  | Read Files |
| 5 min  | [Conclusion](#conclusion-5-mins)  | Review / Recap |

## Opening (5 mins)

#### Story of the re-usable rocket

> Instructor Note: It is recommended to have students pair up for this lesson. By pairing students together, they will see that other students have the same problems that they have. If your cohort shows signs of frustration from errors, it is recommended to encourage them that everyone has problems and even demonstrate an error or two that you ran into when you started developing. Feel free to replace any examples here with examples that you can personally identify with for cohort-to-cohort consistency.

At this point in your journey to become an Android developer, you have likely run into a problem -- or **exception**. You may be familiar with a variety of these such as `IOException`, `ClassNotFoundException`, or `NullPointerException`. We're going to look into exceptions this morning and find out how to resolve them. To do that, we're going to use **Developer Documentation**.

When Space-X designed their re-usable rocket for shipments to the international space station their engineers had to read hardware and software documentation to master their craft and build a safe and re-usable rocket. What if something went wrong during lift off? What if the rocket failed to land successfully (which it did on multiple occasions)? Space X's engineers needed to look through their error logs and then research causes to problems they found in documentation. As a developer, when you run into a problem you can use _developer documentation_ to properly understand errors and the correct way to resolve them. However, sometimes documentation can be confusing - especially when you are new to something.

## Introduction: What Errors Have You Hit? (10 mins)

> Instructor Note: It is recommended to take 5-10 minutes here to discuss how errors are handled on the job. This will help students see a real-world example of why documentation is important. Remember that students are new developers and may not have been exposed to any programming before this so keep terminology and problems simple.

> Check:  What do you do right now when you run into an error? (2 minutes)

> Check:  What is the most confusing source of information you've seen? (2 minutes)

#### Here's what you'll learn

Today's lesson will show you how identify problems in your applications. Once we identify them together, you'll learn how to read documentation and sift through the mountains of search results that you'll find on your own. At the end of this lesson, you will have seen how to use documentation, we'll have done so together, and you'll have learned to read data from Files thanks to developer documentation that already exists.

## Demo: Let's look at a broken app (15 mins)

> Instructor Note: Tell students to close their laptop and that they should pay attention during this part of the lesson.

Let's take a look at a basic Java application. I'll need a few pieces to put this together and compile an application. First, I'll start by _touching_ a new Java file. I'll name it it `CommonApp.java`. Inside of that java file, I'll need to declare something... an _object_, or a _blueprint_. Because I want other objects to be able to use it, I should make it _public_, too.

> Check: What structure in Java do I need to create?

Right! A Class! I'll do that now.

> Instructor Note: Intentionally make a mistake when you write this class. The example provided for this lesson is in starter-code/CommonApp.java but feel free to use your own example instead. Make sure to demonstrate control of the classroom by having students 'wait' when they try to correct your error (advanced students may).

```java
public class CommonApp {
  public static void main(String[] args) {
      System.out.println(myWelcomeMessage);
  }
}
```

Now, let's compile this application.

> Check: We need to use what command to **compile** our class?

Right! Let's compile our application using `javac`!

```bash
$ javac CommonApp.java
CommonApp.java:3: error: cannot find symbol
      System.out.println(myWelcomeMessage);
                         ^
  symbol:   variable myWelcomeMessage
  location: class CommonApp
1 error
```

Oh no! We have a problem! What ever will we do? What would you do if you ran into this problem? Has anyone ran into this exact problem yet? Let's break this message down together. The compiler is telling us that there is a problem and it is doing the best job that it can to tell us in English.

First, we are told that on line 3 of our application - `CommonApp.java:3:` that we have an `error`. Yeah, we get that, Java; thanks. Java is telling us that it `cannot find symbol`. So it cannot find something called a symbol. I'm not entirely sure what that is. Wouldn't it be great if I had **developer documentation** to help me out? I guess I'll just have to look for some help online...

> Instructor Note: Search for 'cannot find symbol' and show the results (or use the result below). Read [the question](http://stackoverflow.com/questions/25706216/what-does-a-cannot-find-symbol-compilation-error-mean) that was asked on Stack overflow. Explain to students that there are open and closed communities where other developers can ask for help and receive it for free. Mention that STACK OVERFLOW is one such site.

This Stack Overflow website is one of the most popular websites on the internet for developers to ask for help. It looks like other people have had the same problem! That makes me feel a little bit better about this already. Stack Overflow allows a lot of people to ask questions and then provide answers. There could be many answers for a particular question. The community then votes for the best answer. After reading that person's question, I can't wait to read the answers!

> Instructor Note: Read the accepted answer and explain it 'in English' to students.

Based on what I've read here, it looks like my CommonApp failed to compile because I didn't declare a variable for `myWelcomeMessage`. I need a `String` for that. I'll add one in!

```java
public class CommonApp {
  public static void main(String[] args) {
      System.out.println(myWelcomeMessage);
  }
}
```

Let's compile and run. Nice! So using _developer documentation_, I am able to find answers to problems that I run into. The entire internet can contribute to answers. You should, too.

> Instructor Note: Have students browse to Stack Overflow and bookmark it. They will re-visit it later in the lesson.

## Guided Practice: Let's learn something new (20 mins)

> Instructor Note: During this section, please ask students to code-along and explain your thought process as you go through with students. Let them know that you want to hear their thoughts and questions during this section while letting them know how you think through problems so they may hear it.

We should learn something new. Let's learn how to open a file. It won't take very long because we have **developer documentation**. First, we'll need to create a new application. Let's call this one `ReadMyFile.java`. It will have a `Main` method. Everyone, let's do this in terminal.

We'll start with our class:

```java
public class ReadMyFile {

}
```

We'll then give it some functionality with a `main` method:

```java
public class ReadMyFile {
  public static void main(String[] args) {

  }
}
```

Now, I want my application to open a file called `some_stuff.txt`. I have _no idea_ how to do this, though. I could rely on Stack Overflow... _or_ I could use the Official Java documentation. I'll visit it by browsing to [http://docs.oracle.com/javase/8/docs/api/](http://docs.oracle.com/javase/8/docs/api/). Before I use the official Java developer documentation, please be aware that there is no search feature yet. It is planned to be released in the next major version of Java.

> Instructor Note: Feel free to show students the open source issue - http://openjdk.java.net/jeps/225 - and explain that you can download the entire documentation for offline use if you want.

On the left hand side of our **developer documentation**, we can see a list of _packages_ that Java includes. Let's scroll down until we see something familiar... oh! Look, `java.io` is right there. I/O stands for input/output. If I want to read a file, I will need to have some sort of input. Let's click on `java.io`. Notice that in the frame below, we now have a new list of interfaces and classes. Let's list them together...

> Check: List 2-3 classes to the students before `FileReader` and ask students what they think those classes do without opening the documentation. Challenge students to look these over later.

It looks like there is a `FileReader` class. Well, given that name I would assume that this class can _read files_, right? Let's take a look at what our developer documentation is telling us. Click on `FileReader` and let's identify a few key components of the documentation.

##### Inheritance Hierarchy

In the developer documentation for FileReader, we can see on top that `Class FileReader` inherits from `InputStreamReader` which in turn inherits abilities and attributes from `Reader` and so forth. This is good to know!

<p align="center">
  <img src="assets/class-in.png">
</p>

##### Summary

We can see here that `FileReader` is a public class that extends the `InputStreamReader` class. We're then told what this class is meant to do - _FileReader is meant for reading streams of characters. For reading streams of raw bytes, consider using a FileInputStream._

##### Constructors

Next, we can see the arguments that are required for _instantiation_, or to create a new instance of the class. It looks like we can either create a FileReader with a `File`, something called a FileDescriptor, or a `String` for file name. Neat. So we know what the FileReader needs to be created.

##### Method Summary

The Method summary lists the methods that a class can call. In our FileReader's class, it can close, getEncoding, read, read, and determine if it is ready. Those are links to usage examples. If you click on a method, you will be taken to a description of it.

##### Constructor Detail

Finally, at the very bottom here I can see details about the constructors I'm using... or want to use. It even includes the _exceptions_ that are thrown from each! That is useful to know in case something goes wrong, right?

#### Let's Read a File...

```java
import java.io.*; // import all classes/packages from java.io

public class ReadMyFile {
  public static void main(String[] args) {
    FileReader reader = new FileReader("data.txt");
  }
}
```

Let's compile our app with `javac`. Uh oh!

```bash
$ javac starter-code/ReadMyFile.java
starter-code/ReadMyFile.java:5: error: unreported exception FileNotFoundException; must be caught or declared to be thrown
    FileReader reader = new FileReader("data.txt");
                        ^
1 error
```

It looks like we need to add an exception definition (or try to catch an exception). Let's take a look back at our Java documentation to see which Exception could be thrown. While our compiler is trying to tell us, we want to be sure. We'll notice that as our compiler tells our, we must catch or declare that `FileNotFoundException` could occur. Let's do that now:

```java
import java.io.*;

public class ReadMyFile {
  public static void main(String[] args) throws FileNotFoundException {
    FileReader reader = new FileReader("data.txt");
    System.out.println("We have made a FileReader");
  }
}
```

Okay! Let's recompile. And now run it. Sweet, no errors. See how helpful the documentation has been? Good! Because it is your turn to finish this up! You'll use developer documentation.

> Instructor Note: Have students browse to the official Java documentation (or your preferred documentation) and bookmark it. They will re-visit it later in the lesson. If you use anything beyond the Oracle documentation, please share your experience in the #adi-instructors Slack channel!

## Independent Practice: Read Files (20 minutes)

> Instructor Note: This should be performed independently by students; it is a good idea to touch on each Learning Objective right before explaining each step.

#### Task: Read a File

1. Re-open the two sites you bookmarked during this lesson: Stack Overflow and the Java Documentation.
2. In the same directory as your `ReadMyFile.java`, create a `data.txt` and enter in one line about yourself.
3. Using the `ReadMyFile` example we built together, use the `FileReader` to `read` the data from your `data.txt` file.
4. Use `System.out` to log the contents.
5. Then `close` your connection.
6. Use the Java Documentation and Stack Overflow to find out how to do this. It is a really good idea to review documentation for things that you _think you know_ because assumptions are bad.
7. **Hint**: We never want to leave something open - so we should always `.close()` an FileReader (or any other stream) when we're done to save memory.

##### Solution

```java
import java.io.*;

public class ReadMyFile {
  public static void main(String[] args) throws FileNotFoundException, IOException {
    FileReader reader = new FileReader("data.txt");
    System.out.println("We have made a FileReader");

    char [] data = new char[11];
    reader.read(data);
    for (int i = 0; i < data.length; i++) {
      System.out.print(data[i]);
    }
    reader.close();
  }
}
```

> Check: Write and walk through the code that students should have completed during their independent practice. If students are confused, explain that many of their answers can be found in developer documentation. Everyone will find documentation that they like (nobody likes the same flavor of pancakes).

## Conclusion (5 mins)

- Why is it important to learn to use documentation?
- How is StackOverflow different than the official documentation?
