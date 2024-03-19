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

<<<<<<< HEAD
export const Message = model<Message>('Meessage', messageSchema);
=======
export const Message = model<Message>('Message', messageSchema);
>>>>>>> 70ab7e798ad46adf651a75f9177195b93744f9a5
