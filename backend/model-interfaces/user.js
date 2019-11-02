
import UserModel from "../models/user-model";


const options = {upsert: true, new: true, returnNewDocument: true, useFindAndModify: false};


const create = async (user) => {
    let u;
    user = new UserModel(user);
    u = await user.save();
    return u;
}

export default { 
    create:create
}
