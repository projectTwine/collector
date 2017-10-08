const Sequelize = require('sequelize');
const sequelize = new Sequelize('twine', 'admin', 'nD6tbwQCRtTv', {
  host: '52.72.6.185',
  dialect: 'postgres',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Authenticated to Postgres via Sequelize successfully") ;
  })
  .catch(() => {
    console.log("Unable to connect to Postgres via Sequelize: ", err) ;
  });


