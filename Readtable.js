const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./database.db");

db.serialize(() => {
  // fkeytest와 zoomoon 테이블에서 id가 1인 내용을 조회하여 조인
  db.all(
    `SELECT *
     FROM fkeytest
     LEFT JOIN zoomoon ON fkeytest.id = zoomoon.id
     WHERE fkeytest.id = 1`,
    (err, rows) => {
      if (err) {
        console.error("Error querying tables:", err.message);
      } else {
        rows.forEach((row) => {
          console.log(
            `{id = ${row.id}, 이름 = ${row.name}, 소개 = ${row.introduce}, 음식 = ${row.food}}`
          );
        });
      }
    }
  );
});
