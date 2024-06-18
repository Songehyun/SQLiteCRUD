const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database(":memory:"); // 메모리 내 임시 DB, 실제 파일을 사용하려면 파일명으로 변경

db.serialize(() => {
  db.run("CREATE TABLE users (id INTEGER PRIMARY KEY, name TEXT, email TEXT)");

  console.log("Database and table created.");
});
