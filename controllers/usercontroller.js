const bcrypt = require("bcrypt");
const User = require("../models/User");
const saltRounds = 10;
async function signUp(req, res) {
  try {
    //console.log(req.body, "req.body");
    let password = bcrypt.hashSync(req.body.password, saltRounds);
    //console.log(password, "password");
    let user = new User(req.body);
    user.password = password;
    await user.save();
    res.redirect("/");
    // res.end("<h1> SignUp Successfully </h1>");
  } catch (err) {
    console.log(err.message, "msg");
  }
}

async function doLogin(req, res) {
  try {
    console.log(req.body);
    let user = await User.findOne({ email : req.body.email });
    if (!user) {
      res.end("<h1> No such user exist</h1>");
    } else {
      let isMatch = bcrypt.compare(reqbody.password, user.password);
      console.log(isMatch,'isMatch');
      if (isMatch) {
        res.end('<h1>Login Successful</h1>');
      } else {
        console.log("<h1>Incorrect Password</h1>");
      }
    }
    res.end("<h1> Login is in process </h1>");
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  signUp,
  doLogin,
};
