# Microservices with Spring Boot

## Learning Objectives

- Describe the benefits of Microservices vs. Monoliths
- Describe some trade-offs of Microservices
- Use `docker-compose` to control a microservice development environment
- Build a Eureka service discovery engine with Spring Boot
- Build a Zuul API gateway with Spring Boot
- Build an API service that registers with the gateway and service discovery client

## What are Microservices?

Traditionally, enterprise applications have been large, complex masses of code. Design patterns and responsible programming practices allow us to navigate such complexity, but not eliminate it. We want to eliminate this complexity. Why do these applications have to be so large?

One answer is that a single application is much easier to turn on and off than multiple applications. It's also much easier to monitor. Deployment and monitoring of applications has been an epic chore as long as code has existed. For a long time, "deploying" code meant moving the data around on some physical medium. (Anyone remember AOL floppy disks?) The code had to be put onto disks (or even tape) and inserted into a server. 

If that server was miles away, someone had to drive it there. The server often had to be shut down entirely and turned back on to start the service. Anything else running on that server had to be shut down as well. Once you got everything running, you still needed some kind of secure access to that machine to view the logs. Did you find a bug? Start the process all over.

With the advent of fast internet connections and cloud-hosted virtual machines (and now containers), the work required to deploy and monitor an application has significantly decreased. It has decreased so much, in fact, that multiple applications can be managed with less overall complexity than was once required for a single app. This opens up some interesting possibilities.

"Microservice" architecture takes advantage of modern tools by breaking up large applications into small, individual apps. Each of these apps can be deployed, monitored, and maintained independently, but they all work together to solve large problems. Let's explore this new architecture using Java and Spring Boot.

### Benefits of Microservices

- **Scaling** - Microservices can be "scaled" independently of each other. If we have far more requests to a Shopping Cart API than we do to a User Profile API, we can turn on more instances of the Shopping Cart API independently. With a monolithic application, we'd have to scale the whole thing.
- **Separation of Concerns** - Unrelated code no longer needs to live together.
- **Development speed** - No longer need to navigate the maze of a large application.
- **Testability** - Smaller apps are easier to test end-to-end.
- **Learnability** - It's much easier to get up to speed on a new project or task when the application is simpler.

### Microservice Trade-offs

- **New types of complexity** - While microservices can help reduce complexity within a large application, they have to interact with each other. This introduces a new kind of complexity that can be prohibitive. It also introduces the need for new tools.
- **More things to take care of** - Modern tools make it simpler to manage an application's lifecycle, but it will always be simpler to manage one than many.

### Should I always build microservices?

Any pattern that can be used can also be abused.

It is always a good idea to choose the simplest solution at first, and then refactor later. A microservice environment will necessarily have more moving pieces than a monolith, so starting with a monolith may be the right decision. It's not at all uncommon to see a monolithic application with a few "satellite" microservices that have been refactored out of the main code-base. 

Trust your instincts and your domain knowledge to decide when this pattern may be appropriate.

## Microservice Environment Overview

