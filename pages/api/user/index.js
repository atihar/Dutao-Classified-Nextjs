import User from "../../../models/user"
import db from '../../../lib/dbConnect';


export default async (req, res) => {
    await db.connect

    if(req.method === 'GET'){
        // finding all the users from the database
        let user = await User.find({});
        res.status(200).json(user)
    }
    else{
        res.status(400).json({ message:"Bad Request" })
    }
    
}