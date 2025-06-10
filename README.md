# Car Parts Shop Project

This project is a car parts shop application with a backend and frontend.

## Backend

The backend is built using Java and Spring Boot. It provides RESTful APIs for managing car parts, manufacturers, and cars.

### Features

*   ~~User authentication and authorization~~
*   Car part management (CRUD operations)
*   Manufacturer management (CRUD operations)
*   Car management (CRUD operations)

### Technologies Used

*   Java 11
*   Spring Boot 2.7.3
*   Postgres 16

<!-- ### Directory Structure

*   `backend/`: Backend source code
*   [backend/src/main/java/](cci:7://file:///home/ba6tati/Files/programming/java/car-parts-shop/backend/src/main/java:0:0-0:0): Java source code
*   [backend/src/main/java/dev/zhelezov/backend/](cci:7://file:///home/ba6tati/Files/programming/java/car-parts-shop/backend/src/main/java/dev/zhelezov/backend:0:0-0:0): Main application package
*   [backend/src/main/resources/](cci:7://file:///home/ba6tati/Files/programming/java/car-parts-shop/backend/src/main/resources:0:0-0:0): Application resources (e.g., application.properties)
*   [backend/src/main/resources/scripts/](cci:7://file:///home/ba6tati/Files/programming/java/car-parts-shop/backend/src/main/resources/scripts:0:0-0:0): Scripts for data seeding and other tasks
*   [backend/src/test/java/](cci:7://file:///home/ba6tati/Files/programming/java/car-parts-shop/backend/src/test/java:0:0-0:0): Unit tests and integration tests -->

### Running the Backend

To run the backend, navigate to the `backend/` directory and run the following command:

```bash
mvn spring-boot:run
```

# Frontend
The frontend is built using Angular 14. It provides a user interface for managing car parts, manufacturers, and cars.

## Features
* ~~User authentication and authorization~~
* Car part management (CRUD operations)
* ~~Manufacturer management (CRUD operations)~~
* Car management (CRUD operations)

## Technologies Used
* Angular 14
* TypeScript 4.7.4
* HTML5
* CSS3

## Running the Frontend
To run the frontend, navigate to the frontend/ directory and run the following command:

```bash
ng serve
```
 
# Data Seeder
The data seeder is a Python script that seeds the database with initial data.

## Features
* Seeds car parts, manufacturers, and cars into the database
* Technologies Used
* Python 3.9
* Faker library for generating fake data

## Running the Data Seeder
To run the data seeder, navigate to the backend/src/main/resources/scripts/data-seeder/ directory and run the following command:

```bash
python main.py
```

# Docker Compose
The project uses Docker Compose to manage the containers for the backend, frontend, and database.

## Features
* Manages containers for the backend, frontend, and database
* Provides a consistent development environment

## Technologies Used
* Docker 20.10.17
* Docker Compose 2.6.0

## Running the Application with Docker Compose
To run the application with Docker Compose, navigate to the root directory and run the following command:

```bash
docker-compose up
```
This will start the containers for the backend, frontend, and database. You can access the application at http://localhost:4200.
