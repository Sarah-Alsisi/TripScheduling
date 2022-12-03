# Trip Scheduling Service
# Spring Boot + Angular 14 + MySQL CRUD example

Full-stack Angular 14 + Spring Boot + MySQL CRUD operations in that:

Trip:
- Each Trip has id, start and end time as well as from and to station.
- We can create, retrieve, update, delete Trips.
- We can also find Trip by id.

Station:
- Each Station has id and a name.
- We can create, retrieve, update, delete Stations.
- We can also find Station by id.

Admin:
- Each Admin has unique username and a password, as well as keeping track of his login status.
- Admin can sign up, sign in, create a trip, update a trip by id, delete a trip by id, show all scheduled trips,
  show all stations.

## Homepage
![Homepage.png](Homepage.png)

## Station List
![Stations.png](Stations.png)

# Getting Started
### 1. Install MySQL workbench
1.1. Follow [this guide](https://www.simplilearn.com/tutorials/mysql-tutorial/mysql-workbench-installation) to set up MYSQL on your machine.

1.2. Create a new schema.

### 2. Install AngularCLI
2.1  make sure you have nodejs installed, if not:
```bash
npm install -g npm
```
2.2- Install AngularCLI
```bash
npm install -g @angular/cli
```
Follow [this guide](https://angular.io/guide/setup-local) to set up Angular on your machine.

### 3. Clone the repository

```bash
# If you have the GitHub CLI.
gh repo clone Sarah-Alsisi/TripScheduling
# Otherwise.
git clone git@github.com:Sarah-Alsisi/TripScheduling.git
# You can also clone the repo manually using the url. 
```
### 4. Update application.properties file
  4.1. Update the url with the schema you created in MYSQL workbench.

  4.2. Update  the username and password like the one you created in MYSQL workbench.

### 5. Run Spring Boot application
```
mvn spring-boot:run
```
The Spring Boot Server will export API at port `8081`.

### 6. Run Angular Client
```bash
cd .\angular-14-client\
npm install
ng serve --port 8081
```