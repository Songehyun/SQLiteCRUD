const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./database.db");

db.serialize(() => {
  const writetable = db.prepare(
    // prepare()는 SQLite3 모듈에서 제공하는 메서드로, SQL 문을 준비(prepared)하여 나중에 실행할 수 있도록 합니다. 이 메서드는 SQL 문을 미리 컴파일하여 여러 번 실행할 수 있게 합니다.
    "INSERT INTO ttugttag (name, introduce) VALUES (?, ?)"
    // 테이블이름(테이블 열의 이름,테이블 열의 이름)
  );

  writetable.run("이연승", "뚝닥");
  writetable.run("정호연", "듀오");
  writetable.run("김정수", "INT");
  writetable.run("구하림", "팀장님");

  writetable.finalize();

  console.log("테이블에 데이터가 들어갔습니다");
});
