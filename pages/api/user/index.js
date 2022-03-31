import User from '../../../models/User';
import dbConnect from "../../../lib/dbConnect"

dbConnect();

export default async (req, res) => {

    if(req.method === 'GET'){
        // finding all the users from the database
        let user = await User.find({});
        res.status(200).json(user)
    }
    else{
        res.status(400).json({ message:"Bad Request" })
    }
    
}