# Car Parts Shop Project

This project is a car parts shop application with a backend and frontend.

## Docker Documentation
### Table of Contents
1. [Project Structure](#project-structure)
2. [Container Architecture](#container-architecture)
3. [Building & Running](#building--running)
4. [Service Communication](#service-communication)
5. [Component Details](#component-details)

### Project Structure
```
car-parts-shop/
│
├── backend/ # Spring Boot application
│ ├── src/ # Source code
│ ├── pom.xml # Maven configuration
│ └── Dockerfile # Multi-stage build config
│
├── frontend/ # Angular application
│ ├── src/ # Source code
│ ├── package.json # Node.js dependencies
│ └── Dockerfile # Multi-stage build (dev/prod)
│
└── docker-compose.yml # Orchestration configuration
```


### Container Architecture

Services exposed on host ports:
- PostgreSQL: `5433`
- Spring Boot: `8080`
- Angular: `4200`

### Building & Running

#### Prerequisites
- Docker 20.10+
- Docker Compose 2.0+

#### Commands
```bash
# Build and start all services
docker-compose up --build

# Stop all services
docker-compose down

# Access individual services:
# Frontend: http://localhost:4200
# Backend API: http://localhost:8080
# Database: localhost:5433 (user: admin/pass: admin1234)
```

### Features
* Manages containers for the backend, frontend, and database
* Provides a consistent development environment

### Technologies Used
* Docker 20.10.24
* Docker Compose 1.29.2

### Service Communication
Communication Flow
`
Frontend (4200) → Backend (8080) → Database (5432)
`
### Connection Details
Connection	Protocol	Endpoint Example
* `Frontend → Backend	HTTP	http://backend:8080/api/products`
* `Backend → Database	JDBC	jdbc:postgresql://db:5432/car_parts_shop`

## Backend

The backend is built using Java and Spring Boot. It provides RESTful APIs for managing car parts, manufacturers, and cars.

### Features

*   ~~User authentication and authorization~~
*   Car part management (CRUD operations)
*   Manufacturer management (CRUD operations)
*   Car management (CRUD operations)

### Technologies Used

*   Java 21
*   Spring Boot 3.4.4
*   Postgres 16

### Running the Backend

To run the backend, navigate to the `backend/` directory and run the following command:

```bash
mvn spring-boot:run
```

## Frontend
The frontend is built using Angular 19. It provides a user interface for managing car parts, manufacturers, and cars.

### Features
* ~~User authentication and authorization~~
* Car part management (CRUD operations)
* ~~Manufacturer management (CRUD operations)~~
* Car management (CRUD operations)

### Technologies Used
* Angular 19
* TypeScript 5.7.2
* HTML5
* CSS3

### Running the Frontend
To run the frontend, navigate to the frontend/ directory and run the following command:

```bash
ng serve
```
 
## Data Seeder
The data seeder is a Python script that seeds the database with initial data.

### Features
* Seeds car parts, manufacturers, and cars into the database
* Technologies Used
* Python 3.11.2
* Faker library for generating fake data

### Running the Data Seeder
To run the data seeder, navigate to the backend/src/main/resources/scripts/data-seeder/ directory and run the following command:

```bash
python main.py
```