const { EntitySchema } = require('typeorm');

const userEntity = new EntitySchema({
  name: 'User',
  tableName: 'users',
  columns: {
    id: {
      primary: true,
      type: 'int',
      generated: true
    },
    name: {
      type: 'varchar'
    },
    email: {
      type: 'varchar',
      unique: true
    },
    password: {
      type: 'varchar'
    }
  },
  relations: {
    restaurants: {
      type: 'one-to-many',
      target: 'Restaurant'
    }
  }
});

module.exports = {
  userEntity
}