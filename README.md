# TSserver


***scripts***
    -"start": "node dist/index.js",
    -"build": "tsc -p .",
    -"dev": "env-cmd -e dev nodemon src/index.ts",
    -"prettier-format": "prettier --config .prettierrc 'src/\**/*\.ts' --write",
    -"lint": "eslint . --ext .ts",
    -"test": "env-cmd -e test jest --watch"
    
    

***Husky runs before every Commit and Push*****

"husky": {
    "hooks": {
      "pre-commit": "npm run prettier-format && npm run lint",
      "pre-push": "env-cmd -e test jest"
      
    }
    
 ***Testing***
 SuperTest and Jest
 tests ran before every push through husky




# typescript boilerplate restAPI Backend


# Deployed Backend
 site is not deployed. oyu will need to download mongo db and get your own db going. then replace
 an env var for in DATABASE_UR .enc-cmdrc
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

    -"bcryptjs": "^2.4.3",
    -"body-parser": "^1.19.0",
    -"cors": "^2.8.5",
    -"dotenv": "^8.2.0",
    -"env-cmd": "^10.1.0",
    -"express": "^4.17.1",
    -"helmet": "^3.23.3",
    -"jsonwebtoken": "^8.5.1",
    -"mongoose": "^5.9.25",
    -"morgan": "^1.10.0",
    -"prettier-format": "^1.1.5"


#### Developer


    -"eslint": "^7.5.0",
    -"eslint-config-prettier": "^6.11.0",
    -"eslint-plugin-no-loops": "^0.3.0",
    -"eslint-plugin-prettier": "^3.1.4",
    -"husky": "^4.2.5",
    -"jest": "^26.1.0",
    -"nodemon": "^2.0.4",
    -"prettier": "^2.0.5",
    -"supertest": "^4.0.2",
    -"ts-jest": "^26.1.3",
    -"ts-node": "^8.10.2",
    -"typescript": "^3.9.7"
