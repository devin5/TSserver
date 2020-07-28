

***scripts***   
    -"start": "node dist/index.js",  
    -"build": "tsc -p .",   
    -"dev": "env-cmd -e dev nodemon src/index.ts",  
    -"prettier-format": "prettier --config .prettierrc 'src/\**/*\.ts' --write",  
    -"lint": "eslint . --ext .ts",  
    -"test": "env-cmd -e test jest --watch". 
    
    

***Husky runs es-lint before every Commit and tests before every Push*****

"husky": {   
    "hooks": {  
      "pre-commit": "npm run prettier-format && npm run lint",  
      "pre-push": "env-cmd -e test jest"  
      
    }
    
 ***Testing***
 SuperTest and Jest  
 tests ran before every push through husky and through test script  




# Deployed Backend
API is not deployed. you will need to download mongo db and get your own db going. Then replace
 DATABASE_URL variable in .enc-cmdrc
 make sure you make a seperate db for testing.
 
 
 /.enc-cmdrc    
 {     
    "dev": {     
        "DATABASE_URL": "mongodb://localhost:27017/ts-server",     
        "PORT": 5005,     
        "MY_SECRET": "mysupersecretpasswordenv"     
    },     
    "test": {     
        "DATABASE_URL": "mongodb://localhost:27017/ts-server_test",     
        "MY_SECRET": "v"     
    }     
}     


# Technologies

#### production

    -"bcryptjs": "^2.4.3", => -hash password.    
    -"body-parser": "^1.19.0", => -needed for mongoDB requests   
    -"cors": "^2.8.5", => sets up cross origin url 
    -"dotenv": "^8.2.0", => sets up ENV. I later changed too env-cmd for ease with testing.   
    -"env-cmd": "^10.1.0", => env with lots of config options
    -"express": "^4.17.1", => express lib  
    -"helmet": "^3.23.3", => hides headers on req&res    
    -"jsonwebtoken": "^8.5.1", => authentication token  
    -"mongoose": "^5.9.25", => the Phone between mongoDb and node
    -"morgan": "^1.10.0", => Basically just logger middleware
    -"prettier-format": "^1.1.5" => prettier plugin


#### Developer


    -"eslint": "^7.5.0", => linter of choice  
    -"eslint-config-prettier": "^6.11.0", => configs prettier in linter    
    -"eslint-plugin-no-loops": "^0.3.0", => rule for not allowing for loops(dumb)    
    -"eslint-plugin-prettier": "^3.1.4", => integrates prettier in linter  
    -"husky": "^4.2.5", => git hoookss ===>> sooooo coool.       
    -"jest": "^26.1.0", => Testing framework  
    -"nodemon": "^2.0.4", => sets up dev server with hot reload 
    -"prettier": "^2.0.5", => formats codes     
    -"supertest": "^4.0.2", => library that makes testing express easier with jest.   
    -"ts-jest": "^26.1.3", => allows you to use jest testing with typescript.       
    -"ts-node": "^8.10.2", => lets node interpret TS directly for dev 
    -"typescript": "^3.9.7" => my fav language... the first time ...... nevermind you will see
