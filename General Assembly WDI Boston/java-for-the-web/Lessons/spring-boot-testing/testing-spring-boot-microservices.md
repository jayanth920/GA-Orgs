# Testing Spring Boot Microservices

## Lesson Objectives

- Test-drive features for Spring Boot microservices
- Set up a test environment for Spring Boot microservices
- Write end-to-end API tests with `REST-assured`
- Test Spring Boot Controllers
- Test Spring Boot Repositories

--- 

Today, we are going to explore testing strategies for Spring Boot microservices. Testing the complex interactions of our Spring Boot components may seem like a daunting task, but we will discover several tools that turn the process into a simple and powerful exercise. 

## Getting Started

Let's start with a fresh microservice wrapper directory. Normally, this directory will contain some basic scripts such as a `docker-compose.yml` file, but today we are going to add test code to the wrapper as well. This test code will run within its own Spring context, so our wrapper itself will be a Spring Boot app. Let's create this top-level app now:

```bash
$ spring init spring-boot-microservice-wrapper-with-tests --dependencies=web,jpa --build=gradle
```

Next we'll open the project in IntelliJ:

```bash
$ cd spring-boot-microservice-wrapper-with-tests/
$ idea build.gradle
```
> Be sure to select `"Use auto import"`.

## Test-Driving a Feature

