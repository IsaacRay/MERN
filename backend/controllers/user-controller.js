import User from "../model-interfaces/user"

const create = async (req, res, next) => {
  const createdUser = await User.create({"name":"Isaac"});
  res.send(createdUser);
};

export default {
  create: create,
};
