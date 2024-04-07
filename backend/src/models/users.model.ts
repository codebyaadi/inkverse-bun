import mongoose from "mongoose";

let profileImgsNameList = ["Garfield", "Tinkerbell", "Annie", "Loki", "Cleo", "Angel", "Bob", "Mia", "Coco", "Gracie", "Bear", "Bella", "Abby", "Harley", "Cali", "Leo", "Luna", "Jack", "Felix", "Kiki"];
let profileImgsCollectionsList = ["notionists-neutral", "adventurer-neutral", "fun-emoji"];

const usersSchema = new mongoose.Schema({
    personalInfo: {
        fullname: {
            type: String,
            required: true,
            lowercase: true,
            minlength: [3, "Fullname must be three letters long"],
        },
        email: {
            
        }
    }
})