const router = require('express').Router();
const authService = require('../services/authService');
const { parseMongooseError } = require('../utils/errorUtils');

router.get('/login', (req, res) => {
  res.render('auth/login');
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const token = await authService.login(username, password);
    res.cookie('auth', token, { httpOnly: true });
  } catch (error) {
    // console.log(error.message);
    return res.render('auth/login', { error: error.message });
  }
  res.redirect('/');
});

router.get('/register', (req, res) => {
  res.render('auth/register');
});

router.post('/register', async (req, res, next) => {
  // console.log(req.body);
  const { username, password, repeatPassword } = req.body;

  if (password !== repeatPassword) {
    // return res.redirect('/404');
    return next(new Error(`Password missmatch`));
    // return res.render('auth/register', { error: 'Password Missmatch!' });
  }

  const existingUser = await authService.getUserByUsername(username);

  if (existingUser) {
    // return res.redirect('/404');
    return res.render('auth/register', { error: 'User already exists!' });
  }

  try {
    const user = await authService.register(username, password);
    // console.log(user);
  } catch (err) {
    // console.log(err.errors);
    // const errorsArr = Object.keys(err.errors).map(
    //   (key) => err.errors[key].message
    // );
    // console.log(errorsArr);
    const errorsArr = parseMongooseError(err);
    return res.render('auth/register', { error: errorsArr[0] });
  }

  res.redirect('/login');
});

router.get('/logout', (req, res) => {
  res.clearCookie('auth');
  res.redirect('/');
});

module.exports = router;
