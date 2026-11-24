import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "When your father says 'stay' at the airport gate on 3 August 2019, don't laugh it off and board the plane.\nThat was the last time he ever asked you for anything, and you spent the next six years trying to buy the moment back.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
