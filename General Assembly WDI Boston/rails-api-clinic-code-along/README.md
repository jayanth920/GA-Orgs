[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Rails API: Clinic API (Code-along)

This is part of the Rails API sequence of talks. Each talk has its own
repository with a reference README.

-   [Rails API: Single Resource](https://git.generalassemb.ly/ga-wdi-boston/rails-api-single-resource)
-   [Rails API: One-to-Many](https://git.generalassemb.ly/ga-wdi-boston/rails-api-one-to-many)
-   [Rails API: Many-to-Many](https://git.generalassemb.ly/ga-wdi-boston/rails-api-many-to-many)

Each talk is designed to walk through the creation of a real Rails API,
feature-by-feature, using "error driven development". Developers should have
completed the introductory [Rails
API](https://git.generalassemb.ly/ga-wdi-boston/rails-api) talk. This sequence ends with
[Rails API: Behavior-Driven
Development](https://git.generalassemb.ly/ga-wdi-boston/rails-api-bdd), where
error-driven-development is replaced by automated testing.

Each talk covers three domains, and therefore, three APIs. The demonstration
API, developed by consultants, is followed by a code-along API, in which
developers and consultants work together to build the API. Finally, developers
are expected to build their own API as part of the laboratory portions of each
talk.

-   [Library API](https://git.generalassemb.ly/ga-wdi-boston/rails-api-library-demo)
-   [Clinic API](https://git.generalassemb.ly/ga-wdi-boston/rails-api-clinic-code-along)
-   [Cookbook API](https://git.generalassemb.ly/ga-wdi-boston/rails-api-cookbook-lab)

These API repositories contain a few important branches:

-   `master` contains starter code.
-   `solution` contains a feature-complete reference API. History is not
    canonical.
-   `tutorial` contains detailed commit history, and tags for where each talk
    should end.

## Preparation

1.  Fork and clone this repository.
1.  Create a new branch, `training`, for your work.
1.  Checkout to the `training` branch.
1.  Install dependencies with `bundle install`.
1.  Create a `.env` for sensitive settings (`touch .env`).
1.  Generate new `development` and `test` secrets (`bin/rake secret`).
1.  Store them in `.env` with keys `SECRET_KEY_BASE_<DEVELOPMENT|TEST>`
    respectively.
1.  Setup your database with `bin/rake [db:drop] db:create db:migrate db:seed
    db:examples`.
1.  Run the API server with `bin/rails server`.

## API Build Specifications

![ERD Clinic](https://git.generalassemb.ly/storage/user/3667/files/4e3c51d4-ce2e-11e7-9d36-8379102225c9)

### Version 1
- Epic: As a user, I want to manage my patients
- User Stories:
  - As a user, I want to view a single patient
  - As a user, I want to view all patients
  - As a user, I want to create a patient with a first name, last name, diagnosis and born on
  - As a user, I want to edit a patient's first name, last name, diagnosis and born on
  - As a user, I want to delete a patient

### Version 2
- Epic: As a user, I want to manage my patients
- User Stories:
  - As a user, I want to view a single patient
  - As a user, I want to view all patients
  - As a user, I want to create a patient with a first name, last name, diagnosis and born on
  - As a user, I want to edit a patient's first name, last name, diagnosis and born on
  - As a user, I want to delete a patient
- Epic: As a user, I want to manage my doctors
- User Stories:
  - As a user, I want to view an doctor
  - As a user, I want to view all doctors
  - As a user, I want to create an doctor with a given name, family name, zip code and specialty
  - As a user, I want to edit an doctor's given name, family name, zip code and specialty
  - As a user, I want to delete an doctor
- Epic: As a user, I want a doctor to have many patients
- User Stories:
  - As a user, I want to assign a single doctor to a patient
  - As a user, I want to assign multiple patients to a doctor

### Version 3
- Epic: As a user, I want to manage my patients
- User Stories:
  - As a user, I want to view a single patient
  - As a user, I want to view all patients
  - As a user, I want to create a patient with a first name, last name, diagnosis and born on
  - As a user, I want to edit a patient's first name, last name, diagnosis and born on
  - As a user, I want to delete a patient
- Epic: As a user, I want to manage my doctors
- User Stories:
  - As a user, I want to view an doctor
  - As a user, I want to view all doctors
  - As a user, I want to create an doctor with a given name, family name, zip code and specialty
  - As a user, I want to edit an doctor's given name, family name, zip code and specialty
  - As a user, I want to delete an doctor
- Epic: As a user, I want a primary doctor to have many patients
- User Stories:
  - As a user, I want to assign a primary doctor to a patient
  - As a user, I want to assign multiple patients to a primary doctor
- Epic: As a user, I want a any patient and any doctor to have many appointments together
- User Stories:
    - As a user, I want to create an appointment between a patient and a doctor
    - As a user, I want to delete an appointment between a patient and a doctor

## Tasks

Developers should run these often!

-   `bin/rake routes` lists the endpoints available in your API.
-   `bin/rake test` runs automated tests.
-   `bin/rails console` opens a REPL that pre-loads the API.
-   `bin/rails db` opens your database client and loads the correct database.
-   `bin/rails server` starts the API.
-   `scripts/*.sh` run various `curl` commands to test the API. See below.

<!-- TODO -   `rake nag` checks your code style. -->
<!-- TODO -   `rake lint` checks your code for syntax errors. -->

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
