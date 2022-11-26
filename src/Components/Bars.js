import React from "react";

import { Box } from "@mui/system";

const Bars = (props) => {
  return (
    <>
      <Box
        sx={{ height: "91vh", display: "flex", alignItems: "end" }}
        borderBottom={1}>
        {props.animation.map((elements, index) => (
          <span
            id={index}
            key={index}
            style={{
              width: 35,
              height: `${elements}px`,
              backgroundColor: "#03a9f4",
              marginRight: 1,
            }}></span>
        ))}
      </Box>
    </>
  );
};

export default Bars;
