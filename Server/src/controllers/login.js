const users = require("../utils/users");

const Login = (req, res) => {
  const { email, password } = req.query;
  let access = false;

  users.forEach((user) => {
    if (user.email === email && user.password === password) {
      access = true;
    }
  });

  res.status(200).json({ access });
};

// const userEx = users.find((user) => {
//   user.email === email && user.password === password;
// });

// if (userEx) {
//   res.status(200).json({ access: true });
// }
// return res.status(404).json({ access: false });

// else {
//     res.status(200).json({ access: false });
// }

module.exports = Login;
