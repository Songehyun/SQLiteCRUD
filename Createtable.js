const sqlite3 = require("sqlite3").verbose();
// .verbose() = 데이터베이스 작업 중 발생하는 에러나 기타 정보를 콘솔에 출력하여 개발자가 쉽게 디버깅할 수 있도록 도와주는 메서드이다

const db = new sqlite3.Database("./database.db"); // 임시가 아닌 실제 파일에 저장됨 (현재로서 권장)

// const db = new sqlite3.Database(":memory:"); << 메모리 내 임시 DB, 실제 파일을 사용하려면 파일명으로 변경

db.serialize(() => {
  // db.serialize()는 SQLite3 모듈에서 제공하는 메서드로, 데이터베이스 작업을 직렬화된 방식으로 실행하기 위해 사용됩니다. 이는 모든 데이터베이스 명령이 순차적으로 실행되도록 보장합니다. 즉, 하나의 작업이 완료된 후에 다음 작업이 실행됩니다.

  db.run(
    "CREATE TABLE 테이블이름 (id INTEGER PRIMARY KEY, name TEXT, email TEXT)"
    // 테이블이름 뒤 () 에 들어가는 내용은 형식이 정해져있는데 ([테이블의 열의 이름] [데이터 타입] [제약조건])
  );

  console.log("Database and table created.");
});
