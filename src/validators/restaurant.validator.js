const yup = require('yup');

const createRestaurantValidator = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().required(),
})

async function createRestaurantValidate(data) {
  return createRestaurantValidator.validate(data, { abortEarly: false })
                        .catch(err => {
                          return err
                        })
}

module.exports = {
  createRestaurantValidate
}
