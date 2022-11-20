import React from "react";

import { Box } from "@mui/system";

const Algorithm = (props) => {
  return (
    <>
      <Box
        sx={{ height: "91vh", display: "flex", alignItems: "end" }}
        borderBottom={1}>
        {props.randomInt.map((elements, index) => (
          <span
            key={index}
            style={{
              width: 15,
              height: `${elements}px`,
              backgroundColor: "#000",
            }}></span>
        ))}
      </Box>
    </>
  );
};

export default Algorithm;
