import mongoose from "mongoose";

export async  function PUT(req) {
    mongoose.connect(process.env.MONGO_URL);
    const data = await req.json();
    const session = await getServerSession();
    if ('name' in data) {
        //update user name
    }
}