import { Flex } from "@chakra-ui/react";
import { TableConfig } from "index";
import Cell from "./Cell";

type Props = {
  tableConfig: TableConfig;
};

const Table: React.VFC<Props> = ({ tableConfig }) => {
  const rowNumber = tableConfig.rowNumber;
  return (
    <Flex direction="row">
      {tableConfig.colums.map((cellConfig, i) => (
        <Flex direction="column" key={i}>
          <div>{cellConfig.columName}</div>
          {[...Array(rowNumber)].map((_, i) => (
            <Cell maxLength={cellConfig.maxLength} key={i}></Cell>
          ))}
        </Flex>
      ))}
    </Flex>
  );
};

export default Table;
