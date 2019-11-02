import mongoose from "../model-interfaces/db-connect";
const Schema = mongoose.Schema;

const User = new Schema (
{
  name: String,
});

export default mongoose.model("user", User);