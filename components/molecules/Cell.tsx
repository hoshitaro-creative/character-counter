import { Box } from "@chakra-ui/layout";
import { Textarea } from "@chakra-ui/textarea";
import { useState } from "react";
import stringLength from "string-length";

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
