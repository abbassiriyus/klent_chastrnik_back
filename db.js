const { Pool } = require("pg")

// const pool = new Client({
//     user: "postgres",
//     host: "containers-us-west-143.railway.app",
//     database: "railway",
//     password: "GoLZRn8nFh9YgD8osXoS",
//     port: 5619
// })
// const pool = new Client({
//     user: "uzdubuz_id_rsa",
//     host: "clocalhost",
//     database: "uzdubuz_test",
//     password: "o$n;y)_HLGwM",
//     port: 5619
// })
const connectionString = 'postgres://default:JKvCT06aWrER@ep-dark-snowflake-a43k171y.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require';

const pool = new Pool({
  connectionString: connectionString,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // Это может быть необходимо в вашем окружении
    },
  },
});
pool.connect(err => {
    if(err) {
        console.log("Connect Error");
    } else {
        console.log("Connect To PostgreSql");
    }
})

module.exports = pool