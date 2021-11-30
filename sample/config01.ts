import { TableConfig } from "index";

const configs: TableConfig[] = [
  {
    colums: [{ columName: "本テーマを学ぶ意義", maxLength: 250 }],
    rowNumber: 1,
  },
  {
    colums: [{ columName: "本テーマで育まれる力", maxLength: 350 }],
    rowNumber: 1,
  },
  {
    colums: [
      { columName: "タイトル", maxLength: 44 },
      { columName: "育まれる力", maxLength: 28 },
      { columName: "教科", maxLength: 28 },
      { columName: "生徒が取り組む問い", maxLength: 92 },
    ],
    rowNumber: 4,
  },
  {
    colums: [{ columName: "生徒のサポート方法", maxLength: 162 }],
    rowNumber: 1,
  },
];

export { configs };
