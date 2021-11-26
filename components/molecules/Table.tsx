import { Flex } from "@chakra-ui/react";
import { TableConfig } from "index";
import Cell from "./Cell";

type Props = {
  tableConfig: TableConfig;
};

const Table: React.VFC<Props> = ({ tableConfig }) => {
  return (
    <Flex direction="column">
      {[...Array(tableConfig.rowNumber)].map((_, i) => (
        <Flex key={i} direction="row">
          {tableConfig.colums.map(({ maxLength }, i) => (
            <Cell maxLength={maxLength} key={i}></Cell>
          ))}
        </Flex>
      ))}
    </Flex>
  );
};

export default Table;
