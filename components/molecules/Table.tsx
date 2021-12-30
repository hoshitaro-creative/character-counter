import { Box, Flex } from "@chakra-ui/react";
import { TableConfig } from "index";
import Cell from "./Cell";

type Props = {
  tableConfig: TableConfig;
};

const Table: React.VFC<Props> = ({ tableConfig }) => {
  const rowNumber = tableConfig.rowNumber;
  const columnNames = tableConfig.columns.map(({ columnName }) => columnName);
  const maxLengthes = tableConfig.columns.map(({ maxLength }) => maxLength);
  return (
    <Flex direction="column">
      <Flex direction={"row"} wrap={"nowrap"} justify={"space-between"}>
        {columnNames.map((name, i) => (
          <Box key={i}>{name}</Box>
        ))}
      </Flex>
      {[...Array(rowNumber)].map((_, i) => (
        <Flex direction={"row"} wrap={"nowrap"} key={i} justify={"space-between"}>
          {maxLengthes.map((maxLength, i) => (
            <Cell maxLength={maxLength} key={i}></Cell>
          ))}
        </Flex>
      ))}
    </Flex>
  );
};

export default Table;
