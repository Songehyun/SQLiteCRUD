const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./database.db");

db.serialize(() => {
  const writetable = db.prepare("INSERT INTO zoomoon (id, food) VALUES (?, ?)");

  db.run("PRAGMA foreign_keys = ON", (err) => {
    if (err) {
      console.error("Error enabling foreign keys:", err.message);
    } else {
      writetable.run(6, "없는물");

      writetable.finalize((err) => {
        if (err) {
          console.error("Error finalizing statement:", err.message);
        } else {
          console.log("테이블에 데이터가 들어갔습니다");
        }
      });
    }
  });
});
