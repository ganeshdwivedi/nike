import { mongoose, models } from "mongoose";

const userSchema = mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, require: true },
    },
    {
        timestamps: true,
    }
);

const User = models.User || mongoose.model("User", userSchema);
export default User;