import { TableConfig } from "index";

const configs02: TableConfig[] = [
  {
    columns: [{ columnName: "タイトル", maxLength: 30 }],
    rowNumber: 1,
  },
  {
    columns: [{ columnName: "活動内容および育まれる力", maxLength: 250 }],
    rowNumber: 1,
  },
  {
    columns: [
      { columnName: "項目", maxLength: 19 },
      { columnName: "個数", maxLength: 7 },
      { columnName: "利用場所", maxLength: 23 },
    ],
    rowNumber: 5,
  },
  {
    columns: [
      { columnName: "文献", maxLength: 27 },
      { columnName: "利用される問い", maxLength: 23 },
    ],
    rowNumber: 5,
  },
  {
    columns: [
      { columnName: "活動内容", maxLength: 30 },
      { columnName: "キーワード", maxLength: 21 },
      { columnName: "科目につながる問い", maxLength: 48 },
      { columnName: "科目", maxLength: 21 },
      { columnName: "単元", maxLength: 21 },
    ],
    rowNumber: 3,
  },
];

export { configs02 };
