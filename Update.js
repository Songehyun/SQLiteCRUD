const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./database.db");

db.serialize(() => {
  const stmt = db.prepare("UPDATE users SET name = ? WHERE id = ?");

  stmt.run("Alice Updated", 1);
  stmt.finalize();

  console.log("Data updated.");
});
