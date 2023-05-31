import mongoose from "mongoose";

async function main() {
    await mongoose.connect(process.env.MONGO_URL, { dbName: "user-role" });
    console.log("Connected on the database");
}

export function connectToDatabase() {
    main().catch((error) =>
        console.log("Error connectig on database : ", error)
    );
}
