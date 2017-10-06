const DATABASE = 'postgres';
const USERNAME = 'postgres';
const PASSWORD = '';
const HOST = 'localhost';
const Sequelize = require('sequelize')
//TODO: choose connection pool size
//TODO: fix secret management

const sequelize = new Sequelize(DATABASE, USERNAME, PASSWORD, {
  host: HOST,
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

sequelize.sync();

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully')
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err); 
  });

//Models
const ResourceType = sequelize.define('resource_type', {
  id : {
    type: Sequelize.INTEGER,
    primaryKey: true
  },

  type: {
    type: Sequelize.STRING 
  }
});

const Resource = sequelize.define('resource', {
  id : {
    type: Sequelize.INTEGER,
    primaryKey: true
  },

  title : {
    type: Sequelize.STRING,
    allowNull : false
  },

  type : {
    type: Sequelize.INTEGER, 

    references : {
      model: ResourceType,
      key: 'id',
    }
  }
});



