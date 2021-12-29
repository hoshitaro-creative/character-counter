import { TableConfig } from "index";

const configs03: TableConfig[] = [
  {
    columns: [
      { columnName: "段階", maxLength: 2 },
      { columnName: "活動内容", maxLength: 48 },
      { columnName: "時間", maxLength: 6 },
      { columnName: "生徒が取り組む問い", maxLength: 64 },
      { columnName: "アウトプット", maxLength: 36 },
      { columnName: "活動形態", maxLength: 16 },
    ],
    rowNumber: 4,
  },
  {
    columns: [
      { columnName: "段階", maxLength: 2 },
      { columnName: "活動内容", maxLength: 48 },
      { columnName: "対象", maxLength: 52 },
      { columnName: "具体策", maxLength: 88 },
    ],
    rowNumber: 4,
  },
];

export { configs03 };