![server-side microservices diagram](https://cdn.auth0.com/blog/microservices/server-side-discovery-diagram.png)
> Diagram borrowed from this [excellent Auth0 blog series on Microservices](https://auth0.com/blog/an-introduction-to-microservices-part-1/).

Today, we are going to build out a basic microservice environment. There are three basic components we will need:

- **The API Gateway** - Each of our services will have its own URL. A client may require data from each of those, and managing several URLs can be extremely cumbersome. An API gateway will allow us to create a single entry-point for any client to consume. 
- **The Service Registry** - Our API gateway needs to know where our services live so that it can shuttle data back and forth. The Service Registry will keep a live "database" of each of our services, along with its address. As new services spin up, they will automatically register themselves in this database, and therefore automatically expose themselves through our central API Gateway URL.
- **Services** - Each of our services will be its own, fully-functioning application. They will look like mini versions of a monolithic app. The only thing we will need to add to our little MVC services is the ability to register with the Service Registry on startup.

## Getting Started

Let's start by creating a new wrapper directory for all of our microservices:

```bash
$ mkdir spring-boot-microservices
```
```bash
$ cd spring-boot-microservices
```

## Creating the Service Registry

We'll create our Service Registry first. The API gateway will need this to tell us where our services live, and our services will need it running so that they can register. To keep things simple, we're going to use a pre-packaged Service Registry implementation built by Netflix. [Netflix Eureka](https://github.com/Netflix/eureka) is a fully-featured service registry library that the company uses in production with fantastic results. Fortunately for us, they have open-sourced it. Let's see what it looks like. 

First, we'll create a fresh Spring Boot application in a new `eureka-server` folder:

```bash
$ spring init eureka-server --build=gradle
```

Now let's move into our new server directory and open the project in IntelliJ IDEA:

```bash
$ cd eureka-server
```
```bash
$ idea build.gradle
```

> Be sure that `auto-import` is checked when IDEA opens the project.

### Setting up Dependencies

The Spring ecosystem includes several Spring Cloud dependencies that are very easy to set up. One of these is a simple wrapper that turns any Spring Boot app into a Eureka server. Let's include this dependency in our `build.gradle`:

```groovy
buildscript {
	ext {
		springBootVersion = '2.0.0.RELEASE'
	}
	repositories {
		mavenCentral()
	}
	dependencies {
		classpath("org.springframework.boot:spring-boot-gradle-plugin:${springBootVersion}")
	}
}

apply plugin: 'java'
apply plugin: 'eclipse'
apply plugin: 'org.springframework.boot'
apply plugin: 'io.spring.dependency-management'

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
	compile 'org.springframework.cloud:spring-cloud-starter-eureka-server'
	testCompile('org.springframework.boot:spring-boot-starter-test')
}
```

### Setting up Eureka

Now that we've added our Spring Cloud Eureka JAR, we'll need to add an annotation to our `Application` main class. Let's re-name the main class to `EurekaServerApplication` and replace its contents with this:

```java
@SpringBootApplication
@EnableEurekaServer
public class EurekaServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(EurekaServerApplication.class, args);
	}
}
```

There is nothing special going on in this code. As a matter of fact, the contents of our class are just the default Spring-generated code. All we've added to the standard Spring boilerplate is a small annotation at the top of the class: `@EnableEurekaServer`. 

This is all we need to do! The Spring Cloud Eureka JAR that we've included will take care of the rest. All we had to do was drop it in and add a single annotation. 

### Configuration

We'll need to set up a few bits of configuration in our `application-dev.properties` before we get started. Let's create the file in our `resources` package and add a few lines:

```ruby
server.port=8761

eureka.client.registerWithEureka=false
eureka.client.fetchRegistry=false
eureka.server.waitTimeInMsWhenSyncEmpty=0
```

This configuration tells our Eureka server to run on the standard Eureka port, `8761`.

It also tells Eureka not to try to register with any other service registries when it starts up.

### Start it up!

Let's start the app in the `dev` profile:

```bash
$ SPRING_PROFILES_ACTIVE=dev ./gradlew bootRun
```

We can visit `localhost:8761` in the browser to see our Eureka dashboard!

## Creating the API Gateway 

Now that we have a service registry running, we can create our API Gateway. Netflix has a tool for this as well! Let's set up a second Spring Boot app inside of our wrapper directory that will function as an API gateway using [Netflix Zuul](https://github.com/Netflix/zuul).

From our top-level directory, let's generate another fresh Spring Boot app and open it in IDEA:

```bash
$ springboot init api-gateway --build=gradle
```
```bash
$ cd api-gateway
```
```bash
$ idea build.gradle
```

### Adding Dependencies

Spring Boot has a wrapper for Zuul as well! Let's drop it in:

```groovy
buildscript {
	ext {
		springBootVersion = '2.0.0.RELEASE'
	}
	repositories {
		mavenCentral()
	}
	dependencies {
		classpath("org.springframework.boot:spring-boot-gradle-plugin:${springBootVersion}")
	}
}

apply plugin: 'java'
apply plugin: 'eclipse'
apply plugin: 'org.springframework.boot'
apply plugin: 'io.spring.dependency-management'

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
	compile 'org.springframework.cloud:spring-cloud-starter-zuul'
	compile 'org.springframework.cloud:spring-cloud-starter-eureka'
}
```

### Setting up the Server

Just like our Eureka server, the Zuul gateway will be a standard Spring Boot app with a single annotation on the main class. Let's rename our main class to `ZuulGatewayApplication` and fill it in:

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

### Configuration

Let's set up our dev server configuration in `application-dev.properties` before we start it up:

```
spring.application.name=api-gateway

management.security.enabled=false

eureka.client.serviceUrl.defaultZone=http://eureka:8761/eureka/

# Add color to log output
spring.output.ansi.enabled=ALWAYS
```

This config gives the application a name, which will be passed to Eureka.

It also tells Spring to turn off security in our `dev` profile. We'll need this when we check our routes later on.

Finally, it tells our app where the Eureka server lives. The Eureka URL here assumes the Eureka server lives on a host named `eureka` instead of `localhost`, because we are now going to use `docker-compose` to start everything up.

## Setting up `docker-compose`

We can continue starting each of these services individually, but as we continue to add services we'll have to manage more and more start-up commands as well. We'll need to pull in `docker-compose` to solve this problem for us.

`docker-compose` is a perfect tool for a microservice development environment. It will allow us to run start and stop commands for all of our services with a single `docker-compose up` or `down` command. Let's drop a new `docker-compose.yml` file into our wrapper directory and configure it to start our Eureka and Zuul servers:

```yaml
version: '3'

services:
  eureka:
    image: anapsix/alpine-java:8_jdk_unlimited
    ports:
      - '8761:8761'
    working_dir: /app
    volumes:
      - ./eureka-server:/app
    command: './gradlew bootRun'
    environment:
      - GRADLE_USER_HOME=cache
      - SPRING_PROFILES_ACTIVE=dev
  api-gateway:
    image: anapsix/alpine-java:8_jdk_unlimited
    ports:
      - '8080:8080'
    working_dir: /app
    volumes:
      - ./api-gateway:/app
    depends_on:
      - eureka
    command: './gradlew bootRun'
    environment:
      - GRADLE_USER_HOME=cache
      - SPRING_PROFILES_ACTIVE=dev
```

Now, when we run `docker-compose up` from our top-level directory, each service will start up in the `dev` profile on their assigned ports.

Remember that Gradle will download and cache its dependencies the first time this happens so it will take a little while.

> Note: If you want to start just one service, you can run `docker-compose up <app-name>` (e.g. `docker-compose up api-gateway`.)

Let's move into our top-level directory and try it out! 

```bash
docker-compose up
```

Everything starts up! It takes a little longer because we are running inside of the Docker environment, but remember that `docker-compose` lets us hot-reload our code. Once everything is started up, we won't have to restart too often.

### Naming services with the API Gateway

By default, the application name that we set in our `application.properties` will become the route that Zuul uses. In a moment, we'll add a `Users` API that will automatically register itself with Zuul as `/users`. 

This is a very convenient feature, but we may not always want to expose every server route through our gateway. Anything that we expose to the gateway is exposed to our end-users. Therefore, we will leave this feature on for today, but in the future you may want to configure exactly which routes are available using Spring's [Zuul Configuration](https://cloud.spring.io/spring-cloud-netflix/multi/multi__router_and_filter_zuul.html) properties. 

These properties also provide nice features such as:

- Renaming routes
- Prefixing routes, e.g. `/api/users` instead of `/users`
- Controlling which headers users are allowed to send in their request

This tool provides a lot of fantastic security and routing options. Be sure to keep the documentation handy!

## The Users Service

Now it's time to create our `Users` API. This API will be a standard Spring Boot MVC app, connected to a Postgres database. The only thing we'll need to add to set this apart from a vanilla Spring Boot service is the ability to register with our service registry on start-up. 

Let's start by creating the basic Spring Boot skeleton:

```bash
$ springboot init users-api --build=gradle
```
```bash
$ cd users-api
```
```bash
$ idea build.gradle
```

### Add Dependencies

We will need to mark our service as a Eureka client, so we'll pull in the Spring Cloud Eureka dependencies:

```groovy
buildscript {
	ext {
		springBootVersion = '2.0.0.RELEASE'
	}
	repositories {
		mavenCentral()
	}
	dependencies {
		classpath("org.springframework.boot:spring-boot-gradle-plugin:${springBootVersion}")
	}
}

apply plugin: 'java'
apply plugin: 'eclipse'
apply plugin: 'org.springframework.boot'
apply plugin: 'io.spring.dependency-management'

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
}
```

Notice that we will still need the standard Spring Boot starter for this service. 

### Set up Server

Let's rename our main class to `UsersApiApplication` and drop in some starter code:

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

This is a basic Spring Boot main class with a single `/` route that returns some generic data.

The `@SpringBootApplication` and `@RestController` annotations are standard Spring Boot annotations that enable the Spring app context and allow us to register the `/` route within this file.

The only thing that sets this file apart from a generic Spring app is the one new annotation: `@EnableEurekaClient`. This annotation tells our app to look for a Eureka server on startup and register itself. Once the application has started and registered, Zuul will pick it up from the service registry and expose all of its URLs automatically!

### Configuration

We'll need to add some configuration to make this happen. Let's drop this into a new `application-dev.properties` file:

```
server.port=8081

spring.application.name=users

eureka.client.serviceUrl.defaultZone=http://eureka:8761/eureka/

# Add color to log output
spring.output.ansi.enabled=ALWAYS
```

This app will need to run on port `8081`, because our API gateway has taken over port `8080`.

This configuration will give our app a name, which will translate to its base URL in Zuul. We'll call our app `users` so that any requests to `/users` will end up here.

We also need to tell our app where Eureka lives so it can register on start-up.

### Dockerize It

Let's tell our `docker-compose.yml` file where this app lives and how to start it up:

```yaml
version: '3'

services:
  eureka:
    image: anapsix/alpine-java:8_jdk_unlimited
    ports:
      - '8761:8761'
    working_dir: /app
    volumes:
      - ./eureka-server:/app
    command: './gradlew bootRun'
    environment:
      - GRADLE_USER_HOME=cache
      - SPRING_PROFILES_ACTIVE=dev
  api-gateway:
    image: anapsix/alpine-java:8_jdk_unlimited
    ports:
      - '8080:8080'
    working_dir: /app
    volumes:
      - ./api-gateway:/app
    depends_on:
      - eureka
    command: './gradlew bootRun'
    environment:
      - GRADLE_USER_HOME=cache
      - SPRING_PROFILES_ACTIVE=dev
  users-api:
    image: anapsix/alpine-java:8_jdk_unlimited
    ports:
      - '8081:8081'
    working_dir: /app
    volumes:
      - ./users-api:/app
    depends_on:
      - eureka 
    command: './gradlew bootRun'
    environment:
      - GRADLE_USER_HOME=cache
      - SPRING_PROFILES_ACTIVE=dev
```

### Starting it up!

Let's run `docker-compose up` and see our whole environment come to life!

Once everything has started, we should be able to check on a few URLs:

- [localhost:8761](http://localhost:8761) should have our `API-GATEWAY` and `USERS` apps registered
- [localhost:8080/routes](http://localhost:8080/routes) should show our `/users` route
- [localhost:8080/users](http://localhost:8080/users) should return "some users"
- - [localhost:8081/](http://localhost:8080/users) should also return "some users"

## LAB

We're going to create a [Spotify](http://www.spotify.com) clone! `User` and `Song` metadata isn't going to be accessed at the same time very often, so let's create functionality for two separate `User` and `Song` microservices.

Using the `lab-starter-code`, let's create an even better set of microservices.

### Add a new Service

Set up a basic service that returns `some songs` at [localhost:8080/songs](http://localhost:8080/songs).

Remember:

- The microservice will be a basic Spring Boot MVC application, with some extra dependencies and annotations that tell it to register with our service registry (Eureka).
- You will need to dictate a new port for the service to run on. The API gateway is already set to run on `8080`.
- We'll want the app to register at the `/songs` URL through the Zuul API gateway.

### Adding Song and User Functionality

Once the two services are wired up to our API gateway and service registry, we'll want to add some functionality to each.

1. Add a Postgres database to our microservice environment (using `docker-compose`). Both the `Users` and `Songs` microservices will share the same database.
2. Each service should have Flyway migrations that add `USERS` and `SONGS` tables to the database. 
	- The `USERS` table should have at least `USER_NAME`, `FIRST_NAME`, and `LAST_NAME` columns.
	- The `SONGS` table should have at least `TITLE` and `LENGTH` (in milliseconds) columns.
3. Each service should be able to create, read, update, and delete data.

### BONUS

1. Create `afterMigrate` callbacks to the `Users` and `Songs` services to seed some data.	(Remember that with hot-reloading this seed data will add on top itself until you call `docker-compose down`.)
2. Create a `/search` endpoint to find `Songs` by title. (A really great way to do this is hiding in [this StackOverflow post](https://stackoverflow.com/questions/21456494/spring-jpa-query-with-like).
