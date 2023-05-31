import { Schema, model } from "mongoose";

const user = new Schema<User>({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    role: {
        
    },
});

export const User = model("User", user);
