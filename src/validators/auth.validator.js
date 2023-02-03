const yup = require('yup');

const signupValidator = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required().email(),
  password: yup.string().required(),
});

const loginValidator = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required(),
});

async function signupValidate(data) {
  return signupValidator.validate(data, { abortEarly: false })
                        .catch(err => {
                          return err
                        })
}

async function loginValidate(data) {
  return loginValidator.validate(data, { abortEarly: false })
                        .catch(err => {
                          return err
                        })
}

module.exports = {
  signupValidate,
  loginValidate
}