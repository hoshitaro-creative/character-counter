import { TableConfig } from "index";

const configs01: TableConfig[] = [
  {
    columns: [{ columnName: "本テーマを学ぶ意義", maxLength: 250 }],
    rowNumber: 1,
  },
  {
    columns: [{ columnName: "本テーマで育まれる力", maxLength: 350 }],
    rowNumber: 1,
  },
  {
    columns: [
      { columnName: "タイトル", maxLength: 44 },
      { columnName: "育まれる力", maxLength: 28 },
      { columnName: "教科", maxLength: 28 },
      { columnName: "生徒が取り組む問い", maxLength: 92 },
    ],
    rowNumber: 4,
  },
  {
    columns: [{ columnName: "生徒のサポート方法", maxLength: 162 }],
    rowNumber: 1,
  },
];

export { configs01 };
