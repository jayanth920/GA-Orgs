# Project 2

Build a full microservice environment with an Angular user interface. The app idea is up to you!

## Technical Requirements
- You must have an API Gateway for your microservices.
- You must have a Service Registry for your microservices.
- You must have at least two entities stored in a database. You can either share a database between your microservices or create a separate database for each service.
- You must be able to start your full back-end environment with a single `docker-compose up` command.
- You **DO NOT** need an `afterMigrate.sql` file to seed the database, but may want to create one for your development environment.
- You must turn in a `Trello` board with `user stories` for each feature that you create.

## Feature Requirements
- You must be able to perform full-CRUD functionality within at least one microservice, via the UI.

## Bonus Ideas
- Add tests!
- Add search to your application. 
- Run your `afterMigrate.sql` Flyway callback **only** in your `dev` environment.
- Move all of your Flyway migrations to a single "ephemeral" Docker container.
