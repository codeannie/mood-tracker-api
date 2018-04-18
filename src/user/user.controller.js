import User from './user.model';

// CREATE NEW USER
const createNewUser = (req, res) => {
  User
    .create({
      email: req.body.email,
      password: req.body.password,
    })
    .then(user => {
      res.status(201).json(user.toClient());
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ message: 'internal sever error' });
    });
};

export { createNewUser };
