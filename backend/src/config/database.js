import mongoose from 'mongoose';

export const connect = async () => {
    await mongoose.connect('mongodb+srv://adyasamal2001:XsEKWcygCm054QlW@cluster0.fcovloo.mongodb.net/?retryWrites=true&w=majority');
}
//XsEKWcygCm054QlW
