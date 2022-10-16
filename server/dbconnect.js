const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();

const uri = process.env.URL;

async function connectToCluster(uri) {
    let mongoClient;
 
    try {
        mongoClient = new MongoClient(uri);
        console.log('Connecting to MongoDB Atlas cluster...');
        await mongoClient.connect();
        console.log('Successfully connected to MongoDB Atlas!');
        const db = mongoClient.db('caliber');
        const collectionUser = db.collection('users');
        const collectionVehicles = db.collection('vehicles');
        const collectionTransaction = db.collection('transcations');

        return [collectionUser, collectionVehicles, collectionTransaction];
    } catch (error) {
        console.error('Connection to MongoDB Atlas failed!', error);
        process.exit();
    }
 }

async function signUp(firstName, lastName, email, phone, password){
    const collectionUser = await connectToCluster(uri)[0];
    const userDoc = {
        first_name: firstName,
        last_name: lastName,
        email: email,
        phone: phone,
        password: password
    };
    
    await collectionUser.insertOne(userDoc);
}

async function addVehicle(userID, make, model, image, coor_lat, coor_long){
    const collectionVehicles = await connectToCluster(uri)[1];
    const vehiDoc = {
        userID: userID,
        make: make,
        model: model,
        image_link: image,
        taken: false,
        coor_lat: coor_lat,
        coor_long: coor_long
    };

    await collectionVehicles.insertOne(vehiDoc);
}

async function addTransaction(userID, vehicleID, timeStart, duration){
    const collectionTransaction = await connectToCluster(uri)[2];
    const transDoc = {
        userID: userID,
        vehicleID: vehicleID,
        timeStart: timeStart,
        duration: duration
    };

    await collectionTransaction.insertOne(transDoc);
}

async function login(email, password){
    collectionUser = await connectToCluster(uri)[0];
    const obj = await collectionUser.findOne({email: email});
    return obj.password == password;
};

async function getUserData(email, password){
    collectionUser = await connectToCluster(uri)[0];
    const obj = await collectionUser.findOne({email: email});
    return obj.toArray();
};