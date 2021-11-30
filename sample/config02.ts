import { TableConfig } from "index";

const configs: TableConfig[] = [
  {
    colums: [{ columName: "タイトル", maxLength: 30 }],
    rowNumber: 1,
  },
  {
    colums: [{ columName: "活動内容および育まれる力", maxLength: 250 }],
    rowNumber: 1,
  },
  {
    colums: [
      { columName: "項目", maxLength: 19 },
      { columName: "個数", maxLength: 7 },
      { columName: "利用場所", maxLength: 23 },
    ],
    rowNumber: 5,
  },
  {
    colums: [
      { columName: "文献", maxLength: 27 },
      { columName: "利用される問い", maxLength: 23 },
    ],
    rowNumber: 5,
  },
  {
    colums: [
      { columName: "活動内容", maxLength: 30 },
      { columName: "キーワード", maxLength: 21 },
      { columName: "科目につながる問い", maxLength: 48 },
      { columName: "科目", maxLength: 21 },
      { columName: "単元", maxLength: 21 },
    ],
    rowNumber: 3,
  },
];

export { configs };
