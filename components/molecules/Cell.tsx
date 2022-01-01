import { Box } from "@chakra-ui/layout";
import { Flex } from "@chakra-ui/react";
import { Textarea } from "@chakra-ui/textarea";
import { useState } from "react";
import stringWidth from "string-width";

type Props = {
  maxLength: number;
  tableData: string[][];
  index: { row: number; column: number };
};

const Cell: React.VFC<Props> = ({ maxLength, tableData, index }) => {
  const [length, updateLength] = useState(0);
  const excessLength = length - maxLength;
  return (
    <Box>
      <Textarea
        backgroundColor={length <= maxLength ? "green.100" : "red.300"}
        onInput={(e) => {
          updateLength(stringWidth(e.currentTarget.value) / 2);
          tableData[index.row].splice(index.column, 1, e.currentTarget.value);
          console.log(tableData);
        }}
      ></Textarea>
      <Flex>
        {excessLength > 0 && <Box color="red.300">超過:{excessLength}</Box>}
        <Box>
          見かけの文字列長:{length}/{maxLength}
        </Box>
      </Flex>
    </Box>
  );
};

export default Cell;
