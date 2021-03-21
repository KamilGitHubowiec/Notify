# A. What is required for running the project?
1. Node JS - https://nodejs.org/en/
2. MongoDB compass - https://www.mongodb.com/try/download/compass

# B & C. Steps how to build and run the project & Steps how to run scripts that will setup database for the project
1. Create account on MongoDB - https://account.mongodb.com/account/login
2. Go to **Clusters** tab and create a free cluster
3. Go to **Database Access** tab and add user
4. Go to **Network Access** tab and Add IP Address (choose option *Allow access from anywhere*)
5. Go back to **Clusters** tab and click CONNECT -> Connect using MongoDB Compass -> select I have MongoDB Compass and copy the connection string 
6. Open up Compass App that you downloaded and in New Connection tab pass the connection string that should look like this
MONGO_URI=mongodb+srv://<user>:<password>@<databaseName>.sxiup.mongodb.net/test
as <user> you want to pass name of the user you created in step 3 and instead of <password> pass its password, you will also need to add the name of database you created instead of <databaseName> (get rid of <> tags)
8. Click Connect
9. Go to MongoDb website https://account.mongodb.com/account/login -> Go to Clusters -> Click CONNECT -> Connect your application and copy connection string
10. Create .env file in root directory with following variables (as MONGO_URI you want to pass you connection string with your data):
NODE_ENV=development
PORT=5000
MONGO_URI=mongodb+srv://<user>:<password>@<databaseName>.sxiup.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
11. Go to root directory and type: npm install
12. Go to frontend directory and type: npm install
13. Go to root directory in command line and type **npm run dev** script

## Available Scripts
## In the project root directory, you can run:

### 'npm run server' 
  to run server alone

### 'npm run client'
  to run client alon

### 'npm run dev' 
  to run client with server simulteanosuly

### 'npm run test' 
  to run rest api tests using in memory mongo database

# D. Example usages (i.e., like example curl commands to CRUD the notes)

Below examples uses curl, so check if you have it installed before you run them
Go to command line and type **curl --version**

You will also need to run the server so type **npm run dev** in project root directory

❗ **Do not use '' single quotes when running curl on windows because it won't work,**
  **instead use "" double quotes and use \ escape tags**

### 'curl -X GET http://localhost:3000/notes'
Get all the notes stored in database

### curl -X POST http://localhost:3000/notes --data "{\"title\":\"test\", \"content\":\"test\"}" --header "Content-type: application/json" 
Post new note to database by passing title and content of new note

### curl -X GET http://localhost:3000/notes/id 
Get note by id (to make it work, first post new note then in the place of id paste id of the created note)

### curl -X PATCH http://localhost:3000/notes/id --data "{\"title\":\"test Updated\", \"content\":\"test Updated\", \"noteToBeArchived\":{\"title\": \"archived Note\", \"content\": \"archived Note\"}}" --header "Content-type: application/json"
Update existing note by passing id, new data and note that should be archived (same as getting note by id, work on the created one)

### curl -X DELETE http://localhost:3000/notes/6057af077724b12c406c2d58 
Delete existing note by passing id

### curl -X GET http://localhost:3000/notes/history/6057af077724b12c406c2d58
Get history of the chosen note by passing an id