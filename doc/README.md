## **DEVAPOLOGIES PROJECT'S README:**

### THIS PROJECT USE :

**React** framework for Front Interface, **Java** for the API and**PostgresSQL** for the Database

---
### FRONT-END
### IMPORT TO VISUAL STUDIO CODE
To import the project into **Visual Studio Code**, open the folder at the root


### RUN

To run the project, go to Terminal -> New Terminal, and apply in command : **npm run start**.

By default, project started in port 3000

---
### BACK-END 
### IMPORT TO INTELLIJ

To import the project into **IntelliJ**, open the folder, click on the Maven's button to load dependencies.

### ENV

The project needs some *environmental variables*. To set it up, go to Edit Configuration, then click on Java Options Modify button.

- **`DB_URL`**: the url of db server. (ex: localhost:5432/devapologies)
- **`DB_PASSWORD`**: password of the db. (ex: postgres)
- **`DB_USERNAME`**: username used for the db. (ex: postgres)

### RUN

To run the project, go to Edit Configuration, create a new Maven configuration and apply : **spring-boot:run**.

By default, project started on port 8080