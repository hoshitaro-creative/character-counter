import { Box } from "@chakra-ui/layout";
import { Flex } from "@chakra-ui/react";
import { Textarea } from "@chakra-ui/textarea";
import { useState } from "react";
import stringLength from "string-length";

type Props = {
  maxLength: number;
};

const Cell: React.VFC<Props> = ({ maxLength }) => {
  const [length, updateLength] = useState(0);
  const excessLength = length - maxLength;
  return (
    <Box>
      <Textarea
        backgroundColor={length <= maxLength ? "green.100" : "red.300"}
        onInput={(e) => {
          updateLength(stringLength(e.currentTarget.value));
        }}
      ></Textarea>
      <Flex>
        {excessLength > 0 && <Box color="red.300">超過:{excessLength}</Box>}
        <Box>
          文字数:{length}/{maxLength}
        </Box>
      </Flex>
    </Box>
  );
};

export default Cell;
