const { EntitySchema } = require('typeorm');

const ratingEntity = new EntitySchema({
  name: 'Rating',
  tableName: 'rating',
  columns: {
    id: {
      primary: true,
      type: 'int',
      generated: true
    },
    stars: {
      type: 'float'
    },
    description: {
      type: 'varchar',
      nullable: true
    },
  },
  relations: {
    user: {
      type: 'many-to-one',
      target: 'User',
      joinColumn: true,
      nullable: false
    },
    restaurant: {
      type: 'many-to-one',
      target: 'Restaurant',
      joinColumn: true,
    }
  }
});

module.exports = {
  ratingEntity
}