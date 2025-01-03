// lib/mongoose.js
import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable inside .env');
}

export async function connectDB() {
    await mongoose.connect(MONGODB_URI, {
        dbName: "mgl-blog"
    }).then(() => {
        console.log("Connected to MongoDB");
    }).catch((err) => {
        console.log("Error connecting to MongoDB", err);
    });
}

export async function disconnectDB() {
    await mongoose.disconnect().then(() => {
        console.log("Disconnected from MongoDB");
    }).catch((err) => {
        console.log("Error disconnecting from MongoDB", err);
    });

}