import mongoose from "mongoose"
import { User } from "@/models/User"

export async function POST(req) {
    const body = await req.json()
    mongoose.connect(process.env.MONGO_URL);
   const newUser = await User.create(body);
   console.log(newUser)
    return Response.json(newUser)
}