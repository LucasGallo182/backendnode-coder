const mongoose = require('mongoose')
const admin = require("firebase-admin");
const serviceAccount = require("../../proyecto-desafio-coder-firebase-adminsdk-ools9-3d5150fab8.json");

async function initMongoDB() {
    try {
        const url = "mongodb://localhost:27017/ecommerce"
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Server started with MongoDB")
    } catch (error) {
        console.log(error)
    }
}

async function initFirebase(){
    admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
    });
    console.log("Server started with Firebase")
}

module.exports = {initMongoDB, initFirebase}