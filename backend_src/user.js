const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const data = {
  user: "root",
  host: "localhost",
  password: "cdac",
  database: "project",
};

async function adduser(user) {
  const ct = mysql.createConnection(data);

  await ct.connectAsync();

  let val = `insert into userinfo values(?)`;
  await ct.queryAsync(val, [user.message]);

  await ct.endAsync();
}

const user = {
  message: "i am here..",
};
adduser(user);

async function selectuser(user) {
  const ct = mysql.createConnection(data);

  await ct.connectAsync();

  let val = `select * from userinfo`;
  const list = await ct.queryAsync(val, []);
  console.log("record selected..");
  await ct.endAsync();

  return list;
}

module.exports = { adduser, selectuser };
