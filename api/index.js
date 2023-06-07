const app = require('./src/app.js');
const { conn } = require('./src/db.js');
// const { DB_HOST, PORT } = process.env;

const PORT = 3001;

app.listen(PORT, () => {
  conn.sync({ force: true });
  console.log("Listening on port 3001");
});

// conn.sync({ force: true }).then(() => {
//   app.listen(port, () => {
//     console.log(`SERVER UP ON PORT 3000`);
//   });
// });
