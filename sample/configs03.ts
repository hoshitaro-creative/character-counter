import { TableConfig } from "index";

const configs03: TableConfig[] = [
  {
    colums: [
      { columName: "段階", maxLength: 2 },
      { columName: "活動内容", maxLength: 48 },
      { columName: "時間", maxLength: 6 },
      { columName: "生徒が取り組む問い", maxLength: 64 },
      { columName: "アウトプット", maxLength: 36 },
      { columName: "活動形態", maxLength: 16 },
    ],
    rowNumber: 4,
  },
  {
    colums: [
      { columName: "段階", maxLength: 2 },
      { columName: "活動内容", maxLength: 48 },
      { columName: "対象", maxLength: 52 },
      { columName: "具体策", maxLength: 88 },
    ],
    rowNumber: 4,
  },
];

export { configs03 };
