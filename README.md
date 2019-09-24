Back-End for CookingTodo, based on [micronode project](https://github.com/fmguimaraes/micronode).

# Installation :

1. Clone this git.

2. Install [Docker](https://docs.docker.com/install/linux/docker-ce/ubuntu/), nodejs, npm, openssl and mongodb (required to launch the app) then install dependencies :
```bash
sudo apt-get install nodejs npm mongodb openssl -y
npm install
```

3. Generate keys (used for user security. [More Information about it](https://wiki.openssl.org/index.php/Command_Line_Elliptic_Curve_Operations)) : 
```bash
cd src/constants
openssl ecparam -genkey -name prime256v1 -noout -out jwt_pub.pem
openssl ec -in jwt_pub.pem -pubout -out jwt_priv.pem
```

4. After finish the installation, you must update the setting files with correct database address, user and password.

5. **todo**
```
mongo
    use cooking
    db.createUser( { user: "gateKeeper",
                 pwd: "",
                 roles: [ { role: "clusterAdmin", db: "admin" },
                          { role: "readAnyDatabase", db: "admin" },
                          "readWrite"] },
               { w: "majority" , wtimeout: 5000 } )
```

## Run

On the core folder : 
```bash
npm run start
```

# Development 

## Launch tests : 

Launch UT : 
```bash
npm run test
```

Launch nodemon to try it with Postman :
```bash
npm run test-postman
```

Postman test collections is in test folder (file .postman_collection.json)

## Get API Documentation

NEW DOCUMENTATION : https://cookingtodo.gitbook.io/cooking-todo


Require [Docker Compose](https://docs.docker.com/compose/)
Launch the app :

```bash
docker-compose up
``` 

Open http://localhost/ on a browser.


## Modify API Documentation

```bash
docker run -d -p 80:8080 swaggerapi/swagger-editor
```

Open http://localhost/ and get the file to edit.