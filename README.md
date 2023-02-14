# Api-Lifetek

## Run project: 

### Config: 
- npm init
- npm install
- config variable environment in config.env to match your Database

USER=longdq
DATABASE_PASSWORD=test123456
DATABASE=student-demo-database
const uri = `mongodb+srv://${USER}:${DATABASE_PASSWORD}@cluster0.ipiez12.mongodb.net/${DATABASE}?retryWrites=true&w=majority`

### Start:
- npm run start (config in script package.json) or nodemon server.js
