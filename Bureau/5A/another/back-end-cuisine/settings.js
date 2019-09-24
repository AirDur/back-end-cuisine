"use strict"

module.exports = {
    Server: {
        name:'CookingToDo BackEnd',
        host:'0.0.0.0',
        port:'8080',
    },
    
    Authentication: {
        seed: '',
        publicKey: './src/constants/jwt_pub.pem',
        privateKey: './src/constants/jwt_priv.pem',
        headerTokenName : 'jwt-token'
    },

    Features : {
        upload:true
    },

    Servers : {
        docker:'/var/run/docker.sock',
    },

    Files: {
        api_documentation: './docs/api.yaml',
    },
    
    Folders : {
        pics: './files',
        tmp: '/tmp',
        static: [
            { alias: '/docs', location: './docs' }
        ],
    },

    Database : {
        test : {
            name:'cooking-test',
            host:'localhost:27017/',
            user: "gateKeeper",
            password: "",
        },
        dev : {
            name:'cooking',
            host:'localhost:27017/',
            user: "gateKeeper",
            password: "",
        },
        prod : {

        }
    },
} 