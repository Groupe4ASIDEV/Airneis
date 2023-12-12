import mongoose, { Model, model } from 'mongoose';

export type User = {
    fullName: string;
    email: string;
    phone: string;
    password: string;
    admin: boolean;
    validated: boolean;
    createdAt: Date;
    deletedAt: Date;
    updatedAt: Date;
};

export type UserStatic = Model<User> & {
    getAll(): Promise<User[]>;
    getOneById(id: String): Promise<User>;
};

const userSchema = new mongoose.Schema<User>({
    fullName: { type: String },
    email: { type: String, required: true, unique: true },
    phone: { type: String },
    password: { type: String, required: true },
    admin: { type: Boolean, required: true, default: false },
    validated: { type: Boolean, required: true, default: false },
    createdAt: { type: Date, default: Date.now },
    deletedAt: { type: Date },
    updatedAt: { type: Date },
});

userSchema.statics = {
    async getAll() {
        const users = await this.find();
        return users;
    },
    async getOneById(id) {
        const user = await this.findById(id);
        return user;
    },
};

export const User = model<User, UserStatic>('User', userSchema);
