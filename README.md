# A. What is required for running the project?
1. Node JS - https://nodejs.org/en/
2. MongoDB compass - https://www.mongodb.com/try/download/compass

# C. Steps how to build and run the project 
1. Create account on MongoDB - https://account.mongodb.com/account/login
2. 
3. Go to root directory and type: npm install
4. Go to frontend directory and type: npm install

## Available Scripts
## In the project root directory, you can run:

### 'npm run server' 
  to run server alone

### 'npm run client'
  to run client alone

### 'npm run dev' 
  to run client with server simulteanosuly

### 'npm run test' 
  to run rest api tests using in memory mongo database

## In the fronted directory, you can run:
### 'npm run test'
  to run tests for the frontend 

# D. Example usages (i.e., like example curl commands to CRUD the notes)

Below examples uses curl, so check if you have it installed before you run them
Go to command line and type **curl --version**

You will also need to run the server so type **npm run dev** in project root directory

### 'curl -X GET http://localhost:3000/notes'
Get all the notes stored in database

### curl -X POST http://localhost:3000/notes --data '{"title":"test", "content":"test"}' --header "Content-type: application/json" 

curl -v -d "title=value" http://localhost:3000/notes