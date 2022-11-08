
# Getting Started

## 1. Install MySQL workbench
1.1. Follow [this guide](https://www.simplilearn.com/tutorials/mysql-tutorial/mysql-workbench-installation) to set up MYSQL on your machine.

1.2. Create a new schema.

## 2. Install AngularCLI
2.1  make sure you have nodejs installed, if not:
```bash
npm install -g npm
```
2.2- Install AngularCLI
```bash
npm install -g @angular/cli
```
Follow [this guide](https://angular.io/guide/setup-local) to set up Angular on your machine.



## 3. Clone the repository

```bash
# If you have the GitHub CLI.
gh repo clone Sarah-Alsisi/TripScheduling
# Otherwise.
git clone git@github.com:Sarah-Alsisi/TripScheduling.git
# You can also clone the repo manually using the url. 
```
## 4. Update application.properties file
4.1. Update the url with the schema you created in MYSQL workbench.

4.2. Update  the username and password like the one you created in MYSQL workbench.

## 5. Run Spring Boot application
```
mvn spring-boot:run
```


