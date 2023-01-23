# Spring Boot

## Learning Objectives

- Install the Spring Boot CLI
- Install `docker` and `docker-compose`
- Create a new Spring Boot application
- Connect a Spring Boot application to a PostgreSQL database
- Create a Spring MVC "monolith"
- Set up a `docker-compose` development environment

## What is Spring Boot?

Spring Boot is a modern, opinionated Java web framework. Leveraging libraries from a larger Spring ecosystem, Spring Boot provides a quick and easy to way to bootstrap and maintain Java webapps. It is highly extensible, with a large number of plug-and-play Spring packages available to add functionality such as Web Sockets and cloud capabilities.

While Spring Boot utilizes the familiar MVC pattern, it also uses some fairly unique design patterns when compared to other popular frameworks such as Ruby on Rails or Node's Express framework.

Let's take a quick look at two of Spring Boot's most important design patterns:

#### Singletons

One of the classic [Gang of Four](https://en.wikipedia.org/wiki/Design_Patterns) design patterns, the `Singleton` design pattern limits the number of instances of a class to one, and only one. When we ask for a new instance of a Spring class, we will only create a new instance the first time. Each subsequent time we ask for a new instance, we will receive the same one from before. This can help our application's performance by limiting the time spent creating new instances. A great description of `Singletons` can be found [here](https://springframework.guru/gang-of-four-design-patterns/singleton-design-pattern/).

#### Dependency Injection

One of the worst things we can do to our code is to `couple` blocks of code (most often separate classes) to each other. When classes are `coupled`, it becomes difficult or even impossible to change one class without affecting the other. In a large application, `coupling` can mean that seemingly simple code updates will turn nasty quickly. 

`Dependency Injection` is one common method for avoiding this problem. When we "inject" (or pass in) an already-instantiated instance of a dependency to our current class, we remove the need for our class to know low-level details about the dependency. All our class knows is that it received an object, and that it can call some methods on that object. Anything else is handled elsewhere and can be changed safely. 

We'll see a common example of this in our MVC `Controller` classes. These classes will need to access data from the database. Rather than tell the `Controller` itself how to do this, we'll "inject" an instance of another class that knows how. The `Controller` won't need to know how to create that class instance or any details about the database connection. All the `Controller` will need to know is that the class that is injected has a method called `findAll()` that will return some data. 

## The Spring Boot CLI

The Spring Boot CLI is a very simple way to bootstrap a new Spring Boot application. In a single step, we will be able to set up our file structure and install the basic dependencies we'll need to get going. Unlike some other frameworks and tools however, the Spring Boot CLI will require us to manually set up many of our external dependencies after the initial bootstrapping. In the next few minutes, we'll create a new Spring Boot app using the CLI and start working on our bare-bones project.

First, we'll need to install the CLI. We'll be able to leverage a familiar tool, `SDKMAN!` to do this for us. Let's jump over to our terminal and run the following command: 

```bash
sdk install springboot
```

Now we'll `cd` into our `labs` folder and run the following to bootstrap our application:

```bash
spring init spring-boot-monolith --dependencies=web --build=gradle
```

There are three important arguments that we give to the generator:

1. First, we tell the generator to put our app into a new folder, named `spring-boot-monolith`.

2. Second, we list our dependencies. In this case, we have only one called `web`. In the future, we could make this a comma-delimited list, e.g. `--dependencies=web,jpa,thymeleaf`.

3. Finally, we tell the generator that we want to use `Gradle` as our build tool. If we do not pass this argument, a default tool called `Maven` will be used. Gradle has a few key benefits that we will explore later on, so we'll opt in to using it here.

### Oh No!!!!  

If you have a Ruby development environment set up on your laptop, you may see a conflict between two Ruby and Java tools, both named `spring`. If this is the case, add the following line to your `.bash_profile`:

```bash
alias springboot="$HOME/.sdkman/candidates/springboot/1.5.9.RELEASE/bin/spring"
```

Once you have updated your `.bash_profile` and reloaded your console, you can replace `spring` with `springboot` in the previous command and be on your way.

## Exploring our Spring Boot App

Let's `cd` into the new `spring-boot-monolith` folder and take a look around. We can easily open the project in IntelliJ IDEA by running `idea build.gradle`.

The generator created a bunch of files and folders for us, but we'll only need to focus on a few:

- All of our code will live inside of the `/src` directory. There are two important packages nested in this directory that we'll focus on:
	- The `main.java.com.example.springbootmonolith` package will house our application code. Our application and database set-up files will live inside of the `main.resources` package.
	- The `test` package will house all of our tests. As we build out our application code, we'll create corresponding files and folders in the `test` package.

- Inside of our `main` package is a `DemoApplication.java` file. This file has two simple components that will allow us to run the app out of the box. 
	- The first is the `@SpringBootApplication` annotation at the very top. This Java annotation will allow our app to bootstrap itself and tie all of our classes together.
	- The second is a generic `main()` method, just like any other Java application. This method uses a provided `SpringApplication.run()` method to start up our application. 	

- In the root folder of our app, we'll find some other important files:
	- The `build.gradle` file will manage the life-cycle of our application. We can add and remove dependencies using this file. We can also build, run, and deplioy our application using this file.
	- To ensure our code runs on any platform, a Gradle wrapper has been created for us. This Gradle wrapper consists of two files, `gradlew` and `gradlew.bat`. `gradlew` will run on any UNIX based machine and `gradlew.bat` will run on Windows. These files will allow us to run the same `gradle` commands reliably on any computer.

## Starting our Application

If we take a look inside our `build.gradle` file, we will see that three plugins have been set up for us: `java`, `eclipse`, and `org.springframework.boot`. These plugins will add extra functionality to our Java build process and will make starting and stopping our application a breeze.

Let's leverage the Spring Boot gradle plugin to start up our application:

```bash
./gradlew bootRun
```

If we now visit [localhost:8080](http://localhost:8080) in our browser, we'll see a generic error page. This is what we want to see! We haven't added any routes to our Spring Boot API, so Spring is telling us it has nothing to do yet. We've successfully booted up our application!

> To stop the application, simply press `ctrl` + `c`

## Spring Boot Dev Tools

Hot-reloading has become a staple of modern web development tools. It can be painful to have to manually stop, rebuild, and restart your application every time you make a small change, especially when using a compiled language like Java. Spring Boot provides this functionality in a set of easy to use developer tools that we can add to our application with a single line of code. Let's go back to our `build.gradle` file and add one more line inside the `dependencies` object: 

```groovy
runtime 'org.springframework.boot:spring-boot-devtools'
```

Now if we re-start our application, the code will automatically listen for changes in our code and re-start when we re-compile.

To fully take advantage of this functionality, we'll need to enable automatic re-compilation in our editor. This requires two final steps:

1. We will need to enable the "Build project automatically" option for our IntelliJ project. We can easily find this option by typing `cmd + shift + a` or `cmd + ,` and searching for it. Once you have checked the box, remember to click `Apply` before you exit the preferences window.
2. We will need to enable a registry option in IntelliJ IDEA called `compiler.automake.allow.when.app.running`. We can find the registry by pressing `cmd + shift + a` and searching for "Registry."

We've now completed the basic set-up of our Spring Boot environment!

---

# Dockerizing a Spring Boot Application

## Docker and Docker Compose

Spring Boot applications with Gradle come out of the box with a Gradle Wrapper that helps run the application on any Mac, Linux, or Windows machine. This is a great tool that helps to solve a question as old as computers themselves: "What happened? It works on my machine."

Unfortunately a development environement today consists of much more than a single application. Even a monolithic app will have to connect to at least one database, with its own server and start-up needs. Every time our development environment expands, there are more opportunities for things to go wrong in unique ways. 

Docker and `docker-compose` aim to solve this problem. Let's use these tools to set up a Spring Boot development environment that will run exactly the same way on any machine and carries its own environment with it.

#### Docker

Docker is a tool that will allow us to run our application inside of a "container", rather than on our own computer. This container is similar to a virtual machine, but it is much lighter weight. We will have the benefit of running on a fully-controlled environment, but with start-up speed and resource needs similar to our own host operating system. If it sounds magic, that's because it's a really huge feat. Docker containers are so light, that you can run thousands of them on the same host!

Let's go ahead and install with Homebrew. We'll need both the Docker engine "cask" and the docker CLI:

```bash
brew cask install docker
brew install docker
```

Now we can open up the Docker app using Spotlight (`cmd + space`) and give it the proper access that it needs. Once everything is running in the background, we should see the little Docker whale logo in our status bar.

If we wanted to run a single app, we could now create a `Dockerfile` in the root of our application and we could be up and running in just a few commands. With a basic Docker set-up, we could have our application running on its own in a Docker container, with a portable Linux environment, in a single command.

This is awesome, but we would quickly run into a some problems:

1. The files that make up our application would live inside the Docker environment. To edit those files, we would have to also be inside of that environment, which does not have our nice text-editor tools set up.
2. The application would be running on ports that are local to the Docker host, not our own computer. How do we open up these ports so that we can access the running application on our machine?
3. The app will eventually need to talk to other applications and databases in our local development environment. We can "Dockerize" each one of these apps the same way, but even if we figure out how to talk to each of them, how do they talk to each other?

To solve all of these problems (and more), we'll need another tool: `docker-compose`!

#### Docker Compose

Docker Compose is exactly what it sounds like: a tool for "composing" an environment, using multiple Dockerized apps. Let's reconfigure our Spring Boot to start up in a Docker environment, using `docker-compose`. Later, we can add a PostgreSQL database to the environment, and everything will start up with a single command.

First, let's install `docker-compose`:

```bash
brew install docker-compose
```

Next, we'll navigate to our Spring Boot app from earlier and we'll add a `docker-compose.dev.yml` file to our application. This file will contain all of the set-up we need to run our application in a development environment:

```bash
touch docker-compose.yml
```

Let's add some boilerplate to this file and discuss:

```yaml
version: '3'

services:
  app:
    image: anapsix/alpine-java:8_jdk_unlimited
    ports:
      - '8080:8080'
    volumes:
      - .:/app
    working_dir: /app
    command: './gradlew bootRun'
```

This file will solve several problems for us:

1. The `services` entry in a `docker-compose` file will allow us to list any and all apps we would like to start up together. For right now we only have one, which we'll call `app` for now.

2. Inside the configuration for our `app` service, we set up a base `image` to run our application on top of. This is a free, pre-configured Alpine Linux image that will have the Java 8 JDK already installed along with some other Java Cryptography Extension goodies. 

3. The `ports` configuration tells the Docker image which port to run our `app` behind, and also exposes the same port to our local machine. This allows us to run the app inside of a Docker image, but we can access it on our own `localhost`!

4. The `volumes` configuration tells the Docker image which root directory to run the app inside of, but also links those files to our own machine. We can read `.:/app` as: "Link the files in my project directory to the same files in the Docker image at `/app`." This means that as we re-compile the files on our computer, they will hot-reload inside of the Docker container!

5. The `working_dir` entry tells Docker to create the `/app` folder and run our application inside of it.

6. Finally, the `command` config tells Docker which start up command to run. We'll use the same `./gradlew bootRun` command that we'd use on our local machine.

With all of this in place, we can simply run a single command to get our app up and running. This command will tell `docker-compose` to spin `up` our application, using the `docker-compose.dev.yml` file:

```bash
docker-compose up
```

When we run this command, we should see our app spin up and begin downloading all of the necessary dependencies. Once they have downloaded, our Spring Boot app will start up again and we can visit [localhost:8080](http://localhost:8080) to see our app running the same as it was before!

> To stop the app, press `ctrl + c` and then run `docker-compose down`

## Speeding up our Development Environment

We now have a fully-portable development environment that will run exactly the same anywhere we deploy it. This comes with some cost, however. Every time we start and stop our application, it will have to re-download all of the dependencies it needs. It took us a couple of seconds to spin up the app on our own laptops, but now it will take significantly longer. Fortunately, there is a very easy way for us to solve this problem in a development environment. We'll simply need to leverage Gradle's `caching` abilities. 

Let's add one more line to the end of our `docker-compose.yml` file. The full file should look like this:

```yaml
version: '3'

services:
  app:
    image: anapsix/alpine-java:8_jdk_unlimited
    ports:
      - '8080:8080'
    volumes:
      - .:/app
    working_dir: /app
    command: './gradlew bootRun'
    environment:
        - GRADLE_USER_HOME=cache
```

This final line sets up an `environment variable` that tells Gradle to look for its dependencies in a folder called `/cache`. The next time we spin up our application our dependencies will be downloaded and stored on our own machine in this folder. Our start-up will now be significantly faster!

We won't want to clutter up our Git repo, so let's be sure to add `cache/` to `.gitignore`. When we clone a Git repo with this set-up to a new machine, these dependencies will have to be re-downloaded, but only the first time.

# Spring Boot Database Integration

## Setting up a PostgreSQL database with `docker-compose`

As we've seen in our previous set-up, Docker provides pre-made operating system images that we can simply download and run. These images often include certain tools, such as our Java JDK that are already set up and ready to go. These pre-configured images and tools don't extend only to application environments, but can provide ready-made database environments as well. Let's use `docker-compose` to set up a new PostgreSQL database with just a few lines of code!

In our `docker-compose.yml` file, we currently have one `service` called `app`. This defines our Spring Boot application, and if we'd like to set up a PostgreSQL image to run alongside it, it's as simple as tacking on one more `service` to our `docker-compose.yml` file. Let's try it out:

```yaml
version: '3'

services:
  app:
    image: anapsix/alpine-java:8_jdk_unlimited
    ports:
      - '8080:8080'
    volumes:
      - .:/app
    working_dir: /app
    command: './gradlew bootRun'
    environment:
        - GRADLE_USER_HOME=cache
  postgresdev:
        image: postgres
        ports:
         - "5432:5432"
        environment:
         - POSTGRES_PASSWORD=password
         - POSTGRES_USER=postgres
         - POSTGRES_DB=pgdev
```

This new `postgresdev` service will set up a few things for us:

1. The official `postgres` Docker container will be downloaded and started up.

2. The PostgreSQL database will be set up on port `5432` and exposed on the same port to our other services. 

3. The database will be started up with our defined password, username, and database name so we can easily connect to it later on.

If we stop and start our application using `docker-compose down` and `docker-compose up`, we'll see that a PostgreSQL database downloads and spins up. It's that simple!

## Connecting a Spring Boot Application to Postgres

Now that our database is running, let's connect our application to the database.

We'll need to leverage [Spring Boot Profiles](https://docs.spring.io/spring-boot/docs/current/reference/html/boot-features-profiles.html) to make sure this set-up only runs in our development environment. Creating a new `dev` profile is simple and only requires two steps. 

- The first step is to create a new file called `application-dev.properties` in our `/resources` folder. Let's create it now and fill it in with our database credentials. Notice that the host name for our `docker-compose` services is the same as the service name itself. We'll need to use a [JDBC](https://docs.oracle.com/javase/8/docs/technotes/guides/jdbc/) URL to connect to our database from a Java application:

	```
	spring.datasource.url=jdbc:postgresql://postgresdev:5432/pgdev
	spring.datasource.username=postgres
	spring.datasource.password=password
	```
	
- The second step is to tell our `docker-compose.yml` file to start the `app` service using this profile. We'll control this using an `environment variable` called ` SPRING_PROFILES_ACTIVE`. This will look very similar to our Gradle cache set-up:

	```yaml
	...
	environment:
        - GRADLE_USER_HOME=cache
        - SPRING_PROFILES_ACTIVE=dev
	...
	```
	
Now every time we start our application locally, it will boot up using the `dev` profile. 

> We'll save the previous `application.properties` file for other set-up later on.

## Adding Dependencies to a Spring Boot Application

Before we spin up our new set-up and connect to the database, we'll need to install the `postgresql` dependency to our application. To add a dependency to an already-bootstrapped Spring Boot application, we'll simply drop a new line into the dependencies object of our `build.gradle` file. Let's add the `postgresql` dependency now:

```groovy
runtime('org.postgresql:postgresql')
```

> The `runtime` designation simply states that this dependency is needed to run the app only. In other words, we do not need this code to `compile` our application.

Now when we start everything up, our app will run in the `dev` profile and will be ready to connect to our Postgres database!

## Managing Database Migrations with Flyway

A database isn't very useful without some data! Let's add a `USERS` table to our new database. While we could do this manually, we'll opt to use database "migrations" instead. Migrations are a safe, modern way of controlling the tables and columns in our database. We can think of our migrations as a way of "version controlling" our database. Our migration files will allow us to view a timeline of how our database structure reached its current state, and we can roll it back to a previous point in time if anything goes wrong.

We'll use a tool called Flyway to set up migrations for our Spring Boot app. The first thing we'll need to do is require the `flyway` JAR as a `compile`-time dependency in our `build.gradle`. Let's go ahead and add it now:

```groovy
compile 'org.flywaydb:flyway-core'
```

This dependency will automatically leverage the Spring Boot database set-up that we already have! Now all we have to do is provide a directory for the Flyway migration files, and we'll be good to go. By default, all of our migration files should live in `/resources/db/migration`. Let's create that directory now:

```bash
mkdir -p src/main/resources/db/migration
```

Our Flyway migrations are simply a set of SQL statements that will run, one after the other, to construct our database. Since `docker-compose` will build a fresh database from scratch every time we start up, these migrations will all run each time we start until our database ends up in its proper state. Let's create our first migration in our `/db/migration` folder, using the default Flyway naming convention (`{DBVersion}__{migration_name}`):

```bash
touch src/main/resources/db/migration/V1__Create_users_table.sql
```

> Notice the use of two underscores after the version number!

Now we'll drop a standard SQL `create table` statement into this file:

```sql
create table USERS (
    ID serial,
    USER_NAME varchar(100) NOT NULL
);
```
> The `serial` data type tells PostgreSQL to manage our IDs for us and auto-increment them when we create new `Users`.

And that's it! When we start our application, Flyway should automatically connect to our Postgres database and run each migration in our `/db/migration` folder. Let's start everything up:

```bash
docker-compose up
```

### Oh no!!!

Nothing happened. The logs look exactly the same as they always have. 

This is due to the fact that Flyway tries to leverage as much of our generic Spring Boot set-up as possible. Spring Boot apps generally use the Java Persistence API (JPA) to manage database interaction. Flyway wants to piggy-back on our JPA set-up, but we haven't included any of the set-up in our application. Fortunately, Spring Boot provides a "starter" JAR that will handle all of the hard stuff for us. All we have to do is include this dependency in our `build.gradle`:

```groovy
compile 'org.springframework.boot:spring-boot-starter-data-jpa'
```

Now when we start up our application, we should see something some Flyway messages that look like this:

```
Flyway 3.2.1 by Boxfuse
Database: jdbc:postgresql://postgresdev:5432/pgdev (PostgreSQL 10.1)
Validated 1 migration (execution time 00:00.038s)
Creating Metadata table: "public"."schema_version"
Current version of schema "public": << Empty Schema >>
Migrating schema "public" to version 1 - Create users table
Successfully applied 1 migration to schema "public" (execution time 00:00.091s).
```

If we look towards the bottom of this log snippet, we'll see something pretty cool:

```
Migrating schema "public" to version 1 - Create users table
```

Flyway is confirming for us (in plain English) that our database is indeed at Version 1 and that our `USERS` table was created!

## Validating our Database

PostgreSQL has a great CLI tool that we can use to validate our database. Let's double-check that our `USERS` table was created correctly. First we'll need to install this command-line tool:

```bash
brew install postgres
```

Now that we've installed this tool, we can boot it up on the command line using `psql`. Our `docker-compose.dev.yml` file told Docker to expose the database to us over port `5432` (the default Postgres port), so we'll just need to plug in some default `host`, `port`, `password`, and `username` info and we should have access immediately. Note that we'll have to type in the password that was set in our `docker-compose` file:

```bash
psql -h localhost -p 5432 -U postgres
```

Once we've connected, we can run `\l` to list all of our databases. The `pgdev` database from our `docker-compose` file should be present. Let's connect to this database:

```bash
\c pgdev
```

Once we've connected, `\d+` will list all of our tables. If we see a `USERS` and a `SCHEMA_VERSION` table, we're good to go!

> To exit `psql`, we can type `ctrl + d` or `\q`.

## Seeding the Database

Any good development environment has a seeded sandbox database that we can dive right into. Let's leverage Flyway's [callback](https://flywaydb.org/documentation/callbacks.html) feature to create some default data in our development database. Flyway callbacks provide several pre-configured options for running additional SQL statements before, during, and after our migration process. Because our seed data will have to conform to our updated database schema, we'll leverage the `afterMigrate` callback to allow all of our migrations to run before our seed data is inserted.

This is as simple as creating a file inside of our `/db/migration` folder named `afterMigrate.sql`. Let's create this file now:

```bash
touch src/main/resources/db/migration/afterMigrate.sql
```

...and all we have to do is create some `Users` inside this file:

```sql
INSERT INTO USERS
	(USER_NAME)
VALUES
	('user from seeds'),
	('another user'),
	('someone'),
	('someone else');
```

Now the next time we start up, our `migrations` will create the `USERS` table, and then the `afterMigrate` callback will fill it in with some test data!

Let's start it up and validate. First we'll re-start our application:

```bash
docker-compose down
docker-compose up
```

The logs should now contain this line, along with our other Flyway info:

```
Executing SQL callback: afterMigrate
```

Let's connect to the database and verify that our `Users` are present:

```bash
psql -h localhost -p 5432 -U postgres
\c pgdev
```

...then inside of the `psql` tool:

```sql
SELECT * FROM USERS;
```

We should now see four `Users` in our database each time we start up!

```
 id |    user_name
----+-----------------
  1 | user from seeds
  2 | another user
  3 | someone
  4 | someone else
(4 rows)
```

## You Do: Adding Columns to the `USERS` table 

Let's add one more migration to add `FIRST_NAME` and `LAST_NAME` columns to the `USERS` table. 

Be sure to:

1. Create a new, clearly-named migration file with an updated version number.
2. Write a query inside of this new migration to [alter](https://www.postgresql.org/docs/9.1/static/sql-altertable.html) the `USERS` table.
2. Update the `afterMigration` seed data to include first and last names for each user.
3. Validate your new seed data using the `psql` tool.

# Spring Data JPA / Repositories

## Spring Data and JPA 

Modern web development almost always involves some kind of Object Relational Mapping (ORM) or Object Data Mapping (ODM) tool. Popular libraries such as Ruby's [ActiveRecord](http://guides.rubyonrails.org/active_record_basics.html), Node's [Mongoose](http://mongoosejs.com/), and Elixir's [Ecto](https://hexdocs.pm/ecto/Ecto.html) simplify many of the low-level database interactions that we are responsible for as software engineers. These tools provide development speed, safety, security, and ease of use that enable us to spend more time focusing on functionality and less time on complicated details.

Spring Boot provides its own unique ORM implementation that borrows from similar tools, but also augments them in many ways. Spring Data Entities and Repositories are an implementation of the [Repository Pattern](http://deviq.com/repository-pattern/) that will greatly simplify the process of connecting to and interacting with our databases in a Spring Boot environment.

## Repository Pattern

The Repository Pattern is a popular way of constructing our Java classes to hide our low-level database interactions. Repositories offer an "expressive" interface for querying data. Spring Data Repositories in particular will let us query data using common methods such as `findAll()` and `findOne()`, rather than writing individual SQL queries for each database interaction.

Let's create a new `UserRepository` and see how it works. 

First, we'll need to create a class to `model` our `User`. We'll put this `User.java` class in a package called `models` right next to our `DemoApplication.java`.

```bash
mkdir src/main/java/com/example/springbootmonolith/models
touch src/main/java/com/example/springbootmonolith/models/User.java
```

Let's create our first Entity within `User.java`:

```java
package com.example.springbootmonolith.models;

import javax.persistence.*;

@Entity
@Table(name = "USERS")
public class User {

    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "USER_NAME")
    private String userName;

    @Column(name = "FIRST_NAME")
    private String firstName;

    @Column(name = "LAST_NAME")
    private String lastName;

    public User() {}

    public Long getId() {
        return id;
    }

    public String getUserName() {
        return userName;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
}

```

The first thing we should notice is that this looks exactly like a standard Java class, with a Constructor, Getters, and Setters. 

The constructor, however, is a "no-args" constructor. The `@Entity` annotation at the top only needs this constructor to function, so we do not need to define a default Constructor as we normally would. The rest of the annotations will tell Spring's underlying JPA code how to wire up our class to a database. The `@Table` annotation dictates which database table this model represents, and the `@Id`, `@GeneratedValue`, and `@Column` annotations help us manage column names and even auto-generate IDs.

Now that we have created our Entity, we'll need a `repositories` package right next to our `DemoApplication.java`. It's very important that this package lives alongside our `Application` class so that our `Repositories` will be bootstrapped with the rest of the application:

```bash
mkdir src/main/java/com/example/springbootmonolith/repositories
```

In this package, we'll create a new `UserRepository.java` file inside of this `repositories` package:

```bash
touch src/main/java/com/example/springbootmonolith/repositories/UserRepository.java
```

This file will allow us to perform CRUD functionality with our `USERS` table in the database, leveraging the `User` Entity we've created above. Let's drop in some starter code and take a look:

```java
package com.example.springbootmonolith.repositories;

import com.example.springbootmonolith.models.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long> {

}
```

That's it! This code is all we need to start querying `Users` from our database. Using some Java composition magic, all we have to do is `extend` the provided Spring Boot `CrudRepository` interface, and just like that Spring will provide working classes containing several pre-built query methods. We'll explore several of these methods today when we wire this `Repository` up to a controller.

## Project Lombok

Before we move on to start leveraging our `Repositories`, let's take a moment to clean up our code. Generic `Getters` and `Setters` are just boilerplate code in most cases. Writing a `Getter` and `Setter` for each piece of data on a class can be a huge chore, and so modern IDEs have stepped in to provide nice tools to generate these methods for us. This saves us the headache of typing everything out, but we're still left to carry around tons of code that isn't very interesting. 

Let's pull in a new tool to reduce this clutter. [Project Lombok](https://projectlombok.org/) is a Java library that provides `Getters` and `Setters` for us at compile-time, without the need to type the code into our classes. Just like Spring Boot, Lombok leverages `annotations` to wire things up as the code compiles. Let's see how Lombok can reduce the size of our `User` Entity, and make our code a lot cleaner.

First we'll need to require `lombok` as a dependency in our `build.gradle`. Notice that we only need this dependency when our code compiles, so we will mark it `compileOnly`:

```groovy
compileOnly 'org.projectlombok:lombok'
```

Once we have pulled the Lombok dependency into our app, we can re-write `/models/User.java` like this:

```java
package com.example.springbootmonolith.models;

import lombok.*;
import javax.persistence.*;

@Data
@AllArgsConstructor @NoArgsConstructor @Getter @Setter
@Entity @Table(name = "USERS")
public class User {

    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "USER_NAME")
    private String userName;

    @Column(name = "FIRST_NAME")
    private String firstName;

    @Column(name = "LAST_NAME")
    private String lastName;

}
```

This same code provides all of the necessary `Constructors`, `Getters`, and `Setters` that we had before, but they are automatically generated for us when we need them and we don't have to carry them around in our code!

Now that we've set up our development environment and database layer, let's use this foundation to create an API and see these Repositories in action.

# Spring Boot APIs

## Creating an API with Spring Boot

Spring Boot, like many web frameworks is built on top of the ubiquitous MVC pattern. APIs built in Spring Boot need to model and persist data from a database and receive and respond to client requests. Our Entity and Repository set-up from the previous exercise will handle the data interaction that we need, but we will need Controllers to manage our traffic. Let's create a new `UsersController` to start serving up our `User` data.

# Spring Boot RestControllers

To get started, we'll need to create a new `controllers` package right next to our `models` and `repositories`.

```bash
mkdir src/main/java/com/example/springbootmonolith/controllers
```
Inside of this new package, we'll place a file called `UsersController.java`:

```bash
touch src/main/java/com/example/springbootmonolith/controllers/UsersController.java
```

Like our Entities and Repositories, Spring Boot Controllers are simply Java classes with an annotation at the top that adds special functionality. In our `UsersController`, let's set up a new class with the `@RestController` annotation:

```java
package com.example.springbootmonolith.controllers;


@RestController
public class UsersController {

}
```

This is all we need to start turning our Spring Boot app into a REST API!

Let's add our first route to the application, a `User INDEX` route at `/users`:

```java
@GetMapping("/users")
public List<User> findAllUsers() {
	return new ArrayList<User>();
}
```

The `@GetMapping` annotation tells the server to listen for `GET` requests at `/users`. The method `findAllUsers()` runs whenever this `GET` request is made, and we have set it up to return an empty list of `User` objects. If we start up the server and take a look at [localhost:8080/users](http://localhost:8080/users), we'll see that an empty array is returned. With just two annotations, everything is wired up!

## Accessing Data from the User Repository

Obviously, this isn't very useful. Right now our `/users` route is working, but it will always return an empty array. If we want to serve up real data from our Postgres database, we'll need to ask the `UserRepository` for that data.

This presents a problem. If we take another look at our `UserRepository`, it is a Java `interface`, not a `class`. While a class can be instantiated and methods can be called on that `instance`, an interface cannot be used directly. We will need an `instance` of `UserRepository` inside of our `UsersController` if we want to use all of its methods to query the database.

Fortunately there is a simple solution to this problem. While we might be tempted to `implement` the interface itself, we can accomplish the same with far fewer lines of code. Spring Boot uses a very interesting design pattern to allow our `RestController` and `Repository` components to talk to each other. We will use a magic `@Autowired` annotation to make this happen. The annotation asks Spring Boot to implement the class for us and then provide a "proxy instance" of the class whenever we ask for it. In other words, Spring Boot will both implement the interface AND instantiate it, and all we have to do is ask for the object where we need it. It looks something like this:

```java
package com.example.springbootmonolith.controllers;

import com.example.springbootmonolith.repositories.UserRepository;

@RestController
public class UsersController {

	@Autowired
	private UserRepository userRepository;

	@GetMapping("/users")
	public List<User> findAllUsers() {
		return new ArrayList<User>();
	}

}
```

With this `userRepository` instance "autowired" into our Controller, we can now start using it to serve up live data! 

We can use the built-in `findAll()` method in our `/users` INDEX route:

```java
@GetMapping("/users")
public Iterable<User> findAllUsers() {
	return userRepository.findAll();
}
```

Now when we visit [localhost:8080/users](http://localhost:8080/users), we should see our `User` objects in JSON format!

> If we return an Object from a Spring Controller method, that Object will parsed as JSON by default. We can consider this the "V" in our "MVC" pattern.

### Oh No!!!

Our objects are showing up empty. Where is all of our seed data?

Although we've provided the `@NoArgsConstructor` and `@AllArgsConstructor` functions to our `User` entity class, our Repository is actually looking for a third Constructor. Because we are asking Spring to auto-generate and manage all of our `User's` IDs, we can effectively pretend they don't exist. Let's create a new `User` constructor that ignores the `id` field:

```java
public User(String userName, String firstName, String lastName) {
    this.userName = userName;
    this.firstName = firstName;
    this.lastName = lastName;
}
```

Now all of our seeded `User` data will show up in the response!

## Finding a User by ID with `PathVariables`

Let's add a new `GET` route to find a single `User` by ID:

```java
@GetMapping("/users/{userId}")
public Optional<User> findUserById(@PathVariable Long userId) {
	return userRepository.findById(userId);
}
```

This new route will leverage a couple great features of Spring `RestControllers`:

- The first is a `PathVariable`. These variables use a simple syntax to pluck request parameters from our URL. First, we must define the variable in the `GetMapping` using the `{variableName}` syntax. As we can see above, our URL defines a new `PathVariable` called `userId`. Once we have defined this variable in the URL, we can set up an annotated parameter in the route's method, using the same name.
- The second is a new Spring Repository method called `findById()`. Notice that we did not add this method to our Repository interface, it's simply available for us to use!

## Deleting a User

We can use a similar combination of `PathVariables` and predefined Repository methods to delete a user. Let's add the `DELETE` route now. We'll return a HTTP status of `200`, to indicate that the user was deleted successfully:

```java
@DeleteMapping("/users/{userId}")
public HttpStatus deleteUserById(@PathVariable Long userId) {
	userRepository.deleteById(userId);
	return HttpStatus.OK;
}
```

> We can use `curl` or a tool like [`Postman`](https://www.getpostman.com/) to test our `DELETE`, `POST`, and `PATCH` routes.

## Creating a New User

Let's set up a `POST` route to create a new `User` in the database:

```java
@PostMapping("/users")
public User createNewUser(@RequestBody User newUser) {
	return userRepository.save(newUser);
}
```

This route introduces a new Spring helper, the `@RequestBody`. Using this annotation, our Controller will map an incoming JSON request to a new `User` object, assuming it matches our database schema. We can then use a new built-in Repository method called `save()` to add this new `User` object to the database.

## Updating an Existing User

Let's add a final `PATCH` route to update an existing `User`. This route will use a `PathVariable` to find the existing user, and then a `RequestBody` to update that `User`. It will then `save()` the updated user in the database:

```java
@PatchMapping("/users/{userId}")
	public User updateUserById(@PathVariable Long userId, @RequestBody User userRequest) {

		User userFromDb = userRepository.findById(userId).get();

		userFromDb.setUserName(userRequest.getUserName());
		userFromDb.setFirstName(userRequest.getFirstName());
		userFromDb.setLastName(userRequest.getLastName());

		return userRepository.save(userFromDb);
	}
```

> Notice: This is a naive approach. It assumes that all data for the user has been passed in the `@RequestBody`. In the future, we may need to do a little more validation within this request.

# Summary

Spring Boot is a fully-featured, "batteries-included" framework. Without searching for outside tools, we are able to bootstrap an application, connect it to a database, and serve that data to our users.

Although some of the embedded design patterns are unique, anyone familiar with MVC patterns and Java can get up and running quickly with Spring Boot.

# LAB

We're going to make our own music app API today. We already have `User` data set up so it's time to add `Song` data.

Using the `lab-starter-code`:

1. Add a new Flyway migration for the `SONGS` table. The table should have at least `TITLE` and `LENGTH` columns.
2. Update the Flyway `afterMigrate` callback to seed `Song` data as well as `User` data.
2. Create a `Song` model class with annotations to wire it up to the database. Be sure to set up any necessary constructors and Lombok annotations as well.
3. Create a `SongRepository` to fetch `Song` data from the database.
4. Create a `SongsController` that allows for creating, reading, updating, and deleting `Song` data.

