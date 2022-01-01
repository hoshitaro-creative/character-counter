import { Box, Flex } from "@chakra-ui/react";
import { TableConfig } from "index";
import Cell from "./Cell";

type Props = {
  tableConfig: TableConfig;
  tableData: string[][];
};

const Table: React.VFC<Props> = ({ tableConfig, tableData }) => {
  const rowNumber = tableConfig.rowNumber;
  const columnNames = tableConfig.columns.map(({ columnName }) => columnName);
  const maxLengthes = tableConfig.columns.map(({ maxLength }) => maxLength);
  [...Array(rowNumber)].map(() => {
    tableData.push([...Array(columnNames.length)]);
  });

  return (
    <Flex direction="column">
      <Flex direction={"row"} wrap={"nowrap"} justify={"space-between"}>
        {columnNames.map((name, i) => (
          <Box key={i}>{name}</Box>
        ))}
      </Flex>
      {[...Array(rowNumber)].map((_, i) => (
        <Flex
          direction={"row"}
          wrap={"nowrap"}
          key={i}
          justify={"space-between"}
        >
          {maxLengthes.map((maxLength, j) => (
            <Cell
              maxLength={maxLength}
              key={j}
              tableData={tableData}
              index={{ row: i, column: j }}
            ></Cell>
          ))}
        </Flex>
      ))}
    </Flex>
  );
};

export default Table;
