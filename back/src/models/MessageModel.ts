import mongoose, {model} from 'mongoose';

export type Message = {
    email : string;
    title: string;
    description: string;
};

const messageSchema = new mongoose.Schema<Message>({
    email: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
});

export const Message = model<Message>('Message', messageSchema);