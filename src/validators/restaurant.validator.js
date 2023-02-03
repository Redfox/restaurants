const yup = require('yup');

const createRestaurantValidator = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().required(),
})

const ratingRestaurantValidator = yup.object().shape({
  stars: yup.number().max(5).min(1).required(),
  description: yup.string().optional(),
})

async function createRestaurantValidate(data) {
  return createRestaurantValidator.validate(data, { abortEarly: false })
                        .catch(err => {
                          return err
                        })
}

async function ratingRestaurantValidate(data) {
  return ratingRestaurantValidator.validate(data, { abortEarly: false })
                        .catch(err => {
                          return err
                        })
}

module.exports = {
  createRestaurantValidate,
  ratingRestaurantValidate
}
