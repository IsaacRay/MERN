import mongoose from "mongoose";


if (mongoose.connection.readyState !== 1) {
    mongoose.connect("mongodb://mydb-user:1234@database:27017/mydb", {
        useNewUrlParser: true,
    }).then(() => {
        console.log("Successfully connected to the database ready state=" + mongoose.connection.readyState);    
    }).catch(err => {
        console.log("Could not connect to the database. Exiting now...", err);
        process.exit();
    });
}

export default mongoose