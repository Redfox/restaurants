const { EntitySchema } = require('typeorm');

const restaurantEntity = new EntitySchema({
  name: 'Restaurant',
  tableName: 'restaurants',
  columns: {
    id: {
      primary: true,
      type: 'int',
      generated: true
    },
    name: {
      type: 'varchar'
    },
    description: {
      type: 'varchar'
    },
  },
  relations: {
    user: {
      type: 'many-to-one',
      target: 'User',
      joinColumn: true,
      nullable: false
    }
  }
});

module.exports = {
  restaurantEntity
}