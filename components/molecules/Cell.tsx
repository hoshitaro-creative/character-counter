import { Textarea } from "@chakra-ui/textarea";
import { Box } from "@chakra-ui/layout";
import stringLength from "string-length";
import { useState } from "react";

const Cell = (): JSX.Element => {
  const [length, updateLength] = useState(0);
  return (
    <Box>
      <Textarea
        onInput={(e) => {
          updateLength(stringLength(e.currentTarget.value));
        }}
      ></Textarea>
      <Box>{length}</Box>
    </Box>
  );
};

export default Cell;