[The Three Laws of Test-Driven Develompent](http://programmer.97things.oreilly.com/wiki/index.php/The_Three_Laws_of_Test-Driven_Development) dictate that we should only write code after we have written a correctly-failing test. This concept is fairly simple when testing a small unit of code. When adding a new feature onto an existing application, it becomes a little harder to get started. To properly test a feature, we will need to write a few different types of tests:

- **Feature Tests** - Our `feature tests` will test the whole environment, end-to-end. We will need to spin up a full, real environment and simulate and end-user's interactions. In a microservices environment, this means spinning up our database, APIs, UIs (if we have them), and even our API gateway and service registries. Only once all of these things are working together is our feature complete. 
- **Integration Tests** - `Feature tests` are expensive. Starting and stopping all of our applications requires time and resources, and won't always allow for the kind of immediate feedback we want in a TDD environment. On some occasions, we'll only want to know whether two or three small parts of our application are communicating properly, rather than the full environment. `Integration tests` are a great way to simulate smaller, simpler interactions between components to make sure our `interfaces` are clean and working together well.
- **Unit Tests** - `Unit tests` will be the most common type of test that we write. Once we have defined the high-level functionality of our app inside of a `feature test`, we will build this functionality up, one unit at a time, until the feature is complete. As we build each small unit of code, we will want to make sure that the low-level details of this code are well-tested. `Unit tests` accomplish this by testing each small piece of code on its own, without any outside interaction.

## Setting Up Our Feature Tests

Before we build any feature, we need to define that feature's parameters. We will start with a `user story` that defines the need we are fulfilling. From that `user story`, we develop a `definition of "done"` that will tell us when the implementation of that story has been completed. 

This `definition of "done"` is extremely important. As engineers, we are prone to over-thinking and over-engineering features for a very simple reason: it's fun to do. It's fun to see how many cool additional tools we can use to create large, impressive, feature rich swaths of code. When we leave this instinct un-checked however, we are likely to end up with tons of features that our users never asked for and may never use. We owe it to our users to deliver the highest-value features as often as possible. Setting up a concise, clear `definition of "done"` will help us do this. As soon as we finish building what the users need (and only what they need) we should move on to the next high-value feature.

Feature tests remind us of our `definition of "done"` throughout the development process. They simulate a real user consuming only the features they need, and once these tests pass our users should be happy.

### Set Up

Each feature test will need `docker-compose` to start up our full environment. While we could manually turn these on before running the test, it's much faster to use a script to accomplish this. Gradle already has a default `test` task built-in. We'll just need use a plugin to make sure it runs `docker compose up` and `down` before and after our tests.

Let's modify the `build.gradle` file:

```groovy
buildscript {
	ext {
		springBootVersion = '2.0.0.RELEASE'
	}
	repositories {
		mavenCentral()
		jcenter()
	}
	dependencies {
		classpath("org.springframework.boot:spring-boot-gradle-plugin:${springBootVersion}")
		classpath "com.avast.gradle:gradle-docker-compose-plugin:0.6.17"
	}
}

apply plugin: 'java'
apply plugin: 'eclipse'
apply plugin: 'org.springframework.boot'
apply plugin: 'io.spring.dependency-management'
apply plugin: 'docker-compose'

dockerCompose {
	useComposeFiles = ['docker-compose.yml']
}
dockerCompose.isRequiredBy(test)

group = 'com.example'
version = '0.0.1-SNAPSHOT'
sourceCompatibility = 1.8

repositories {
	mavenCentral()
}

dependencies {
	compile('org.springframework.boot:spring-boot-starter-data-jpa')
	compile('org.springframework.boot:spring-boot-starter-web')
	testCompile('org.springframework.boot:spring-boot-starter-test')
}


```

Now it's all set up. We haven't written any tests yet, but let's run `./gradlew test` anyways to check our work.

We get a failure!

```
> Task :composeUp FAILED

.IOError: [Errno 2] No such file or directory: u'./docker-compose.yml'
```

We haven't written any tests, but our test environment is already guiding our development process. The `docker-compose.yml` doesn't exist yet. We'll need to create this file before our tests can run properly. Let's do it now:

```bash
touch docker-compose.yml
```

With this file in place, we can run the tests again to see a different error. Our test environment now tells us that the `docker-compose.yml` is invalid. Let's drop in some basic set-up to make it happy:

```yaml
version: '3'

services:
  eureka:
      image: anapsix/alpine-java:8_jdk_unlimited
      ports:
        - '8761:8761'
      working_dir: /eureka-server
      volumes:
        - ./eureka-server:/eureka-server
      command: './gradlew bootRun'
      environment:
        - GRADLE_USER_HOME=cache
        - SPRING_PROFILES_ACTIVE=dev	
  api-gateway:
      image: anapsix/alpine-java:8_jdk_unlimited
      ports:
        - '8080:8080'
      working_dir: /api-gateway
      volumes:
        - ./api-gateway:/api-gateway
      depends_on:
        - eureka
      command: './gradlew bootRun'
      environment:
        - GRADLE_USER_HOME=cache
        - SPRING_PROFILES_ACTIVE=dev
```

...and if we run `./gradlew test` again, the computer yells at us because Eureka and Zuul won't start. That makes sense... They don't exist yet! Once again, our test environment is telling us exactly what the next steps should be. Let's create our Eureka and Zuul servers.

## Add the Eureka Server

Let's create our Eureka service registry inside the microservices wrapper:

```bash
$ spring init eureka-server --build=gradle
$ cd eureka-server
$ idea build.gradle
```

Inside of our `eureka-server` project, let's set up some dependencies in the `build.gradle` file:

```groovy
...
dependencyManagement {
	imports {
		mavenBom 'org.springframework.cloud:spring-cloud-netflix:1.4.0.RELEASE'
	}
}

dependencies {
	compile 'org.springframework.cloud:spring-cloud-starter-eureka-server'
}
...
```

Next, we'll rename `DemoApplication.java` to `EurekaServerApplication.java` and set up our main method:

```java
@SpringBootApplication
@EnableEurekaServer
public class EurekaServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(EurekaServerApplication.class, args);
	}
}
```

Finally, we'll configure our `dev` Spring profile inside of a new `application-dev.properties` file:

```ruby
server.port=8761

eureka.client.registerWithEureka=false
eureka.client.fetchRegistry=false
eureka.server.waitTimeInMsWhenSyncEmpty=0
```

Let's try it out! `./gradlew test` should no longer complain about our missing service registry, and will now complain about the missing API gateway. Let's listen to our tests again and add a Zuul server.

## Add a Zuul Server

Let's go back up to our wrapper directory and create the Zuul API gateway:

```bash
$ spring init api-gateway --build=gradle
$ cd api-gateway
$ idea build.gradle
```

We'll need to add our depenencies to set up the Zuul server inside of the `build.gradle` file:

```groovy
...
dependencyManagement {
    imports {
        mavenBom 'org.springframework.cloud:spring-cloud-netflix:1.4.0.RELEASE'
    }
}

dependencies {
    compile 'org.springframework.cloud:spring-cloud-starter-zuul'
    compile 'org.springframework.cloud:spring-cloud-starter-eureka'
}
...
```

> Remember, we'll need both Zuul and Eureka dependencies here, because they are going to work together.

Now let's rename our `main` class to `ZuulGatewayApplication` and set up the `main` method:

```java
package com.example.apigateway;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.zuul.EnableZuulProxy;

@SpringBootApplication
@EnableZuulProxy
public class ZuulGatewayApplication {

	public static void main(String[] args) {
		SpringApplication.run(ZuulGatewayApplication.class, args);
	}
}
```

...and finally we'll configure our Zuul server in a new `application-dev.properties` file:

```ruby
spring.application.name=api-gateway
management.security.enabled=false

eureka.client.serviceUrl.defaultZone=http://eureka:8761/eureka/

spring.output.ansi.enabled=ALWAYS
```


Let's run `./gradlew test` again from our wrapper directory. If everything is set up correctly, `docker-compose` will start up our service registry and API gateway and our tests should run.

The `ApplicationTest` should now run and fail. It's OK that this test fails, it's just a placeholder and we'll replace it with our own tests in a few minutes.

### Final Set Up

The features we are going to test today describe basic CRUD (Create, Read, Update, and Delete) functionality for Users. The API endpoints that provide this functionality expose themselves through an API gateway, which learns of them through our service registry. To write reliable tests, we'll need to be sure all of these are wired up and talking to each other before the test starts.

We'll need to:

- Check that our services have all successfully started on separate ports.
- Check that the Users API has been exposed through the Zuul gateway.

**Good news:** Our `docker-compose` Gradle plugin will wait for our ports to be open before running any tests. Our first check has already been handled. 

There is no guarantee, however, that the Users API has registered with the rest of the environment just because these ports are open. We'll need to add a final check ourselves to make sure **[localhost:8080/users](http://localhost:8080/users)** is up and running before we test it.

Here is a little script that will wait until an endpoint is available on UNIX machines, and then continue executing a command:

```bash
$ touch wait-for-api.sh
```

need to make it executable

```bash
$ chmod +x ./wait-for-api.sh
```

in `wait-for-api.sh`:

```bash
#!/usr/bin/env bash
set -e

RED="\033[31m"

url="$1"
service_name="$2"

>&2 echo -e $RED "Waiting for ${service_name}" "($url)"

until curl --output /dev/null --silent --head --fail $url; do
    printf '.'
    sleep 1
done

>&2 echo -e $RED "${service_name} is up!"
exec $cmd
```

All we'll have to do is run this script before our tests inside of a custom Gradle task. 

Let's drop a new, custom task into our `build.gradle` file:

```groovy
task waitForUsersAPI(type: Exec) {
    commandLine './wait-for-api.sh','http://localhost:8080/users', 'Users API'
}
```

...and we'll tell Gradle to wait for this command before running the `test` task:

```groovy
test {
    dependsOn waitForUsersAPI
}
```

Let's try it out! 

When we run `./gradlew test`, Gradle waits for our Users API to start up and expose itself through the API gateway. The app never starts, so everything just hangs up and continues to wait. Let's consider this a failure and make it pass by creating our basic Users API!

## Creating the Users API

Let's go back to our wrapper directory and create a third Spring Boot project called `users-api`:

```bash
spring init users-api --build=gradle
cd users-api
idea build.gradle
```

Now we'll add our basic MVC dependencies along with the tools we'll need to connect the API to Eureka:

```groovy
dependencyManagement {
    imports {
        mavenBom 'org.springframework.cloud:spring-cloud-netflix:1.4.0.RELEASE'
    }
}

dependencies {
    compile 'org.springframework.cloud:spring-cloud-starter-eureka'
	compile 'org.springframework.boot:spring-boot-starter-web'
}
```

We'll need to rename our main class to `UsersApiApplication` and set up the main method, along with our annotations. Let's do this and add a very simple endpoint to get things started:

```java
@SpringBootApplication
@EnableEurekaClient
@RestController
public class UsersApiApplication {

	@RequestMapping("/")
	public String home() {
		return "some users";
	}

	public static void main(String[] args) {
		SpringApplication.run(UsersApiApplication.class, args);
	}
}
```


Next, we'll tell `docker-compose` to start our service along with Zuul and Eureka:

```yaml
...
users-api:
	image: anapsix/alpine-java:8_jdk_unlimited
	ports:
	  - '8081:8081'
	working_dir: /users-api
	volumes:
	  - ./users-api:/users-api
	depends_on:
	  - eureka
	command: './gradlew bootRun'
	environment:
	  - GRADLE_USER_HOME=cache
	  - SPRING_PROFILES_ACTIVE=dev
...
```

Finally, we'll need to configure our `port` and `eureka` info in a new `application-dev.properties` file:

```ruby
server.port=8081

spring.application.name=users
eureka.client.serviceUrl.defaultZone=http://eureka:8761/eureka/

spring.output.ansi.enabled=ALWAYS
```

## Test-Driving User Features

Our environment is all set up! It's finally time to build some features. Let's start by implementing a feature test that simulates user interactions with our API. To simulate a real user, we'll need to:

1. Wait for our environment to start up
2. Make a request to a real URL on our [localhost:8000/users](http://localhost:8000/users) service
3. Make assertions about the data that is returned (from a real database)

Let's see what this looks like!

First, we'll create a new `features` package inside of our `tests` package. 

Next, we'll create a new `test/../../features/UsersApiFeatureTest.java` file and set it up as a basic Spring Boot test:

```java
@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.DEFINED_PORT)
public class UsersApiFeatureTest {
	
}
```

The annotations above tell Spring let us use our full app context while testing. This means that all of the files we will create will be instantiated and readily available. While this is expensive compared to much smaller unit tests, it is necessary to be sure our full application is working correctly.

We'll also need to set up a database to hold our test data. Let's add one using `docker-compose`. Note that the `users-api` will also "depend" on this database:

```yaml
...
users-api:
	image: anapsix/alpine-java:8_jdk_unlimited
	ports:
	  - '8081:8081'
	working_dir: /users-api
	volumes:
	  - ./users-api:/users-api
	depends_on:
	  - eureka
	  - postgresdev
	command: './gradlew bootRun'
	environment:
	  - GRADLE_USER_HOME=cache
	  - SPRING_PROFILES_ACTIVE=dev
postgresdev:
	image: postgres
	ports:
	- "5432:5432"
	environment:
	- POSTGRES_PASSWORD=password
	- POSTGRES_USER=postgres
	- POSTGRES_DB=pgdev
...
```

Before we can make assertions about our data, we need some starter data in the database. We can use standard Spring Boot Models and Repositories to set this up. 

Let's pull in some extra dependencies in our `build.gradle` to set this up:

```
...
dependencies {
    compile 'org.springframework.boot:spring-boot-starter-web'
    compile 'org.springframework.boot:spring-boot-starter-data-jpa'

    compileOnly 'org.projectlombok:lombok'

    testCompile 'org.springframework.boot:spring-boot-starter-test'

    runtime 'org.postgresql:postgresql'
    runtime 'org.springframework.boot:spring-boot-devtools'
}
...
```

### Creating the User Model

First, we'll create a new `User` model in `models/User.java`. Let's assume each `User` has a `userName`, `firstName`, and `lastName`:

```java
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

    public User(String userName, String firstName, String lastName) {
        this.userName = userName;
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
```

### Oh no!!!

We just wrote a bunch of code without any tests. Shouldn't we test this User model? 

While you can never have too many tests, this particular class doesn't have any behavior so there is very little that we could test. The annotations that provide our functionality are all handled by other libraries, which are already tested themselves. We could write some tests for our `constructor` if we wanted some extra confidence, but for now we are going to trust that the Spring and Lombok libraries we are using have already set us up for success.

### Adding a `UserRepository`

Now let's add a `UserRepository` to help set up our test data. Let's drop this interface into a new `repositories/UserRepository.java` file:

```java
public interface UserRepository extends CrudRepository<User, Long> {

}
```

Do we need to test this repository? 

Just like our `User` model, any functionality here is provided by an already-tested outside library. We could add some tests, but they would be redundant. 

> Note: If we add any functionality to this repository later on, we'll be sure to add tests then.

### Setting up the Feature Test
Now we want to use these `User` and `UserRepository` components to set up our test. We'll use `JUnit` `@Before` and `@After` annotations to dictate what types of database set-up and clean-up should happen before and after our tests:

```java
@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.DEFINED_PORT)
public class UsersApiFeatureTest {

    @Autowired
    private UserRepository userRepository;

    @Before
    public void setUp() {
        userRepository.deleteAll();
    }

    @After
    public void tearDown() {
        userRepository.deleteAll();
    }
}
```

For this to run properly, we'll need to tell Spring where our test database lives. We can add an `application.properties` file in our `test` package that will only be used when the tests run. Let's set this up now in `test/resources/application.properties`:

```ruby
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.PostgreSQL9Dialect
spring.datasource.url=jdbc:postgresql://localhost:5432/pgdev
spring.datasource.username=postgres
spring.datasource.password=password
```

Now we can delete all `Users` before and after our tests. This allows us to start each test with a clean database to avoid `test pollution`. 

> `setUp()` and `tearDown()` are arbitrary, but common names for these methods.

## REST Assured

To check our functionality, we'll need to make real API calls and then make assertions about the results. We could pull together a bunch of tools to do this (Spring libraries and otherwise) but let's pull in a single new tool to do all of this for us: `REST Assured`.

First, we'll need to install the `rest-assured` dependency in our `build.gradle`:

```groovy
testCompile 'io.rest-assured:rest-assured:3.0.6'
```

And now we can write our first test inside of `UsersApiFeatureTest.java`:

```java
...
@Test
public void shouldAllowFullCrudForAUser() throws Exception {
    
}
...
```

We'll want to test that a few things are working:

- retrieving all user data
- retrieving a specific user
- updating that user
- deleting that user

To start off, we'll need some data in the database. Let's leverage our `UserRepository` to add a few test `Users`:

```java
...
@Test
public void shouldAllowFullCrudForAUser() throws Exception {

    User firstUser = new User(
            "someone",
            "Ima",
            "Person"
    );

    User secondUser = new User(
            "someone_else",
            "Someone",
            "Else"
    );

    Stream.of(firstUser, secondUser)
            .forEach(user -> {
                userRepository.save(user);
			});
}
...
```

> This uses some fancy `lambda` syntax to add two users to the database with our `UserRepository`.

Now that we have some Users, we'll make our first assertion using `RESTassured`. Be sure to `static import` each of these new methods from `REST Assured`:

```java
// Test get all Users
when()
	.get("http://localhost:8080/users/")
.then()
	.statusCode(is(200))
	.and().body(containsString("someone"))
	.and().body(containsString("Else"));
```


This code will make a real API call to our API gateway, and ensure that the response is `200` and that the body contains data from both of our `Users`. **And the syntax looks just like english!**

We could also inspect the JSON coming back and make sure all of the data is there and in the right place, but this would make our test "brittle". We should be able to change the structure of our JSON without changing the high-level feature itself. This particular test should only fail when we break the "feature", not when change something arbitrary.

We're also testing that the body contains some of the data, but not all of it. We're just testing the nominal case, we'll do some lower-level testing when we implement the code to give us more confidence later on.

> The `.and()` blocks aren't necessary syntax, but they make things even more readable.

Let's add a few more assertions to test the rest of our functionality:

```java
// Test creating a User
User userNotYetInDb = new User(
	"new_user",
	"Not",
	"Yet Created"
);

given()
	.contentType(JSON)
    .and().body(userNotYetInDb)
.when()
	.post("http://localhost:8080/users")
.then()
	.statusCode(is(200))
	.and().body(containsString("new_user"));

// Test get all Users
when()
	.get("http://localhost:8080/users/")
.then()
	.statusCode(is(200))
	.and().body(containsString("someone"))
	.and().body(containsString("Else"))
	.and().body(containsString("Yet Created"));

// Test finding one user by ID
when()
	.get("http://localhost:8080/users/" + secondUser.getId())
.then()
	.statusCode(is(200))
	.and().body(containsString("Someone"))
	.and().body(containsString("Else"));

// Test updating a user
secondUser.setFirstName("changed_name");

given()
	.contentType(JSON)
	.and().body(secondUser)
.when()
	.patch("http://localhost:8080/users/" + secondUser.getId())
.then()
	.statusCode(is(200))
	.and().body(containsString("changed_name"));

// Test deleting a user
when()
	.delete("http://localhost:8080/users/" + secondUser.getId())
.then()
	.statusCode(is(200));
```

If we run the tests now, we'll see a useful failure! 

We should see that there is an error trying to empty our database, because the `Users` table does not exist yet. We now have a solid test wrapper around our features, that will fail until we're totally done. 

The first failure of this test is again telling us exactly what to do next: It's time to add our Flyway migrations to the Users API.

## Adding the `USERS` Table

We'll need to set up Flyway migrations to create our new `Users` table.

First, we'll need to open up the `users-api` project and add Flyway and Postgres to service's dependencies:

```bash
$ idea users-api/build.gradle
```

```groovy
dependencies {
	compile 'org.springframework.cloud:spring-cloud-starter-eureka'
	compile 'org.springframework.boot:spring-boot-starter-web'
	compile 'org.springframework.boot:spring-boot-starter-data-jpa'

	compile 'org.flywaydb:flyway-core'

	runtime 'org.postgresql:postgresql'
}
```

Next, let's add a new `db/migrations` directory in our `resources` folder.

Inside of this new `migrations` directory, we can set up our first `migration`. This migration will use a `SQL` `create table` statement to set up a `USERS` table with `USER_NAME`, `FIRST_NAME`, and `LAST_NAME` columns. Let's put the following into a new `V1__Add_Users_table.sql` file:

```sql
create table USERS (
  ID serial,
  USER_NAME varchar(100) NOT NULL,
  FIRST_NAME VARCHAR(100) NOT NULL,
  LAST_NAME VARCHAR(100) NOT NULL
)
```

> Remember to use two underscores following the migration `version number`!

Let's add some connection info to a new `application-dev.properties` file:

```
server.port=8081

spring.application.name=users
eureka.client.serviceUrl.defaultZone=http://eureka:8761/eureka/

spring.datasource.url=jdbc:postgresql://postgresdev:5432/pgdev
spring.datasource.username=postgres
spring.datasource.password=password

spring.output.ansi.enabled=ALWAYS
```

Now when we re-run our tests, we'll see our first `AssertionError`!

## Cleaning Up the Test Output

Our test output only tells us which file and which line caused our error. Let's clean this up with a little bit of extra test config. Inside of our top-level wrapper directory, add the following code to the `test` task in our `build.gradle` file:

```groovy
...
test {
	dependsOn cleanTest
	dependsOn waitForUsersAPI

	testLogging {
		exceptionFormat "full"
		events "skipped", "passed", "failed"
		displayGranularity 2
	}
}
...
```

Now we'll get much better failures like this one:

```
Expected: a string containing "someone"
Actual: some users
```

## Implementing the Feature

Our test is now tells us that we are sending the wrong data.

We could just change our placeholder route to return what the test expects, but that would be a waste of time. Our test is now telling us it's time to create our `Controller` and wire it up to some real data.

Let's delete the placeholder route from `UsersApiApplication.java` to give ourselves a clean slate:

```java
@RequestMapping("/")
public String home() {
	return "some users";
}
```

Inside of our `users-api` `build.gradle` file, we'll need to add a `spring-boot-starter-test` dependency:

```groovy
dependencies {
	compile 'org.springframework.cloud:spring-cloud-starter-eureka'
	compile 'org.springframework.boot:spring-boot-starter-web'
	compile 'org.springframework.boot:spring-boot-starter-data-jpa'

	compile 'org.flywaydb:flyway-core'

	runtime 'org.postgresql:postgresql'

	testCompile 'org.springframework.boot:spring-boot-starter-test'
}
```

Next, we'll create a `controllers` package inside of our `test` directory. We can then drop in a new `UsersControllerTest.java` file with this basic setup:

```java
@RunWith(SpringRunner.class)
@WebMvcTest(UsersController.class)
public class UsersControllerTest {

}
```

These annotations tell the tests to use our Spring context so that we can inject some other dependencies. They also tell Spring exactly which class we want to test, so it can ignore some others and run a little bit faster.

Now that we have some basic test set-up, it's time to create the `UsersController` class.

Create a new `controllers` package and `UsersController.java` file. Inside of `UsersController.java`, let's set up a basic `@RestController` class:

```java
@RestController
public class UsersController {
	
}
```

The first, and most basic thing we'll want to test is that all `Users` are returned by the `/`  route. 

We'll expect that this route, whatever it is doing internally, should return a 200 status code on success. Let's test that first.

We'll need something to make our API calls to the controller, but we don't want to have to spin up the whole app to do it (remember how long it takes to run our end-to-end tests). Spring provides a great tool to accomplish this, called `MockMVC`. `MockMVC` will allow us to make  requests to our controllers without having to spin up a whole server environment, and it's very fast. Let's see it in action:

```java
@RunWith(SpringRunner.class)
@WebMvcTest(UsersController.class)
public class UsersControllerTest {

	@Autowired
	private MockMvc mockMvc;
	
	@Test
	public void findAllUsers_success_returnsStatusOK() throws Exception {

		this.mockMvc
			.perform(get("/"))
			.andExpect(status().isOk());
	}
}
```

We can run this test inside of IntelliJ and see it fail really fast. We should see that we're getting a `404` right now because there is no route configured. Time to add the route!

Let's drop this basic `GET` route into `UsersController.java`:

```java
@GetMapping("/")
public String findAllUsers() {
	return "It's working!!!";
}
```

This will make our basic test pass, but we really want to return some `Users` as a JSON array. Time to write our next test:

```java
...
@Test
public void findAllUsers_success_returnAllUsersAsJSON() throws Exception {

	this.mockMvc
		.perform(get("/"))
		.andExpect(jsonPath("$", hasSize(2)));
}
...
```

This test uses a new tool: `jsonPath`. `jsonPath` lets us make low-level assertions about JSON responses, such as where exactly in the JSON structure a piece of data lives. When we run this test, it fails! 

Let's make it pass.

## Mocking in Unit Tests

To make our test happy, we'll need some `User` data from the database. Normally, this would require a new database connection, but because this is a unit test, we should have no "integrations".

To avoid using a real database, we'll trick our controller into thinking there is a database connection, but replace it with a `mock`.

`Mocking` is a common and extremely important testing strategy that allows us to test units of code independently of each other. Spring Boot provides great tools for this right out of the box. For this test, we'll want to mock a repository. We'll need to tell our test to give us a mock `UserRepository` when we ask for a real one, so that our controller code can be tested reliably, without fear of any outside side-effects. Let's try it out in our `UsersControllerTest`:

```java
@RunWith(SpringRunner.class)
@WebMvcTest(UsersController.class)
public class UsersControllerTest {

	@MockBean
	private UserRepository mockUserRepository;
	
	...
	
}
```

The block of code we just dropped in will create for us a `mock` instance of the `UserRepository`. This `mock` instance has the same interface as a real `UserRepository` instance (meaning all of the same methods), but these methods will not trigger any real functionality unless we tell them what to do. Let's take control of our new `mocked` repository and tell it to `stub` out its `findAll()` method with some new, very specific functionality.

Inside of our `@Before` block, we'll create a list of test `Users` and tell the `mockUserRepository` to hand us these `Users` every time we ask it to `findAll()`. This will simulate the real functionality of a repository, without the need for any code or database connections:

```java
@Before
public void setUp() {
	User firstUser = new User(
		"someone",
		"Ima",
		"Person"
	);

	User secondUser = new User(
		"someone_else",
		"Someone",
		"Else"
	);

	Iterable<User> mockUsers = 
		Stream.of(firstUser, secondUser).collect(Collectors.toList());

	given(mockUserRepository.findAll()).willReturn(mockUsers);
}
```

> Be sure to `static import` `given()` from **BDDMockito**.

This block says that before each test, we'll create some new `Users`, collect them in a list using a `lambda` and tell our repository to return those `Users` as if they came from a database. We could mock any method we want on this repository, but we'll only mock `.findAll()` for now.

> Under the hood, this `mocking` functionality is using a tool called [Mockito](http://site.mockito.org/).

The `@MockBean` annotation above will ensure that this exact mocked repository will be `dependency-injected` into our Controller, as if it were a real repository. When we run the real controller code to test its functionality, our fake data will show up!

Let's run the test... 

After all of that work, our test is still failing! We need to change the `UsersController ` now to use our repository:

```java
@RestController
public class UsersController {

	@Autowired
	private UserRepository userRepository;

	@GetMapping("/")
	public Iterable<User> findAllUsers() {
		return userRepository.findAll();
	}
}
```

When we run it again, our test passes! We've successfuly tricked the controller into thinking a repository is wired up. More importantly, we've tested that our controller is behaving properly!

## Testing JSON Response

Let's test the rest of the JSON coming back to make sure all of the data we're looking for is present. Here are a few more tests we'll want to add to our `UsersControllerTest`:

```java
@Test
public void findAllUsers_success_returnUserNameForEachUser() throws Exception {

	this.mockMvc
		.perform(get("/"))
		.andExpect(jsonPath("$[0].userName", is("someone")));
}

@Test
public void findAllUsers_success_returnFirstNameForEachUser() throws Exception {

	this.mockMvc
		.perform(get("/"))
		.andExpect(jsonPath("$[0].firstName", is("Ima")));
}

@Test
public void findAllUsers_success_returnLastNameForEachUser() throws Exception {

	this.mockMvc
		.perform(get("/"))
		.andExpect(jsonPath("$[0].lastName", is("Person")));
}
```

> You may need to explicity add `import static org.hamcrest.Matchers.is;` for your matchers to line up correctly!

## You Do

**Add "happy path tests" for the `GET /{user_id}` route:**

Remember to: 

- Mock any required methods on the repository
- Make as many assertions as necessary
- Run the tests to check for proper failure
- Write code to make tests pass

There is one "gotcha" that we'll help out with... You'll need to mock the repository method to receive a `Long`, so the setup will look like this:

```java
...
given(mockUserRepository.findOne(1L)).willReturn(firstUser);
...
```

**SOLUTION**

Tests:

```java
@Test
public void findUserById_success_returnsStatusOK() throws Exception {

	this.mockMvc
		.perform(get("/1"))
		.andExpect(status().isOk());
}

@Test
public void findUserById_success_returnUserName() throws Exception {

	this.mockMvc
		.perform(get("/1"))
		.andExpect(jsonPath("$.userName", is("someone")));
}

@Test
public void findUserById_success_returnFirstName() throws Exception {

	this.mockMvc
		.perform(get("/1"))
		.andExpect(jsonPath("$.firstName", is("Ima")));
}

@Test
public void findUserById_success_returnLastName() throws Exception {

	this.mockMvc
		.perform(get("/1"))
		.andExpect(jsonPath("$.lastName", is("Person")));
}
```

Implementation:

```java
@GetMapping("/{userId}")
public User findUserById(@PathVariable Long userId) {
	return userRepository.findOne(userId);
}
```

## Testing the "Unhappy Path"

It's just as valuable (if not more valuable) to describe "bad" scenarios in our unit tests.

**Let's start with something simple: If no user is found, we should return `404` and a nice error message.**

First, we'll `mock` the repository to return `null` when we ask for an ID that doesn't exist:

```java
...
given(mockUserRepository.findOne(4L)).willReturn(null);
...
```

Next, we'll make a `MockMVC` request for that bad ID, and expect that it gives us a "not found" status (`404`).

```java
@Test
public void findUserById_failure_userNotFoundReturns404() throws Exception {

	this.mockMvc
		.perform(get("/4"))
		.andExpect(status().isNotFound());
}
```

Looks like we get a good failure. As we can see the controller is simply sending back the `null` object from our mock with a `200` status. This isn't particularly useful, though...

Let's write some code to improve this experience for users of our API: 

```java
@GetMapping("/{userId}")
public User findUserById(@PathVariable Long userId) throws NotFoundException {

	User foundUser = userRepository.findOne(userId);

	if (foundUser == null) {
		throw new NotFoundException("oh noooooooo");
	}

	return foundUser;
}
```

We'll need a handler for this exception that returns a `404`. Spring provides a very nice `@ExceptionHandler` syntax to set up generic error-handling. Let's add one to the bottom of our controller:

```java
...
// EXCEPTION HANDLERS

@ExceptionHandler
void handleUserNotFound(
	NotFoundException exception,
	HttpServletResponse response) throws IOException {

	response.sendError(HttpStatus.NOT_FOUND.value());
}
...
```

It works!

Even better than a `404` would be a nice, clear error message. Let's write a test for this as well:

```java
@Test
public void findUserById_failure_userNotFoundReturnsNotFoundErrorMessage() throws Exception {

	this.mockMvc
		.perform(get("/4"))
		.andExpect(status().reason(containsString("User with ID of 4 was not found!")));
}
```

We can update our controller to return this nicer error message:

```java
@GetMapping("/{userId}")
public User findUserById(@PathVariable Long userId) throws NotFoundException {

	User foundUser = userRepository.findOne(userId);

	if (foundUser == null) {
		throw new NotFoundException("User with ID of " + userId + " was not found!");
	}

	return foundUser;
}
```

...and we'll add our exception message to the `response.sendError()` block in our `@ExceptionHandler`:

```java
@ExceptionHandler
void handleUserNotFound(
	NotFoundException exception,
	HttpServletResponse response) throws IOException {

	response.sendError(HttpStatus.NOT_FOUND.value(), exception.getMessage());
}
```

## Testing the Delete Route

`DELETE` is very simple. We want our controller to ask the repository to delete the User, then give us a `200` when everything goes through.

Let's start our `DELETE` tests with a simple status check:

```java
@Test
public void deleteUserById_success_returnsStatusOk() throws Exception {

	this.mockMvc
		.perform(delete("/1"))
		.andExpect(status().isOk());
}
```

We can watch the test fail, then add a new route to our controller to make it pass:

```java
@DeleteMapping("/{userId}")
public HttpStatus deleteUserById(@PathVariable Long userId) {
	return HttpStatus.OK;
}
```

It passes! But something doesn't look right... 

Our route isn't actually doing anything. Our tests are lying to us right now, making us think that everything is working correctly. Fortunately, we have end-to-end tests that will tell us everything is not as it seems. These are expensive to run, though. Let's figure out a more efficient way of testing this route.

## Test Spies

The problem we'll need to overcome is that the `DELETE` route does not return any information other than a status code. By nature, it is destroying information, so there is nothing left to return in a response. All that the controller can really be expected to do is ask the repository to delete a `User` and then report back its response. 

Fortunately, there is a great testing pattern to solve this problem. We are going to need to "spy" on the Repository and makes sure it is called. Test `spies` are similar to `mocks`, except they allow us to make assertions about a method call itself, rather than the data that comes back.

Mocked Spring "beans" can be spied on using `Mockito`. Let's use some `Mockito` methods to `verify()` that the `UserRepository` is called exactly 1 time with the ID of `1` when our `DELETE` route is called:

```java
@Test
public void deleteUserById_success_deletesViaRepository() throws Exception {

	this.mockMvc.perform(delete("/1"));

	verify(mockUserRepository, times(1)).delete(1L);
}
```

Now we have a fast-running, failing unit test that will make sure our code is doing everything it should. Let's fix the implementation to make it pass:

```java
@DeleteMapping("/{userId}")
public HttpStatus deleteUserById(@PathVariable Long userId) {
	userRepository.delete(userId);
	return HttpStatus.OK;
}
```

There we go! Our tests are no longer lying to us, and we have a fast-running, reliable test.

## Unhappy Path `DELETE`

These test spies are great for testing the "happy path", but what happens if we try to delete a `User` that doesn't exist?

If we dig deep into Spring Boot, we'll see that the `.delete()` method on a repository returns an `EmptyResultDataAccessException` for any ID that doesn't exist. We'll need to set up our mocked `UserRepository` to `throw` this error so we can test our handling in the controller. 

`Mockito` to the rescue again! Time to update our test set up. The syntax is a little clunky, but it gets the job done. It looks like this:

```java	
// Mock out Delete to return EmptyResultDataAccessException for missing user with ID of 4
doAnswer(invocation -> {
	throw new EmptyResultDataAccessException("ERROR MESSAGE FROM MOCK!!!", 1234);
}).when(mockUserRepository).delete(4L);
```

When this error is thrown, we'll want to receive a `404` error and message similar to our `/{user_id}` route. Let's write a test for this:

```java
@Test
public void deleteUserById_failure_userNotFoundReturns404() throws Exception {

	this.mockMvc
		.perform(delete("/4"))
		.andExpect(status().isNotFound());
}
```

It fails! 

To make the test pass, we'll update the controller route: 

```java
@DeleteMapping("/{userId}")
public HttpStatus deleteUserById(@PathVariable Long userId) throws EmptyResultDataAccessException {

	userRepository.delete(userId);
	return HttpStatus.OK;
}
```

...and we'll add in another ExceptionHandler:

```java
@ExceptionHandler
void handleDeleteNotFoundException(
	EmptyResultDataAccessException exception,
	HttpServletResponse response) throws IOException {

	response.sendError(HttpStatus.NOT_FOUND.value());
}
```

Now our route is fully functional and tested!

## Testing the `POST` Route 

The `POST` route is pretty simple and will use the same patterns we've used on previous routes. We should expect that the route:

- Asks the `UserRepository` to save the `User` in the request body
- Returns a `200` status
- Returns the `User` object that it receives back from the repository

In our set-up, we'll need to create a `User` to pass around. Let's set this as a class variable, so we can reference the object later inside of our test methods:

```java
...
private User newUser;
...
```

We'll need to instantiate this user and tell our mocked `UserRepository` what to do with it. Let's drop this into the `@Before` block:

```java
newUser = new User(
	"new_user_for_create",
	"New",
	"User"
);
given(mockUserRepository.save(newUser)).willReturn(newUser);
```

Our test will need to turn the `newUser` into JSON to make the request, so we'll `@Autowire` an `ObjectMapper` from Spring to help us out. This is an object that will provide some nice JSON utility methods:

```java
@Autowired
private ObjectMapper jsonObjectMapper;
```

Time to write our tests:

```java
@Test
public void createUser_success_returnsStatusOk() throws Exception {

	this.mockMvc
		.perform(
			post("/")
				.contentType(MediaType.APPLICATION_JSON)
				.content(jsonObjectMapper.writeValueAsString(newUser))
		)
		.andExpect(status().isOk());
}

@Test
public void createUser_success_returnsUserName() throws Exception {

	this.mockMvc
		.perform(
			post("/")
				.contentType(MediaType.APPLICATION_JSON)
				.content(jsonObjectMapper.writeValueAsString(newUser))
		)
		.andExpect(jsonPath("$.userName", is("new_user_for_create")));
}

@Test
public void createUser_success_returnsFirstName() throws Exception {

	this.mockMvc
		.perform(
			post("/")
				.contentType(MediaType.APPLICATION_JSON)
				.content(jsonObjectMapper.writeValueAsString(newUser))
		)
		.andExpect(jsonPath("$.firstName", is("New")));
}

@Test
public void createUser_success_returnsLastName() throws Exception {

	this.mockMvc
		.perform(
			post("/")
				.contentType(MediaType.APPLICATION_JSON)
				.content(jsonObjectMapper.writeValueAsString(newUser))
		)
		.andExpect(jsonPath("$.lastName", is("User")));
}
```

They're failing! Let's update the controller to make them pass:

```java
@PostMapping("/")
public User createNewUser(@RequestBody User newUser) {
	return userRepository.save(newUser);
}
```

What about the unhappy path? 

We could test that missing info returns an error message and a `500` status, but this is set up for us already by the framework. Remember, the Spring Boot framework has already been tested. There's no need to spend our time testing it again!

## Testing `PATCH`

`PATCH` is very similar to `POST`. The route will find the `User`, update its information, and then ask the repository to save the updated object to the database.

We'll need to set up an updated `User` object for the request. We'll set this up on our test class so we can reference it throughout our test methods:

```java
private User updatedSecondUser;
```

We'll need to tell our mock repository how to handle updates with this new object. Let's do this inside the `@Before` block:

```java
...
updatedSecondUser = new User(
	"updated_username",
	"Updated",
	"Info"
);
given(mockUserRepository.save(updatedSecondUser)).willReturn(updatedSecondUser);
...
```

With this very familiar setup, we'll be able to test our `PATCH` endpoint. Let's drop in some happy-path tests:

```java
@Test
public void updateUserById_success_returnsStatusOk() throws Exception {

	this.mockMvc
		.perform(
			patch("/1")
				.contentType(MediaType.APPLICATION_JSON)
				.content(jsonObjectMapper.writeValueAsString(updatedSecondUser))
		)
		.andExpect(status().isOk());
}

@Test
public void updateUserById_success_returnsUpdatedUserName() throws Exception {

	this.mockMvc
		.perform(
			patch("/1")
				.contentType(MediaType.APPLICATION_JSON)
				.content(jsonObjectMapper.writeValueAsString(updatedSecondUser))
		)
		.andExpect(jsonPath("$.userName", is("new_username")));
}

@Test
public void updateUserById_success_returnsUpdatedFirstName() throws Exception {

	this.mockMvc
		.perform(
			patch("/1")
				.contentType(MediaType.APPLICATION_JSON)
				.content(jsonObjectMapper.writeValueAsString(updatedSecondUser))
		)
		.andExpect(jsonPath("$.firstName", is("new")));
}

@Test
public void updateUserById_success_returnsUpdatedLastName() throws Exception {

	this.mockMvc
		.perform(
			patch("/1")
				.contentType(MediaType.APPLICATION_JSON)
				.content(jsonObjectMapper.writeValueAsString(updatedSecondUser))
		)
		.andExpect(jsonPath("$.lastName", is("name")));
}
```

Then we'll add a basic `PATCH`  route to the controller to make the tests pass:

```java
@PatchMapping("/{userId}")
public User updateUserById(@PathVariable Long userId, @RequestBody User userRequest) {
	User userFromDb = userRepository.findOne(userId);
	
	userFromDb.setUserName(userRequest.getUserName());
	userFromDb.setFirstName(userRequest.getFirstName());
	userFromDb.setLastName(userRequest.getLastName());

	return userRepository.save(userFromDb);
}
```

### Unhappy `PATCH`

We'll want to make sure this route returns `404` with a clear message when the user is not found, just like our other routes. Let's add two unhappy-path tests for this purpose:

```java
@Test
public void updateUserById_failure_userNotFoundReturns404() throws Exception {

	this.mockMvc
		.perform(
			patch("/4")
				.contentType(MediaType.APPLICATION_JSON)
				.content(jsonObjectMapper.writeValueAsString(updatedSecondUser))
		)
		.andExpect(status().isNotFound());
}

@Test
public void updateUserById_failure_userNotFoundReturnsNotFoundErrorMessage() throws Exception {

	this.mockMvc
		.perform(
			patch("/4")
				.contentType(MediaType.APPLICATION_JSON)
				.content(jsonObjectMapper.writeValueAsString(updatedSecondUser))
		)
		.andExpect(status().reason(containsString("User with ID of 4 was not found!")));
}
```

Time to finish up our controller! We'll update the controller implementation to throw a `NotFoundException` if the `User` isn't found. This will look very similar to our `GET /{user_id}` route:

```java
@PatchMapping("/{userId}")
public User updateUserById(@PathVariable Long userId, @RequestBody User userRequest) throws NotFoundException {
	User userFromDb = userRepository.findOne(userId);
	
	if (userFromDb == null) {
		throw new NotFoundException("User with ID of " + userId + " was not found!");
	}
	
	userFromDb.setUserName(userRequest.getUserName());
	userFromDb.setFirstName(userRequest.getFirstName());
	userFromDb.setLastName(userRequest.getLastName());
	
	return userRepository.save(userFromDb);
}
```

## Testing the Repository

So far, we've been using a fake repository. Let's write a couple of tests to make sure our real repository works as expected. To properly test this, we'll need an `integration test`. Instead of `mocking` like we have in our controller tests, we'll need to make sure the Repository uses real `User` models and a real database connection. 

### Set Up a `test` Database

We will connect to an actual database, so we need `docker-compose` with `postgres` and some new `application.properties`.

We only need this database for our repository tests. Our end-to-end test setup will manage its own database, so we'll create a new file called `docker-compose.test.yml` to manage this setup. Let's put this file into our `users-api` and copy in the following contents:

```yaml
version: '3'

services:
  postgresdev:
        image: postgres
        ports:
         - "5433:5432"
        environment:
         - POSTGRES_PASSWORD=password
         - POSTGRES_USER=postgres
         - POSTGRES_DB=pgdev
```

> Notice that this new database is running on port `5433` so we can avoid collisions with our other test database!

Just like our end-to-end tests, we'll need to set up a the `docker-compose` Gradle plugin to use this file. In the `users-api` `build.gradle` file, let's add this config:

```groovy
buildscript {
	ext {
		springBootVersion = '1.5.10.RELEASE'
	}
	repositories {
		mavenCentral()
		jcenter()
	}
	dependencies {
		classpath("org.springframework.boot:spring-boot-gradle-plugin:${springBootVersion}")
		classpath "com.avast.gradle:gradle-docker-compose-plugin:0.6.17"

	}
}

apply plugin: 'java'
apply plugin: 'org.springframework.boot'
apply plugin: 'docker-compose'

group = 'com.example'
version = '0.0.1-SNAPSHOT'
sourceCompatibility = 1.8

repositories {
	mavenCentral()
}

dependencyManagement {
	imports {
		mavenBom 'org.springframework.cloud:spring-cloud-netflix:1.4.0.RELEASE'
	}
}

dependencies {
	compile 'org.springframework.cloud:spring-cloud-starter-eureka'
	compile 'org.springframework.boot:spring-boot-starter-web'
	compile 'org.springframework.boot:spring-boot-starter-data-jpa'

	compileOnly 'org.projectlombok:lombok'

	compile 'org.flywaydb:flyway-core'

	runtime 'org.postgresql:postgresql'

	testCompile 'org.springframework.boot:spring-boot-starter-test'
}

test {
	dependsOn cleanTest

	testLogging {
		exceptionFormat "full"
		events "skipped", "passed", "failed"
		displayGranularity 2
	}
}

dockerCompose {
	useComposeFiles = ['docker-compose.test.yml']
}
dockerCompose.isRequiredBy(test)
```

To make sure we're connecting to our second database, we'll need to set up some `test` `application.properties` in our `users-api` project. Let's create this new file along with a `test/resources` directory and drop in some database configuration:

```
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.PostgreSQL9Dialect
spring.datasource.url=jdbc:postgresql://localhost:5433/pgdev
spring.datasource.username=postgres
spring.datasource.password=password
```

### Set up Gradle tests with IntelliJ

Finally, we'll have to do some `IntelliJ IDEA` surgery to get our tests running with Gradle instead of the default test runner.

1. Press `cmd + shift + a` and search for `"Runner"`.

2. Go to the Gradle tab and select `"Delegate build/run actions to gradle"`

3. Click `"apply"`

4. Go back to terminal and delete the `.idea` folder (`rm -rf .idea`)

5. Re-import the project with `idea build.gradle`

6. Say "yes, overwrite the project"

7. Say "delete existing project and import"

Now all of the tests will run in `IntelliJ` properly, but use our `docker-compose` environment!

### Writing our Repository Tests

First, let's create a new `repositories` package in our test directory, right next to our `controllers` package. Inside of this new `repositories` package, create a `UserRepositoryTest.java` file.

The only method that we've used within our repository is `findAll()`, so this is all we'll need to test!

Let's start by setting up the basic test class inside of `UserRepositoryTest.java`:

```java
@RunWith(SpringRunner.class)
@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
public class UserRepositoryTest {

}
```

There are some new Spring Boot annotations in the code above that will help us out:

- `@DataJpaTest` does a lot for us, it allows us to use a `TestEntityManager` to interact with the test database (Create test data, etc.) and will even clear the database for us between each test so we don't have to explicitly set this up!
- `@AutoConfigureTestDatabase` - By default, Spring will create a fake, in-memory database for us to test with. Because `docker-compose` makes it so easy to use a real PostgreSQL database, we can use this annotation to turn off the fake database.

Let's add a little more set-up. We'll need to create a couple of `Users` in the database to test with. We can use the `TestEntityManager` from Spring that we mentioned above to handle this. Let's "autowire" one at the top of the test class:

```java
@Autowired
private TestEntityManager entityManager;
```

Using this TestEntityManager, we can create and save some `Users` in a `@Before` block

```java
@Before
public void setUp() {
	User firstUser = new User(
		"user_name",
		"some first name",
		"some last name"
	);

	User secondUser = new User(
		"second_user",
		"some other first name",
		"some other last name"
	);

	entityManager.persist(firstUser);
	entityManager.persist(secondUser);
	entityManager.flush();
}
```

This will create two new `Users` before each test, and automatically clean them up before the next one runs!

Let's add a simple test that expects two `Users`: 

```java
@Test
public void findAll_returnsAllUsers() {
	Iterable<User> usersFromDb = userRepository.findAll();

	assertThat(Iterables.size(usersFromDb), is(2));
}
```

Because we want to run the real repository code, we'll need to autowire a `UserRepository` instance into the test, right after our TestEntityManager:

```java
...
@Autowired
private UserRepository userRepository;
...
```

The test passes the first time! This is to be expected, because so much of the code has been handled for us by Spring. It's still a good test to have, just in case our `Getters` and `Setters`, database connection, or repository interface change later on. Integration tests are great for "smoke testing" at a lower level in our code to make sure everything is wired up. 

Let's quickly change the test to look for three `Users`. Running this will make sure the test will break as expected, just in case:

```java
@Test
public void findAll_returnsAllUsers() {
	Iterable<User> usersFromDb = userRepository.findAll();

	assertThat(Iterables.size(usersFromDb), is(3));
}
```

When we run it, it breaks! 

We now know that this test will tell us if anything weird happens in the future. Let's set the expectation back to two and add a few more tests, all of which should now pass:

```java
@Test
public void findAll_returnsAllUsers() {
	Iterable<User> usersFromDb = userRepository.findAll();

	assertThat(Iterables.size(usersFromDb), is(3));
}

@Test
public void findAll_returnsUserName() {
	Iterable<User> usersFromDb = userRepository.findAll();

	String secondUsersUserName = Iterables.get(usersFromDb, 1).getUserName();

	assertThat(secondUsersUserName, is("second_user"));
}

@Test
public void findAll_returnsFirstName() {
	Iterable<User> usersFromDb = userRepository.findAll();
	
	String secondUsersFirstName = Iterables.get(usersFromDb, 1).getFirstName();

	assertThat(secondUsersFirstName, is("some other first name"));
}

@Test
public void findAll_returnsLastName() {
	Iterable<User> usersFromDb = userRepository.findAll();

	String secondUsersLastName = Iterables.get(usersFromDb, 1).getLastName();

	assertThat(secondUsersLastName, is("some other last name"));
}
```

## Running All of the Tests

That should complete our set of features! 

Time to run the feature test again and make sure everything passes. For extra safety, let's run all of our unit and integration tests at the same time.

To make this work, we'll need to head back to the wrapper directory and update the top-level `build.gradle` with couple of helper tasks. The first task will allow us to run our `Users API` tests from within the wrapper directory:

```groovy
task runUsersAPITests(type: Exec) {
    workingDir './users-api'
    commandLine './gradlew', 'test'
}
```

Next, we'll add in an `allTests` task that will run our top-level feature tests after our `Users API` tests have passed:

```groovy
task allTests(type: Test) {
	dependsOn cleanTest
	dependsOn waitForUsersAPI
	dependsOn runUsersAPITests

	testLogging {
		exceptionFormat "full"
		events "skipped", "passed", "failed"
		displayGranularity 2
	}
}
```

This task relies upon our `docker-compose` environment, so we'll add one final line to the bottom of our `build.gradle`:

```groovy
dockerCompose.isRequiredBy(allTests)
```

Now, when we run `./gradlew allTests`, every one of our tests will run. As we add more services to this environment, we'll set each one up in this same way and we'll be able to run every test for the whole environment with a single command!

## Summary

- Our end-to-end tests will fail the whole time until we're done. Once they pass, we know we have reached our `definition of "done"` and should be able to push the code!
- Controller tests should mock integrations so they can function as unit tests.
- Repository tests will act as integration tests between the model, repository, and database code.
- Every tool that we just used could have been built manually, but we found existing libraries to save us the effort. If you find yourself spending a lot of time on test set-up, use your resources and find someone else's helper code! 

## `.gitignore` Gotchas

Be sure to add `/cache` to all `.gitignore` files across your microservices when pushing your code to Github!

## LAB

Test-drive a `Songs` API microservice!

Remember:

1. Write a feature test BEFORE writing any new code. You will need to set up `docker-compose` for your new API service.
2. Mock any integrations in your controllers so you can test them reliably.
3. Set up a new test database for your `Songs` API so you can run the tests independently of your microservices wrapper. Be sure to assign it a unique `port`.
4. Test for the happy and unhappy path. 
5. Be aware of redundant tests! If the functionality is provided by a library, chances are it has already been tested.